import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{ padding: '20px 0', position: 'sticky', top: 0, background: 'var(--color-bg)', zIndex: 100 }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '-0.05em', zIndex: 101 }}>
                    SUPNA
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <Link to="/products" className="nav-link">PRODUCTS</Link>
                    <Link to="/archive" className="nav-link">ARCHIVE</Link>
                    <Link to="/terms" className="nav-link">TERMS</Link>
                    <ThemeToggle />
                    <Link to="/waitlist" className="btn-primary">JOIN WAITLIST</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ zIndex: 101 }}
                >
                    {isOpen ? 'CLOSE' : 'MENU'}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'var(--color-bg)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '30px',
                                zIndex: 100
                            }}
                        >
                            <Link to="/products" onClick={() => setIsOpen(false)} style={{ fontSize: '32px', fontWeight: 600 }}>PRODUCTS</Link>
                            <Link to="/archive" onClick={() => setIsOpen(false)} style={{ fontSize: '32px', fontWeight: 600 }}>ARCHIVE</Link>
                            <Link to="/terms" onClick={() => setIsOpen(false)} style={{ fontSize: '32px', fontWeight: 600 }}>TERMS</Link>
                            <Link to="/waitlist" onClick={() => setIsOpen(false)} style={{ fontSize: '32px', fontWeight: 600 }}>WAITLIST</Link>
                            <div style={{ marginTop: '20px' }}>
                                <ThemeToggle />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
        .desktop-menu {
          display: flex;
        }
        .mobile-toggle {
          display: none;
        }
        
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block;
            font-weight: 600;
          }
        }
      `}</style>
        </nav>
    );
}
