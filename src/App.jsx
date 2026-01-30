import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Archive from './pages/Archive';
import Terms from './pages/Terms';
import Waitlist from './pages/Waitlist';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
