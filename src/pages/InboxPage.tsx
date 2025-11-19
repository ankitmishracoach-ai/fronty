import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import {
  Inbox, Filter, ArrowRight, MessageSquare, Sparkles, 
  Zap, Eye, Activity, Send, Users, Clock, CheckCircle2
} from 'lucide-react';
import Footer from '../components/Footer';

export default function InboxPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: flowRef, isVisible: flowVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: aiRef, isVisible: aiVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: powerRef, isVisible: powerVisible } = useScrollAnimation({ threshold: 0.2 });
  
  // Animated message flow state
  const [messageStep, setMessageStep] = useState(0);

  useEffect(() => {
    if (!heroVisible) {
      setMessageStep(0);
      return;
    }

    const timer = setTimeout(() => {
      if (messageStep < 3) {
        setMessageStep(messageStep + 1);
      }
    }, messageStep === 0 ? 2000 : messageStep === 1 ? 3000 : 2500);

    return () => clearTimeout(timer);
  }, [heroVisible, messageStep]);

  const channels = [
    { 
      name: 'WhatsApp', 
      bgColor: 'bg-[#25D366]',
      textColor: 'text-white',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      bgColor: 'bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      textColor: 'text-white',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      bgColor: 'bg-[#0A66C2]',
      textColor: 'text-white',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      bgColor: 'bg-slate-700',
      textColor: 'text-white',
      logo: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="M3 7l9 6 9-6"/>
        </svg>
      )
    },
    { 
      name: 'Webchat', 
      bgColor: 'bg-gradient-to-br from-emerald-500 to-cyan-500',
      textColor: 'text-white',
      logo: (
        <MessageSquare className="w-5 h-5" strokeWidth={2.5} />
      )
    }
  ];

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative py-32 lg:py-40 px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className={`text-center mb-20 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-sm border border-slate-200 animate-fade-in">
              <Inbox className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-semibold text-slate-700">Unified Inbox</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.05]" style={{ letterSpacing: '-0.035em' }}>
              Every conversation.<br />One calm workspace.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              WhatsApp, Instagram, LinkedIn, Email, and Webchat—unified in a single inbox where AI responds first and your team focuses on what matters.
            </p>

            <div className="flex items-center justify-center gap-4">
              <button className="group px-10 py-5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 font-semibold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
                Get Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </button>
              <button className="px-10 py-5 border-2 border-slate-300 text-slate-900 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 font-semibold text-lg transform hover:-translate-y-0.5">
                See It Live
              </button>
            </div>
          </div>

          {/* Channel Pills - Animated cascade */}
          <div className={`flex items-center justify-center gap-3 mb-20 flex-wrap transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {channels.map((channel, i) => (
              <div
                key={i}
                className={`${channel.bgColor} ${channel.textColor} px-4 py-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-2">
                  {channel.logo}
                  <span className="text-sm font-semibold">{channel.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Inbox Preview - Animated Storytelling */}
          <div className={`relative transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-slate-500/20 rounded-3xl blur-2xl opacity-50 animate-pulse-slow"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
              {/* Browser Chrome */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-3.5 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Inbox className="w-4 h-4 text-slate-700" />
                    <span className="text-sm font-bold text-slate-800">Inbox</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <button className="text-slate-900 font-semibold border-b-2 border-slate-900 pb-1">All</button>
                  <button className="text-slate-500 hover:text-slate-700 transition-colors">Open</button>
                  <button className="text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-2">
                    Urgent
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">2</span>
                  </button>
                  <Filter className="w-4 h-4 text-slate-500 cursor-pointer hover:text-slate-700 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-12">
                {/* Sidebar */}
                <div className="col-span-4 bg-slate-50/50 border-r border-slate-200/80 min-h-[600px]">
                  <div className="p-5">
                    <div className="relative mb-5">
                      <input 
                        type="text" 
                        placeholder="Search conversations..." 
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                        readOnly
                      />
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: 'Sarah Chen', msg: 'When will my order arrive?', time: '2m', channel: 'WhatsApp', urgent: true, channelBg: 'bg-[#25D366]' },
                        { name: 'Mike Johnson', msg: 'Need help with refund process', time: '8m', channel: 'Email', urgent: false, channelBg: 'bg-slate-600' },
                        { name: 'Emma Wilson', msg: 'Love the product! Quick question about...', time: '15m', channel: 'Instagram', urgent: false, channelBg: 'bg-gradient-to-tr from-purple-600 to-pink-600' },
                        { name: 'David Lee', msg: 'Account access issue', time: '32m', channel: 'LinkedIn', urgent: false, channelBg: 'bg-[#0A66C2]' },
                        { name: 'Lisa Park', msg: 'Partnership inquiry', time: '1h', channel: 'Webchat', urgent: false, channelBg: 'bg-gradient-to-br from-emerald-500 to-cyan-500' }
                      ].map((conv, i) => (
                        <div 
                          key={i}
                          className={`group p-4 rounded-2xl cursor-pointer transition-all duration-300 animate-slide-in-left ${
                            i === 0 
                              ? 'bg-white shadow-lg border-2 border-slate-900' 
                              : 'bg-white/60 hover:bg-white hover:shadow-md border-2 border-transparent hover:border-slate-200'
                          }`}
                          style={{ animationDelay: `${1000 + i * 100}ms` }}
                        >
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                              <span className="text-sm font-bold text-slate-900">{conv.name}</span>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">{conv.time}</span>
                          </div>
                          <p className="text-sm text-slate-600 truncate mb-3 leading-relaxed">{conv.msg}</p>
                          <div className="flex items-center gap-2">
                            <div className={`${conv.channelBg} px-2.5 py-1 rounded-lg text-white text-xs font-semibold`}>
                              {conv.channel}
                            </div>
                            {conv.urgent && (
                              <div className="px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-lg animate-pulse-subtle">
                                Urgent
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Conversation - Animated Flow */}
                <div className="col-span-8 bg-white flex flex-col">
                  <div className="px-8 py-5 border-b border-slate-200/80 flex items-center justify-between animate-fade-in" style={{ animationDelay: '1200ms' }}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full shadow-lg"></div>
                      <div>
                        <div className="text-lg font-bold text-slate-900">Sarah Chen</div>
                        <div className="text-sm text-slate-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Active now
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
                        Assign
                      </button>
                      <button className="px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
                        Resolve
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 px-8 py-8 space-y-6 overflow-y-auto">
                    {/* Customer Message - Step 1 */}
                    {messageStep >= 0 && (
                      <div className="flex items-start gap-3 animate-message-slide-in">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0"></div>
                        <div>
                          <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-5 py-4 inline-block max-w-lg shadow-sm">
                            <p className="text-sm text-slate-900 leading-relaxed">
                              Hi! I placed an order 3 days ago and haven't received any shipping updates. When will my order arrive? Order #12345
                            </p>
                          </div>
                          <span className="text-xs text-slate-400 mt-2 ml-1 block">10:32 AM</span>
                        </div>
                      </div>
                    )}

                    {/* AI Thinking - Step 2 */}
                    {messageStep >= 1 && messageStep < 2 && (
                      <div className="flex items-start gap-3 animate-fade-in">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex-shrink-0 shadow-lg flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white animate-pulse" strokeWidth={2.5} />
                        </div>
                        <div className="flex items-center gap-3 px-5 py-4">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                          <span className="text-xs text-emerald-700 font-semibold">AI searching knowledge base...</span>
                        </div>
                      </div>
                    )}

                    {/* AI Response - Step 3 */}
                    {messageStep >= 2 && (
                      <div className="flex items-start gap-3 animate-message-slide-in">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex-shrink-0 shadow-lg flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl rounded-tl-sm px-5 py-4 inline-block max-w-lg shadow-sm border-2 border-emerald-200">
                            <p className="text-sm text-slate-900 leading-relaxed font-medium">
                              Hi Sarah! I can see your order #12345 is currently in transit with DHL and is expected to arrive by Thursday, Nov 21. You'll receive tracking updates via email. Thanks for your patience!
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-2 ml-1">
                            <span className="text-xs text-emerald-700 font-semibold">AI responded</span>
                            <span className="text-xs text-slate-400">•</span>
                            <span className="text-xs text-slate-400">1.2s</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Escalation Alert - Step 4 */}
                    {messageStep >= 3 && (
                      <div className="bg-amber-50 rounded-2xl p-5 border-2 border-amber-200 animate-slide-up">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                            <Eye className="w-5 h-5 text-white" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <div className="text-base font-bold text-amber-900 mb-2">AI detected escalation signal</div>
                            <p className="text-sm text-amber-800 mb-4 leading-relaxed">Customer tone suggests urgency. Similar cases needed agent follow-up.</p>
                            <button className="px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded-xl hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                              Assign to Agent
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="px-8 py-5 border-t border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-3">
                      <input 
                        type="text" 
                        placeholder="Type your message..." 
                        className="flex-1 px-5 py-4 border-2 border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all bg-white"
                        readOnly
                      />
                      <button className="px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIFIED EXPERIENCE - Animated Reveal */}
      <section ref={flowRef} className="py-32 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-700 ${flowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.035em' }}>
              Six channels. One workspace.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stop switching between tools. Every conversation flows into one organized, AI-powered inbox.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-700 delay-200 ${flowVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {[
                { 
                  icon: Filter, 
                  title: 'Smart filtering', 
                  desc: 'Sort by status, priority, channel, or assignment. Visual indicators keep teams focused.',
                  delay: 0
                },
                { 
                  icon: Clock, 
                  title: 'SLA timers', 
                  desc: 'Automatic countdowns for response times. Never miss a deadline.',
                  delay: 200
                },
                { 
                  icon: Users, 
                  title: 'Intelligent routing', 
                  desc: 'Round robin, skill-based, or load-balanced assignment—automated or manual.',
                  delay: 400
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`group bg-white rounded-3xl border-2 border-slate-200 p-10 hover:border-slate-900 hover:shadow-2xl transition-all duration-500 animate-slide-in-right`}
                  style={{ animationDelay: flowVisible ? `${item.delay}ms` : '0ms' }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-900 transition-all duration-300 shadow-md group-hover:scale-110">
                      <item.icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-slate-900 mb-2" style={{ letterSpacing: '-0.02em' }}>
                        {item.title}
                      </div>
                      <div className="text-slate-600 leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`transition-all duration-700 delay-600 ${flowVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-8">
                  <Filter className="w-6 h-6 text-white" />
                  <span className="text-white font-bold text-xl">Active Filters</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    { label: 'Status: Open', count: 23, color: 'bg-blue-500', delay: 800 },
                    { label: 'Priority: Urgent', count: 3, color: 'bg-red-500', delay: 900 },
                    { label: 'Channel: WhatsApp', count: 12, color: 'bg-green-500', delay: 1000 },
                    { label: 'Assigned to: Me', count: 8, color: 'bg-purple-500', delay: 1100 }
                  ].map((filter, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center justify-between p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer animate-scale-in`}
                      style={{ animationDelay: flowVisible ? `${filter.delay}ms` : '0ms' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 ${filter.color} rounded-full shadow-lg animate-pulse-subtle`}></div>
                        <span className="text-white font-semibold">{filter.label}</span>
                      </div>
                      <span className="text-white/90 font-bold">{filter.count}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="text-white/60 text-sm text-center leading-relaxed">
                    Powered by Supabase real-time indexes
                    <br />
                    <span className="text-white/40 text-xs">Sub-millisecond filtering performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-FIRST WORKFLOW - Sequential Story */}
      <section ref={aiRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-700 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-8 border border-emerald-200 animate-fade-in">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-900">AI-First Support</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.035em' }}>
              AI takes the first interaction.
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Your team steps in only when it matters—with full context already there.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                number: '1',
                icon: Activity,
                title: 'Understands intent instantly',
                desc: 'Analyzes tone, urgency, and what the customer actually needs',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                number: '2',
                icon: Sparkles,
                title: 'Retrieves the right info',
                desc: 'RAG searches your docs, policies, and knowledge base',
                gradient: 'from-emerald-500 to-teal-500'
              },
              {
                number: '3',
                icon: Zap,
                title: 'Responds immediately',
                desc: 'Sends accurate, on-brand answers in seconds',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                number: '4',
                icon: MessageSquare,
                title: 'Clarifies when needed',
                desc: 'Asks for order numbers or account details naturally',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                number: '5',
                icon: Eye,
                title: 'Escalates with context',
                desc: 'Hands off to humans with a clean summary—no starting over',
                gradient: 'from-amber-500 to-yellow-500'
              },
              {
                number: '6',
                icon: CheckCircle2,
                title: 'Learns continuously',
                desc: 'Gets smarter from every agent edit and refinement',
                gradient: 'from-violet-500 to-purple-500'
              }
            ].map((step, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-slate-900 hover:shadow-2xl transition-all duration-500 animate-scale-fade-in ${
                  aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  animationDelay: aiVisible ? `${i * 100}ms` : '0ms'
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <step.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div className={`text-3xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.desc}
                </p>

                <div className={`absolute -inset-1 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-3xl -z-10`}></div>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl transition-all duration-700 delay-600 ${aiVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white">The Result</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.03em' }}>
                Customers get instant answers.
                <br />
                Teams focus on complexity.
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed">
                AI handles 70-80% of routine questions. Humans step in for nuanced situations—with complete context already prepared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-TIME COLLABORATION - Staggered Grid */}
      <section ref={powerRef} className="py-32 px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className={`text-center mb-20 transition-all duration-700 ${powerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold text-white">Real-Time</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.035em' }}>
              Built for teams that move fast.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Collision detection, presence indicators, typing status—powered by Supabase Realtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Eye, label: 'Collision detection', desc: 'See who is viewing each conversation', delay: 0 },
              { icon: Users, label: 'Team presence', desc: 'Online, away, and offline status', delay: 100 },
              { icon: MessageSquare, label: 'Typing indicators', desc: 'Real-time typing awareness', delay: 200 },
              { icon: Zap, label: 'Instant sync', desc: 'Sub-50ms update latency', delay: 300 }
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-500 animate-slide-up ${
                  powerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${i * 100}ms`,
                  animationDelay: powerVisible ? `${item.delay}ms` : '0ms'
                }}
              >
                <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-emerald-400" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-400 ${powerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 transform hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                Mobile-optimized
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Drawer-style conversations designed for one-handed use. Full inbox power on any device.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 font-medium">Native iOS & Android apps</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 transform hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
                Automated workflows
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Smart routing, auto-tagging, SLA timers, and idle detection—all working quietly in the background.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 font-medium">Zero manual configuration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.05]" style={{ letterSpacing: '-0.035em' }}>
            Support that feels effortless.
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
            AI responds first. Humans step in when it matters. Every conversation in one place.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="group px-10 py-5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 font-semibold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
              Get Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
            </button>
            <button className="px-10 py-5 border-2 border-slate-300 text-slate-900 rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 font-semibold text-lg transform hover:-translate-y-0.5">
              Book Demo
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes message-slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes scale-fade-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out both;
        }
        
        .animate-message-slide-in {
          animation: message-slide-in 0.5s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out both;
        }
        
        .animate-scale-fade-in {
          animation: scale-fade-in 0.6s ease-out both;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

      <Footer />
    </div>
  );
}