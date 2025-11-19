export default function FlowSection() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-8" style={{ letterSpacing: '-0.025em' }}>
            A workspace designed for flow.
          </h2>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Clear. Fast. Minimal.
          </p>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Enorve's visual language is designed so teams stay in rhythm —<br />
            with real-time updates, natural collaboration, and thoughtful details throughout.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-soft-xl overflow-hidden">
            <div className="grid grid-cols-12 h-[500px]">
              <div className="col-span-3 bg-gray-50 border-r border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-semibold text-gray-900">Conversations</h3>
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border transition-colors cursor-pointer ${
                        i === 1
                          ? 'bg-white border-gray-300 shadow-sm'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <div className="h-2 bg-gray-300 rounded w-3/4 mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-6 bg-white p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                    <div>
                      <div className="h-2 bg-gray-300 rounded w-32 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gray-100 rounded-lg"></div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 space-y-4 overflow-hidden">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 max-w-md">
                    <div className="h-2 bg-gray-300 rounded w-full mb-2"></div>
                    <div className="h-2 bg-gray-300 rounded w-5/6 mb-2"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>

                  <div className="bg-blue-600 text-white rounded-lg p-4 ml-auto max-w-md">
                    <div className="h-2 bg-blue-500 rounded w-full mb-2"></div>
                    <div className="h-2 bg-blue-500 rounded w-4/6"></div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 max-w-md">
                    <div className="h-2 bg-gray-300 rounded w-5/6 mb-2"></div>
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200 max-w-lg">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 bg-purple-500 rounded flex-shrink-0 mt-0.5"></div>
                      <div className="flex-1">
                        <div className="h-2 bg-purple-300 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-purple-200 rounded w-full mb-2"></div>
                        <div className="h-2 bg-purple-200 rounded w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="h-10 bg-gray-100 rounded-lg"></div>
                </div>
              </div>

              <div className="col-span-3 bg-gray-50 border-l border-gray-200 p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Details</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i}>
                      <div className="h-2 bg-gray-300 rounded w-20 mb-2"></div>
                      <div className="h-2 bg-gray-200 rounded w-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
