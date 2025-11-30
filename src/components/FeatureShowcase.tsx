import { Sparkles, Zap, Brain, TrendingUp } from 'lucide-react';

export default function FeatureShowcase() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Responses',
      description: 'Intelligent suggestions that learn from your team'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Handle thousands of conversations effortlessly'
    },
    {
      icon: Brain,
      title: 'Smart Automation',
      description: 'Workflows that adapt to your needs'
    },
    {
      icon: TrendingUp,
      title: 'Deep Analytics',
      description: 'Insights that drive real growth'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything you need
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful features that work together seamlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg border border-slate-200">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
