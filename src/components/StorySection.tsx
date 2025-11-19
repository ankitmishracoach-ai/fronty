import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function StorySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.035em' }}>
            The support tool fragmentation problem.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Teams juggle messages across channels, tabs, and systems.<br />
            Knowledge lives everywhere.<br />
            Workflows break.<br />
            Quality drops.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className={`relative group transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-3xl border-2 border-slate-200 p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>Messages across channels</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    WhatsApp, Instagram, LinkedIn, Email, Webchat — each conversation scattered across different tools. Your team wastes time hunting for context instead of solving problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative group transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            <div className="relative bg-white rounded-3xl border-2 border-slate-200 p-10 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>Knowledge lives everywhere</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Customer history in one place, product docs in another, past resolutions scattered across emails. Teams ask the same questions over and over. Customers feel unheard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`relative transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="absolute -inset-1 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl blur-lg opacity-30 animate-pulse-subtle"></div>
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 lg:p-16 shadow-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-4xl font-bold text-white mb-6" style={{ letterSpacing: '-0.03em' }}>
                Enorve brings everything into one calm, organized workspace.
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                So your team can move fast without the chaos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
