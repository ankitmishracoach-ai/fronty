import { ArrowRight, Play, Sparkles, Zap, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-100 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-100 rounded-full blur-[100px] opacity-40"></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto w-full pt-32 pb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 mb-8 hover:bg-blue-100 transition-all duration-300 cursor-pointer">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Introducing AI-Powered Support</span>
            <ArrowRight className="w-4 h-4 text-blue-600" />
          </div>

          <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black mb-8 tracking-tight leading-[0.9]">
            <span className="block text-slate-900">
              Support that
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              feels effortless
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform customer conversations into seamless experiences with AI-powered insights, unified inbox, and intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="/pricing"
              className="group relative px-10 py-5 bg-slate-900 text-white text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-slate-900/20 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" strokeWidth={3} />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <button
              className="group px-10 py-5 border-2 border-slate-300 text-slate-900 text-lg font-bold rounded-full hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-5 h-5" strokeWidth={3} />
              Watch Demo
            </button>
          </div>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`absolute -inset-8 bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-pink-200/40 rounded-3xl blur-3xl transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-60'}`}></div>

          <div className="relative bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-lg border border-slate-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-slate-700">Live Demo</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-4 bg-slate-50 border-r border-slate-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
                    <h3 className="font-bold text-slate-900">Conversations</h3>
                  </div>
                  <div className="px-2.5 py-1 bg-blue-100 rounded-full border border-blue-200">
                    <span className="text-xs font-bold text-blue-600">12</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'Sarah Johnson', msg: 'Need help with my order...', time: '2m', unread: true, priority: true },
                    { name: 'Mike Chen', msg: 'Question about pricing', time: '5m', unread: true, priority: false },
                    { name: 'Emma Davis', msg: 'Thanks for the quick response!', time: '12m', unread: false, priority: false },
                    { name: 'Alex Turner', msg: 'Integration documentation', time: '1h', unread: false, priority: false }
                  ].map((conv, i) => (
                    <div
                      key={i}
                      className={`group relative p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                        i === 0
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 shadow-md'
                          : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md'
                      }`}
                    >
                      {conv.priority && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      )}
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          i === 0 ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white' : 'bg-gradient-to-br from-slate-200 to-slate-300 text-slate-700'
                        }`}>
                          {conv.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`font-semibold text-sm ${conv.unread ? 'text-slate-900' : 'text-slate-500'}`}>
                              {conv.name}
                            </span>
                            <span className="text-xs text-slate-400">{conv.time}</span>
                          </div>
                          <p className={`text-sm truncate ${conv.unread ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
                            {conv.msg}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-8 bg-white p-6">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white">
                      SJ
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Sarah Johnson</h3>
                      <p className="text-sm text-slate-500">Customer • Premium Plan</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors">
                      <Zap className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-start">
                    <div className="max-w-md bg-slate-100 rounded-2xl rounded-tl-sm p-4 border border-slate-200">
                      <p className="text-slate-900 text-sm leading-relaxed">
                        Hi! I placed an order yesterday but haven't received a confirmation email yet. Order #12847. Can you help?
                      </p>
                      <span className="text-xs text-slate-500 mt-2 block">2 min ago</span>
                    </div>
                  </div>

                  <div className="flex justify-end animate-fade-in">
                    <div className="max-w-md bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl rounded-tr-sm p-4 shadow-lg">
                      <p className="text-white text-sm leading-relaxed">
                        Hi Sarah! I've found your order. Let me check the status for you right away.
                      </p>
                      <span className="text-xs text-blue-100 mt-2 block">Just now</span>
                    </div>
                  </div>

                  <div className="flex justify-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="max-w-md bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl rounded-tl-sm p-4 border-2 border-green-300">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-1 animate-pulse" />
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold text-green-600 uppercase tracking-wider">AI Suggestion</span>
                          </div>
                          <p className="text-slate-900 text-sm leading-relaxed mb-2">
                            Order #12847 is confirmed and shipped. Tracking: <span className="font-mono font-bold text-green-700">TRK892847HG</span>
                          </p>
                          <p className="text-slate-600 text-xs">
                            Estimated delivery: Tomorrow, 3-5 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-slate-50 rounded-xl border border-slate-200 px-4 py-3">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">AI is drafting a response...</span>
                      <div className="flex gap-1 ml-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-slate-500 mb-6 uppercase tracking-widest font-semibold">Trusted by forward-thinking teams</p>
          <div className="flex items-center justify-center gap-12 opacity-50">
            {['Acme Corp', 'TechStart', 'InnovateCo', 'FutureScale', 'CloudBase'].map((name, i) => (
              <div key={i} className="text-slate-700 font-bold text-lg">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
