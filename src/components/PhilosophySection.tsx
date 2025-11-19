import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PhilosophySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-40 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className={`text-5xl lg:text-7xl font-black text-slate-900 mb-12 leading-[1.05] tracking-tighter transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Support shouldn't feel like juggling.
        </h2>

        <div className="space-y-8 text-2xl lg:text-3xl text-slate-600 leading-relaxed font-medium mb-12">
          <p className={`text-slate-500 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Too many tools. Too many tabs. Too much chaos.</p>
          <p className={`text-slate-900 font-semibold text-3xl lg:text-4xl transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Enorve brings everything into one calm, consistent workspace —<br />
            so teams stay focused and customers get clarity instantly.
          </p>
        </div>
      </div>
    </section>
  );
}
