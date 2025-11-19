import { MessageSquare, Sparkles, Ticket, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FeatureCards() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  const features = [
    {
      icon: MessageSquare,
      title: 'Unified Inbox',
      description: 'Every channel. Every conversation. One focused workspace.',
      highlight: 'All channels in one place'
    },
    {
      icon: Sparkles,
      title: 'AI Assistant',
      description: 'Primary responder for customers. Copilot for your team.',
      highlight: 'Intelligence at every step'
    },
    {
      icon: Ticket,
      title: 'Advanced Ticketing',
      description: 'Structure and clarity when conversations evolve into deeper work.',
      highlight: 'Seamless escalation'
    },
    {
      icon: Zap,
      title: 'Automation Engine',
      description: 'Workflows that handle routing, triggers, schedules, and repetitive tasks automatically.',
      highlight: 'Set it once, runs forever'
    }
  ];

  return (
    <section id="features" ref={ref} className="py-40 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-24 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]">
            The complete support stack
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Your workspace, your knowledge, your automation — all woven into a single system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
              <div className="relative bg-white rounded-3xl border-2 border-slate-200 p-12 shadow-lg group-hover:border-slate-900 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-7">
                  <div className="w-24 h-24 bg-slate-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <feature.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.025em' }}>
                      {feature.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed mb-5 text-lg">
                      {feature.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-xl border border-slate-200 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors duration-300">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm font-bold text-slate-800">{feature.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
