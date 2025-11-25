import { Sparkles, Zap, Brain, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Responses',
      description: 'Intelligent suggestions that learn from your team',
      color: 'from-blue-500 to-purple-500',
      stats: [
        { label: 'Response Time', value: '60%', suffix: 'faster' },
        { label: 'Accuracy', value: '95%', suffix: '+' },
      ]
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Handle thousands of conversations effortlessly',
      color: 'from-yellow-500 to-orange-500',
      stats: [
        { label: 'Load Time', value: '<100ms', suffix: '' },
        { label: 'Uptime', value: '99.9%', suffix: '' },
      ]
    },
    {
      icon: Brain,
      title: 'Smart Automation',
      description: 'Workflows that adapt to your needs',
      color: 'from-cyan-500 to-blue-500',
      stats: [
        { label: 'Tasks Automated', value: '80%', suffix: '' },
        { label: 'Time Saved', value: '15h', suffix: '/week' },
      ]
    },
    {
      icon: TrendingUp,
      title: 'Deep Analytics',
      description: 'Insights that drive real growth',
      color: 'from-green-500 to-emerald-500',
      stats: [
        { label: 'CSAT Score', value: '4.8', suffix: '/5' },
        { label: 'Resolution', value: '40%', suffix: 'faster' },
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:96px_96px]"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Everything you need,
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              nothing you don't
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Powerful features that work together seamlessly to transform your support experience
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;

            return (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`relative p-6 rounded-2xl border transition-all duration-500 text-left ${
                  isActive
                    ? 'bg-white border-slate-300 shadow-xl scale-105'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>

                {isActive && (
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl -z-10 animate-pulse`}></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 p-12 overflow-hidden shadow-xl">
          <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-5 transition-all duration-1000`}></div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${features[activeFeature].color} mb-6 shadow-lg`}>
                {(() => {
                  const Icon = features[activeFeature].icon;
                  return <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />;
                })()}
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-4">{features[activeFeature].title}</h3>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">{features[activeFeature].description}</p>

              <div className="grid grid-cols-2 gap-6">
                {features[activeFeature].stats.map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-md">
                    <div className="text-4xl font-black text-slate-900 mb-2">
                      {stat.value}<span className="text-2xl text-slate-500">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${features[activeFeature].color} opacity-30 blur-3xl`}></div>
              <div className="relative bg-white rounded-2xl border-2 border-slate-200 p-8 space-y-4 shadow-xl">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-xl p-4 border border-slate-200 animate-fade-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${features[activeFeature].color}`}></div>
                      <div className="h-2 bg-slate-200 rounded-full flex-1" style={{ width: `${90 - i * 15}%` }}></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-slate-100 rounded-full" style={{ width: `${80 - i * 10}%` }}></div>
                      <div className="h-2 bg-slate-100 rounded-full" style={{ width: `${60 - i * 5}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeFeature === index ? 'w-12 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
