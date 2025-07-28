import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil', icon: '🏠' },
    { path: '/colors', label: 'Couleurs', icon: '🎨' },
    { path: '/typography', label: 'Typographie', icon: '✍️' },
    { path: '/logo', label: 'Logo', icon: '🛡️' },
    { path: '/textures', label: 'Textures', icon: '🎭' },
    { path: '/tiktok', label: 'TikTok', icon: '📱' },
    { path: '/video', label: 'Vidéo', icon: '🎬' },
    { path: '/guidelines', label: 'Guide', icon: '📖' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-md
    ${(isOpen || scrolled) ? 'glass backdrop-blur-lg' : ''}
  `}
      aria-label="Main Navigation"
    >


      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:shadow-lg hover:shadow-[#c2a45f]/50 transition-shadow duration-300 rounded-lg">
            <div className="w-8 h-8 bg-gradient-gold  flex items-center border-radius justify-center">
              <img
                src={require('./ashen fall no bg.png')}
                alt="AshenFall logo"
                className="h-[28px] object-contain block mx-auto"
              />
            </div>
            <span className="title-font text-xl p-2 text-gold font-semibold"
              style={{ margin: '0px' }}
            >AshenFall</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 interface-font hover:shadow-lg ${location.pathname === item.path
                  ? 'bg-aged-gold text-ash-dark'
                  : 'text-parchment-beige hover:bg-aged-gold hover:bg-opacity-20 hover:text-aged-gold'
                  }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-parchment-beige hover:bg-aged-gold hover:bg-opacity-20 transition-colors duration-300"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
                  }`}
              ></span>
              <span
                className={`bg-current block transition-all duration-300 h-0.5 w-6 my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
              ></span>
              <span
                className={`bg-current block transition-all duration-300 h-0.5 w-6 transform ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
                  }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all  duration-300 overflow-hidden  ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 interface-font hover:shadow-lg ${location.pathname === item.path
                  ? 'bg-aged-gold text-ash-dark'
                  : 'text-parchment-beige hover:bg-aged-gold hover:bg-opacity-20 hover:text-aged-gold'
                  }`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;