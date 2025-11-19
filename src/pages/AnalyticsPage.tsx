import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3, TrendingUp, Clock, Users, MessageSquare, Target, ArrowRight, Sparkles,
  Activity, AlertCircle, Eye, CheckCircle2, Zap, Brain, FileText, Bell, Mail,
  Monitor, Instagram, Slack, Linkedin, FileBarChart, FilePieChart, Send, Plug
} from 'lucide-react';
import Footer from '../components/Footer';
import { getColorClasses } from '../styles/designSystem';

function AnimatedBar({ height, delay }: { height: number; delay: number }) {
  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentHeight(height);
    }, delay);
  }, [height, delay]);

  return (
    <div
      className="flex-1 bg-gradient-to-t from-emerald-500 to-cyan-500 rounded-t transition-all duration-500 hover:opacity-70 cursor-pointer"
      style={{ height: `${currentHeight}%` }}
    ></div>
  );
}

function AnimatedStackedBar({ ai, human, delay }: { ai: number; human: number; delay: number }) {
  const [currentAi, setCurrentAi] = useState(0);
  const [currentHuman, setCurrentHuman] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentAi(ai);
      setCurrentHuman(human);
    }, delay);
  }, [ai, human, delay]);

  return (
    <div className="flex-1 flex flex-col gap-1 items-stretch h-full justify-end">
      <div
        className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-t transition-all duration-500 hover:opacity-70 cursor-pointer"
        style={{ height: `${currentAi}%` }}
      ></div>
      <div
        className="bg-gradient-to-t from-slate-400 to-slate-300 rounded-t transition-all duration-500 hover:opacity-70 cursor-pointer"
        style={{ height: `${currentHuman}%` }}
      ></div>
    </div>
  );
}

