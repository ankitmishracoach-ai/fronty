import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features/inbox" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Inbox
                </Link>
              </li>
              <li>
                <Link to="/features/ai" className="text-gray-400 hover:text-white transition-colors text-sm">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/features/tickets" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tickets
                </Link>
              </li>
              <li>
                <Link to="/features/automation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Automation
                </Link>
              </li>
              <li>
                <Link to="/features/analytics" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/features/channels" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Channels
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/use-cases" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <img
              src="/enorve-logo-black-cropped.svg"
              alt="Enorve"
              className="h-6 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Customer support that feels lighter, faster, and smarter. Built for modern teams who care about their customers.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Enorve. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
              Security
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors text-sm inline-flex items-center gap-1">
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
