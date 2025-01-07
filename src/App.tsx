import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Search } from 'lucide-react';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Videos from './pages/Videos';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      const button = document.getElementById('menu-button');
      if (menu && !menu.contains(event.target as Node) && button && !button.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">

        <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b" style={{ padding: '15px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <img src="https://globalsitters.com/assets/img/demo/logo.png" alt="Intarchidesign Logo" style={{ height: '60px', width: 'auto' }} className="h-8 w-8" />
                </Link>
              </div>


              <div className="hidden md:flex items-center space-x-8">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for something..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition duration-150 ease-in-out"
                  />
                </div>

                <Link to="/about" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  About
                </Link>
                <Link to="/projects" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Projects
                </Link>
                <Link to="/videos" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Videos
                </Link>
                <Link to="/products" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Products
                </Link>
                <Link to="/contact" className="text-gray-900 hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Contact
                </Link>
              </div>

              <div className="md:hidden flex items-center space-x-4">
                <button
                  className="p-2 rounded-md text-gray-900 hover:text-gray-600 transition-colors duration-200"
                  onClick={() => setIsSearchVisible(!isSearchVisible)}
                >
                  <Search className="h-6 w-6" />
                </button>

                <button
                  id="menu-button"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 transition-colors duration-200"
                >
                  {isMenuOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className={`md:hidden px-4 pb-3 transition-all duration-300 ${isSearchVisible ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition duration-150 ease-in-out"
              />
            </div>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-8">
              <span className="font-semibold text-xl text-gray-900">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-900 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/videos"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Videos
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </div>
          </div>
        </div>


        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <main className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<ProjectDetails />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <img src="https://globalsitters.com/assets/img/demo/logo-white.png" alt="Intarchidesign Logo" style={{ height: '60px', width: 'auto' }} className="h-8 w-8" />
                </div>
                <p className="text-gray-400">
                  Creating innovative architectural designs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Mail className="h-5 w-5" />
                    <span>info@archstudio.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Phone className="h-5 w-5" />
                    <span>+1 234 567 890</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="h-5 w-5" />
                    <span>123 Design Street, NY</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/about" className="block text-gray-400 hover:text-white transition-colors duration-200">About</Link>
                  <Link to="/projects" className="block text-gray-400 hover:text-white transition-colors duration-200">Projects</Link>
                  <Link to="/products" className="block text-gray-400 hover:text-white transition-colors duration-200">Products</Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>Intarchidesign &copy; {new Date().getFullYear()}<br></br> All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;