import { motion } from 'framer-motion';
import whiteTee from '../assets/supna_white_t_1.png';

const product = {
    id: 1,
    name: "Streetwear Supna White Tee",
    price: "$45",
    image: whiteTee,
    description: "Premium cotton streetwear tee with Supna branding"
};

export default function Products() {
    return (
        <div className="container" style={{ padding: '60px 20px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '40px', textTransform: 'uppercase' }}>Products</h1>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '60vh'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        maxWidth: '500px',
                        width: '100%',
                        cursor: 'pointer'
                    }}
                    whileHover={{ y: -5 }}
                >
                    <div style={{
                        background: '#f4f4f4',
                        aspectRatio: '3/4',
                        marginBottom: '20px',
                        overflow: 'hidden',
                        borderRadius: '4px'
                    }}>
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '10px' }}>{product.name}</h2>
                        <p style={{ opacity: 0.7, marginBottom: '10px' }}>{product.description}</p>
                        <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>{product.price}</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
