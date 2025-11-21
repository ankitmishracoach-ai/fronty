import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Use Cases
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how Enorve empowers teams across industries to deliver exceptional customer support
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
