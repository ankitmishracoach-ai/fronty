import { Link } from 'lucide-react';

export default function TicketsSection() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-8" style={{ letterSpacing: '-0.025em' }}>
              When conversations become projects.
            </h2>
            <p className="text-2xl text-slate-600 mb-8 leading-relaxed font-normal">
              Tickets without the fuss.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed font-normal">
              Some issues need more than a reply.<br /><br />
              Enorve's ticketing system adds structure — ownership, statuses, SLAs —<br />
              while keeping the customer conversation open and connected.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-soft-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                    #
                  </div>
                  <span className="text-sm font-semibold text-slate-900">TKT-2847</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link className="w-4 h-4 text-slate-400" />
                  <span className="text-xs font-medium text-slate-500">Linked to conversation</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Title</div>
                  <div className="h-2 bg-slate-300 rounded w-3/4"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Status</div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-amber-100 text-amber-900 text-xs font-semibold rounded-lg">
                      In Progress
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Priority</div>
                    <div className="inline-flex items-center px-3 py-1.5 bg-orange-100 text-orange-900 text-xs font-semibold rounded-lg">
                      High
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Assigned to</div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full"></div>
                    <div className="h-2 bg-slate-300 rounded w-24"></div>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Due date</div>
                  <div className="h-2 bg-slate-300 rounded w-32"></div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Description</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-slate-200 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                    <div className="h-2 bg-slate-200 rounded w-4/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
