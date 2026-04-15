export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-navy flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-brand-rose border-t-transparent rounded-full animate-spin" />
        <span className="font-accent text-white/40 text-sm uppercase tracking-widest">Loading</span>
      </div>
    </div>
  );
}
