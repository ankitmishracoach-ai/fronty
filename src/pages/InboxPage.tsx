import { useScrollAnimation } from '../hooks/useScrollAnimation';
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

  const channels = [
    { 
      name: 'WhatsApp', 
      bgColor: 'bg-[#25D366]',
      textColor: 'text-white',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      bgColor: 'bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737]',
      textColor: 'text-white',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      bgColor: 'bg-[#0A66C2]',
      textColor: 'text-white',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      bgColor: 'bg-slate-700',
      textColor: 'text-white',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2"/>
          <path d="M3 7l9 6 9-6"/>
        </svg>
      )
    },
    { 
      name: 'Slack', 
      bgColor: 'bg-[#4A154B]',
      textColor: 'text-white',
      logo: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.527 14.514A1.973 1.973 0 014.555 16.487a1.973 1.973 0 01-1.973-1.973 1.973 1.973 0 011.973-1.973h1.972v1.973zm.993 0a1.973 1.973 0 011.974-1.973 1.973 1.973 0 011.973 1.973v4.932a1.973 1.973 0 01-1.973 1.973 1.973 1.973 0 01-1.974-1.973v-4.932zM9.494 6.527A1.973 1.973 0 017.521 4.555a1.973 1.973 0 011.973-1.973 1.973 1.973 0 011.973 1.973v1.972H9.494zm0 .993a1.973 1.973 0 011.973 1.974 1.973 1.973 0 01-1.973 1.973H4.562a1.973 1.973 0 01-1.973-1.973 1.973 1.973 0 011.973-1.974h4.932zm8.033.993a1.973 1.973 0 011.973-1.974 1.973 1.973 0 011.973 1.974 1.973 1.973 0 01-1.973 1.973h-1.973V8.513zm-.993 0a1.973 1.973 0 01-1.974 1.973 1.973 1.973 0 01-1.973-1.973V3.581a1.973 1.973 0 011.973-1.973 1.973 1.973 0 011.974 1.973v4.932zm-1.974 8.033a1.973 1.973 0 011.974 1.973 1.973 1.973 0 01-1.974 1.973 1.973 1.973 0 01-1.973-1.973v-1.973h1.973zm0-.993a1.973 1.973 0 01-1.973-1.974 1.973 1.973 0 011.973-1.973h4.932a1.973 1.973 0 011.973 1.973 1.973 1.973 0 01-1.973 1.974H14.56z"/>
        </svg>
      )
    },
    { 
      name: 'Live Chat', 
      bgColor: 'bg-gradient-to-br from-emerald-500 to-cyan-500',
      textColor: 'text-white',
      logo: (
        <MessageSquare className="w-6 h-6" strokeWidth={2.5} />
      )
    }
  ];

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* HERO SECTION - Bold & Dynamic */}
      <section ref={heroRef} className="relative py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.08),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl animate-float-rotate"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className={`text-center mb-16 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-slate-200">
              <Inbox className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-slate-800">Unified Inbox</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              AI responds first.<br />
              Humans step in when it matters.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Your customers get instant, accurate answers—grounded in your knowledge.
              <br />Your team steps in only where it matters.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button className="group px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-semibold text-base inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                Experience the Inbox
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200 font-semibold text-base border-2 border-slate-200">
                Book Demo
              </button>
            </div>
          </div>

          {/* Channel Pills */}
          <div className={`flex items-center justify-center gap-3 mb-16 flex-wrap transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {channels.map((channel, i) => (
              <div
                key={i}
                className={`group ${channel.bgColor} ${channel.textColor} px-4 py-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer animate-float`}
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  animationDuration: `${3 + i * 0.2}s`
                }}
              >
                <div className="flex items-center gap-2">
                  {channel.logo}
                  <span className="text-sm font-semibold">{channel.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Inbox Preview */}
          <div className={`relative transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <Inbox className="w-4 h-4 text-slate-700" />
                    <span className="text-sm font-bold text-slate-800">Inbox</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-sm">
                  <button className="text-slate-900 font-semibold border-b-2 border-slate-900 pb-0.5">All</button>
                  <button className="text-slate-500 hover:text-slate-700 transition-colors">Open</button>
                  <button className="text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-1.5">
                    Urgent
                    <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">2</span>
                  </button>
                  <Filter className="w-4 h-4 text-slate-500 cursor-pointer hover:text-slate-700 transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-12">
                {/* Sidebar - Conversations */}
                <div className="col-span-4 bg-slate-50 border-r border-slate-200 min-h-[550px]">
                  <div className="p-4">
                    <div className="relative mb-4">
                      <input 
                        type="text" 
                        placeholder="Search conversations..." 
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        readOnly
                      />
                    </div>

                    <div className="space-y-1.5">
                      {[
                        { name: 'Sarah Chen', msg: 'When will my order arrive?', time: '2m', channel: 'WhatsApp', urgent: true, channelBg: 'bg-[#25D366]' },
                        { name: 'Mike Johnson', msg: 'Need help with refund', time: '5m', channel: 'Email', urgent: false, channelBg: 'bg-slate-600' },
                        { name: 'Emma Wilson', msg: 'Love the product! Quick question...', time: '12m', channel: 'Instagram', urgent: false, channelBg: 'bg-gradient-to-tr from-purple-600 to-pink-600' },
                        { name: 'David Lee', msg: 'Account access issue', time: '28m', channel: 'Slack', urgent: false, channelBg: 'bg-[#4A154B]' },
                        { name: 'Lisa Park', msg: 'Partnership inquiry', time: '1h', channel: 'LinkedIn', urgent: false, channelBg: 'bg-[#0A66C2]' }
                      ].map((conv, i) => (
                        <div 
                          key={i}
                          className={`group p-3.5 rounded-xl cursor-pointer transition-all duration-200 ${
                            i === 0 
                              ? 'bg-white shadow-md border-l-4 border-emerald-500' 
                              : 'bg-white/40 hover:bg-white hover:shadow-sm border-l-4 border-transparent'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2.5">
                              <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></div>
                              <span className="text-sm font-bold text-slate-900">{conv.name}</span>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">{conv.time}</span>
                          </div>
                          <p className="text-sm text-slate-600 truncate mb-2 leading-relaxed">{conv.msg}</p>
                          <div className="flex items-center gap-2">
                            <div className={`${conv.channelBg} px-2 py-0.5 rounded text-white text-xs font-semibold`}>
                              {conv.channel}
                            </div>
                            {conv.urgent && (
                              <div className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded">
                                Urgent
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main - Conversation Thread */}
                <div className="col-span-8 bg-white flex flex-col">
                  {/* Conversation Header */}
                  <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full shadow-md"></div>
                      <div>
                        <div className="text-base font-bold text-slate-900">Sarah Chen</div>
                        <div className="text-sm text-slate-600 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          Active now
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                        Assign
                      </button>
                      <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                        Resolve
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 px-6 py-6 space-y-5 overflow-y-auto">
                    {/* Customer Message */}
                    <div className="flex items-start gap-3 animate-fade-in">
                      <div className="w-9 h-9 bg-slate-200 rounded-full flex-shrink-0 shadow-sm"></div>
                      <div>
                        <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-5 py-3.5 inline-block max-w-md shadow-sm">
                          <p className="text-sm text-slate-900 leading-relaxed">
                            Hi! I placed an order 3 days ago and have not received any shipping updates. When will my order arrive? Order #12345
                          </p>
                        </div>
                        <span className="text-xs text-slate-400 mt-1.5 ml-1 block">10:32 AM</span>
                      </div>
                    </div>

                    {/* AI Auto-Response */}
                    <div className="flex items-start gap-3 animate-slide-up">
                      <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex-shrink-0 shadow-md flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl rounded-tl-sm px-5 py-3.5 inline-block max-w-md shadow-sm border border-emerald-200">
                          <p className="text-sm text-slate-900 leading-relaxed font-medium">
                            Hi Sarah! I can see your order #12345 is currently in transit with DHL and is expected to arrive by Thursday, Nov 21. You will receive tracking updates via email. Thanks for your patience!
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-1.5 ml-1">
                          <span className="text-xs text-emerald-700 font-semibold">AI responded</span>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs text-slate-400">Instant</span>
                        </div>
                      </div>
                    </div>

                    {/* Escalation Card - if customer needs more help */}
                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Eye className="w-4 h-4 text-white" strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-amber-900 mb-1">AI detected: May need human</div>
                          <p className="text-xs text-amber-800 mb-3">Customer tone suggests urgency. Similar cases needed agent follow-up.</p>
                          <button className="px-3 py-1.5 bg-amber-600 text-white text-xs font-semibold rounded-lg hover:bg-amber-700 transition-colors">
                            Assign to Agent
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
                    <div className="flex items-center gap-3">
                      <input 
                        type="text" 
                        placeholder="Type your message..." 
                        className="flex-1 px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                        readOnly
                      />
                      <button className="px-5 py-3 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2">
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

      {/* FLOW STATE - The Magic Moment */}
      <section ref={flowRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className={`transition-all duration-1000 ${flowVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Six channels.
                <br />
                One unified inbox.
              </h2>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                WhatsApp, Instagram, LinkedIn, Email, Slack, and Live Chat—all flowing into one workspace.
                Smart filters keep your team focused.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Filter, label: 'Status & Priority', desc: 'Open, Urgent, Needs Human, Resolved' },
                  { icon: Clock, label: 'SLA Timers', desc: 'Visual countdowns keep teams on track' },
                  { icon: Users, label: 'Assignment Rules', desc: 'Round robin, skill-based, or load-balanced' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all group">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-all">
                      <item.icon className="w-6 h-6 text-slate-700" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-base font-bold text-slate-900 mb-1">{item.label}</div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-300 ${flowVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-white" />
                    <span className="text-white font-bold text-lg">Active Filters</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { label: 'Status: Open', count: 23, color: 'bg-blue-500' },
                    { label: 'Priority: Urgent', count: 3, color: 'bg-red-500' },
                    { label: 'Channel: WhatsApp', count: 12, color: 'bg-green-500' },
                    { label: 'Assigned to: Me', count: 8, color: 'bg-purple-500' }
                  ].map((filter, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 ${filter.color} rounded-full`}></div>
                        <span className="text-white font-semibold text-sm">{filter.label}</span>
                      </div>
                      <span className="text-white/80 text-sm font-bold">{filter.count}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="text-white/60 text-sm text-center">
                    Powered by Supabase indexes
                    <br />
                    <span className="text-white/40 text-xs">Sub-millisecond filtering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI-FIRST WORKFLOW - The Core Story */}
      <section ref={aiRef} className="py-32 px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/30">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-lg border border-emerald-100">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <span className="text-sm font-bold text-emerald-900">AI-First Support</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Enorve's AI takes
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                the first interaction
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              Support becomes effortless. Your team stays focused on conversations that actually need humans.
            </p>
          </div>

          {/* AI Workflow Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                number: '1',
                icon: Activity,
                title: 'Understands intent & sentiment',
                desc: 'Analyzes customer tone, urgency, and what they actually need',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                number: '2',
                icon: Sparkles,
                title: 'Pulls the right information using RAG',
                desc: 'Searches your docs, policies, and knowledge base for accurate answers',
                gradient: 'from-emerald-500 to-teal-500'
              },
              {
                number: '3',
                icon: Zap,
                title: 'Responds instantly',
                desc: 'Sends accurate, on-brand responses in seconds—not minutes',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                number: '4',
                icon: MessageSquare,
                title: 'Asks for details when needed',
                desc: 'Clarifies order numbers, accounts, or missing context naturally',
                gradient: 'from-orange-500 to-red-500'
              },
              {
                number: '5',
                icon: Eye,
                title: 'Escalates with a clean summary',
                desc: 'Hands off to humans with full context—no starting over',
                gradient: 'from-amber-500 to-yellow-500'
              },
              {
                number: '6',
                icon: Users,
                title: 'Learns from every agent edit',
                desc: 'Gets smarter when agents refine responses—continuous improvement',
                gradient: 'from-violet-500 to-purple-500'
              }
            ].map((step, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 hover:border-emerald-200 ${
                  aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <step.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className={`text-3xl font-black bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-lg font-black text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                
                {/* Animated indicator */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 rounded-full`}></div>
              </div>
            ))}
          </div>

          {/* Animated Conversation Flow Demo */}
          <div className={`bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 mb-16 transition-all duration-1000 delay-800 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-slate-900 mb-2">See it in action</h3>
              <p className="text-slate-600">Watch how AI handles a customer question in real-time</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {/* Customer Message */}
              <div className="flex items-start gap-3 animate-message-in">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-5 py-4">
                    <p className="text-sm text-slate-900 leading-relaxed">
                      Do you ship to Canada? How long does it take?
                    </p>
                  </div>
                  <span className="text-xs text-slate-400 mt-1 ml-1 block">Just now</span>
                </div>
              </div>

              {/* AI Processing Indicator */}
              <div className="flex items-center gap-3 pl-14 animate-typing">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span className="text-xs text-emerald-700 font-semibold">AI searching knowledge base...</span>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-3 animate-message-in-delayed">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex-shrink-0 flex items-center justify-center shadow-md">
                  <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl rounded-tl-sm px-5 py-4 border border-emerald-200">
                    <p className="text-sm text-slate-900 leading-relaxed font-medium mb-2">
                      Yes! We ship to Canada. Standard shipping takes 5-7 business days and costs $12. Express shipping (2-3 days) is $25.
                    </p>
                    <p className="text-xs text-emerald-700 font-semibold">✓ Sourced from shipping policy</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1 ml-1">
                    <span className="text-xs text-emerald-700 font-semibold">AI responded</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-400">1.2s</span>
                  </div>
                </div>
              </div>

              {/* Success Indicator */}
              <div className="flex items-center justify-center gap-2 py-4 animate-fade-in-up">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-900">Customer satisfied • No agent needed</span>
              </div>
            </div>
          </div>

          {/* Key Benefit Callout */}
          <div className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl transition-all duration-1000 delay-700 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white">The Result</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
                Your customers get instant, accurate answers.
                <br />
                Your team focuses on what matters.
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed">
                AI handles 70-80% of routine questions. Humans step in for complex issues, angry customers, and nuanced situations—with full context already there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-TIME COLLABORATION - Dark Hero Section */}
      <section ref={powerRef} className="py-32 px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className={`text-center mb-16 transition-all duration-1000 ${powerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-bold text-white">Real-Time</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
              Built for teams that
              <br />
              move fast together
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Collision detection, presence indicators, typing status—powered by Supabase Realtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, label: 'Collision Detection', desc: 'See who is viewing', visual: '2 agents active' },
              { icon: Users, label: 'Team Presence', desc: 'Online, away, offline', visual: '12 online now' },
              { icon: MessageSquare, label: 'Typing Indicators', desc: 'Real-time typing status', visual: 'Sarah is typing...' },
              { icon: Zap, label: 'Instant Sync', desc: 'Zero-latency updates', visual: '< 50ms sync' }
            ].map((item, i) => (
              <div
                key={i}
                className={`group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 ${
                  powerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <item.icon className="w-6 h-6 text-emerald-400" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                <p className="text-slate-400 text-sm mb-4">{item.desc}</p>
                <div className="px-3 py-2 bg-white/5 rounded-lg border border-white/10">
                  <span className="text-xs text-slate-300 font-mono">{item.visual}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Grid */}
          <div className={`mt-16 grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${powerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-black text-white mb-4">Mobile-first design</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Drawer-style conversations optimized for one-handed use. Full power on the go.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm font-medium">Native iOS & Android apps</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-black text-white mb-4">Powerful automation</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Auto-routing, smart tags, SLA timers, and idle detection—all built in.
              </p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm font-medium">Zero manual work required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
            Let AI handle support.
            <br />
            Your team handles what matters.
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 leading-relaxed">
            AI responds first. Humans step in when depth is needed. Support becomes effortless.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="group px-10 py-5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl">
              Start Free Trial
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200 font-bold text-lg border-2 border-slate-200">
              See How It Works
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes message-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes message-in-delayed {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          60% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes typing {
          0% {
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          70% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(16, 185, 129, 0.6);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes float-rotate {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out 0.2s both;
        }
        
        .animate-message-in {
          animation: message-in 0.6s ease-out;
        }
        
        .animate-message-in-delayed {
          animation: message-in-delayed 2.5s ease-out;
        }
        
        .animate-typing {
          animation: typing 2.5s ease-in-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 3s ease-out;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-rotate {
          animation: float-rotate 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
}