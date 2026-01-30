import { motion } from 'framer-motion';
import img1 from '../assets/inspiration_1.png';
import img2 from '../assets/inspiration_2.jpg';
import img3 from '../assets/inspiration_3.png';
import img4 from '../assets/inspiration_4.jpg';

const products = [
    { id: 1, name: "Essential Tee", price: "$45", image: img2 },
    { id: 2, name: "Heavyweight Hoodie", price: "$120", image: img1 },
    { id: 3, name: "Cargo Pants", price: "$150", image: img4 },
    { id: 4, name: "Beanie", price: "$35", image: img3 },
    { id: 5, name: "Tote Bag", price: "$40", image: img1 },
    { id: 6, name: "Socks", price: "$20", image: img2 },
];

export default function Products() {
    return (
        <div className="container" style={{ padding: '60px 20px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '40px', textTransform: 'uppercase' }}>All Products</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '40px'
            }}>
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        style={{ cursor: 'pointer' }}
                        whileHover={{ y: -5 }}
                    >
                        <div style={{
                            background: '#f4f4f4',
                            aspectRatio: '3/4',
                            marginBottom: '15px',
                            overflow: 'hidden',
                            borderRadius: '4px'
                        }}>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>{product.name}</h3>
                            <span style={{ opacity: 0.7 }}>{product.price}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
