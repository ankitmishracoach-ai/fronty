import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Ticket, ArrowRight, MessageSquare, Sparkles, CheckCircle2, Clock,
  Users, Target, Zap, Eye, Activity, AlertCircle, TrendingUp, Bell,
  FileText, Tag
} from 'lucide-react';
import Footer from '../components/Footer';

export default function TicketsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: flowRef, isVisible: flowVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: aiRef, isVisible: aiVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: slaRef, isVisible: slaVisible } = useScrollAnimation({ threshold: 0.2 });

  const conversationToTicket = [
    {
      number: '1',
      icon: MessageSquare,
      title: 'Customer conversation',
      desc: 'Issue gets complex, needs coordination, or requires follow-up work',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '2',
      icon: Sparkles,
      title: 'AI detects ticket opportunity',
      desc: 'Monitors for keywords, sentiment, message count, and complexity signals',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      number: '3',
      icon: Ticket,
      title: 'One-click ticket creation',
      desc: 'Pre-filled with context: title, category, priority, and full summary',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '4',
      icon: Users,
      title: 'Seamless handoff',
      desc: 'Conversation stays linked. Full context preserved. No information loss.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const aiPowers = [
    {
      icon: Sparkles,
      title: 'Proactive ticket suggestions',
      desc: 'AI monitors conversations and suggests tickets with confidence scoring (High/Medium/Low)',
      color: 'emerald',
      details: 'Triggers: 10+ messages, keywords (refund, escalate, stuck), negative sentiment, >30min conversations'
    },
    {
      icon: FileText,
      title: 'Auto-filled everything',
      desc: 'Title, description, category, priority—all pre-populated from conversation context',
      color: 'blue',
      details: 'Uses smart placeholders: {customer_name}, {order_id}, {channel}, {conversation_id}'
    },
    {
      icon: Target,
      title: '7 Smart categories',
      desc: 'Refund, Technical, Verification, Billing, General, Escalation, Other—tagged automatically',
      color: 'purple',
      details: 'AI analyzes conversation and assigns the most relevant category'
    },
    {
      icon: TrendingUp,
      title: 'Template system',
      desc: '5 pre-built templates reduce creation time from 2-3 minutes to under 1 minute',
      color: 'cyan',
      details: 'Templates: Refund Request, Technical Issue, Account Verification, Billing Dispute, General Escalation'
    }
  ];

  const keyFeatures = [
    {
      icon: Activity,
      title: 'Bidirectional sync',
      desc: 'Ticket resolved → Conversation resolved. Conversation reopened → Ticket reopened. Real-time database triggers.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Visual SLA tracking',
      desc: 'Color-coded progress bars, real-time countdowns, at-risk detection (due <4 hours), overdue pulse animations',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Internal collaboration',
      desc: 'Threaded comments, @mentions with autocomplete, file attachments (drag-drop), 5000 char limit',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Eye,
      title: 'Complete audit trail',
      desc: 'Every change logged: status, priority, assignee, dates, edits. User attribution, old→new comparisons',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Bulk operations',
      desc: 'Select multiple with Shift+Click. Batch update status, assign agents, set priority, export to CSV',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: Bell,
      title: 'Dual notifications',
      desc: 'Slack formatted messages + HTML emails for assignments, resolutions, overdue alerts. Webhook-ready.',
      gradient: 'from-blue-600 to-indigo-600'
    }
  ];

  const slaMetrics = [
    { label: 'On-time resolution', value: '94%', color: 'emerald' },
    { label: 'At-risk tickets', value: '3', color: 'amber' },
    { label: 'Overdue tickets', value: '1', color: 'red' },
    { label: 'Avg response time', value: '2.4h', color: 'blue' }
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
              <Ticket className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">Ticket Management</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              From conversation
              <br />
              to ticket. Instantly.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              When conversations need structure, AI creates tickets automatically.
              <br />
              Full context. Zero friction. Complete visibility.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button className="group px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-semibold text-base inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                See Tickets in Action
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200 font-semibold text-base border-2 border-slate-200">
                Start Free
              </button>
            </div>
          </div>

          {/* Animated Ticket Creation Flow */}
          <div className={`relative transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl animate-pulse-glow"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-slate-700" />
                  <span className="text-sm font-bold text-slate-800">Conversation #1847</span>
                  <div className="flex items-center gap-2 ml-4">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-500">Active</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 animate-bounce-subtle">
                  <Sparkles className="w-4 h-4 text-emerald-600 animate-spin-slow" />
                  <span className="text-xs text-emerald-700 font-semibold">AI Suggestion Available</span>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Conversation Side */}
                  <div className="space-y-4">
                    <div className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Customer Conversation
                    </div>
                    
                    <div className="flex items-start gap-3 animate-message-slide-in" style={{ animationDelay: '0.2s' }}>
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="bg-slate-100 rounded-xl px-4 py-3 hover:shadow-md transition-shadow">
                          <p className="text-sm text-slate-900">I ordered this 2 weeks ago and still haven't received it.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 animate-message-slide-in" style={{ animationDelay: '0.4s' }}>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="bg-blue-50 rounded-xl px-4 py-3 hover:shadow-md transition-shadow">
                          <p className="text-sm text-slate-900">Let me check your order #12345...</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 animate-message-slide-in" style={{ animationDelay: '0.6s' }}>
                      <div className="w-8 h-8 bg-slate-200 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="bg-slate-100 rounded-xl px-4 py-3 hover:shadow-md transition-shadow">
                          <p className="text-sm text-slate-900">The tracking shows it's stuck. This needs escalation to shipping team.</p>
                        </div>
                      </div>
                    </div>

                    {/* AI Detection Badge */}
                    <div className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200 animate-slide-bounce" style={{ animationDelay: '0.8s' }}>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-5 h-5 text-amber-600 animate-pulse" />
                        <span className="text-xs font-bold text-amber-900">AI detected: Needs escalation</span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-amber-800">
                        <span className="px-2 py-1 bg-amber-100 rounded-full font-semibold">Keywords: "stuck", "escalation"</span>
                        <span className="px-2 py-1 bg-amber-100 rounded-full font-semibold">12+ messages</span>
                        <span className="px-2 py-1 bg-amber-100 rounded-full font-semibold">Confidence: 92%</span>
                      </div>
                    </div>
                  </div>

                  {/* Ticket Side */}
                  <div className="space-y-4">
                    <div className="text-sm font-bold text-slate-700 mb-4 flex items-center gap-2">
                      <Ticket className="w-4 h-4" />
                      AI-Generated Ticket
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border-2 border-purple-300 animate-scale-in shadow-lg hover:shadow-2xl transition-shadow" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center gap-2 mb-4">
                        <Ticket className="w-5 h-5 text-purple-600 animate-wiggle" />
                        <span className="text-sm font-bold text-purple-900">TICK-2847</span>
                        <span className="ml-auto px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full animate-pulse">
                          High Confidence
                        </span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
                          <div className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">Title</div>
                          <div className="text-sm text-slate-900 font-medium bg-white/60 rounded px-2 py-1">Order #12345 stuck in shipping</div>
                        </div>
                        
                        <div className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
                          <div className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">Category</div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-100 rounded-lg text-xs font-semibold text-purple-700 hover:bg-purple-200 transition-colors">
                            <Tag className="w-3 h-3" />
                            Delivery Issue
                          </div>
                        </div>
                        
                        <div className="animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                          <div className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">Priority</div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-100 rounded-lg text-xs font-semibold text-orange-700 hover:bg-orange-200 transition-colors">
                            <AlertCircle className="w-3 h-3" />
                            High
                          </div>
                        </div>
                        
                        <div className="animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
                          <div className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">AI Summary</div>
                          <div className="text-xs text-slate-700 bg-white/60 rounded-lg p-3 leading-relaxed">
                            Customer reports order delayed 2+ weeks. Tracking shows package stuck. Requires shipping team escalation.
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-200 animate-pulse-button">
                        Create Ticket
                      </button>
                    </div>
                    
                    {/* Success State */}
                    <div className="flex items-center gap-2 justify-center animate-success-pop" style={{ animationDelay: '2.2s' }}>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-checkmark" />
                      <span className="text-sm font-semibold text-emerald-900">Ticket created • Conversation linked</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVERSATION TO TICKET FLOW */}
      <section ref={flowRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${flowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              How tickets work
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                in Enorve
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Seamless flow from chat to structured work. Zero context loss.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversationToTicket.map((step, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 hover:border-purple-200 ${
                  flowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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
                
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 rounded-full`}></div>
              </div>
            ))}
          </div>

          {/* Key Principle */}
          <div className={`mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl transition-all duration-1000 delay-500 ${flowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                Conversation stays linked to ticket.
                <br />
                Context never gets lost.
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed">
                Bidirectional sync means ticket resolved = conversation resolved. Reopened conversation = reopened ticket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI POWERS */}
      <section ref={aiRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-emerald-200">
              <Sparkles className="w-5 h-5 text-emerald-600 animate-pulse" />
              <span className="text-sm font-bold text-emerald-800">AI-Powered</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              AI that knows when
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                tickets are needed
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watches every conversation. Suggests tickets at the perfect moment. Fills in all the details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {aiPowers.map((power, i) => (
              <div
                key={i}
                className={`group bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 ${
                  aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`w-16 h-16 bg-${power.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <power.icon className={`w-8 h-8 text-${power.color}-600`} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{power.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-3">{power.desc}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{power.details}</p>
              </div>
            ))}
          </div>

          {/* Ticket Lifecycle */}
          <div className={`bg-white rounded-3xl border-2 border-slate-200 p-8 mb-12 transition-all duration-1000 delay-600 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">5-Stage Ticket Lifecycle</h3>
            <div className="flex items-center justify-between gap-4 max-w-4xl mx-auto">
              {[
                { status: 'Open', color: 'blue' },
                { status: 'In Progress', color: 'purple' },
                { status: 'Waiting', color: 'amber' },
                { status: 'Resolved', color: 'emerald' },
                { status: 'Closed', color: 'slate' }
              ].map((stage, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`px-4 py-2 bg-${stage.color}-100 text-${stage.color}-700 rounded-lg font-bold text-sm border-2 border-${stage.color}-200`}>
                    {stage.status}
                  </div>
                  {i < 4 && <ArrowRight className="w-5 h-5 text-slate-400" />}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-red-100 text-red-700 rounded font-bold text-xs">Urgent</div>
                  <div className="px-3 py-1 bg-orange-100 text-orange-700 rounded font-bold text-xs">High</div>
                  <div className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded font-bold text-xs">Normal</div>
                  <div className="px-3 py-1 bg-slate-100 text-slate-700 rounded font-bold text-xs">Low</div>
                </div>
                <span className="text-slate-500">← 4 Priority Levels</span>
              </div>
            </div>
          </div>

          {/* AI Triggers */}
          <div className={`bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl border border-emerald-200 p-12 transition-all duration-1000 delay-600 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">Real AI Triggers from Your System</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: 'Message threshold', desc: 'Conversations >10 messages without resolution', icon: '💬' },
                { label: 'Keywords detected', desc: 'refund, escalate, technical issue, verification, complaint, legal', icon: '🔍' },
                { label: 'Negative sentiment', desc: 'Customer frustration signals detected', icon: '😞' },
                { label: 'Failed attempts', desc: 'Multiple resolution attempts failed', icon: '🔄' },
                { label: 'Time threshold', desc: 'Conversation time >30 minutes', icon: '⏱️' },
                { label: 'Confidence scoring', desc: '0-100% with High/Medium/Low indicators', icon: '🎯' }
              ].map((trigger, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-emerald-200 hover:shadow-md transition-all">
                  <div className="text-2xl mb-2">{trigger.icon}</div>
                  <div className="text-sm font-bold text-slate-900 mb-1">{trigger.label}</div>
                  <div className="text-xs text-slate-600">{trigger.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-slate-900">Smart suppression: Won't suggest duplicates within 2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section ref={featuresRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Everything you need
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                to manage tickets
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 overflow-hidden ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="relative text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="relative text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA MANAGEMENT */}
      <section ref={slaRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${slaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Never miss
              <br />
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                a deadline
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real-time SLA tracking. Visual countdowns. Automatic escalation alerts.
            </p>
          </div>

          {/* SLA Dashboard Mock */}
          <div className={`bg-white rounded-3xl shadow-2xl border border-slate-200 p-8 mb-12 transition-all duration-1000 delay-300 ${slaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="grid md:grid-cols-4 gap-6">
              {slaMetrics.map((metric, i) => (
                <div key={i} className={`bg-${metric.color}-50 rounded-2xl p-6 border-2 border-${metric.color}-200`}>
                  <div className="text-sm font-bold text-slate-700 mb-2">{metric.label}</div>
                  <div className={`text-4xl font-black text-${metric.color}-600`}>{metric.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SLA Features */}
          <div className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${slaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {[
              { 
                icon: Clock, 
                title: 'Visual progress bars', 
                desc: 'Color-coded bars show time remaining: Green → Yellow → Orange → Red. Real-time countdown timers.',
                metric: 'At-risk: Due <4 hours'
              },
              { 
                icon: AlertCircle, 
                title: 'Smart detection', 
                desc: 'Automatic flagging of at-risk tickets. Pulse animations on overdue tickets for immediate attention.',
                metric: 'Overdue tracking'
              },
              { 
                icon: Bell, 
                title: 'Dual notifications', 
                desc: 'Slack formatted messages + HTML emails to assigned agents and managers. Webhook-ready for external systems.',
                metric: 'Real-time alerts'
              },
              { 
                icon: TrendingUp, 
                title: 'SLA analytics dashboard', 
                desc: 'Track on-time %, average response time, at-risk count, overdue count. Identify bottlenecks.',
                metric: 'Performance insights'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-red-600" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">{item.desc}</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full">
                      <span className="text-xs font-semibold text-red-700">{item.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SLA Filters */}
          <div className={`mt-12 bg-gradient-to-br from-red-50 to-pink-50 rounded-3xl border border-red-200 p-8 transition-all duration-1000 delay-700 ${slaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="text-xl font-black text-slate-900 mb-4 text-center">SLA-Based Filtering</h3>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {['Due today', 'Due this week', 'At risk', 'Overdue'].map((filter, i) => (
                <div key={i} className="px-4 py-2 bg-white rounded-lg border-2 border-red-200 font-semibold text-sm text-slate-900 hover:border-red-400 transition-colors cursor-pointer">
                  {filter}
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
            Structure that feels
            <br />
            effortless
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Turn conversations into organized work—without the friction.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="group px-10 py-5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-200 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl">
              Start Free Trial
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-200 font-bold text-lg border-2 border-white/20">
              See Demo
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <style>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes message-slide-in {
          from {
            opacity: 0;
            transform: translateX(-30px) translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
        
        @keyframes slide-bounce {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          60% {
            opacity: 1;
            transform: translateY(-5px);
          }
          80% {
            transform: translateY(2px);
          }
          100% {
            transform: translateY(0);
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
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes checkmark {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }
        
        @keyframes pulse-button {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
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
        
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out;
        }
        
        .animate-message-slide-in {
          animation: message-slide-in 0.5s ease-out both;
        }
        
        .animate-slide-bounce {
          animation: slide-bounce 0.7s ease-out both;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out both;
        }
        
        .animate-success-pop {
          animation: success-pop 0.5s ease-out both;
        }
        
        .animate-checkmark {
          animation: checkmark 0.5s ease-out;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .animate-pulse-button {
          animation: pulse-button 2s ease-in-out infinite;
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