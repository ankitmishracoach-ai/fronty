import { MessageSquare, Sparkles, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InteractiveDemo() {
  const [messages, setMessages] = useState<any[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoFlow = [
    { type: 'user', text: 'Hi! I need help with my recent order.', delay: 0 },
    { type: 'typing', delay: 1000 },
    { type: 'agent', text: 'I\'d be happy to help! Let me pull up your order details.', delay: 2000 },
    { type: 'ai-insight', text: 'Customer has 3 previous orders, avg satisfaction: 4.8/5', delay: 3500 },
    { type: 'agent', text: 'I can see your order #12847 shipped yesterday. Would you like the tracking info?', delay: 4500 },
    { type: 'user', text: 'Yes please!', delay: 6000 },
    { type: 'typing', delay: 6500 },
    { type: 'agent', text: 'Here\'s your tracking: TRK892847HG. Delivery expected tomorrow 3-5 PM.', delay: 7500 },
    { type: 'resolved', delay: 9000 }
  ];

  useEffect(() => {
    if (currentStep >= demoFlow.length) {
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentStep(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const step = demoFlow[currentStep];
    const timer = setTimeout(() => {
      if (step.type === 'typing') {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setCurrentStep(currentStep + 1);
        }, 1000);
      } else {
        setMessages((prev) => [...prev, step]);
        setCurrentStep(currentStep + 1);
      }
    }, step.delay);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-purple-300">Live Demo</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            See it in
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              real-time
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Watch how AI-powered insights help support teams resolve issues faster
          </p>
        </div>

        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-white/5 to-white/10 px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-purple-400" strokeWidth={2.5} />
              <span className="font-semibold text-white">Support Chat</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 rounded-lg border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-green-300">Online</span>
            </div>
          </div>

          <div className="p-8 space-y-4 min-h-[500px]">
            {messages.map((msg, index) => {
              if (msg.type === 'user') {
                return (
                  <div key={index} className="flex justify-end animate-fade-in">
                    <div className="max-w-md bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm p-4 shadow-lg">
                      <p className="text-white text-sm">{msg.text}</p>
                    </div>
                  </div>
                );
              } else if (msg.type === 'agent') {
                return (
                  <div key={index} className="flex justify-start animate-fade-in">
                    <div className="max-w-md bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 border border-white/10">
                      <p className="text-white text-sm">{msg.text}</p>
                    </div>
                  </div>
                );
              } else if (msg.type === 'ai-insight') {
                return (
                  <div key={index} className="flex justify-center animate-fade-in">
                    <div className="max-w-md bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0 animate-pulse" />
                        <div>
                          <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">AI Insight</div>
                          <p className="text-white text-sm">{msg.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (msg.type === 'resolved') {
                return (
                  <div key={index} className="flex justify-center animate-fade-in">
                    <div className="bg-green-500/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-green-500/30 flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-400" strokeWidth={3} />
                      <span className="text-green-400 font-semibold">Issue Resolved</span>
                    </div>
                  </div>
                );
              }
              return null;
            })}

            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-sm px-6 py-4 border border-white/10">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Demo loops automatically • Showing AI-powered support flow
          </p>
        </div>
      </div>
    </section>
  );
}
