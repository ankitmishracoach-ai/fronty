import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function DifferentiatorBlock() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 animate-pulse-subtle"></div>
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 lg:p-16 shadow-2xl border border-slate-700">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-8 animate-fade-in">
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm font-bold text-emerald-400">What makes Enorve different</span>
              </div>

              <p className="text-2xl lg:text-3xl text-white leading-relaxed font-medium">
                The only support workspace where <span className="font-bold text-emerald-400 hover:scale-105 inline-block transition-transform">AI handles the first reply</span>, <span className="font-bold text-cyan-400 hover:scale-105 inline-block transition-transform">tickets stay linked to conversations</span>, and <span className="font-bold text-blue-400 hover:scale-105 inline-block transition-transform">every channel lives in one clean inbox</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
