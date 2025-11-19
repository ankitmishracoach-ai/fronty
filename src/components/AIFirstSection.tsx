import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

export default function AIFirstSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [showCustomerMessage, setShowCustomerMessage] = useState(false);
  const [showAIProcessing, setShowAIProcessing] = useState(false);
  const [showAIResponse, setShowAIResponse] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showSummary, setSummary] = useState(false);
  const [visibleCapabilities, setVisibleCapabilities] = useState(0);

  const capabilities = [
    'Understands intent and sentiment',
    'Pulls the right information using RAG',
    'Responds instantly',
    'Asks for details when needed',
    'Escalates with a clean summary',
    'Learns from every agent edit'
  ];

  const aiResponseText = "I've checked order #12345. It shipped on Dec 15th and should arrive by Dec 20th. Tracking shows it's currently in transit.";
  const aiFollowUp = "Would you like me to send the tracking link to your email?";

  useEffect(() => {
    if (!isVisible) {
      setShowCustomerMessage(false);
      setShowAIProcessing(false);
      setShowAIResponse(false);
      setTypewriterText('');
      setSummary(false);
      setVisibleCapabilities(0);
      return;
    }

    const timer1 = setTimeout(() => setShowCustomerMessage(true), 300);
    const timer2 = setTimeout(() => setShowAIProcessing(true), 1000);
    const timer3 = setTimeout(() => {
      setShowAIProcessing(false);
      setShowAIResponse(true);
    }, 2500);

    const timer4 = setTimeout(() => setSummary(true), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!showAIResponse) {
      setTypewriterText('');
      return;
    }

    const fullText = aiResponseText;
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 35);

    return () => clearInterval(typeInterval);
  }, [showAIResponse]);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setVisibleCapabilities(prev => {
        if (prev < capabilities.length) return prev + 1;
        return prev;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={ref} className="py-40 px-6 lg:px-8 bg-gradient-to-b from-slate-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8">
              <svg className="w-4 h-4 text-emerald-600 icon-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-bold text-emerald-800">AI-First Design</span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter">
              Let AI handle the first reply.
            </h2>

            <div className="bg-slate-900 rounded-2xl p-8 mb-8 border-l-4 border-emerald-500 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-breathe">
              <p className="text-2xl lg:text-3xl text-white font-bold leading-relaxed">
                AI responds first.<br />
                Humans step in when the issue needs depth.
              </p>
            </div>

            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Your customers get instant, accurate answers — grounded in your knowledge.<br />
              Your team steps in only where it matters.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
              Enorve's AI takes the first interaction:
            </p>

            <div className="glass-card rounded-2xl p-8 shadow-xl mb-8 hover:shadow-2xl transition-all duration-300">
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      i < visibleCapabilities
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 font-medium">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-xl p-6 border border-slate-200 mb-10 hover:bg-slate-100 transition-all duration-300 shadow-sm hover:shadow-md">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Support becomes effortless.<br />
                Your team stays focused on the conversations that actually need humans.
              </p>
            </div>

            <div className="flex items-center gap-3 mb-10 glass-card rounded-xl p-4 shadow-md border border-emerald-100">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <p className="text-sm text-slate-700 font-semibold">
                When AI needs help, the handoff is seamless
              </p>
            </div>

            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 hover:scale-[1.05] transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold text-lg transform hover:-translate-y-0.5">
              See AI in Action
            </button>
          </div>

          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-glow-pulse"></div>

            <div className="relative glass-card rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-3 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-3 h-3">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping"></div>
                    <div className="relative w-3 h-3 bg-emerald-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-bold text-slate-700">AI Processing</span>
                </div>
                <div className="text-xs text-slate-500 font-medium animate-pulse">Real-time</div>
              </div>

              <div className="p-8 space-y-6 min-h-[500px]">
                {/* Customer Message */}
                <div className={`flex items-start gap-4 transition-all duration-500 ${
                  showCustomerMessage ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}>
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex-shrink-0 shadow-lg"></div>
                  <div className="flex-1">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm p-4 border border-slate-200 hover:border-slate-300 transition-colors duration-200 shadow-sm">
                      <p className="text-slate-800 font-medium">Hi, I need help with my order #12345. It hasn't arrived yet.</p>
                    </div>
                    <div className="text-xs text-slate-500 mt-2 font-medium">Customer • Just now</div>
                  </div>
                </div>

                {/* AI Processing Badge */}
                {showAIProcessing && (
                  <div className="flex items-center justify-center py-4 animate-bubble-pop">
                    <div className="glass-card px-4 py-2 rounded-full shadow-lg border-2 border-emerald-200">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-wave"></div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-wave" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-wave" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <span className="text-xs font-bold text-emerald-800">AI analyzing</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* AI Response with Typewriter */}
                {showAIResponse && (
                  <div className={`flex items-start gap-4 animate-bubble-pop`}>
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl rounded-tl-sm p-4 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow duration-200">
                        <p className="text-slate-800 font-medium mb-3">
                          {typewriterText}
                          {typewriterText.length < aiResponseText.length && (
                            <span className="inline-block w-0.5 h-5 bg-emerald-600 ml-1 animate-pulse"></span>
                          )}
                        </p>
                        {typewriterText.length >= aiResponseText.length && (
                          <p className="text-slate-700 animate-fade-in">{aiFollowUp}</p>
                        )}
                      </div>
                      <div className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1">
                        <svg className="w-3 h-3 icon-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        AI Response • Instant
                      </div>
                    </div>
                  </div>
                )}

                {/* Summary with Fade+Slide */}
                {showSummary && (
                  <div className={`glass-card rounded-xl p-4 border-l-4 border-slate-900 transition-all duration-700 ${
                    showSummary ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } hover:bg-slate-50`}>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-sm font-bold text-slate-900">If escalated to agent</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Summary: Customer asking about delayed order #12345. AI provided shipping status and tracking info. Awaiting customer confirmation.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
