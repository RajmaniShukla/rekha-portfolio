const tags = [
  "Sales Strategy",
  "Business Development",
  "Influencer Marketing",
  "Team Leadership",
  "Digital Marketing",
  "CRM",
  "Client Relations",
  "B2B · B2C",
  "Brand Collaborations",
  "Inventory Management",
  "Telemarketing",
  "6 Languages",
];

export default function MarqueeStrip() {
  return (
    <div className="bg-brand-rose py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...tags, ...tags].map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-6 font-accent font-semibold text-white text-sm uppercase tracking-widest"
          >
            {tag}
            <span className="text-brand-gold text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
