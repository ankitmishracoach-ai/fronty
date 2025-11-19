import { Brain, TrendingUp, Sparkles } from 'lucide-react';

export default function IntelligenceSection() {
  const features = [
    {
      icon: Brain,
      title: 'Knowledge-grounded answers',
      description: 'AI responds using your documents, website data, and company knowledge.'
    },
    {
      icon: TrendingUp,
      title: 'Sentiment & intent detection',
      description: 'Understand customer emotion and intent instantly.'
    },
    {
      icon: Sparkles,
      title: 'Suggestions that improve',
      description: 'AI learns from your team’s edits and choices to provide increasingly relevant responses.'
    }
  ];

  return (
    <section id="intelligence" className="relative py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-18">
          <h2 className="text-5xl font-bold text-slate-900 mb-8" style={{ letterSpacing: '-0.025em' }}>
            Intelligence, woven throughout.
          </h2>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-12">
            AI that understands your business.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-20">
          <p className="text-xl text-slate-600 leading-relaxed text-center font-normal">
            Enorve's AI isn't a chatbot.<br />
            It's an intelligence layer that elevates every part of customer support —<br />
            from answers to insights to ticket creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl border border-slate-200 p-10 hover:border-slate-300 hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-slate-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-brand-600 rounded-xl flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300 shadow-soft">
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4" style={{ letterSpacing: '-0.02em' }}>{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base font-normal">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
