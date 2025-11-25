import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border-2 border-slate-200 p-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50"></div>

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Start Free Today</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Ready to transform your
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                support experience?
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of teams already using Enorve to deliver exceptional customer support. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/pricing"
                className="group relative px-12 py-6 bg-slate-900 text-white text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-slate-900/20 flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" strokeWidth={3} />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/pricing"
                className="px-12 py-6 border-2 border-slate-300 text-slate-900 text-lg font-bold rounded-full hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
