import { TrendingUp, Users, Clock, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StatsSection() {
  const stats = [
    { icon: Users, label: 'Active Users', value: 50000, suffix: '+', color: 'from-blue-500 to-purple-500' },
    { icon: Clock, label: 'Hours Saved', value: 100000, suffix: '+', color: 'from-cyan-500 to-blue-500' },
    { icon: Star, label: 'Satisfaction Rate', value: 98, suffix: '%', color: 'from-yellow-500 to-orange-500' },
    { icon: TrendingUp, label: 'Response Time', value: 60, suffix: '% faster', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Numbers that
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              speak for themselves
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <CountUpCard key={index} stat={stat} icon={Icon} delay={index * 100} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CountUpCard({ stat, icon: Icon, delay }: any) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(increment * currentStep), stat.value));
      } else {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [hasStarted, stat.value]);

  return (
    <div className="group relative bg-white rounded-2xl border-2 border-slate-200 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500">
      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500 -z-10`}></div>

      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg`}>
        <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
      </div>

      <div className="text-5xl font-black text-slate-900 mb-2 tabular-nums">
        {count.toLocaleString()}<span className="text-3xl text-slate-500">{stat.suffix}</span>
      </div>
      <div className="text-sm text-slate-600 font-medium uppercase tracking-wider">{stat.label}</div>
    </div>
  );
}
