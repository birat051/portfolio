import Link from "next/link";

const navLinks = [
  { href: "#hero", label: "Hero" },
  { href: "#problems", label: "What problems I solve" },
  { href: "#case-studies", label: "Engineering case studies" },
  { href: "#systems", label: "Systems I designed" },
  { href: "#oss", label: "OSS / Experiments" },
  { href: "#tools", label: "Small tools" },
  { href: "#demos", label: "Demos" },
  { href: "#playgrounds", label: "Playgrounds" },
  { href: "#ai", label: "AI" },
] as const;

const linkClass =
  "text-secondary-foreground underline-offset-4 outline-none hover:text-primary-foreground hover:underline focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded";

export function Header() {
  return (
    <header className="border-b border-secondary bg-primary">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-12 py-4 sm:gap-6">
        <Link
          href="/"
          className="font-semibold text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded"
        >
          Birat Bhattacharjee
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex list-none flex-wrap items-center justify-end gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
