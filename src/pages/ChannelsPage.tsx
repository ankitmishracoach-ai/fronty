import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  MessageCircle, Instagram, Linkedin, Mail, MessageSquare, Hash,
  CheckCircle2, ArrowRight, Zap, Target, Activity, Sparkles, Globe,
  Clock, Bell, Users, Eye, Settings, Shield
} from 'lucide-react';
import Footer from '../components/Footer';
import { getColorClasses } from '../styles/designSystem';

export default function ChannelsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: channelsRef, isVisible: channelsVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: unifiedRef, isVisible: unifiedVisible } = useScrollAnimation({ threshold: 0.2 });

  const activeChannels = [
    {
      name: 'Live Chat Widget',
      icon: MessageSquare,
      color: 'from-cyan-500 to-blue-600',
      status: 'Production Ready',
      tagline: 'Turn website visitors into conversations instantly',
      description: 'Embeddable JavaScript widget (~50KB, zero dependencies) with AI auto-responses and proactive triggers.',
      keyFeatures: [
        'Customizable branding & positioning',
        'Pre-chat forms with conditional logic',
        'Proactive triggers: time, exit intent, scroll depth',
        'File uploads with inline previews',
        'Real-time typing indicators',
        'AI integration with confidence threshold',
        'Business hours management',
        'Post-chat CSAT survey',
        'GDPR compliant',
        'Persistent conversation history'
      ],
      metrics: { volume: '~50KB', delay: '0s', engagement: '3.2x' }
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'from-slate-600 to-slate-700',
      status: 'Production Ready',
      tagline: 'Professional email support with rich formatting',
      description: 'Full email helpdesk with threading, signatures, CC/BCC, and intelligent conversation matching.',
      keyFeatures: [
        'Inbound email-to-ticket conversion',
        'Rich text editor (TipTap-based)',
        'CC/BCC support with recipient badges',
        'Email signatures with merge fields',
        'Thread history tracking (RFC-compliant)',
        'Smart matching by email address',
        'Auto-reopens on new emails',
        'HTML & plain text support',
        'Resend API integration',
        'Subject line tracking'
      ],
      metrics: { threading: '100%', delivery: '99.9%', format: 'Rich' }
    },
    {
      name: 'WhatsApp Business',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-600',
      status: 'OAuth Connected',
      tagline: 'Reach 2+ billion WhatsApp users worldwide',
      description: 'OAuth 2.0 integration via Unipile API with real-time bidirectional sync and media support.',
      keyFeatures: [
        'OAuth 2.0 authentication',
        'Real-time message sync (bidirectional)',
        'Media support: images, videos, docs',
        'Read receipts & typing indicators',
        'WhatsApp Business API compliant',
        'Encrypted token storage',
        'Webhook handler for instant delivery',
        'Same unified interface',
        'Full conversation history',
        'No app switching required'
      ],
      metrics: { users: '2B+', sync: 'Real-time', media: 'Full' }
    },
    {
      name: 'Instagram DMs',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      status: 'OAuth Connected',
      tagline: 'Turn Instagram DMs into support conversations',
      description: 'Instagram Business Account integration with direct message support for social commerce.',
      keyFeatures: [
        'Instagram Business Account integration',
        'OAuth 2.0 authentication',
        'Direct message support (1-on-1)',
        'Media attachments (images, videos)',
        'Real-time sync',
        'Webhook instant notifications',
        'Product inquiry handling',
        'Social commerce support',
        'Influencer management',
        'Unified inbox integration'
      ],
      metrics: { commerce: 'Social', reach: 'Global', type: 'DMs' }
    },
    {
      name: 'LinkedIn Messages',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700',
      status: 'OAuth Connected',
      tagline: 'B2B support where your customers already are',
      description: 'LinkedIn Business Account integration perfect for B2B customer support and partnerships.',
      keyFeatures: [
        'LinkedIn Business Account integration',
        'OAuth 2.0 authentication',
        'Professional messaging',
        'Real-time sync',
        'Contact enrichment (profile data)',
        'B2B customer support',
        'Partnership inquiries',
        'Recruitment/HR communications',
        'Sales prospecting follow-up',
        'Enterprise-grade security'
      ],
      metrics: { focus: 'B2B', type: 'Professional', sync: 'Live' }
    },
    {
      name: 'Slack Notifications',
      icon: Hash,
      color: 'from-purple-600 to-purple-700',
      status: 'OAuth Connected',
      tagline: 'Keep your team in sync with Slack alerts',
      description: 'Internal notification channel that alerts your team about new conversations and mentions.',
      keyFeatures: [
        'New conversation alerts',
        'Mention notifications',
        'Ticket status updates',
        'Webhook status notifications',
        'Channel selection (configurable)',
        'Real-time sync',
        'Never miss a message',
        'Team coordination',
        'Instant alerts',
        'Internal collaboration'
      ],
      metrics: { type: 'Internal', speed: 'Instant', scope: 'Team' }
    }
  ];

  const unifiedFeatures = [
    {
      icon: Sparkles,
      title: 'AI across every channel',
      desc: 'Auto-responses, summaries, sentiment detection, confidence scoring—works everywhere',
      color: 'emerald'
    },
    {
      icon: Users,
      title: 'Intelligent routing',
      desc: 'Skill-based, load balancing, round robin—assign conversations automatically',
      color: 'blue'
    },
    {
      icon: MessageSquare,
      title: 'Canned responses',
      desc: 'Searchable templates work across all channels with keyboard shortcuts',
      color: 'purple'
    },
    {
      icon: Target,
      title: 'Customer profiles',
      desc: 'Unified view of all conversations, tickets, and history—regardless of channel',
      color: 'cyan'
    },
    {
      icon: Activity,
      title: 'Real-time sync',
      desc: 'Supabase Realtime ensures instant updates without polling',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Enterprise security',
      desc: 'Row-level security, data isolation, complete audit logging',
      color: 'red'
    }
  ];

  const channelBenefits = [
    { icon: '📥', label: 'Same inbox', desc: 'One interface for all channels' },
    { icon: '💬', label: 'Same workflow', desc: 'No retraining needed' },
    { icon: '🤖', label: 'Same AI', desc: 'Consistent intelligence everywhere' },
    { icon: '🎫', label: 'Same ticketing', desc: 'Convert any conversation' },
    { icon: '📊', label: 'Same analytics', desc: 'Unified performance tracking' },
    { icon: '⚡', label: 'Same speed', desc: 'Real-time across all channels' }
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
              <Globe className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span className="text-sm font-semibold text-emerald-800">6 Channels. 1 Inbox.</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Be everywhere your
              <br />
              customers are
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              WhatsApp, Instagram, LinkedIn, Email, Live Chat, Slack—all in one unified workspace.
              <br />
              No switching. No fragmentation. No chaos.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button className="group px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-semibold text-base inline-flex items-center gap-2 shadow-lg hover:shadow-xl">
                Connect Channels
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-200 font-semibold text-base border-2 border-slate-200">
                Start Free
              </button>
            </div>
          </div>

          {/* Animated Channel Hub */}
          <div className={`relative transition-all duration-1000 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse-glow"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 p-12 overflow-hidden">
              {/* Channel Icons Orbiting */}
              <div className="flex items-center justify-center gap-8 flex-wrap mb-8">
                {[
                  { icon: MessageSquare, name: 'Live Chat', color: 'from-cyan-500 to-blue-600', delay: '0s' },
                  { icon: Mail, name: 'Email', color: 'from-slate-600 to-slate-700', delay: '0.2s' },
                  { icon: MessageCircle, name: 'WhatsApp', color: 'from-green-500 to-emerald-600', delay: '0.4s' },
                  { icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-600', delay: '0.6s' },
                  { icon: Linkedin, name: 'LinkedIn', color: 'from-blue-600 to-blue-700', delay: '0.8s' },
                  { icon: Hash, name: 'Slack', color: 'from-purple-600 to-purple-700', delay: '1s' }
                ].map((channel, i) => (
                  <div
                    key={i}
                    className="group animate-float-channel"
                    style={{ animationDelay: channel.delay }}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 animate-scale-in`}
                      style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                    >
                      <channel.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    <p className="text-xs font-semibold text-slate-700 text-center mt-2">{channel.name}</p>
                  </div>
                ))}
              </div>

              {/* Center Hub */}
              <div className="text-center animate-pulse-glow-center" style={{ animationDelay: '1.2s' }}>
                <div className="inline-flex flex-col items-center gap-3 px-8 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-2xl animate-scale-in" style={{ animationDelay: '1.4s' }}>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 animate-bounce-subtle" />
                    <span>One Unified Inbox</span>
                  </div>
                  <div className="text-sm font-normal bg-white/20 px-3 py-1 rounded-lg">
                    All conversations. Zero switching.
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: '6 Channels', value: 'Active', color: 'emerald', delay: '1.6s' },
                  { label: 'OAuth 2.0', value: 'Secure', color: 'blue', delay: '1.8s' },
                  { label: 'Real-time', value: 'Sync', color: 'purple', delay: '2s' }
                ].map((stat, i) => {
                  const colorClasses = getColorClasses(stat.color);
                  return (
                    <div key={i} className={`bg-white rounded-xl p-4 text-center border ${colorClasses.border} animate-slide-in-up`} style={{ animationDelay: stat.delay }}>
                      <div className="text-xs text-slate-600 font-semibold mb-1">{stat.label}</div>
                      <div className={`text-lg font-black ${colorClasses.text}`}>{stat.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVE CHANNELS */}
      <section ref={channelsRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${channelsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              6 production-ready
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                channels
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Fully integrated. OAuth secured. Real-time synced.
            </p>
          </div>

          <div className="space-y-8">
            {activeChannels.map((channel, i) => (
              <div
                key={i}
                className={`group relative bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 border-2 border-slate-200 overflow-hidden ${
                  channelsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${channel.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="relative grid md:grid-cols-3 gap-8">
                  {/* Left: Icon & Info */}
                  <div>
                    <div className={`w-20 h-20 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6`}>
                      <channel.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-2xl font-black text-slate-900">{channel.name}</h3>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                        {channel.status}
                      </span>
                    </div>
                    
                    <p className="text-lg font-bold text-emerald-700 mb-3">{channel.tagline}</p>
                    <p className="text-slate-600 leading-relaxed mb-6">{channel.description}</p>
                    
                    {/* Metrics */}
                    <div className="space-y-2">
                      {Object.entries(channel.metrics).map(([key, value], j) => (
                        <div key={j} className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 capitalize">{key}</span>
                          <span className="font-bold text-slate-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Features Grid */}
                  <div className="md:col-span-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Key Features</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {channel.keyFeatures.map((feature, j) => (
                        <div key={j} className="flex items-start gap-2 group/item">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" strokeWidth={2.5} />
                          <span className="text-sm text-slate-700 leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNEL-AGNOSTIC FEATURES */}
      <section ref={featuresRef} className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full mb-6 border border-purple-200">
              <Sparkles className="w-5 h-5 text-purple-600 animate-pulse" />
              <span className="text-sm font-bold text-purple-800">Universal Features</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Every channel gets
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                the full platform
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AI, routing, templates, profiles, analytics—work exactly the same everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {unifiedFeatures.map((feature, i) => {
              const colorClasses = getColorClasses(feature.color);
              return (
                <div
                  key={i}
                  className={`group bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-slate-100 ${
                    featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
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

          {/* All Features Callout */}
          <div className={`mt-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border-2 border-purple-200 p-12 transition-all duration-1000 delay-600 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Additional Features Across All Channels</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Clock, label: 'SLA Management', desc: 'Due dates, priority tracking' },
                { icon: Eye, label: 'Audit Logging', desc: 'Complete activity trail' },
                { icon: Settings, label: 'Multi-tenant', desc: 'Enterprise-ready isolation' },
                { icon: Bell, label: 'Chat Transfers', desc: 'Between agents with notes' },
                { icon: Target, label: 'Ticket System', desc: 'Structured workflows' },
                { icon: Activity, label: 'CSAT Analytics', desc: 'Sentiment tracking' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <div className="font-bold text-slate-900 text-sm mb-1">{item.label}</div>
                    <div className="text-xs text-slate-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UNIFIED EXPERIENCE */}
      <section ref={unifiedRef} className="py-32 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 ${unifiedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              True omnichannel
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                not stitched together
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Most tools bolt channels together with plugins. Enorve integrates them natively.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channelBenefits.map((benefit, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl border-2 border-slate-200 p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  unifiedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4 animate-bounce-subtle" style={{ animationDelay: `${i * 0.2}s` }}>
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{benefit.label}</h3>
                <p className="text-sm text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Final Message */}
          <div className={`mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center shadow-2xl transition-all duration-1000 delay-600 ${unifiedVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h3 className="text-3xl font-black text-white mb-4">
              Every channel behaves like part of one unified product
            </h3>
            <p className="text-slate-300 text-lg mb-8">
              No retraining. No fragmentation. No chaos.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-semibold">OAuth 2.0 secured • Real-time sync • Enterprise ready</span>
            </div>
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
            Meet your customers
            <br />
            on their terms
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 mb-12 leading-relaxed">
            6 channels. 1 inbox. Zero switching.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="group px-10 py-5 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-200 font-bold text-lg inline-flex items-center gap-3 shadow-xl hover:shadow-2xl">
              Start Free Trial
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-200 font-bold text-lg border-2 border-white/20">
              Connect Channels
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            All channels included • No per-channel fees • 14-day free trial
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
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-channel {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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
        
        @keyframes pulse-glow-center {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
        
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
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
        
        .animate-slide-in-up {
          animation: slide-in-up 0.5s ease-out both;
        }
        
        .animate-float-channel {
          animation: float-channel 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-pulse-glow-center {
          animation: pulse-glow-center 2s ease-in-out infinite;
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