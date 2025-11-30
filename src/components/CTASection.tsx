import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Ready to transform your support?
        </h2>

        <p className="text-xl text-slate-600 mb-12">
          Join thousands of teams using Enorve to deliver exceptional customer support
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
            className="px-8 py-4 border-2 border-slate-200 text-slate-900 font-semibold rounded-lg hover:bg-white transition-colors"
          >
            View Pricing
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-600">
          <span>✓ Free 14-day trial</span>
          <span>✓ No credit card required</span>
          <span>✓ Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
