import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import { MessageSquare, Zap, Ticket, BarChart3 } from 'lucide-react';

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '1',
      icon: MessageSquare,
      title: 'Channels',
      description: 'Conversations arrive from every channel',
      detail: 'WhatsApp, Instagram, LinkedIn, Email, Webchat — all unified in one clean inbox.',
      color: 'from-cyan-500 to-blue-600',
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      number: '2',
      icon: Zap,
      title: 'AI',
      description: 'AI handles the first reply automatically',
      detail: 'Instant, accurate responses grounded in your knowledge. Escalates with full context when needed.',
      color: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      number: '3',
      icon: Ticket,
      title: 'Tickets',
      description: 'Tickets manage deeper work as needed',
      detail: 'Convert conversations to structured workflows. Track progress without losing the human connection.',
      color: 'from-slate-600 to-slate-800',
      iconBg: 'bg-slate-50',
      iconColor: 'text-slate-700'
    },
    {
      number: '4',
      icon: BarChart3,
      title: 'Insights',
      description: 'Insights help your team improve every day',
      detail: 'Clear analytics show what matters: response times, AI impact, trends. Clean patterns that keep teams moving.',
      color: 'from-orange-500 to-red-600',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  useEffect(() => {
    if (!isVisible) {
      setActiveStep(0);
      return;
    }

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  return (
    <section ref={ref} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            How Enorve works.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Four simple steps to transform your support experience.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className={`transition-all duration-500 ${
                      activeStep === i ? 'opacity-100 scale-110' : 'opacity-30 scale-100'
                    }`}>
                      <svg
                        className={`w-6 h-6 ${
                          activeStep === i ? 'text-emerald-500 animate-pulse' : 'text-slate-300'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                )}

                <div
                  className={`relative glass-card rounded-2xl p-6 shadow-lg transition-all duration-500 cursor-pointer ${
                    activeStep === i
                      ? 'scale-105 shadow-2xl border-2 border-slate-900'
                      : 'scale-100 hover:scale-102 hover:shadow-xl'
                  }`}
                  onClick={() => setActiveStep(i)}
                >

                  <div className="relative">
                    <div
                      className={`w-16 h-16 ${step.iconBg} rounded-xl flex items-center justify-center mb-4 shadow-md transition-transform duration-500 ${
                        activeStep === i ? 'scale-110 animate-float' : 'scale-100'
                      }`}
                    >
                      <step.icon className={`w-8 h-8 ${step.iconColor}`} strokeWidth={2} />
                    </div>

                    <div
                      className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 ${
                        activeStep === i ? 'scale-110 rotate-12' : 'scale-100'
                      }`}
                    >
                      <span className="text-sm font-bold text-white">{step.number}</span>
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-2 tracking-tight transition-colors duration-300 ${
                        activeStep === i ? 'text-slate-900' : 'text-slate-700'
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        activeStep === i ? 'text-slate-700 font-medium' : 'text-slate-600'
                      }`}
                    >
                      {step.description}
                    </p>

                    {activeStep === i && (
                      <div className="mt-4 pt-4 border-t border-slate-200 animate-fade-in">
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-12">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`transition-all duration-300 rounded-full ${
                  activeStep === i
                    ? 'w-12 h-3 bg-slate-900'
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={`glass-card rounded-3xl p-10 lg:p-12 shadow-2xl transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {(() => {
              const ActiveIcon = steps[activeStep].icon;
              return (
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${steps[activeStep].color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl animate-float`}
                >
                  <ActiveIcon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
              );
            })()}

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-8 h-8 bg-gradient-to-br ${steps[activeStep].color} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <span className="text-sm font-bold text-white">{steps[activeStep].number}</span>
                </div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tight">
                  {steps[activeStep].title}
                </h3>
              </div>

              <p className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {steps[activeStep].description}
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {steps[activeStep].detail}
              </p>

              <p className="text-sm text-slate-500 italic">
                More integrations coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
