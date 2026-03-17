import { ScrollReveal } from "@/components/scroll-reveal";

const sectionClass = "border-t border-secondary py-12";
const headingClass =
  "text-xl font-semibold text-primary-foreground sm:text-2xl";

type ContentSectionProps = Readonly<{
  id: string;
  headingId: string;
  title: string;
  content: string[] | null;
}>;

export function ContentSection({
  id,
  headingId,
  title,
  content,
}: ContentSectionProps) {
  return (
    <section id={id} aria-labelledby={headingId} className={sectionClass}>
      <ScrollReveal className="mx-auto max-w-5xl">
        <h2 id={headingId} className={headingClass}>
          {title}
        </h2>
        {content ? (
          <div className="mt-4 space-y-4 break-words text-secondary-foreground">
            {content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="mt-3 break-words text-secondary-foreground">
            Content coming soon.
          </p>
        )}
      </ScrollReveal>
    </section>
  );
}