export default function AnalyticsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: realtimeRef, isVisible: realtimeVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: aiRef, isVisible: aiVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: channelsRef, isVisible: channelsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: insightsRef, isVisible: insightsVisible } = useScrollAnimation({ threshold: 0.2 });

  const realtimeMetrics = [
    {
      icon: Activity,
      label: 'Live operational metrics',
      desc: 'Active conversations, messages per hour, avg response time—refreshed in real-time',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: MessageSquare,
      label: '24-hour activity heatmap',
      desc: 'See peak hours, message volume patterns, and team availability needs',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      label: 'Auto-resolve rate tracking',
      desc: 'Monitor % of conversations AI handles end-to-end without human intervention',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      label: 'Response time analytics',
      desc: 'First response, median response, resolution time—all tracked automatically',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const aiAnalytics = [
    {
      icon: Brain,
      title: 'AI effectiveness tracking',
      desc: '0-100% confidence scores, success rate trends, week-over-week improvements',
      stats: ['70%', 'Target effectiveness', 'emerald']
    },
    {
      icon: Target,
      title: 'Confidence distribution',
      desc: 'Messages grouped: 0-50%, 50-70%, 70-90%, 90-100% with resolution rates per band',
      stats: ['92%', 'High confidence', 'blue']
    },
    {
      icon: AlertCircle,
      title: 'Escalation intelligence',
      desc: 'Why AI escalates: Low confidence, Requires human, Failed attempts, Timeout',
      stats: ['18%', 'Escalation rate', 'amber']
    },
    {
      icon: FileText,
      title: 'Knowledge gap detection',
      desc: 'AI identifies missing docs, outdated content, and recommended improvements',
      stats: ['12', 'Gaps found', 'red']
    },
    {
      icon: Sparkles,
      title: 'Copilot usage analytics',
      desc: 'Track suggestion acceptance, edit rates, and time saved per agent',
      stats: ['84%', 'Usage rate', 'purple']
    },
    {
      icon: Bell,
      title: 'Intent performance',
      desc: 'Top performing intents, confidence by topic, escalation rate by category',
      stats: ['15', 'Intent types', 'cyan']
    }
  ];

  const channelMetrics = [
    { channel: 'WhatsApp', volume: '847', color: 'emerald', Icon: MessageSquare },
    { channel: 'Email', volume: '523', color: 'blue', Icon: Mail },
    { channel: 'Webchat', volume: '312', color: 'purple', Icon: Monitor },
    { channel: 'Instagram', volume: '194', color: 'pink', Icon: Instagram },
    { channel: 'Slack', volume: '156', color: 'violet', Icon: Slack },
    { channel: 'LinkedIn', volume: '89', color: 'cyan', Icon: Linkedin }
  ];

  const keyInsights = [
    {
      icon: Users,
      title: 'Agent performance tracking',
      desc: 'Messages sent, conversations handled, CSAT ratings, response times per agent',
      features: ['Individual metrics', 'Team comparison', 'Top performers', 'Capacity planning']
    },
    {
      icon: CheckCircle2,
      title: 'Ticket analytics',
      desc: 'Volume by status, SLA compliance, overdue tracking, AI suggestion acceptance',
      features: ['On-time %', 'At-risk alerts', 'Resolution time', 'Activity feed']
    },
    {
      icon: Eye,
      title: 'Webchat conversion tracking',
      desc: 'Full visitor funnel: Landed → Widget viewed → Chat started → Resolved',
      features: ['Conversion rate', 'Popular pages', 'Session duration', 'Engagement patterns']
    },
    {
      icon: MessageSquare,
      title: 'CSAT & feedback analytics',
      desc: '5-star rating distribution, satisfaction rate, trending scores, agent correlation',
      features: ['Avg rating', 'Response rate', 'Comment analysis', 'Low-rating alerts']
    }
  ];

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-purple-50/30 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-float-rotate"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative">
          <div className={`text-center mb-16 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-blue-200">
              <BarChart3 className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-sm font-semibold text-blue-800">Real-Time Analytics</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Every metric that matters.
              <br />
              In real-time.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Track AI performance, agent productivity, customer satisfaction, and channel health—all in one unified dashboard.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button className="group px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-semibold text-base inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                Explore Dashboard
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link to="/pricing" className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200 font-semibold text-base border-2 border-slate-200">
                Get Access
              </Link>
            </div>
          </div>

          {/* Animated Dashboard Preview */}
          <div className={`relative transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl animate-pulse-glow"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-slate-700" />
                  <span className="text-sm font-bold text-slate-800">Performance Dashboard</span>
                  <div className="flex items-center gap-2 ml-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-500">Live Updates</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600 animate-bounce-subtle" />
                  <span className="text-xs text-emerald-700 font-semibold">Auto-refreshing</span>
                </div>
              </div>

              <div className="p-8">
                {/* Top Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                  {[
                    { label: 'Active Conversations', value: '24', change: '+3', trend: 'up', color: 'blue', delay: '0.2s' },
                    { label: 'Messages/Hour', value: '847', change: '↑ 12%', trend: 'up', color: 'emerald', delay: '0.4s' },
                    { label: 'Avg Response Time', value: '2.4m', change: '↓ 18%', trend: 'down', color: 'purple', delay: '0.6s' },
                    { label: 'AI Resolution Rate', value: '76%', change: '↑ 5%', trend: 'up', color: 'cyan', delay: '0.8s' }
                  ].map((metric, i) => {
                    const colorClasses = getColorClasses(metric.color);
                    return (
                      <div
                        key={i}
                        className={`group relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border-2 ${colorClasses.border} hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in overflow-hidden`}
                        style={{ animationDelay: metric.delay }}
                      >
                        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colorClasses.bg} opacity-5 rounded-full -mr-10 -mt-10`}></div>
                        <div className="text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">{metric.label}</div>
                        <div className={`text-4xl font-black ${colorClasses.text} mb-3 tracking-tight`}>{metric.value}</div>
                        <div className={`inline-flex items-center gap-1.5 text-xs font-bold ${metric.trend === 'up' ? 'text-emerald-600' : 'text-purple-600'} ${metric.trend === 'up' ? 'bg-emerald-50' : 'bg-purple-50'} px-3 py-1.5 rounded-lg`}>
                          <TrendingUp className={`w-3.5 h-3.5 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                          {metric.change}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Charts */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Response Times Chart */}
                  <div className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl border-2 border-emerald-200 p-6 hover:shadow-2xl transition-all duration-300 animate-slide-in-left relative overflow-hidden" style={{ animationDelay: '1s' }}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                    <div className="relative flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-1">
                          <Clock className="w-5 h-5 text-emerald-600" />
                          Response Times
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Last 7 days</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 rounded-lg">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-600 rotate-180" />
                        <span className="text-xs text-emerald-700 font-bold">15% faster</span>
                      </div>
                    </div>
                    <div className="relative h-40 flex items-end justify-between gap-2 mb-4">
                      {[65, 72, 58, 85, 92, 78, 88].map((height, i) => (
                        <AnimatedBar key={i} height={height} delay={1200 + i * 100} />
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 font-semibold border-t border-slate-200 pt-3">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  {/* AI vs Human Chart */}
                  <div className="bg-gradient-to-br from-white to-purple-50/30 rounded-2xl border-2 border-purple-200 p-6 hover:shadow-2xl transition-all duration-300 animate-slide-in-right relative overflow-hidden" style={{ animationDelay: '1s' }}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                    <div className="relative flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-1">
                          <Sparkles className="w-5 h-5 text-purple-600 animate-spin-slow" />
                          AI vs Human
                        </h3>
                        <p className="text-xs text-slate-500 font-medium">Message distribution</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 rounded-lg">
                        <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                        <span className="text-xs text-purple-700 font-bold">76% AI</span>
                      </div>
                    </div>
                    <div className="relative h-40 flex items-end justify-between gap-2 mb-4">
                      {[
                        { ai: 75, human: 25 },
                        { ai: 82, human: 18 },
                        { ai: 68, human: 32 },
                        { ai: 90, human: 10 },
                        { ai: 85, human: 15 },
                        { ai: 78, human: 22 },
                        { ai: 88, human: 12 }
                      ].map((day, i) => (
                        <AnimatedStackedBar key={i} ai={day.ai} human={day.human} delay={1200 + i * 100} />
                      ))}
                    </div>
                    <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded shadow-sm"></div>
                        <span className="text-xs text-slate-700 font-bold">AI Responses</span>
                        <span className="text-xs text-slate-500 font-medium">(76%)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gradient-to-br from-slate-400 to-slate-500 rounded shadow-sm"></div>
                        <span className="text-xs text-slate-700 font-bold">Human</span>
                        <span className="text-xs text-slate-500 font-medium">(24%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL-TIME OPERATIONAL METRICS */}
      <section ref={realtimeRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${realtimeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6 border border-emerald-200">
              <Activity className="w-5 h-5 text-emerald-600 animate-pulse" />
              <span className="text-sm font-bold text-emerald-800">Live Data</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Real-time visibility
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                into every conversation
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Live operational metrics that update automatically—no manual refresh needed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {realtimeMetrics.map((metric, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 overflow-hidden ${
                  realtimeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`relative w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <metric.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="relative text-xl font-black text-slate-900 mb-3">{metric.label}</h3>
                <p className="relative text-slate-600 leading-relaxed">{metric.desc}</p>
                
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 rounded-full`}></div>
              </div>
            ))}
          </div>

          {/* Key Metrics Callout */}
          <div className={`mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 shadow-2xl transition-all duration-1000 delay-600 relative overflow-hidden ${realtimeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

            <div className="max-w-4xl mx-auto relative">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 border border-white/20">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-sm font-bold text-white">Live Performance Snapshot</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-5xl font-black text-emerald-400 mb-3 tracking-tight">847</div>
                    <div className="text-sm text-slate-300 font-medium">Messages last hour</div>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      <span>+12% from avg</span>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-5xl font-black text-blue-400 mb-3 tracking-tight">2.4m</div>
                    <div className="text-sm text-slate-300 font-medium">Avg response time</div>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
                      <TrendingUp className="w-3 h-3 rotate-180" />
                      <span>18% faster</span>
                    </div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="text-5xl font-black text-purple-400 mb-3 tracking-tight">76%</div>
                    <div className="text-sm text-slate-300 font-medium">AI auto-resolve rate</div>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-purple-400 font-semibold">
                      <Sparkles className="w-3 h-3" />
                      <span>Target: 70%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-slate-300 font-medium">
                  All metrics update live as conversations happen
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>Real-time sync • Sub-second latency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI PERFORMANCE ANALYTICS */}
      <section ref={aiRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6 border border-purple-200">
              <Brain className="w-5 h-5 text-purple-600 animate-pulse" />
              <span className="text-sm font-bold text-purple-800">AI Intelligence</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Track AI's real impact
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                with precision
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Confidence scores, escalation patterns, knowledge gaps, and effectiveness trends—all tracked automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAnalytics.map((metric, i) => {
              const colorClasses = getColorClasses(metric.stats[2]);
              return (
                <div
                  key={i}
                  className={`group bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 ${
                    aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <metric.icon className={`w-8 h-8 ${colorClasses.text}`} strokeWidth={2.5} />
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3">{metric.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">{metric.desc}</p>

                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border ${colorClasses.border}`}>
                    <span className={`text-2xl font-black ${colorClasses.text}`}>{metric.stats[0]}</span>
                    <span className="text-xs text-slate-600 font-semibold">{metric.stats[1]}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Features Highlight */}
          <div className={`mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200 p-12 transition-all duration-1000 delay-700 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Confidence Distribution</div>
                <div className="text-3xl font-black text-purple-600 mb-1">0-100%</div>
                <div className="text-xs text-slate-600">Grouped in 4 bands with resolution rates</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Escalation Triggers</div>
                <div className="text-3xl font-black text-pink-600 mb-1">4 Types</div>
                <div className="text-xs text-slate-600">Low confidence, Requires human, Failed, Timeout</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Copilot Analytics</div>
                <div className="text-3xl font-black text-violet-600 mb-1">84%</div>
                <div className="text-xs text-slate-600">Suggestions accepted and used by agents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MULTI-CHANNEL ANALYTICS */}
      <section ref={channelsRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${channelsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Unified view across
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                6 channels
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              WhatsApp, Email, Webchat, Instagram, Slack, LinkedIn—all tracked in one dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channelMetrics.map((channel, i) => {
              const colorClasses = getColorClasses(channel.color);
              return (
                <div
                  key={i}
                  className={`group relative bg-gradient-to-br from-white to-slate-50 rounded-3xl border-2 border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                    channelsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 ${colorClasses.bg} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

                  <div className="relative flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <channel.Icon className={`w-8 h-8 ${colorClasses.text}`} strokeWidth={2.5} />
                    </div>
                    <div className={`flex items-center gap-2 px-3 py-1.5 ${colorClasses.bg} rounded-lg`}>
                      <div className={`w-2 h-2 ${colorClasses.text === 'text-white' ? 'bg-white' : colorClasses.bg.replace('bg-', 'bg-')} rounded-full animate-pulse`}></div>
                      <span className={`${colorClasses.text} text-xs font-bold`}>Active</span>
                    </div>
                  </div>

                  <h3 className="relative text-xl font-black text-slate-900 mb-6">{channel.channel}</h3>

                  <div className="relative flex items-baseline gap-2 mb-6">
                    <span className={`text-5xl font-black ${colorClasses.text} tracking-tight`}>{channel.volume}</span>
                    <span className="text-sm text-slate-500 font-semibold">msgs today</span>
                  </div>

                  <div className="relative space-y-3 pt-4 border-t border-slate-200">
                    <div className="flex items-center justify-between group/item">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-600 font-medium">Avg response</span>
                      </div>
                      <span className="text-sm font-black text-slate-900">2.3m</span>
                    </div>
                    <div className="flex items-center justify-between group/item">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-600 font-medium">Resolution rate</span>
                      </div>
                      <span className="text-sm font-black text-emerald-600">94%</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Channel Performance Note */}
          <div className={`mt-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-3xl border-2 border-blue-200 p-10 text-center transition-all duration-1000 delay-600 relative overflow-hidden ${channelsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute top-0 left-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-blue-300">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-900">Cross-Channel Insights</span>
              </div>
              <p className="text-2xl text-slate-900 font-bold mb-2">
                Compare performance across all channels
              </p>
              <p className="text-base text-slate-600">
                Response times, resolution rates, CSAT scores, and volume trends—all in real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE INSIGHTS */}
      <section ref={insightsRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${insightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Everything you need
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                to optimize support
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyInsights.map((insight, i) => (
              <div
                key={i}
                className={`group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 ${
                  insightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <insight.icon className="w-8 h-8 text-violet-600" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-3">{insight.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{insight.desc}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {insight.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700 font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Export & Integration */}
          <div className={`mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl transition-all duration-1000 delay-700 ${insightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-white mb-4">Export & Integration Options</h3>
              <p className="text-slate-300 text-lg">Take your data anywhere</p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: 'CSV Export', Icon: FileBarChart },
                { label: 'PDF Reports', Icon: FilePieChart },
                { label: 'Slack Summaries', Icon: Send },
                { label: 'API Access', Icon: Plug }
              ].map((option, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center justify-center mb-3">
                    <option.Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm font-bold text-white">{option.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Data-driven decisions.
            <br />
            Without the noise.
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Real-time analytics that actually help you improve.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/pricing" className="group px-10 py-5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-200 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl">
              Get Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/pricing" className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-200 font-bold text-lg border-2 border-white/20">
              See Demo
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <style>{`
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
        
        @keyframes bar-grow {
          from {
            transform: scaleY(0);
            transform-origin: bottom;
          }
          to {
            transform: scaleY(1);
            transform-origin: bottom;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
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
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out both;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out both;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out both;
        }
        
        .animate-bar-grow {
          animation: bar-grow 0.6s ease-out both;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
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