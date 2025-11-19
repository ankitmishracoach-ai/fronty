import { ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className={`text-6xl lg:text-7xl font-bold text-slate-900 mb-10 leading-[1.02] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ letterSpacing: '-0.03em' }}>
          Support that feels lighter, faster, smarter.
        </h2>
        <p className={`text-2xl text-slate-600 mb-14 font-normal transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Start your journey with Enorve.
        </p>

        <div className={`flex items-center justify-center gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="px-10 py-5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 hover:scale-[1.05] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 text-lg group font-semibold transform hover:-translate-y-0.5">
            Get Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
          </button>
          <button className="px-10 py-5 border-2 border-slate-300 text-slate-900 rounded-xl hover:border-slate-400 hover:bg-slate-50 hover:scale-[1.05] transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold transform hover:-translate-y-0.5">
            Book Demo
          </button>
        </div>
      </div>
    </section>
  );
}
