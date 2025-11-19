import { MessageSquare, Sparkles, Ticket, BarChart3, Zap, Users, Shield, Globe } from 'lucide-react';

export default function SimpleWay() {
  const primaryFeatures = [
    {
      icon: MessageSquare,
      title: 'One-channel Inbox',
      description: 'All conversations from every channel — WhatsApp, Instagram, LinkedIn, Email, Webchat — beautifully organized in one place.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Assistance',
      description: 'Suggestions, summaries, replies — exactly when you need them.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Ticket,
      title: 'Advanced Ticketing',
      description: 'When issues go deeper than a chat, convert conversations into structured workflows without losing context.',
      color: 'from-slate-500 to-slate-700'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Clear trends and insights that help teams improve every day.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const secondaryFeatures = [
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Routing, triggers, SLAs, schedules — everything quietly handled in the background.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Internal notes, mentions, assignments, and collision detection keep work flowing naturally.',
    },
    {
      icon: Shield,
      title: 'Contextual Customer Data',
      description: 'Shopify, HubSpot, and Slack integrations bring rich context directly into the inbox.',
    },
    {
      icon: Globe,
      title: 'Global Scale Ready',
      description: 'Fast, secure, multi-tenant architecture built for modern teams.',
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6" style={{ letterSpacing: '-0.035em' }}>
            Everything you need, nothing you don't
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your essential support tools, unified in a space that feels calm, simple, and easy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {primaryFeatures.map((feature, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-3xl border-2 border-slate-200 p-10 hover:border-slate-900 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <div className="flex items-start gap-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ letterSpacing: '-0.02em' }}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryFeatures.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-slate-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-5 shadow-md">
                <feature.icon className="w-7 h-7 text-slate-700" strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
