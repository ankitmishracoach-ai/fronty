export default function SocialProof() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white border-y-2 border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-lg font-bold text-slate-600 mb-12">
            Trusted by fast-moving teams.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-40 h-20 bg-slate-200 rounded-xl opacity-50 hover:opacity-70 transition-opacity"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
