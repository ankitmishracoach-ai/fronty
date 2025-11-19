import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import {
  Zap, GitBranch, Clock, Tag, MessageSquare, ArrowRight, Settings, Repeat,
  Target, Bell, Users, TrendingUp, Shield, Activity, Package, Mail,
  CheckCircle2, AlertCircle, Eye, Layers, ChevronRight, Sparkles
} from 'lucide-react';
import { useState } from 'react';
import { getColorClasses } from '../styles/designSystem';

export default function AutomationPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: whatRef, isVisible: whatVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: typesRef, isVisible: typesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: aiRef, isVisible: aiVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: builderRef, isVisible: builderVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: examplesRef, isVisible: examplesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: multiTeamRef, isVisible: multiTeamVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: integrationsRef, isVisible: integrationsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: safetyRef, isVisible: safetyVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: futureRef, isVisible: futureVisible } = useScrollAnimation({ threshold: 0.2 });

  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const automationCapabilities = [
    { icon: Target, label: 'Routing', description: 'Conversations go to the right team or agent — instantly.' },
    { icon: Tag, label: 'Tagging', description: 'Billing, refunds, technical, product issues — tagged automatically.' },
    { icon: AlertCircle, label: 'Prioritization', description: 'Urgent issues surface immediately. VIP customers get priority.' },
    { icon: Bell, label: 'Escalations', description: 'AI detects when human help is required or an SLA is at risk.' },
    { icon: Package, label: 'Ticket creation', description: 'Long-running issues convert into structured tickets.' },
    { icon: Mail, label: 'Notifications', description: 'Slack / email alerts based on triggers.' },
    { icon: Clock, label: 'After-hours handling', description: 'Auto-reply, set expectations, or route to a queue.' },
    { icon: Repeat, label: 'Follow-ups', description: 'Reopen, close, or escalate after inactivity.' }
  ];

  const automationTypes = [
    {
      icon: Zap,
      title: 'Trigger-based workflows',
      description: 'When something happens, do something.',
      examples: [
        'When WhatsApp message contains "refund", assign to Billing',
        'When sentiment = negative, increase priority',
        'When customer is VIP, assign to senior agent',
        'If message contains order number, fetch order from Shopify'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Time-based workflows',
      description: 'Automations that operate on a schedule.',
      examples: [
        'Every day at 9 AM, send a team summary',
        'Close inactive conversations after 72 hours',
        'Escalate tickets past due date'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Activity,
      title: 'Event-based workflows',
      description: 'Triggered by actions taken inside Enorve.',
      examples: [
        'When ticket is created, notify Slack channel',
        'When conversation is tagged "bug", auto-create Jira issue',
        'When SLA is breached, notify manager'
      ],
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const aiFeatures = [
    {
      icon: Sparkles,
      title: 'AI Intent Detection',
      description: 'Understands what the customer is asking — even without exact keywords.',
      color: 'emerald'
    },
    {
      icon: TrendingUp,
      title: 'Sentiment Analysis',
      description: 'Routes angry or urgent customers instantly.',
      color: 'blue'
    },
    {
      icon: Package,
      title: 'Ticket Opportunity Detection',
      description: 'AI identifies when a conversation should become a ticket.',
      color: 'purple'
    },
    {
      icon: AlertCircle,
      title: 'Missing Info Checks',
      description: 'AI detects incomplete requests and automatically asks clarifying questions.',
      color: 'orange'
    },
    {
      icon: CheckCircle2,
      title: 'Auto-resolution',
      description: 'Simple questions are answered and resolved automatically.',
      color: 'cyan'
    }
  ];

  const builderFeatures = [
    { icon: Eye, label: 'Clean, minimal design', description: 'Not a giant flowchart. Just clean conditions and actions.' },
    { icon: CheckCircle2, label: 'Readable logic', description: '"If → Then" blocks that anyone can understand.' },
    { icon: Activity, label: 'Real-time preview', description: 'See exactly what your automation will do before enabling it.' },
    { icon: Zap, label: 'Test mode', description: 'Run sample conversations to confirm behavior.' },
    { icon: Clock, label: 'Version history', description: 'Track changes over time.' },
    { icon: Repeat, label: 'Rollbacks', description: 'Revert to earlier versions instantly.' }
  ];

  const exampleTemplates = [
    {
      title: 'Lead Capture',
      description: 'Detect interest keywords → Create lead → Notify sales.',
      icon: Target,
      color: 'blue'
    },
    {
      title: 'Order Status Resolution',
      description: 'Detect order number → Fetch Shopify order → Respond automatically.',
      icon: Package,
      color: 'emerald'
    },
    {
      title: 'Never Miss a VIP',
      description: 'When customer is VIP → Assign to senior agent → Notify Slack.',
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Out-of-Office Handling',
      description: 'After business hours → Auto-reply → Queue until morning.',
      icon: Clock,
      color: 'orange'
    },
    {
      title: 'SLA Protection',
      description: 'If first response SLA < 10 minutes → Send reminder.',
      icon: Bell,
      color: 'red'
    },
    {
      title: 'Refund Accelerator',
      description: 'Customer requests refund → Auto-create ticket → Tag → Assign to Billing.',
      icon: Zap,
      color: 'cyan'
    }
  ];

  const multiTeamWorkflows = [
    { from: 'Support', to: 'Billing', description: 'Ticket creation + automatic assignment' },
    { from: 'Support', to: 'Engineering (Jira)', description: 'Auto-create engineering tickets with summaries' },
    { from: 'Support', to: 'Sales (HubSpot)', description: 'Auto-update CRM when customers mention upgrades' },
    { from: 'Support', to: 'CX (Slack)', description: 'Send proactive alerts for trending issues' }
  ];

  const integrations = [
    { name: 'Slack', description: 'Alerts, escalations, reminders', icon: '💬' },
    { name: 'Shopify', description: 'Order lookup, purchase-based routing', icon: '🛍️' },
    { name: 'HubSpot', description: 'Sync properties, update stages', icon: '📊' },
    { name: 'Jira', description: 'Create issues automatically', icon: '🔧' },
    { name: 'Zapier', description: 'Connect to thousands of apps', icon: '⚡' },
    { name: 'Email', description: 'Create tickets and send autoresponses', icon: '📧' }
  ];

  const safetyFeatures = [
    { label: 'Execution logs', description: 'See every automation that ran — and why.' },
    { label: 'Error handling', description: 'Failures retry automatically with fallbacks.' },
    { label: 'Rate limiting protection', description: 'Prevent loops and spam.' },
    { label: 'Audit trails', description: 'Full transparency across teams.' },
    { label: 'Deactivation mode', description: 'Pause automations instantly.' }
  ];

  const futureFeatures = [
    'Visual workflow builder',
    'Multi-step automation flows',
    'Branching logic (IF → ELSE IF → ELSE)',
    'Wait conditions',
    'AI-generated workflows',
    'Auto-documentation of workflow logic',
    'Predictive automation (based on trends)'
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative py-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50/30 to-blue-50/20 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)] -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)] -z-10"></div>

        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-8 shadow-lg border border-emerald-200/50 animate-float">
              <Zap className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-800">Automation</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.035em' }}>
              Automation that works
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                in the background.
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Let Enorve handle the repetitive tasks — routing, tagging, follow-ups, SLAs, triggers — so your team can focus on real conversations.
            </p>

            <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed mb-12">
              Quiet, reliable, and fully configurable.
              <br />
              <span className="font-semibold">Build workflows that feel effortless.</span>
            </p>

            <div className="flex items-center justify-center gap-4">
              <Link to="/pricing" className="group px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg relative overflow-hidden inline-block">
                <span className="relative z-10">Get Access</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg border border-slate-200">
                See Automations
              </button>
            </div>
          </div>

          {/* Workflow Visualization */}
          <div className={`relative transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl animate-pulse-slow"></div>
            
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50 p-12 animate-float-slow">
              <div className="flex items-center justify-center gap-8 mb-12">
                <div className="group">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-bold text-slate-900">New Message</div>
                    <div className="text-xs text-slate-500">Trigger</div>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-slate-300" />

                <div className="group">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <GitBranch className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-bold text-slate-900">Check Hours</div>
                    <div className="text-xs text-slate-500">Condition</div>
                  </div>
                </div>

                <ArrowRight className="w-8 h-8 text-slate-300" />

                <div className="group">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Repeat className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-center mt-3">
                    <div className="text-sm font-bold text-slate-900">Auto-reply</div>
                    <div className="text-xs text-slate-500">Action</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-6 border-l-4 border-emerald-500 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">After-hours Auto-reply</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Automatically responds to customers outside business hours with expected response time.
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-emerald-600">Active</span>
                      <span className="text-xs text-slate-500">•</span>
                      <span className="text-xs text-slate-500">Triggered 247 times this month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — Philosophy */}
      <section ref={philosophyRef} className="py-32 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,116,139,0.03),transparent_70%)]"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className={`text-center mb-16 transition-all duration-1000 ${philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              Automation should reduce noise,
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">not create more.</span>
            </h2>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-300">
              <div className="text-4xl mb-4">🚫</div>
              <p className="text-lg text-slate-700 font-semibold mb-2">No complicated builders.</p>
              <p className="text-sm text-slate-600">Simple, clear logic.</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-300">
              <div className="text-4xl mb-4">📊</div>
              <p className="text-lg text-slate-700 font-semibold mb-2">No messy flowcharts.</p>
              <p className="text-sm text-slate-600">Clean conditions and actions.</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-slate-300">
              <div className="text-4xl mb-4">📝</div>
              <p className="text-lg text-slate-700 font-semibold mb-2">No 40-step diagrams.</p>
              <p className="text-sm text-slate-600">Starts simple, scales naturally.</p>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl border border-emerald-200 p-12 shadow-xl text-center transition-all duration-1000 delay-500 ${philosophyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-xl text-slate-800 font-medium mb-4">
              Enorve automation is powerful but calming — built to give teams leverage, not overwhelm.
            </p>
            <p className="text-2xl text-emerald-800 font-bold">
              Everything starts simple, scales naturally, and stays readable.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — What Enorve Automates */}
      <section ref={whatRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${whatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              The work you should not
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">be doing manually.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationCapabilities.map((cap, i) => (
              <div
                key={i}
                className={`group bg-white rounded-2xl border-2 border-slate-200 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-emerald-200 ${
                  whatVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <cap.icon className="w-6 h-6 text-emerald-600" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cap.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Automation Types */}
      <section ref={typesRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${typesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              Build workflows
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">from simple blocks.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {automationTypes.map((type, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden ${
                  typesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`relative w-14 h-14 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <type.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                
                <h3 className="relative text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="relative text-slate-600 mb-4">{type.description}</p>
                
                <div className="relative space-y-2">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Examples:</p>
                  {type.examples.map((example, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <span>{example}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full -translate-y-16 translate-x-16`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — AI-Powered Automation */}
      <section ref={aiRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float-slow"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className={`text-center mb-20 transition-all duration-1000 ${aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-lg border border-emerald-100">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-800">AI-Powered</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              Automation that thinks.
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Not just follows rules.</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enorve's AI brings a layer of intelligence standard rule engines cannot.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {aiFeatures.map((feature, i) => {
              const colorClasses = getColorClasses(feature.color);
              return (
                <div
                  key={i}
                  className={`group relative bg-white backdrop-blur-sm rounded-2xl border border-slate-200 p-8 hover:shadow-2xl transition-all duration-500 ${
                    aiVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className={`w-6 h-6 ${colorClasses.text}`} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5 — The Automation Builder */}
      <section ref={builderRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${builderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              A simple, fast builder that
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">stays out of your way.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {builderFeatures.map((feature, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  builderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <feature.icon className="w-8 h-8 text-blue-600 mb-4" strokeWidth={2.5} />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-200 p-8 shadow-xl transition-all duration-1000 delay-500 ${builderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-blue-600">IF</span>
                  <span className="text-slate-700">"Channel = WhatsApp AND Message contains 'refund'"</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-emerald-600">THEN</span>
                  <span className="text-slate-700">"Assign to Billing + Tag Refund"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Common Automation Examples */}
      <section ref={examplesRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${examplesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              Ready-to-use
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">templates.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {exampleTemplates.map((template, i) => {
              const colorClasses = getColorClasses(template.color);
              return (
                <div
                  key={i}
                  className={`group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                    examplesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`w-12 h-12 ${colorClasses.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <template.icon className={`w-6 h-6 ${colorClasses.text}`} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{template.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{template.description}</p>
                </div>
              );
            })}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${examplesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-lg text-slate-600">
              These templates help teams start instantly.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — Multi-Team Workflows */}
      <section ref={multiTeamRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${multiTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              Smooth coordination
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">between teams.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {multiTeamWorkflows.map((workflow, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 ${
                  multiTeamVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-sm font-semibold rounded">{workflow.from}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded">{workflow.to}</span>
                </div>
                <p className="text-slate-600">{workflow.description}</p>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl border border-violet-200 p-12 text-center shadow-xl transition-all duration-1000 delay-500 ${multiTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-xl text-slate-800 font-bold">
              Automation becomes the backbone of cross-functional work.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Integrations Inside Automations */}
      <section ref={integrationsRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${integrationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              Your tools work better when
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">they work together.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {integrations.map((integration, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  integrationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4">{integration.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{integration.name}</h3>
                <p className="text-sm text-slate-600">{integration.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center transition-all duration-1000 delay-500 ${integrationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-xl text-slate-700 font-medium">
              Automation ties everything together.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Safety, Logs & Monitoring */}
      <section ref={safetyRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${safetyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              Automations
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">you can trust.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {safetyFeatures.map((feature, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 ${
                  safetyVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Shield className="w-8 h-8 text-emerald-600 flex-shrink-0" strokeWidth={2.5} />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{feature.label}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — Coming Soon */}
      <section ref={futureRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${futureVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              The next evolution
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">of automation in Enorve.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {futureFeatures.map((feature, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-all duration-300 ${
                  futureVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <ChevronRight className="w-5 h-5 text-violet-600 flex-shrink-0" strokeWidth={2.5} />
                <p className="text-slate-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/10 via-transparent to-cyan-600/10"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 max-w-3xl mx-auto">
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Automate the repetitive.
                <br />
                Focus on the meaningful.
              </h3>
              <p className="text-xl text-slate-300 mb-8">
                Let Enorve handle the busywork.
              </p>
              <div className="flex items-center justify-center gap-4">
                <Link to="/pricing" className="group px-10 py-5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold text-lg inline-flex items-center gap-2">
                  Get Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/pricing" className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold text-lg border border-white/20">
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}