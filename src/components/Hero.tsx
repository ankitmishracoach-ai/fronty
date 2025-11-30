import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 bg-white">
      <div className="relative max-w-5xl mx-auto w-full pt-32 pb-20 text-center">
        <h1 className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-slate-900">
          Customer support that feels effortless
        </h1>

        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          AI-powered platform for modern support teams
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/pricing"
            className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/pricing"
            className="px-8 py-4 border-2 border-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
