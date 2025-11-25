import { ShoppingCart, Briefcase, GraduationCap, Package, Smartphone } from 'lucide-react';

export default function UseCaseSection() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      subtitle: 'D2C, Fashion, Electronics',
      description: 'Order tracking, refunds, Shiprocket, Shopify, WhatsApp.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'SaaS',
      subtitle: '',
      description: 'User onboarding, technical support, ticket automation.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GraduationCap,
      title: 'EdTech',
      subtitle: '',
      description: 'Lead qualification, student issue handling, WhatsApp classes support.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Package,
      title: 'Logistics',
      subtitle: '',
      description: 'Shipment queries, delivery escalations, real-time updates.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      subtitle: '',
      description: 'App feedback, issue reporting, triaging.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:96px_96px]"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-5xl">⭐</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Designed for every team.
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Optimized for your use case.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border-2 border-slate-200 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${useCase.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-500 -z-10`}></div>

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${useCase.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-black text-slate-900 mb-1">
                    {useCase.title}
                  </h3>
                  {useCase.subtitle && (
                    <p className="text-sm text-slate-500 font-medium">
                      {useCase.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-slate-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
