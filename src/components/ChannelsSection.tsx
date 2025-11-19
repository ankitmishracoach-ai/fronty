import { MessageCircle, Instagram, Linkedin, Mail, MessageSquare, Hash } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';

export default function ChannelsSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const channels = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-600',
      glowColor: 'rgba(34, 197, 94, 0.4)',
      description: 'Instant messaging'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      color: 'from-pink-500 to-purple-600',
      glowColor: 'rgba(236, 72, 153, 0.4)',
      description: 'DMs & comments'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'from-blue-600 to-blue-700',
      glowColor: 'rgba(37, 99, 235, 0.4)',
      description: 'Professional chat'
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'from-slate-600 to-slate-700',
      glowColor: 'rgba(71, 85, 105, 0.4)',
      description: 'Traditional support'
    },
    {
      name: 'Webchat',
      icon: MessageSquare,
      color: 'from-cyan-500 to-blue-600',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      description: 'Live chat widget'
    },
    {
      name: 'Slack',
      icon: Hash,
      color: 'from-purple-600 to-purple-700',
      glowColor: 'rgba(147, 51, 234, 0.4)',
      description: 'Team channels'
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ letterSpacing: '-0.035em' }}>
            Be where your customers already are.
          </h2>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            One inbox for every conversation.<br />
            No switching tabs. No integrations required.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {channels.map((channel, i) => (
            <div
              key={i}
              className={`group relative bg-white rounded-2xl border-2 border-slate-200 p-8 hover:border-slate-300 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-3 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{
                  background: hoveredIndex === i ? channel.glowColor : 'transparent',
                }}
              ></div>

              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}
                  style={{
                    boxShadow: hoveredIndex === i
                      ? `0 10px 40px -10px ${channel.glowColor}, 0 0 20px ${channel.glowColor}`
                      : undefined
                  }}
                >
                  <channel.icon className="w-9 h-9 text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div className="relative text-center">
                <span className="text-sm font-bold text-slate-900 block mb-1">{channel.name}</span>
                <span className={`text-xs text-slate-500 font-medium transition-all duration-300 ${
                  hoveredIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}>
                  {channel.description}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-slate-900 rounded-3xl border-2 border-slate-800 p-12 shadow-2xl mb-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-white leading-relaxed font-bold mb-4">
              No switching tabs. No plugins. No hacks.<br />
              Every channel just works.
            </p>
          </div>
        </div>

        <div className={`bg-white rounded-3xl border-2 border-slate-200 p-12 shadow-xl hover:shadow-2xl transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
              <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-bold text-emerald-800">Complete Coverage</span>
            </div>
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              Every message from every channel flows into one unified workspace.<br />
              Your team sees complete context without hunting across platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
