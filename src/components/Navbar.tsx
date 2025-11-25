import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productFeatures = [
    {
      category: 'Core Features',
      items: [
        { name: 'Inbox', href: '/features/inbox', description: 'Unified conversation management' },
        { name: 'AI Assistant', href: '/features/ai', description: 'AI-powered responses' },
        { name: 'Tickets', href: '/features/tickets', description: 'Complete ticket lifecycle' },
        { name: 'Automation', href: '/features/automation', description: 'Workflow automation' }
      ]
    },
    {
      category: 'Intelligence',
      items: [
        { name: 'Analytics', href: '/features/analytics', description: 'Performance insights' },
        { name: 'Channels', href: '/features/channels', description: 'Multi-channel support' }
      ]
    }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/20'
          : 'bg-black/80 backdrop-blur-sm border-b border-white/10'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Enorve
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
                Product
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {productMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 -mt-2">
                  <div className="w-[600px] bg-gradient-to-br from-slate-900 to-black rounded-xl shadow-2xl border border-white/20 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {productFeatures.map((category, i) => (
                        <div key={i}>
                          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                            {category.category}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((item, j) => (
                              <Link
                                key={j}
                                to={item.href}
                                className="block p-2.5 rounded-lg hover:bg-white/10 transition-colors"
                                onClick={() => setProductMenuOpen(false)}
                              >
                                <div className="text-sm font-semibold text-white mb-0.5">
                                  {item.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {item.description}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
              Pricing
            </Link>

            <Link to="/use-cases" className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2">
              Use Cases
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <Link to="/pricing" className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-all duration-300">
              Get Access
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}