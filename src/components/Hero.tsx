import { ArrowRight, Play, Sparkles, Zap, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative max-w-7xl mx-auto w-full pt-32 pb-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-all duration-300 cursor-pointer">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Introducing AI-Powered Support</span>
            <ArrowRight className="w-4 h-4" />
          </div>

          <h1 className="text-7xl lg:text-8xl xl:text-9xl font-black mb-8 tracking-tight leading-[0.9]">
            <span className="block bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Support that
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              feels effortless
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Transform customer conversations into seamless experiences with AI-powered insights, unified inbox, and intelligent automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Link
              to="/pricing"
              className="group relative px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-white/20 flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" strokeWidth={3} />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <button
              className="group px-10 py-5 border-2 border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center gap-3"
            >
              <Play className="w-5 h-5" strokeWidth={3} fill="white" />
              Watch Demo
            </button>
          </div>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`absolute -inset-8 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30 rounded-3xl blur-3xl opacity-60 transition-opacity duration-500 ${isHovering ? 'opacity-100' : 'opacity-60'}`}></div>

          <div className="relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-r from-white/5 to-white/10 px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex items-center gap-2 px-4 py-1.5 bg-black/40 rounded-lg border border-white/10">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-300">Live Demo</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-0">
              <div className="col-span-4 bg-black/30 backdrop-blur-sm border-r border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-purple-400" strokeWidth={2.5} />
                    <h3 className="font-bold text-white">Conversations</h3>
                  </div>
                  <div className="px-2.5 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                    <span className="text-xs font-bold text-purple-300">12</span>
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
                          ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      {conv.priority && (
                        <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      )}
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                          i === 0 ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-gradient-to-br from-gray-700 to-gray-800'
                        }`}>
                          {conv.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className={`font-semibold text-sm ${conv.unread ? 'text-white' : 'text-gray-400'}`}>
                              {conv.name}
                            </span>
                            <span className="text-xs text-gray-500">{conv.time}</span>
                          </div>
                          <p className={`text-sm truncate ${conv.unread ? 'text-gray-300 font-medium' : 'text-gray-500'}`}>
                            {conv.msg}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-8 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-6">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold">
                      SJ
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Sarah Johnson</h3>
                      <p className="text-sm text-gray-400">Customer • Premium Plan</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-white/10 rounded-lg border border-white/10 transition-colors">
                      <Zap className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-start">
                    <div className="max-w-md bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 border border-white/10">
                      <p className="text-white text-sm leading-relaxed">
                        Hi! I placed an order yesterday but haven't received a confirmation email yet. Order #12847. Can you help?
                      </p>
                      <span className="text-xs text-gray-500 mt-2 block">2 min ago</span>
                    </div>
                  </div>

                  <div className="flex justify-end animate-fade-in">
                    <div className="max-w-md bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm p-4 shadow-lg">
                      <p className="text-white text-sm leading-relaxed">
                        Hi Sarah! I've found your order. Let me check the status for you right away.
                      </p>
                      <span className="text-xs text-purple-200 mt-2 block">Just now</span>
                    </div>
                  </div>

                  <div className="flex justify-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <div className="max-w-md bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl rounded-tl-sm p-4 border-2 border-green-500/30">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-green-400 flex-shrink-0 mt-1 animate-pulse" />
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold text-green-400 uppercase tracking-wider">AI Suggestion</span>
                          </div>
                          <p className="text-white text-sm leading-relaxed mb-2">
                            Order #12847 is confirmed and shipped. Tracking: <span className="font-mono font-bold text-green-300">TRK892847HG</span>
                          </p>
                          <p className="text-gray-300 text-xs">
                            Estimated delivery: Tomorrow, 3-5 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">AI is drafting a response...</span>
                      <div className="flex gap-1 ml-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest font-semibold">Trusted by forward-thinking teams</p>
          <div className="flex items-center justify-center gap-12 opacity-40">
            {['Acme Corp', 'TechStart', 'InnovateCo', 'FutureScale', 'CloudBase'].map((name, i) => (
              <div key={i} className="text-white font-bold text-lg">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
