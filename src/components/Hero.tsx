import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white mt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-glow-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-10 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">Now in private beta</span>
          </div>
          <h1 className="text-6xl lg:text-[7rem] font-black text-slate-900 leading-[0.95] mb-10 animate-fade-in-up tracking-tighter">
            Support built for <span className="text-slate-900">confidence</span>.
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-up animation-delay-200">
            A unified workspace for conversations, tickets, and automation — designed with clarity, speed, and intelligence at its core.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up animation-delay-400">
            <Link to="/pricing" className="relative px-12 py-6 bg-slate-900 text-white text-lg rounded-2xl hover:bg-slate-800 hover:scale-[1.03] transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center gap-3 group font-semibold transform hover:-translate-y-0.5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
              Get Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
            </Link>
            <Link to="/pricing" className="px-12 py-6 glass-card text-slate-900 text-lg rounded-2xl hover:scale-[1.03] transition-all duration-300 font-semibold transform hover:-translate-y-0.5">
              Book a Demo
            </Link>
          </div>

          <div className="relative animate-fade-in-up animation-delay-600 animate-float-slow">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white pointer-events-none rounded-3xl"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-50 animate-glow-pulse"></div>

            <div className="relative glass-card rounded-3xl max-w-6xl mx-auto overflow-hidden transition-all duration-300" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)' }}>
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-3 border-b border-slate-200/80 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 hover:scale-110 transition-transform cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 hover:scale-110 transition-transform cursor-pointer"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 hover:scale-110 transition-transform cursor-pointer"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white px-4 py-1 rounded-lg border border-slate-200 text-xs font-medium text-slate-500">
                    app.enorve.com/inbox
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-0 bg-white">
                <div className="col-span-1 bg-slate-50/50 p-6 border-r border-slate-200/80 backdrop-blur-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-5 pb-3 border-b border-slate-200">
                      <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse-subtle"></div>
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Inbox</span>
                      <span className="ml-auto text-xs font-bold text-slate-500 animate-pulse-subtle">24</span>
                    </div>
                    {[
                      { priority: true, unread: true },
                      { priority: false, unread: true },
                      { priority: false, unread: true },
                      { priority: false, unread: false }
                    ].map((item, i) => (
                      <div key={i} className={`bg-white rounded-xl p-3.5 border transition-all duration-200 cursor-pointer animate-fade-in-up hover:-translate-y-0.5 ${i === 0 ? 'border-slate-900 shadow-lg' : 'border-slate-200 hover:border-slate-300 hover:shadow-md'}`} style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex-shrink-0 shadow-md"></div>
                          <div className="flex-1 min-w-0">
                            <div className={`h-2 rounded-full mb-2 ${item.unread ? 'bg-slate-800' : 'bg-slate-300'}`} style={{ width: i === 0 ? '85%' : '70%' }}></div>
                            <div className="h-1.5 bg-slate-200 rounded-full" style={{ width: i === 0 ? '60%' : '50%' }}></div>
                          </div>
                          {item.priority && (
                            <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1 animate-pulse"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-2 bg-white p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 pb-4 border-b border-slate-200">
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full shadow-lg"></div>
                      <div className="flex-1">
                        <div className="h-2.5 bg-slate-800 rounded-full w-32 mb-2"></div>
                        <div className="h-1.5 bg-slate-300 rounded-full w-24"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-slate-100 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 bg-slate-100 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"></div>
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-2 bg-slate-400 rounded-full w-full mb-2.5"></div>
                        <div className="h-2 bg-slate-300 rounded-full w-11/12 mb-2.5"></div>
                        <div className="h-2 bg-slate-300 rounded-full w-4/5"></div>
                      </div>

                      <div className="flex justify-end animate-bubble-pop animation-delay-400">
                        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-2xl p-4 max-w-md shadow-xl">
                          <div className="h-2 bg-slate-600 rounded-full w-full mb-2.5"></div>
                          <div className="h-2 bg-slate-700 rounded-full w-3/4"></div>
                        </div>
                      </div>

                      <div className="relative animate-bubble-pop animation-delay-600">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 animate-pulse-subtle"></div>
                        <div className="relative bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-4 border-2 border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
                          <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5 icon-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            <div className="flex-1">
                              <div className="h-2 bg-emerald-400 rounded-full w-2/3 mb-2.5"></div>
                              <div className="h-2 bg-emerald-300 rounded-full w-full mb-2"></div>
                              <div className="h-2 bg-emerald-300 rounded-full w-4/5"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
