import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import { 
  ShoppingCart, 
  Code, 
  Briefcase, 
  Headphones, 
  Rocket, 
  Users, 
  GraduationCap, 
  Heart,
  Check,
  ArrowRight,
  Zap,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';

interface UseCase {
  icon: any;
  title: string;
  color: string;
  glowColor: string;
  challenge: string;
  solutions: {
    title: string;
    description: string;
  }[];
  results: string[];
}

export default function UseCasesPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeCase, setActiveCase] = useState(0);

  const useCases: UseCase[] = [
    {
      icon: ShoppingCart,
      title: 'E-commerce & Retail',
      color: 'from-emerald-500 to-teal-600',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      challenge: 'Online stores face overwhelming customer inquiries about orders, returns, product questions, and shipping—leading to slow response times, abandoned carts, and poor customer satisfaction.',
      solutions: [
        {
          title: 'Shopify Integration',
          description: 'Instantly access customer order history, purchase patterns, and product details within conversations'
        },
        {
          title: 'AI-Powered Responses',
          description: 'Answer common product questions, shipping inquiries, and return policies automatically with 85%+ accuracy'
        },
        {
          title: 'Multi-Channel Support',
          description: 'Manage WhatsApp, Instagram DMs, Email, and Live Chat from one unified inbox'
        },
        {
          title: 'Smart Routing',
          description: 'Route VIP customers to senior agents, refund requests to specialists, and simple FAQs to AI'
        }
      ],
      results: [
        '40% reduction in response time',
        '30% deflection rate for repetitive questions',
        '2x faster order issue resolution',
        '24/7 instant support without additional headcount'
      ]
    },
    {
      icon: Code,
      title: 'SaaS & Technology',
      color: 'from-blue-500 to-cyan-600',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      challenge: 'Tech companies struggle with technical support scalability, complex product questions, and high-touch onboarding while maintaining engineering focus.',
      solutions: [
        {
          title: 'Knowledge Base AI Training',
          description: 'Upload product docs, API references, and troubleshooting guides—AI learns your product instantly'
        },
        {
          title: 'Website Crawler',
          description: 'Auto-sync your help center, documentation site, and changelog for always-current AI responses'
        },
        {
          title: 'Intelligent Ticket Creation',
          description: 'AI suggests ticket creation for bugs/feature requests and auto-fills details from conversation context'
        },
        {
          title: 'Slack Integration',
          description: 'Notify engineering teams instantly for critical bugs or escalations'
        }
      ],
      results: [
        '60% faster technical onboarding for new agents',
        '50% reduction in escalations to engineering',
        '3x improvement in first-response time',
        'Automated ticket categorization saving 2 hours/day per agent'
      ]
    },
    {
      icon: Briefcase,
      title: 'Agencies & Professional Services',
      color: 'from-purple-500 to-pink-600',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      challenge: 'Agencies juggle multiple clients, scattered communication channels, and need to maintain professional responsiveness without dedicated support teams.',
      solutions: [
        {
          title: 'Multi-Tenant Architecture',
          description: 'Manage multiple client accounts with isolated data and branding'
        },
        {
          title: 'Email Threading',
          description: 'Maintain conversation continuity with automatic thread detection and subject tracking'
        },
        {
          title: 'Rich Text Composer',
          description: 'Send professionally formatted emails with bold, italics, lists, and links'
        },
        {
          title: 'Team Collaboration',
          description: 'Collaborate privately within conversations using @mentions'
        }
      ],
      results: [
        '100% email thread continuity',
        'Unified communication across 5+ channels per client',
        'Team collaboration without leaving context',
        'Professional branding with custom signatures'
      ]
    },
    {
      icon: Headphones,
      title: 'Support Teams & Contact Centers',
      color: 'from-orange-500 to-red-600',
      glowColor: 'rgba(249, 115, 22, 0.4)',
      challenge: 'High-volume support teams face agent burnout, inconsistent responses, quality control issues, and difficulty scaling during peak periods.',
      solutions: [
        {
          title: 'AI Assist Console',
          description: 'Real-time reply suggestions as agents type—reduce composition time by 70%'
        },
        {
          title: 'SLA Management',
          description: 'Visual countdown timers, at-risk alerts, and automatic escalation for SLA breaches'
        },
        {
          title: 'Intelligent Routing',
          description: 'Distribute conversations by agent availability, skills, priority, or round-robin'
        },
        {
          title: 'Quality Monitoring',
          description: 'Review AI confidence scores, conversation sentiment trends, and agent performance'
        }
      ],
      results: [
        '3x faster reply composition with AI suggestions',
        '95% SLA compliance with automatic escalation',
        '40% improvement in agent productivity',
        'Consistent quality across all customer interactions'
      ]
    },
    {
      icon: Rocket,
      title: 'Startups & Growing Businesses',
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      challenge: 'Early-stage companies need enterprise-grade support tools without enterprise budgets, complexity, or long setup times.',
      solutions: [
        {
          title: '5-Minute Setup',
          description: 'Connect channels, upload knowledge, and start responding—no technical setup required'
        },
        {
          title: 'Live Chat Widget',
          description: 'Embeddable JavaScript widget with zero coding—just copy/paste one line'
        },
        {
          title: 'AI Training',
          description: 'Upload PDFs, paste text, or crawl your website—AI learns your product in minutes'
        },
        {
          title: 'Usage-Based Pricing',
          description: 'Pay only for what you use—no per-seat fees or hidden costs'
        }
      ],
      results: [
        'Zero to live support in under 10 minutes',
        'No developer resources required',
        'Scales from 10 to 10,000 conversations',
        'Enterprise features at startup pricing'
      ]
    },
    {
      icon: Users,
      title: 'Customer Success Teams',
      color: 'from-violet-500 to-purple-600',
      glowColor: 'rgba(139, 92, 246, 0.4)',
      challenge: 'CS teams need to identify churn risk, manage complex customer journeys, and provide proactive support before issues escalate.',
      solutions: [
        {
          title: 'Conversation Intelligence',
          description: 'Track sentiment trends, intent detection, and escalation signals in real-time'
        },
        {
          title: 'At-Risk Alerts',
          description: 'Automatic identification of frustrated customers based on sentiment analysis'
        },
        {
          title: 'Customer Timeline',
          description: 'Complete conversation history, ticket links, and activity across all channels'
        },
        {
          title: 'HubSpot Integration',
          description: 'Sync contacts, deals, and activities bidirectionally with your CRM'
        }
      ],
      results: [
        'Early churn detection with sentiment analysis',
        '30% reduction in customer escalations',
        'Proactive outreach before issues become critical',
        'Complete customer context in every conversation'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Education & Online Learning',
      color: 'from-amber-500 to-orange-600',
      glowColor: 'rgba(245, 158, 11, 0.4)',
      challenge: 'Educational institutions face high volumes of repetitive questions about enrollment, courses, schedules, and technical support for learning platforms.',
      solutions: [
        {
          title: 'FAQ Widget',
          description: 'Students find answers instantly without submitting tickets—20-30% query deflection'
        },
        {
          title: 'Knowledge Base Search',
          description: 'Students search course materials, policies, and schedules within the chat widget'
        },
        {
          title: 'Business Hours Management',
          description: 'Automatic offline messaging with timezone support'
        },
        {
          title: 'Multi-Language Support',
          description: 'AI responds in students' preferred languages'
        }
      ],
      results: [
        '24/7 instant answers for common questions',
        '50% reduction in support ticket volume',
        'Improved student satisfaction with faster response',
        'Scalable support during peak enrollment periods'
      ]
    },
    {
      icon: Heart,
      title: 'Healthcare & Wellness',
      color: 'from-rose-500 to-pink-600',
      glowColor: 'rgba(244, 63, 94, 0.4)',
      challenge: 'Healthcare providers need HIPAA-compliant communication, appointment management, and patient support without overwhelming staff.',
      solutions: [
        {
          title: 'Secure Messaging',
          description: 'Bank-grade encryption (SSL/TLS) and enterprise security standards'
        },
        {
          title: 'Patient History',
          description: 'Complete conversation timeline with custom fields for medical information'
        },
        {
          title: 'Priority Routing',
          description: 'Route urgent health inquiries to medical staff immediately'
        },
        {
          title: 'Email Integration',
          description: 'HIPAA-compliant email threading with CC/BCC for care teams'
        }
      ],
      results: [
        'Secure patient communication with encryption',
        'Reduced phone volume with async messaging',
        'Improved care coordination with conversation history',
        'Better patient experience with faster response'
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: Zap,
      title: 'Unified Inbox',
      description: 'One dashboard for WhatsApp, Instagram, LinkedIn, Email, Slack, and Live Chat',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: TrendingUp,
      title: 'AI Copilot',
      description: 'Real-time suggestions, conversation summaries, and tone analysis',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Clock,
      title: 'Analytics & Insights',
      description: 'Real-time dashboards with conversation volume, response times, and CSAT',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Row-level security, rate limiting, audit logging, and GDPR compliance',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-white mt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8">
              <Briefcase className="w-4 h-4 text-slate-700" />
              <span className="text-sm font-medium text-slate-700">Use Cases</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
              Built for every team.
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              See how teams across industries use Enorve to transform their customer support experience.
            </p>
          </div>

          {/* Industry Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {useCases.map((useCase, i) => (
              <button
                key={i}
                onClick={() => setActiveCase(i)}
                className={`group relative px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                  activeCase === i
                    ? 'bg-slate-900 text-white shadow-xl scale-105'
                    : 'glass-card text-slate-700 hover:scale-105 hover:shadow-lg'
                }`}
              >
                <useCase.icon className={`w-5 h-5 ${activeCase === i ? 'text-white' : 'text-slate-700'}`} strokeWidth={2.5} />
                <span className="font-semibold text-sm">{useCase.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Use Case Detail */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Challenge */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${useCases[activeCase].color} rounded-2xl flex items-center justify-center shadow-xl animate-float`}>
                  {(() => {
                    const Icon = useCases[activeCase].icon;
                    return <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />;
                  })()}
                </div>
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight">{useCases[activeCase].title}</h2>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <span className="text-red-500">⚠</span> The Challenge
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {useCases[activeCase].challenge}
                </p>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">How Enorve Helps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases[activeCase].solutions.map((solution, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-slate-900 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${useCases[activeCase].color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Check className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{solution.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className={`absolute -inset-1 bg-gradient-to-r ${useCases[activeCase].color} rounded-3xl blur opacity-20 animate-glow-pulse`}></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Results You Can Expect</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {useCases[activeCase].results.map((result, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${useCases[activeCase].color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-5 h-5 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="text-white font-semibold">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Across All Use Cases */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Key Features Across All Use Cases
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Powerful capabilities that work for every industry and team size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-slate-50 rounded-3xl border-2 border-slate-200 p-10 hover:bg-white hover:border-slate-900 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <feature.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
            Ready to transform your support?
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Join teams across industries who've chosen Enorve to elevate their customer experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-10 py-5 bg-slate-900 text-white rounded-xl hover:bg-slate-800 hover:scale-[1.05] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center gap-3 text-lg group font-semibold transform hover:-translate-y-0.5">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
            </button>
            <button className="px-10 py-5 glass-card text-slate-900 rounded-xl hover:scale-[1.05] transition-all duration-300 text-lg font-semibold transform hover:-translate-y-0.5">
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}