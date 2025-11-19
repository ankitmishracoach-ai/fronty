import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  ArrowRight, Sparkles, MessageSquare, Brain, Ticket, FileText, BarChart3,
  CheckCircle2, Users, Zap, Shield, Lock, Activity, Eye, Target, Bell,
  Clock, Award, Mail, ChevronRight, Star
} from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';

export default function PricingPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: capabilitiesRef, isVisible: capabilitiesVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: inboxRef, isVisible: inboxVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: aiRef, isVisible: aiVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ticketsRef, isVisible: ticketsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: whyRef, isVisible: whyVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: programRef, isVisible: programVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: securityRef, isVisible: securityVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: faqRef, isVisible: faqVisible } = useScrollAnimation({ threshold: 0.2 });

  const [email, setEmail] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const capabilities = [
    {
      icon: MessageSquare,
      title: "Unified Inbox",
      desc: "Manage email, WhatsApp, Instagram, LinkedIn, and live chat in one place",
      gradient: "from-blue-500 to-cyan-500",
      features: ["6 channels", "Real-time sync", "No switching"]
    },
    {
      icon: Sparkles,
      title: "AI Copilot",
      desc: "Summaries, suggestions, tone rewrites, and auto-notes that save hours",
      gradient: "from-purple-500 to-pink-500",
      features: ["Smart suggestions", "Tone analysis", "Auto-summaries"]
    },
    {
      icon: Ticket,
      title: "Smart Ticketing",
      desc: "AI creates tickets with categories, priorities, and summaries automatically",
      gradient: "from-emerald-500 to-teal-500",
      features: ["Auto-classify", "SLA tracking", "Escalation"]
    },
    {
      icon: Brain,
      title: "Knowledge Base + RAG",
      desc: "AI pulls from your docs to answer customers and tells you what's missing",
      gradient: "from-orange-500 to-red-500",
      features: ["Smart search", "Gap detection", "Auto-update"]
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      desc: "SLA compliance, agent performance, AI effectiveness—all tracked live",
      gradient: "from-violet-500 to-purple-500",
      features: ["Live metrics", "Team insights", "AI analytics"]
    }
  ];

  const whyBeta = [
    {
      icon: Target,
      title: "Quality over speed",
      desc: "We're perfecting the product with real user feedback before opening to everyone"
    },
    {
      icon: Users,
      title: "Tight feedback loop",
      desc: "Early users directly shape features, workflows, and the roadmap"
    },
    {
      icon: Shield,
      title: "Scale reliability",
      desc: "Ensuring rock-solid performance before opening the floodgates"
    },
    {
      icon: Zap,
      title: "Fine-tuned onboarding",
      desc: "Perfecting setup, AI guardrails, and team migration from legacy tools"
    },
    {
      icon: Activity,
      title: "Real-world testing",
      desc: "Learning from actual support workflows to build what teams truly need"
    }
  ];

  const programBenefits = [
    {
      icon: CheckCircle2,
      benefit: "Free usage during entire beta period",
      detail: "No charges, no credit card required"
    },
    {
      icon: Users,
      benefit: "Dedicated onboarding assistance",
      detail: "We'll help you migrate and get set up"
    },
    {
      icon: Bell,
      benefit: "Regular check-ins with founders",
      detail: "Your feedback shapes the product"
    },
    {
      icon: Star,
      benefit: "Priority feature requests",
      detail: "Early users influence the roadmap"
    },
    {
      icon: Award,
      benefit: "Guided migration to stable release",
      detail: "Zero downtime when we go public"
    },
    {
      icon: Zap,
      benefit: "Early access to new features",
      detail: "Test capabilities before anyone else"
    }
  ];

  const securityFeatures = [
    { icon: Lock, label: "Data encrypted at rest & in transit" },
    { icon: Shield, label: "Row-level security & tenant isolation" },
    { icon: Eye, label: "Complete audit logs & activity tracking" },
    { icon: Users, label: "Role-based access control (RBAC)" },
    { icon: Activity, label: "SOC 2 Type II in roadmap" },
    { icon: Target, label: "Cloudflare WAF & DDoS protection" }
  ];

  const faqs = [
    {
      q: "What is a private beta?",
      a: "A private beta means Enorve is fully functional but we're accepting a limited number of teams to ensure quality, gather feedback, and refine the product before public launch. You get early access to shape the future of the platform."
    },
    {
      q: "Is there any cost during beta?",
      a: "No. There are zero charges during the private beta period. You get full access to all features completely free."
    },
    {
      q: "How long until public release?",
      a: "We're targeting Q2 2025 for public launch. Beta users will be notified in advance and will receive priority migration support."
    },
    {
      q: "How are teams selected for beta access?",
      a: "We prioritize teams that can provide meaningful feedback and have active support workflows."
    },
    {
      q: "What happens after beta ends?",
      a: "Beta users get guided migration to the stable release with zero downtime."
    },
    {
      q: "Can I invite my whole team?",
      a: "Yes. You can add unlimited team members during beta."
    },
    {
      q: "What support do I get during beta?",
      a: "You get direct access to our team via email and Slack."
    },
    {
      q: "Will my data be safe?",
      a: "Absolutely. We use enterprise-grade security and best practices."
    }
  ];
  return (
    <div className="pt-20 overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-violet-50 via-purple-50/30 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl animate-float-rotate"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-5xl mx-auto relative">
          <div className={`text-center transition-all duration-1000 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-violet-200 animate-bounce-subtle">
              <Sparkles className="w-4 h-4 text-violet-600 animate-spin-slow" />
              <span className="text-sm font-semibold text-violet-800">Private Beta • Limited Access</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Modern AI-powered
              <br />
              customer conversations
            </h1>

            <p className="text-2xl lg:text-3xl font-bold text-slate-700 mb-6">Without the chaos.</p>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Enorve is in private beta. Join the early access program to shape the future of support.
            </p>

            <div className={`max-w-lg mx-auto mb-8 transition-all duration-1000 delay-300 ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-violet-500 focus:outline-none text-slate-900 placeholder:text-slate-400 transition-colors"
                  />
                </div>
                <button className="group px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl whitespace-nowrap">
                  Request Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-sm text-slate-500 mt-3">
                Free during beta • No credit card required • Limited spots available
              </p>
            </div>

            <button className="text-violet-600 hover:text-violet-700 font-semibold inline-flex items-center gap-2 transition-colors">
              See product demo
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-sm text-slate-500 mt-8">Built for startups and growth teams</p>
          </div>
        </div>
      </section>

      {/* PRODUCT CAPABILITIES */}
      <section ref={capabilitiesRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${capabilitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Everything you need
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                in one platform
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Not a collection of tools. A unified support experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 overflow-hidden ${
                  capabilitiesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cap.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className={`relative w-16 h-16 bg-gradient-to-br ${cap.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <cap.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                <h3 className="relative text-xl font-black text-slate-900 mb-3">{cap.title}</h3>
                <p className="relative text-slate-600 leading-relaxed mb-4">{cap.desc}</p>

                <div className="relative flex flex-wrap gap-2">
                  {cap.features.map((feature, j) => (
                    <span key={j} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl">
              Join Private Beta
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SMART INBOX */}
      <section ref={inboxRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${inboxVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-200">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">Smart Inbox</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Context-rich conversations.
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Zero switching.</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                See customer history, sentiment, tags, and orders—all in one view. AI highlights what matters most.
              </p>

              <ul className="space-y-4">
                {[
                  "Full conversation history across channels",
                  "AI-generated summaries",
                  "Customer timeline",
                  "Smart routing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* RIGHT SIDE (INBOX PREVIEW) */}
            <div className={`transition-all duration-1000 delay-300 ${inboxVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl animate-pulse-glow"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
                  <div className="space-y-4">
                    {[
                      { channel: "WhatsApp", time: "2m ago", preview: "When will my order arrive?", unread: true },
                      { channel: "Email", time: "15m ago", preview: "Need help with refund process", unread: false },
                      { channel: "Instagram", time: "1h ago", preview: "Product inquiry from post", unread: false }
                    ].map((msg, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-xl border-2 ${
                          msg.unread ? "border-blue-200 bg-blue-50" : "border-slate-100 bg-white"
                        } hover:shadow-md transition-all cursor-pointer`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-500 uppercase">{msg.channel}</span>
                          <span className="text-xs text-slate-400">{msg.time}</span>
                        </div>
                        <p className="text-sm text-slate-900 font-medium">{msg.preview}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AI COPILOT SECTION */}
      <section ref={aiRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT PREVIEW */}
            <div className={`order-2 md:order-1 transition-all duration-1000 delay-300 ${aiVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl animate-pulse-glow"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-purple-600 animate-spin-slow" />
                      <span className="text-sm font-bold text-purple-900">AI Copilot Active</span>
                    </div>

                    {[
                      { type: "Summary", content: "Customer upset about delayed order #12345. Wants refund or expedited shipping." },
                      { type: "Suggestion", content: "Offer expedited shipping at no cost + 10% discount on next order" },
                      { type: "Tone", content: "Empathetic • Urgent • Solution-focused" }
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                        <div className="text-xs font-bold text-purple-700 mb-2 uppercase">{item.type}</div>
                        <p className="text-sm text-slate-900">{item.content}</p>
                      </div>
                    ))}

                    <button className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                      Apply Suggestion
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className={`order-1 md:order-2 transition-all duration-1000 ${aiVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6 border border-purple-200">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-800">AI Copilot</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                AI that works
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">during conversations</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Real-time suggestions, summaries, and tone analysis—right when agents need them.
              </p>

              <ul className="space-y-4">
                {[
                  "Smart response suggestions",
                  "Automatic conversation summaries",
                  "Tone analysis (calm, firm, empathetic)",
                  "One-click approval—agents stay in control"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SMART TICKETING */}
      <section ref={ticketsRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className={`transition-all duration-1000 ${ticketsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6 border border-emerald-200">
                <Ticket className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-800">Smart Ticketing</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Tickets that
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">create themselves</span>
              </h2>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                AI detects workflow needs and creates structured tickets automatically.
              </p>

              <ul className="space-y-4">
                {[
                  "Auto-classify by category and priority",
                  "Predict escalation level",
                  "Pre-filled summaries",
                  "Smart SLA tracking"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT TICKET PREVIEW */}
            <div className={`transition-all duration-1000 delay-300 ${ticketsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-2xl animate-pulse-glow"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6">

                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-bold text-slate-900">AI-Generated Ticket</h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                      High Confidence
                    </span>
                  </div>

                  <div className="space-y-4">

                    <div>
                      <div className="text-xs font-bold text-slate-500 mb-2 uppercase">Title</div>
                      <div className="text-sm font-medium text-slate-900 bg-slate-50 rounded px-3 py-2">
                        Order #12345 stuck in shipping
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-bold text-slate-500 mb-2 uppercase">Category</div>
                        <div className="px-3 py-2 bg-purple-100 text-purple-700 rounded text-xs font-bold">
                          Delivery Issue
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500 mb-2 uppercase">Priority</div>
                        <div className="px-3 py-2 bg-orange-100 text-orange-700 rounded text-xs font-bold">
                          High
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xs font-bold text-slate-500 mb-2 uppercase">AI Summary</div>
                      <div className="text-xs text-slate-700 bg-slate-50 rounded px-3 py-2 leading-relaxed">
                        Customer reports order delayed 2+ weeks. Tracking shows package stuck. Requires escalation.
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY PRIVATE BETA */}
      <section ref={whyRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Why private beta?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">We're building this with you — not for you.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyBeta.map((reason, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border-2 border-slate-200 ${
                  whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-violet-600" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-3">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="group px-10 py-5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl">
              Apply for Early Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* EARLY ACCESS PROGRAM */}
      <section ref={programRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">

          <div className={`text-center mb-16 transition-all duration-1000 ${programVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              What you get as
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">an early user</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {programBenefits.map((benefit, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-slate-200 ${
                  programVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{benefit.benefit}</h3>
                  <p className="text-sm text-slate-600">{benefit.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={`bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl border-2 border-violet-200 p-12 text-center transition-all duration-1000 delay-600 ${
            programVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}>
            <p className="text-xl text-slate-800 font-bold mb-2">Limited to 50 teams per month</p>
            <p className="text-slate-600">We're keeping cohorts small to ensure quality feedback & support.</p>
          </div>

        </div>
      </section>

      {/* SECURITY */}
      <section ref={securityRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">

          <div className={`text-center mb-16 transition-all duration-1000 ${securityVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Enterprise-grade
              <br />
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">security & reliability</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Your data is safe at every stage.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((feature, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-slate-200 ${
                  securityVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <feature.icon className="w-6 h-6 text-red-600" />
                <p className="text-sm font-semibold text-slate-900">{feature.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">

          <div className={`text-center mb-16 transition-all duration-1000 ${faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Frequently asked
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border-2 border-slate-200 overflow-hidden transition-all duration-500 ${
                  faqVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-lg pr-4">{faq.q}</span>
                  <ChevronRight
                    className={`w-6 h-6 text-slate-400 transition-transform ${
                      openFaq === i ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
            Be part of the earliest
            <br />
            teams shaping Enorve
          </h2>

          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Limited spots available each month. Apply now.
          </p>

          <div className="max-w-lg mx-auto mb-8">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-6 py-5 rounded-xl text-slate-900 placeholder:text-slate-400 text-lg"
              />
              <button className="group px-10 py-5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-200 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl whitespace-nowrap">
                Request Access
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          <p className="text-sm text-slate-400">
            Free during beta • Q2 2025 public launch • Priority support included
          </p>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes float-rotate {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-rotate { animation: float-rotate 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
      `}</style>

      <Footer />
    </div>
  );
}
