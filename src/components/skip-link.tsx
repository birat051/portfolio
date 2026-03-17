export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-0 z-[9999] -translate-y-full rounded-b-md bg-tertiary px-4 py-3 font-medium text-tertiary-foreground outline-none transition-transform focus:translate-y-0 focus:ring-2 focus:ring-tertiary-foreground focus:ring-offset-2 focus:ring-offset-primary"
    >
      Skip to main content
    </a>
  );
}
