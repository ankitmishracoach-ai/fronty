import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

export default function CinematicHandoff() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setStep(0);
      return;
    }

    const timings = [
      500,   // Step 1: Customer message
      1200,  // Step 2: AI processing
      1800,  // Step 3: AI response
      1500,  // Step 4: Escalation decision
      1200,  // Step 5: Summary
      1000,  // Step 6: Human avatar
      800,   // Step 7: Human takeover
    ];

    let currentStep = 0;
    const timeouts: NodeJS.Timeout[] = [];

    const scheduleNext = () => {
      if (currentStep < timings.length) {
        const timeout = setTimeout(() => {
          currentStep++;
          setStep(currentStep);
          scheduleNext();
        }, timings[currentStep]);
        timeouts.push(timeout);
      }
    };

    scheduleNext();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [isVisible]);

  return (
    <section ref={ref} className="relative py-40 px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 via-slate-50/30 to-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 shadow-md border border-emerald-100">
            <svg className="w-4 h-4 text-emerald-600 icon-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-bold text-emerald-800">The Handoff</span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
            AI to human,<br />seamlessly.
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Watch how Enorve handles the transition from AI to human support with perfect context.
          </p>
        </div>

        {/* Cinematic Animation Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative glass-card rounded-3xl p-8 lg:p-12 shadow-2xl min-h-[600px] flex items-center justify-center">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white rounded-3xl"></div>

            {/* Content */}
            <div className="relative w-full max-w-3xl mx-auto space-y-6">
              {/* Step 1: Customer Message */}
              <div className={`transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex-shrink-0 shadow-lg"></div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-5 border-2 border-slate-200 shadow-lg">
                      <p className="text-slate-800 font-medium text-lg">
                        Hi, I'm having trouble accessing my account. I've tried resetting my password twice but the emails aren't coming through.
                      </p>
                    </div>
                    <div className="text-sm text-slate-500 mt-2 ml-1 font-medium">Customer • Just now</div>
                  </div>
                </div>
              </div>

              {/* Step 2: AI Processing */}
              {step >= 2 && (
                <div className={`transition-all duration-500 ${step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="flex items-center justify-center py-4">
                    <div className="glass-card px-6 py-3 rounded-full shadow-lg animate-pulse-subtle">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-wave"></div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-wave" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-wave" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <span className="text-sm font-bold text-emerald-800">AI analyzing request...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: AI Response */}
              <div className={`transition-all duration-700 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                <div className="flex items-start gap-4 justify-end">
                  <div className="flex-1 flex flex-col items-end">
                    <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl rounded-tr-sm p-5 shadow-xl max-w-lg">
                      <p className="text-white font-medium text-lg">
                        I understand you're having trouble with password reset emails. I've checked your account and see that your email provider may be blocking our messages. Let me escalate this to our team to manually verify your identity.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 mr-1">
                      <svg className="w-4 h-4 text-emerald-600 icon-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm text-emerald-600 font-bold">AI Response • Instant</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Step 4: Escalation Decision */}
              {step >= 4 && (
                <div className={`transition-all duration-500 ${step >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="flex items-center justify-center py-4">
                    <div className="glass-card px-8 py-4 rounded-2xl shadow-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50">
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="font-bold text-orange-800">Escalating to human agent</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Summary Generation */}
              <div className={`transition-all duration-700 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="glass-card rounded-2xl p-6 border-l-4 border-slate-900 shadow-xl">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-2 text-lg">AI Summary for Agent</h4>
                      <div className="space-y-2 text-slate-600">
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold text-slate-900">Issue:</span> Password reset emails not received
                        </p>
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold text-slate-900">Attempted:</span> 2x password resets
                        </p>
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold text-slate-900">Likely cause:</span> Email provider blocking
                        </p>
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold text-slate-900">Recommended:</span> Manual identity verification
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6: Human Avatar Slides In */}
              {step >= 6 && (
                <div className={`transition-all duration-700 ${step >= 6 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                  <div className="flex items-center justify-center py-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-900">Sarah from Support</p>
                    <p className="text-xs text-emerald-600 font-semibold">Taking over</p>
                  </div>
                </div>
              )}

              {/* Step 7: Human Takes Over */}
              <div className={`transition-all duration-700 ${step >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-5 border-2 border-emerald-200 shadow-xl">
                      <p className="text-slate-800 font-medium text-lg">
                        Hi! I'm Sarah and I'm here to help. I can see exactly what happened. Let me verify your identity quickly with a few security questions, and I'll get you back into your account right away.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 ml-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-slate-700 font-semibold">Human Agent • Live</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 7+: Success Indicator */}
              {step >= 7 && (
                <div className={`transition-all duration-700 delay-300 ${step >= 7 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="flex items-center justify-center py-6">
                    <div className="glass-card px-8 py-4 rounded-2xl shadow-xl border-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50">
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-bold text-emerald-800">Seamless handoff with full context</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-700 delay-500 ${step >= 7 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg text-slate-600 mb-6 font-medium">
              No context lost. No repeated questions. Just perfect continuity.
            </p>
            <button className="px-10 py-5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 hover:scale-[1.03] transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold text-lg transform hover:-translate-y-0.5">
              See It in Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
