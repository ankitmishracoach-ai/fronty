import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10"></div>

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Start Free Today</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Ready to transform your
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                support experience?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of teams already using Enorve to deliver exceptional customer support. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/pricing"
                className="group relative px-12 py-6 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-white/20 flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" strokeWidth={3} />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                to="/pricing"
                className="px-12 py-6 border-2 border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
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
