import { ShoppingCart, Briefcase, GraduationCap, Package, Smartphone } from 'lucide-react';

export default function UseCaseSection() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      subtitle: 'D2C, Fashion, Electronics',
      description: 'Order tracking, refunds, Shiprocket, Shopify, WhatsApp.'
    },
    {
      icon: Briefcase,
      title: 'SaaS',
      subtitle: '',
      description: 'User onboarding, technical support, ticket automation.'
    },
    {
      icon: GraduationCap,
      title: 'EdTech',
      subtitle: '',
      description: 'Lead qualification, student issue handling, WhatsApp classes support.'
    },
    {
      icon: Package,
      title: 'Logistics',
      subtitle: '',
      description: 'Shipment queries, delivery escalations, real-time updates.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      subtitle: '',
      description: 'App feedback, issue reporting, triaging.'
    }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Designed for every team. Optimized for your use case.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-slate-200 p-8"
              >
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {useCase.title}
                  </h3>
                  {useCase.subtitle && (
                    <p className="text-sm text-slate-500 mt-1">
                      {useCase.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-slate-600">
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
