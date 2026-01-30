import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // These environment variables need to be set in your .env file
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id') {
            console.warn('EmailJS keys are missing. Check your .env file.');
            // Simulate success for demo purposes if keys are missing
            setTimeout(() => {
                setStatus('success');
            }, 1000);
            return;
        }

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="container" style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    maxWidth: '500px',
                    width: '100%',
                    padding: '40px',
                    border: '1px solid var(--color-border)',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}
            >
                {status === 'success' ? (
                    <div>
                        <h2 style={{ marginBottom: '10px' }}>YOU'RE ON THE LIST</h2>
                        <p>We'll notify you when we launch.</p>
                    </div>
                ) : (
                    <form ref={form} onSubmit={handleSubmit}>
                        <h2 style={{ marginBottom: '20px', textTransform: 'uppercase' }}>Join the Waitlist</h2>
                        <p style={{ marginBottom: '30px', opacity: 0.8 }}>
                            Be the first to know about new drops and exclusive items.
                        </p>

                        {status === 'error' && (
                            <p style={{ color: 'red', marginBottom: '15px' }}>Something went wrong. Please try again.</p>
                        )}

                        <input
                            type="email"
                            name="user_email" // Name attribute is required for EmailJS sendForm
                            required
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '15px',
                                marginBottom: '20px',
                                background: 'transparent',
                                border: '1px solid var(--color-border)',
                                color: 'var(--color-text)',
                                borderRadius: '4px',
                                fontSize: '1rem'
                            }}
                        />

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="btn-primary"
                            style={{ width: '100%', cursor: status === 'submitting' ? 'wait' : 'pointer' }}
                        >
                            {status === 'submitting' ? 'JOINING...' : 'JOIN NOW'}
                        </button>
                    </form>
                )}
            </motion.div>
        </div>
    );
}
