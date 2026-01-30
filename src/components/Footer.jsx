export default function Footer() {
    return (
        <footer style={{ padding: '40px 0', borderTop: '1px solid var(--color-border)', marginTop: '80px' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>SUPNA</h3>
                    <p style={{ opacity: 0.6 }}>© {new Date().getFullYear()} Supna. All rights reserved.</p>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <a href="#" style={{ opacity: 0.8 }}>Instagram</a>
                    <a href="#" style={{ opacity: 0.8 }}>TikTok</a>
                    <a href="#" style={{ opacity: 0.8 }}>Twitter</a>
                </div>
            </div>
        </footer>
    );
}
