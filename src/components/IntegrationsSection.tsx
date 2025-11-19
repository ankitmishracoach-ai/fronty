import { Slack, ShoppingBag, Zap, Grid, CreditCard, Table } from 'lucide-react';

export default function IntegrationsSection() {
  const integrations = [
    { name: 'Slack', icon: Slack, description: 'Team notifications' },
    { name: 'Shopify', icon: ShoppingBag, description: 'Order context' },
    { name: 'HubSpot', icon: Grid, description: 'CRM data' },
    { name: 'Stripe', icon: CreditCard, description: 'Billing info' },
    { name: 'Zapier', icon: Zap, description: 'Custom workflows' },
    { name: 'Airtable', icon: Table, description: 'Data sync' }
  ];

  return (
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight" style={{ letterSpacing: '-0.035em' }}>
            Connect Enorve to your workflow.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The tools your team already works with — now integrated directly into your support stack.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className="group bg-slate-50 rounded-2xl border-2 border-slate-200 p-8 hover:bg-white hover:border-slate-900 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <integration.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{integration.name}</h3>
                  <p className="text-sm text-slate-600">{integration.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 mb-6">
            Plus hundreds more through Zapier and our open API.
          </p>
          <button className="px-8 py-4 bg-slate-100 text-slate-900 rounded-xl hover:bg-slate-200 transition-all border-2 border-slate-200 font-semibold">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  );
}
