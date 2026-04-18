export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-brand-rose/30 border-t-brand-rose animate-spin" />
        <p className="font-accent text-white/40 text-sm uppercase tracking-widest">Loading...</p>
      </div>
    </div>
  );
}
