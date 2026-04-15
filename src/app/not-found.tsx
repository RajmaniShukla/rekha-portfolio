import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-navy flex items-center justify-center text-center px-4">
      <div className="space-y-6">
        <div className="font-display text-8xl font-bold text-brand-rose">404</div>
        <h1 className="font-display text-3xl font-bold text-white">Page Not Found</h1>
        <p className="text-white/50 max-w-md">
          The page you're looking for doesn't exist — or maybe it moved.
        </p>
        <Link href="/" className="btn-gold">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
