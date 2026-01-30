import { motion } from 'framer-motion';
import img1 from '../assets/inspiration_1.png';
import img2 from '../assets/inspiration_2.jpg';
import img3 from '../assets/inspiration_3.png';
import img4 from '../assets/inspiration_4.jpg';

const archiveItems = [
    { id: 1, src: img1, alt: "Inspiration 1", size: "large" },
    { id: 2, src: img2, alt: "Inspiration 2", size: "small" },
    { id: 3, src: img3, alt: "Inspiration 3", size: "medium" },
    { id: 4, src: img4, alt: "Inspiration 4", size: "small" },
    // Duplicates for grid fulness
    { id: 5, src: img2, alt: "Inspiration 2", size: "small" },
    { id: 6, src: img1, alt: "Inspiration 1", size: "medium" },
];

export default function Archive() {
    return (
        <div className="container" style={{ padding: '60px 20px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '40px', textTransform: 'uppercase' }}>Archive</h1>

            <div style={{
                columnCount: 3,
                columnGap: '20px'
            }}>
                {archiveItems.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ marginBottom: '20px', breakInside: 'avoid' }}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            style={{
                                width: '100%',
                                borderRadius: '4px',
                                display: 'block',
                                filter: 'grayscale(100%)',
                                transition: 'filter 0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.filter = 'grayscale(0%)'}
                            onMouseOut={(e) => e.target.style.filter = 'grayscale(100%)'}
                        />
                    </motion.div>
                ))}
            </div>
            <style>{`
        @media (max-width: 1024px) {
          .container > div { column-count: 2 !important; }
        }
        @media (max-width: 600px) {
          .container > div { column-count: 1 !important; }
        }
      `}</style>
        </div>
    );
}
