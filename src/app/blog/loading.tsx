export default function BlogLoading() {
  return (
    <main className="pt-20 min-h-screen bg-brand-navy">
      {/* Hero skeleton */}
      <section className="py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4 animate-pulse">
          <div className="h-4 w-40 bg-white/10 rounded-full mx-auto" />
          <div className="h-12 w-80 bg-white/10 rounded-xl mx-auto" />
          <div className="h-6 w-96 bg-white/10 rounded-lg mx-auto" />
        </div>
      </section>
      {/* Filter skeleton */}
      <section className="border-b border-white/10 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex gap-2 animate-pulse">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-9 w-28 bg-white/10 rounded-full flex-shrink-0" />
          ))}
        </div>
      </section>
      {/* Cards skeleton */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 animate-pulse">
              <div className="aspect-[16/9] bg-white/10" />
              <div className="p-6 space-y-3">
                <div className="h-5 w-24 bg-white/10 rounded-full" />
                <div className="h-6 w-full bg-white/10 rounded-lg" />
                <div className="h-4 w-5/6 bg-white/10 rounded-lg" />
                <div className="h-4 w-4/6 bg-white/10 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
