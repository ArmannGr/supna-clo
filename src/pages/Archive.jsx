import { motion } from 'framer-motion';
import whiteTee2 from '../assets/supna_white_t_2.png';
import whiteTee3 from '../assets/supna_white_t_3.png';
import whiteTee4 from '../assets/supna_white_t_4.png';

const archiveItems = [
    { id: 1, src: whiteTee2, alt: "Supna White Tee - View 2" },
    { id: 2, src: whiteTee3, alt: "Supna White Tee - View 3" },
    { id: 3, src: whiteTee4, alt: "Supna White Tee - View 4" },
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
