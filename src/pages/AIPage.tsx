import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Sparkles, MessageSquare, TrendingUp, Shield, Zap, Brain, ArrowRight,
  CheckCircle2, FileText, Globe, BookOpen, Users, Target, AlertCircle,
  BarChart3, Clock, Eye, Activity
} from 'lucide-react';
import Footer from '../components/Footer';
import { getColorClasses } from '../styles/designSystem';

export default function AIPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: workflowRef, isVisible: workflowVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: ragRef, isVisible: ragVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: handoffRef, isVisible: handoffVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: insightsRef, isVisible: insightsVisible } = useScrollAnimation({ threshold: 0.2 });

  const aiWorkflow = [
    {
      number: '1',
      icon: Brain,
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
  ];

  const knowledgeSources = [
    { label: 'PDFs & Docs', icon: FileText },
    { label: 'Your Website', icon: Globe },
    { label: 'Product Guides', icon: BookOpen },
    { label: 'Support Articles', icon: MessageSquare },
    { label: 'Internal Wikis', icon: BookOpen },
    { label: 'Help Center', icon: Globe },
    { label: 'FAQs', icon: FileText },
    { label: 'Release Notes', icon: FileText }
  ];

  const handoffFeatures = [
    {
      icon: FileText,
      title: 'Clean summaries',
      desc: 'Agents see exactly what happened, what the customer wants, and where AI left off',
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'Smart escalation tags',
      desc: 'Labeled as "Needs Human," "Urgent," or "Complex Issue" automatically',
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Zero-friction handoff',
      desc: 'Agents continue seamlessly with full conversation context and history',
      color: 'emerald'
    }
  ];

  const insightMetrics = [
    { label: 'Low-confidence topics', icon: AlertCircle },
    { label: 'Knowledge gaps', icon: Target },
    { label: 'Escalation patterns', icon: TrendingUp },
    { label: 'Most asked questions', icon: MessageSquare },
    { label: 'Document usage', icon: FileText },
    { label: 'AI resolution rate', icon: CheckCircle2 }
  ];

  return (
    <div className="pt-20 overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative py-20 lg:py-32 px-6 lg:px-8 bg-gradient-to-b from-emerald-50 via-cyan-50/30 to-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)] animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl animate-float-rotate"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative">
          <div className={`text-center mb-16 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm border border-emerald-200">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-800">AI-First Support</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.035em' }}>
              AI handles support.
              <br />
              Humans add depth.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Your customers get instant, accurate answers—grounded in your knowledge.
              <br />
              Your team steps in only where it matters.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button className="group px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-semibold text-base inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                See AI in Action
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200 font-semibold text-base border-2 border-slate-200">
                Get Access
              </button>
            </div>
          </div>

          {/* Animated Conversation Demo */}
          <div className={`relative transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
              <div className="max-w-3xl mx-auto space-y-4">
                {/* Customer Message */}
                <div className="flex items-start gap-3 animate-message-in">
                  <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="bg-slate-100 rounded-2xl rounded-tl-sm px-5 py-4">
                      <p className="text-sm text-slate-900 leading-relaxed">
                        When will my order #12345 arrive? I need it by Friday.
                      </p>
                    </div>
                    <span className="text-xs text-slate-400 mt-1 ml-1 block">Just now</span>
                  </div>
                </div>

                {/* AI Processing */}
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
                    <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl rounded-tl-sm px-5 py-4 border border-emerald-200 shadow-sm">
                      <p className="text-sm text-slate-900 leading-relaxed font-medium mb-2">
                        Hi! I can see order #12345 is currently in transit and expected to arrive by Thursday, Nov 21st. You will receive it before Friday. Tracking link sent to your email.
                      </p>
                      <p className="text-xs text-emerald-700 font-semibold">✓ Sourced from order system + shipping policy</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1 ml-1">
                      <span className="text-xs text-emerald-700 font-semibold">AI responded</span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-400">1.3s</span>
                    </div>
                  </div>
                </div>

                {/* Success */}
                <div className="flex items-center justify-center gap-2 py-4 animate-fade-in-up">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-900">Customer satisfied • No agent needed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI WORKFLOW - How It Works */}
      <section ref={workflowRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${workflowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              How Enorve's AI
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                handles support
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Six steps. Zero guessing. Every answer grounded in your knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiWorkflow.map((step, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-slate-200 hover:border-slate-900 ${
                  workflowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
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

                <h3 className="text-xl font-bold text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-base">{step.desc}</p>
                
                {/* Animated glow */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-all duration-500 rounded-full`}></div>
              </div>
            ))}
          </div>

          {/* Result Callout */}
          <div className={`mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl transition-all duration-1000 delay-700 ${workflowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-bold text-white">The Result</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
                70-80% of questions answered by AI.
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed">
                Humans step in for complex issues, angry customers, and nuanced situations—with full context already there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAG KNOWLEDGE ENGINE */}
      <section ref={ragRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${ragVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              Grounded in
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                your knowledge
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4">
              Not trained on the entire internet. Not making things up.
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every answer comes from your actual documentation using RAG (Retrieval-Augmented Generation)
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {knowledgeSources.map((source, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border-2 border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-slate-300 ${
                  ragVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <source.icon className="w-6 h-6 text-emerald-600" strokeWidth={2.5} />
                </div>
                <p className="text-base font-bold text-slate-900">{source.label}</p>
              </div>
            ))}
          </div>

          {/* Philosophy Cards */}
          <div className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-400 ${ragVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="bg-white rounded-3xl border-2 border-emerald-200 p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-emerald-300">
              <div className="text-6xl mb-5">📚</div>
              <p className="text-xl text-slate-900 font-bold mb-3" style={{ letterSpacing: '-0.02em' }}>No hallucinations</p>
              <p className="text-base text-slate-600 leading-relaxed">Every reply comes from your knowledge</p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-blue-200 p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
              <div className="text-6xl mb-5">🎯</div>
              <p className="text-xl text-slate-900 font-bold mb-3" style={{ letterSpacing: '-0.02em' }}>High confidence only</p>
              <p className="text-base text-slate-600 leading-relaxed">AI answers when it is sure</p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-purple-200 p-10 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-300">
              <div className="text-6xl mb-5">👥</div>
              <p className="text-xl text-slate-900 font-bold mb-3" style={{ letterSpacing: '-0.02em' }}>Human oversight</p>
              <p className="text-base text-slate-600 leading-relaxed">Your team has final say</p>
            </div>
          </div>

          <div className={`bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl border border-violet-200 p-12 text-center shadow-xl transition-all duration-1000 delay-600 ${ragVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-2xl text-purple-900 font-bold">
              As your knowledge improves, AI answers improve automatically.
            </p>
          </div>
        </div>
      </section>

      {/* HUMAN HANDOFF */}
      <section ref={handoffRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${handoffVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              When AI needs help,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                the handoff is seamless
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Full context. Clean summary. Zero friction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {handoffFeatures.map((feature, i) => {
              const colorClasses = getColorClasses(feature.color);
              return (
                <div
                  key={i}
                  className={`group bg-white rounded-3xl border-2 border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                    handoffVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <feature.icon className={`w-8 h-8 ${colorClasses.text}`} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Example Handoff Card */}
          <div className={`mt-16 bg-amber-50 rounded-3xl border-2 border-amber-200 p-8 shadow-lg transition-all duration-1000 delay-500 ${handoffVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Eye className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <div className="text-lg font-bold text-amber-900 mb-2">Smart escalation in action</div>
                <p className="text-amber-800 mb-3">
                  When AI detects anger, complex requests, or low confidence—it tags the conversation as "Needs Human" and creates a clean summary for your team.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-semibold text-slate-900">No starting over. No missing context.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS & LEARNING */}
      <section ref={insightsRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${insightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-[1.05]" style={{ letterSpacing: '-0.03em' }}>
              AI that gets smarter
              <br />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                over time
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See what customers ask. Fix what is missing. Continuous improvement built in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightMetrics.map((metric, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                  insightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <metric.icon className="w-6 h-6 text-orange-600" strokeWidth={2.5} />
                </div>
                <p className="text-slate-900 font-semibold">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className={`mt-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border border-orange-200 p-12 text-center shadow-xl transition-all duration-1000 delay-600 ${insightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <p className="text-2xl text-slate-800 font-bold mb-2">
              AI turns into a continuous feedback loop
            </p>
            <p className="text-lg text-slate-700">
              Improving support clarity and documentation automatically
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            Let AI do the work.
            <br />
            Your team adds the magic.
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            Support that is faster, smarter, and infinitely scalable.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="group px-10 py-5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-200 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl">
              Get Access
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-200 font-bold text-lg border-2 border-white/20">
              See How It Works
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <style>{`
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