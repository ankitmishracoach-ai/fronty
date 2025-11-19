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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="/enorve-logo-black-cropped.svg"
              alt="Enorve"
              className="h-6"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div
              className="relative"
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors py-2">
                Product
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {productMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 -mt-2">
                  <div className="w-[600px] bg-white rounded-xl shadow-xl border border-slate-200 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {productFeatures.map((category, i) => (
                        <div key={i}>
                          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                            {category.category}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((item, j) => (
                              <Link
                                key={j}
                                to={item.href}
                                className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                                onClick={() => setProductMenuOpen(false)}
                              >
                                <div className="text-sm font-semibold text-slate-900 mb-0.5">
                                  {item.name}
                                </div>
                                <div className="text-xs text-slate-500">
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

            <Link to="/pricing" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors py-2">
              Pricing
            </Link>

            <Link to="/docs" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors py-2">
              Docs
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors">
              Get Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}