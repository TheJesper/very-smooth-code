export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-base02 mb-2">
            Very Smooth Code
          </h1>
          <p className="text-lg text-base00">
            Developer tools hub - smooth as butter
          </p>
        </header>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionCard
            title="Tools"
            description="CSS helpers, color converters, mini utilities"
            href="/tools"
            emoji="🔧"
          />
          <SectionCard
            title="Snippets"
            description="Ready-to-use code patterns"
            href="/snippets"
            emoji="📝"
          />
          <SectionCard
            title="Cheatsheets"
            description="Quick reference guides"
            href="/cheatsheets"
            emoji="📋"
          />
          <SectionCard
            title="Blog"
            description="Articles and curated content"
            href="/blog"
            emoji="✍️"
          />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-base1 text-sm">
          <p>Very Smooth Code - A developer hub by Conzeon</p>
        </footer>
      </div>
    </main>
  );
}

function SectionCard({
  title,
  description,
  href,
  emoji,
}: {
  title: string;
  description: string;
  href: string;
  emoji: string;
}) {
  return (
    <a
      href={href}
      className="block p-6 bg-base2 rounded-lg border border-base1/20 hover:border-blue transition-colors"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{emoji}</span>
        <h2 className="text-xl font-semibold text-base02">{title}</h2>
      </div>
      <p className="text-base00">{description}</p>
    </a>
  );
}
