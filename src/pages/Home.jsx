import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="container">
            <section style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        fontWeight: 800,
                        lineHeight: 0.9,
                        marginBottom: '20px',
                        textTransform: 'uppercase'
                    }}
                >
                    Supna
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                        maxWidth: '600px',
                        marginBottom: '40px',
                        opacity: 0.8
                    }}
                >
                    Redefining streetwear with a minimalist approach.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link to="/products" className="btn-primary" style={{ marginRight: '10px' }}>
                        SHOP LATEST
                    </Link>
                    <Link to="/waitlist" className="btn-outline">
                        JOIN WAITLIST
                    </Link>
                </motion.div>
            </section>

            <section style={{ padding: '60px 0' }}>
                {/* Placeholder for featured content or marquee */}
                <div style={{ padding: '40px', border: '1px solid var(--color-border)', borderRadius: '8px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '20px' }}>NEW COLLECTION DROPPING SOON</h2>
                    <p>Join the waitlist to get early access.</p>
                </div>
            </section>
        </div>
    );
}
