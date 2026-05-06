import type { ExperienceTimelineItem, ProjectItem } from "@/components/types";

export type Translations = {
  hero: {
    tagline: string;
    intro: string;
    /** Task 45 — visible line below `intro` (city, country). */
    location: string;
    /** Task 46 — residence / work permit note below `location`. */
    visaStatus: string;
    /**
     * Task 22.6 — screen-reader-only context after the plain name in `<h1>` (decorative CLI
     * is `aria-hidden`); avoids `aria-live` spam from per-character typing.
     */
    nameHeadingSrNote: string;
  };
  sectionTitles: Record<string, string>;
  problemsContent: string[];
  experienceTimeline: ExperienceTimelineItem[];
  experienceUi: {
    /** Task **28.3** — Visible subheading above related-work chip links. */
    relatedWorkHeading: string;
    /**
     * Task **28.3** — External / new-tab hint (match tone with **`caseStudiesUi.opensInNewTab`**;
     * may be concatenated in **`aria-label`** or **`sr-only`** next to chips).
     */
    opensInNewTab: string;
    /** Visible label on experience highlight toggle when collapsed (>3 bullets). */
    readMoreHighlights: string;
    /** Visible label on experience highlight toggle when expanded. */
    readLessHighlights: string;
  };
  projectItems: ProjectItem[];
  projectsUi: {
    opensInNewTab: string;
    projectsListAriaLabel: string;
    sourceCodeAriaLabel: string;
    /** Visible label above per-project **`skills`** chips. */
    coreSkillsHeading: string;
  };
  comingSoon: string;
  footer: string;
  /** Task 2.2 / 2.6 — Landmarks, skip link, lists, theme/language, hero socials. */
  a11y: {
    sitePreferencesHeaderAriaLabel: string;
    sectionNavigationAriaLabel: string;
    siteFooterAriaLabel: string;
    /** Visible skip-link text + accessible name. */
    skipToMainContent: string;
    socialLinks: string;
    githubProfile: string;
    mediumProfile: string;
    linkedInProfile: string;
    experienceTimelineList: string;
    experienceSkillsList: string;
    /** Placeholders `{role}`, `{company}`, `{dateRange}`. */
    experienceJobRowAriaTemplate: string;
    /** Task **28.3** — `aria-label` on the list of related-work chip links for one job. */
    experienceRelatedWorkListAriaLabel: string;
    /** Task **28.3** — Placeholders `{label}` (chip text). */
    experienceRelatedWorkLinkAriaTemplate: string;
    /** Task **28.3** — Placeholders `{company}` (employer name for company-site link). */
    experienceCompanySiteAriaTemplate: string;
    themeSelection: string;
    themeLightCurrent: string;
    themeLightSwitch: string;
    themeDarkCurrent: string;
    themeDarkSwitch: string;
    languageSelection: string;
    languageEnCurrent: string;
    languageEnSwitch: string;
    languageSvCurrent: string;
    languageSvSwitch: string;
  };
  /** Task 23.4 — Engineering Case Studies section (JSON-driven blogs). */
  caseStudiesUi: {
    opensInNewTab: string;
    emptyPlaceholder: string;
    tagsListAriaLabel: string;
    /** Task 2.6 — `aria-label` on the list of article cards. */
    articlesListAriaLabel: string;
  };
};

const en: Translations = {
  hero: {
    tagline: "Real-time web experiences that scale.",
    intro: "Frontend focused full-stack developer",
    location: "Gothenburg, Sweden",
    visaStatus:
      "Dependant visa with residential and work permit (valid till Jan-2028)",
    nameHeadingSrNote:
      " Decorative terminal: the animated name cycles through English, Swedish, Hindi, Assamese, and Bengali once, then stays in English. Hover pauses; moving the pointer away replays. With reduced motion, only a static name is shown.",
  },
  sectionTitles: {
    problems: "What problems I solve",
    experience: "Experience",
    projects: "Projects",
    "case-studies": "Engineering Case Studies",
    demos: "Demos",
    ai: "AI",
  },
  problemsContent: [
    "Frontend engineer with 6 years of experience building products where the UI carries real weight: real-time pipelines, AI interfaces, high-frequency trading tools. I've shipped an AI clinical assistant used daily by 14,000+ doctors, cut transcription latency by 80% through browser-side audio streaming, and helped a fintech maintain sub-100ms event delivery under peak load.",
    "Most of my work sits at the intersection of performance and product velocity, making things faster for users and making the next feature easier to ship. I've gone further down the stack, building microservices in Go and Node.js and shipping cloud-native infrastructure that holds up under real load.",
    "I collaborate closely with product and design to get from idea to production, and leave codebases a little easier to work with than I found them.",
  ],
  experienceTimeline: [
    {
      role: "Senior Full-Stack Developer",
      company: "Healthplix",
      location: "Bengaluru",
      dateRange: "March 2024 – January 2026",
      intro:
        "India's largest EMR platform, serving 14,000+ doctors across 370+ cities. The work centred on HALO, an AI clinical assistant built from scoping through release. Most of the challenges here were around user experience and reliability - real-time audio pipelines, performance optimisation, and building systems that let the product team move without engineering bottlenecks.",
      highlights: [
        "Delivered an AI clinical assistant now used daily by 14,000+ doctors by leading frontend development of HALO from scoping through release, collaborating closely with product and design across the full lifecycle.",
        "Reduced transcription latency by 80% (10s → 2s) by building a real-time audio streaming pipeline using WebSockets and Web Workers to process clinical audio mid-consultation.",
        "Cut summary processing time by 60% by leveraging SSE to stream non-critical data progressively including medicine suggestions, lab reports, and conversation highlights, with a regenerate fallback.",
        "Improved usability for doctors on low-bandwidth connections by optimising asset delivery and rendering, raising Lighthouse score from 80 → 93.",
        "Enabled the product team to ship new clinical templates independently by designing a JSON-driven template system, reducing time-to-market from ~3 days to zero.",
        "Unlocked onboarding of security-compliant hospitals and drove new customer acquisition by engineering a secure attachment microservice in Go handling 2,000+ RPM on AWS with MySQL and Kafka.",
      ],
      skills: [
        "React",
        "TypeScript",
        "Zustand",
        "WebSockets",
        "Node.js",
        "Go",
        "AWS",
        "Kafka",
      ],
    },
    {
      role: "Lead Full-Stack Developer",
      company: "MPSC Inc.",
      location: "Remote",
      dateRange: "March 2022 – February 2024",
      intro:
        "An early-stage fintech building communication infrastructure for trading platforms. The focus was on the real-time experience end-to-end, frontend interfaces handling high-frequency interactions, backend services for conference management and payments. Reliability was the core constraint, and most of the work was about making the system predictable under load.",
      highlights: [
        "Unlocked onboarding of 3 enterprise clients by orchestrating scalable conferencing infrastructure on Kubernetes and SIP nodes over auto scaling groups.",
        "Kept the real-time experience stable and predictable under peak load by implementing SSE-based event streaming with Web Workers, maintaining 30–80ms average delivery latency.",
        "Reduced call drop rate by 25% by redesigning connection state management and reconnection flows, minimising user-facing disruptions during live trading sessions.",
        "Secured frontend-to-backend authentication flows for both machine-to-machine and client-facing paths by integrating Auth0 with OAuth 2.0 / OIDC.",
        "Increased licence conversion by 50% by building out frontend payment flows and integrating with backend conference management APIs.",
        "Improved developer onboarding experience by creating Hoot.MX, a documentation tool exposing an OpenAPI Spec to promote a developer-first platform.",
      ],
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Kubernetes",
        "SSE",
        "Auth0",
        "Node.js",
        "AWS",
      ],
    },
    {
      role: "Software Developer - II",
      company: "Hitachi Vantara",
      location: "Hyderabad",
      dateRange: "June 2019 – September 2021",
      intro:
        "A global enterprise technology company, working on internal tooling used across the organisation. The focus was on frontend quality and accessibility, making the product usable for a broader range of users, alongside backend query optimisation for manufacturing workflows.",
      highlights: [
        "Enabled a significantly broader user base by raising Hitachi One Dash accessibility score from 10 → 80, applying WCAG principles across the frontend.",
        "Improved responsiveness of Hitachi One Dash by building new React components with efficient rendering strategies and integrating REST APIs with caching.",
        "Reduced change order processing time by optimising SQL queries and writing Java code to execute queries, validate statuses, and enable live checks via multi-threading.",
      ],
      skills: ["React", "JavaScript", "Redux", "Java", "SQL", "REST", "WCAG"],
    },
  ],
  experienceUi: {
    relatedWorkHeading: "Related work",
    opensInNewTab: "(opens in a new tab)",
    readMoreHighlights: "Read more",
    readLessHighlights: "Read less",
  },
  projectItems: [
    {
      title: "Ekko",
      subtitle: "Open-source, end-to-end encrypted messaging platform",
      url: "https://ekko.biratbhattacharjee.com",
      sourceUrl: "https://github.com/birat051/messaging-system",
      highlights: [
        "Designed for horizontal scaling using stateless services and message fan-out architecture.",
        "Load tested at 10k concurrent users on AWS, achieving 45ms p95 latency and 100% message delivery.",
        "E2EE with AES-256-GCM and per-device keys; server stores only ciphertext.",
      ],
      skills: [
        "React",
        "Node.js",
        "Express",
        "TypeScript",
        "Mongo",
        "AWS",
        "Redis",
        "RabbitMQ",
      ],
    },
  ],
  projectsUi: {
    opensInNewTab: "(opens in a new tab)",
    projectsListAriaLabel: "Projects",
    sourceCodeAriaLabel: "View Ekko source code on GitHub (opens in a new tab)",
    coreSkillsHeading: "Core skills",
  },
  comingSoon: "Content coming soon.",
  footer: "Birat Bhattacharjee © ",
  a11y: {
    sitePreferencesHeaderAriaLabel: "Site preferences: theme and language",
    sectionNavigationAriaLabel: "Section navigation",
    siteFooterAriaLabel: "Site footer",
    skipToMainContent: "Skip to main content",
    socialLinks: "Social links",
    githubProfile: "GitHub profile",
    mediumProfile: "Medium profile",
    linkedInProfile: "LinkedIn profile",
    experienceTimelineList: "Work experience timeline",
    experienceSkillsList: "Technologies and skills",
    experienceJobRowAriaTemplate: "{role} at {company}, {dateRange}",
    experienceRelatedWorkListAriaLabel: "Related work links",
    experienceRelatedWorkLinkAriaTemplate: "{label} (opens in a new tab)",
    experienceCompanySiteAriaTemplate: "{company} website (opens in a new tab)",
    themeSelection: "Theme selection",
    themeLightCurrent: "Light mode, current theme",
    themeLightSwitch: "Switch to light mode",
    themeDarkCurrent: "Dark mode, current theme",
    themeDarkSwitch: "Switch to dark mode",
    languageSelection: "Language selection",
    languageEnCurrent: "English, current language",
    languageEnSwitch: "Switch to English",
    languageSvCurrent: "Swedish, current language",
    languageSvSwitch: "Switch to Swedish",
  },
  caseStudiesUi: {
    opensInNewTab: "(opens in a new tab)",
    emptyPlaceholder:
      "No case studies listed yet. Add entries to src/data/case-studies-blogs.json.",
    tagsListAriaLabel: "Article tags",
    articlesListAriaLabel: "Engineering case study articles",
  },
};

const sv: Translations = {
  hero: {
    tagline: "Realtidswebbupplevelser som skalar.",
    intro: "Frontend-fokuserad fullstackutvecklare",
    location: "Göteborg, Sverige",
    visaStatus:
      "Anhörigvisa med uppehålls- och arbetstillstånd (giltigt till jan-2028)",
    nameHeadingSrNote:
      " Dekorativ terminal: det animerade namnet visas på engelska, svenska, hindi, assamesiska och bengali en gång och stannar sedan på engelska. Hovring pausar; när pekaren lämnar rutan spelas animationen om. Vid nedsatt rörelse visas bara ett statiskt namn.",
  },
  sectionTitles: {
    problems: "Vilka problem jag löser",
    experience: "Erfarenhet",
    projects: "Projekt",
    "case-studies": "Tekniska fallstudier",
    demos: "Demonstrationer",
    ai: "AI",
  },
  problemsContent: [
    "Frontendingenjör med 6 års erfarenhet av att bygga produkter där gränssnittet bär verklig tyngd: realtidsflöden, AI-gränssnitt och verktyg för högfrekvent handel. Jag har levererat en AI-driven klinisk assistent som används dagligen av över 14 000 läkare, minskat transkriptionslatens med 80 % genom ljudströmning i webbläsaren och hjälpt ett fintechföretag att hålla händelseleverans under 100 ms vid toppbelastning.",
    "Det mesta av mitt arbete ligger i skärningspunkten mellan prestanda och produktens leveranstakt – snabbare för användarna och enklare att få nästa funktion i produktion. Jag har gått längre ner i stacken, byggt mikrotjänster i Go och Node.js och levererat molnnativ infrastruktur som håller under verklig belastning.",
    "Jag samarbetar nära med produkt och design för att gå från idé till produktion och lämnar kodbaser lite enklare att arbeta i än jag fann dem.",
  ],
  experienceTimeline: [
    {
      role: "Senior fullstackutvecklare",
      company: "Healthplix",
      location: "Bengaluru",
      dateRange: "mars 2024 – januari 2026",
      intro:
        "Indiens största EMR-plattform som betjänar över 14 000 läkare i över 370 städer. Arbetet kretsade kring HALO, en AI-driven klinisk assistent som byggdes från scope till release. Utmaningarna handlade främst om användarupplevelse och tillförlitlighet – realtidsljud, prestandaoptimering och system som låter produktteamet röra sig framåt utan flaskhalsar i utvecklingen.",
      highlights: [
        "Levererade en AI-driven klinisk assistent som nu används dagligen av över 14 000 läkare genom att leda frontendutvecklingen av HALO från scope till release, i nära samarbete med produkt och design genom hela livscykeln.",
        "Minskade transkriptionslatensen med 80 % (10 s → 2 s) genom att bygga en realtidsljudström med WebSockets och Web Workers för att bearbeta kliniskt ljud under pågående konsultation.",
        "Kortade bearbetningstiden för sammanfattningar med 60 % genom att använda SSE för att strömma icke-kritisk data progressivt — inklusive läkemedelsförslag, labbrapporter och konversationens höjdpunkter — med fallback för omgenerering.",
        "Förbättrade användbarheten för läkare med begränsad bandbredd genom att optimera leverans och rendering av tillgångar och höja Lighthouse-poängen från 80 till 93.",
        "Möjliggjorde för produktteamet att leverera nya kliniska mallar självständigt genom att designa ett JSON-drivet mallsystem och korta time-to-market från ~3 dagar till noll.",
        "Möjliggjorde onboarding av säkerhetsklassade sjukhus och drev ny kundanskaffning genom att utveckla en säker bilagemikrotjänst i Go med 2 000+ RPM på AWS med MySQL och Kafka.",
      ],
      skills: [
        "React",
        "TypeScript",
        "Zustand",
        "WebSockets",
        "Node.js",
        "Go",
        "AWS",
        "Kafka",
      ],
    },
    {
      role: "Lead fullstackutvecklare",
      company: "MPSC Inc.",
      location: "Distans",
      dateRange: "mars 2022 – februari 2024",
      intro:
        "En fintech i tidig fas som bygger kommunikationsinfrastruktur för handelsplattformar. Fokus låg på realtidsupplevelsen från början till slut: gränssnitt som hanterade högfrekventa interaktioner och backend-tjänster för konferenshantering och betalningar. Tillförlitligheten var den avgörande begränsningen, och det mesta av arbetet handlade om att göra systemet förutsägbart under last.",
      highlights: [
        "Låste upp onboarding av tre företagskunder genom att orkestrera skalbar konferensinfrastruktur på Kubernetes och SIP-noder i autoscaling-grupper.",
        "Höll realtidsupplevelsen stabil och förutsägbar vid topplast med SSE-baserad händelseströmning och Web Workers med i genomsnitt 30–80 ms leveranslatens.",
        "Minskade tappade samtal med 25 % genom omdesign av anslutningsstatus och återanslutningsflöden, vilket minimerade störningar för användarna under livehandel.",
        "Säkrade autentiseringsflöden från frontend till backend för både maskin-till-maskin och klientvända vägar genom att integrera Auth0 med OAuth 2.0 / OIDC.",
        "Ökade licenskonvertering med 50 % genom att bygga ut betalningsflöden i frontend och integrera mot backend-API:er för konferenshantering.",
        "Förbättrade utvecklarnas onboarding genom att skapa Hoot.MX, ett dokumentationsverktyg som exponerar en OpenAPI-spec för en utvecklarcentrerad plattform.",
      ],
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Kubernetes",
        "SSE",
        "Auth0",
        "Node.js",
        "AWS",
      ],
    },
    {
      role: "Mjukvaruutvecklare - II",
      company: "Hitachi Vantara",
      location: "Hyderabad",
      dateRange: "juni 2019 – september 2021",
      intro:
        "Ett globalt företag inom enterprise-teknologi, med internt verktyg som används i hela organisationen. Fokus låg på frontendkvalitet och tillgänglighet så att produkten blev användbar för en bredare användargrupp, tillsammans med backend-optimering av frågor för tillverkningsarbetsflöden.",
      highlights: [
        "Möjliggjorde en betydligt bredare användarbas genom att höja tillgänglighetspoängen för Hitachi One Dash från 10 till 80 med WCAG-principer i frontend.",
        "Förbättrade responsiviteten i Hitachi One Dash genom att bygga nya React-komponenter med effektiva renderingsstrategier och integrera REST-API:er med caching.",
        "Minskade handläggningstiden för ändringsorder genom att optimera SQL-frågor och skriva Java-kod för att köra frågor, validera statusar och möjliggöra livekontroller via multitrådning.",
      ],
      skills: ["React", "JavaScript", "Redux", "Java", "SQL", "REST", "WCAG"],
    },
  ],
  experienceUi: {
    relatedWorkHeading: "Relaterat arbete",
    opensInNewTab: "(öppnas i ny flik)",
    readMoreHighlights: "Läs mer",
    readLessHighlights: "Visa mindre",
  },
  projectItems: [
    {
      title: "Ekko",
      subtitle: "Open-source, end-to-end-krypterad meddelandeplattform",
      url: "https://ekko.biratbhattacharjee.com",
      sourceUrl: "https://github.com/birat051/messaging-system",
      highlights: [
        "Designad för horisontell skalning med tillståndslösa tjänster och fan-out-arkitektur för meddelanden.",
        "Lasttestat med 10k samtidiga användare på AWS, med 45 ms p95-latens och 100 % meddelandeleverans.",
        "E2EE med AES-256-GCM och nycklar per enhet; servern lagrar endast chiffertext.",
      ],
      skills: [
        "React",
        "Node.js",
        "Express",
        "TypeScript",
        "Mongo",
        "AWS",
        "Redis",
        "RabbitMQ",
      ],
    },
  ],
  projectsUi: {
    opensInNewTab: "(öppnas i ny flik)",
    projectsListAriaLabel: "Projekt",
    sourceCodeAriaLabel: "Visa Ekkos källkod på GitHub (öppnas i ny flik)",
    coreSkillsHeading: "Kärntekniker",
  },
  comingSoon: "Innehåll kommer snart.",
  footer: "Birat Bhattacharjee © ",
  a11y: {
    sitePreferencesHeaderAriaLabel: "Webbplatsinställningar: tema och språk",
    sectionNavigationAriaLabel: "Navigering mellan avsnitt",
    siteFooterAriaLabel: "Sidfot",
    skipToMainContent: "Hoppa till huvudinnehåll",
    socialLinks: "Sociala länkar",
    githubProfile: "Profil på GitHub",
    mediumProfile: "Profil på Medium",
    linkedInProfile: "Profil på LinkedIn",
    experienceTimelineList: "Tidslinje för arbetslivserfarenhet",
    experienceSkillsList: "Teknologier och kompetenser",
    experienceJobRowAriaTemplate: "{role} vid {company}, {dateRange}",
    experienceRelatedWorkListAriaLabel: "Länkar till relaterat arbete",
    experienceRelatedWorkLinkAriaTemplate: "{label} (öppnas i ny flik)",
    experienceCompanySiteAriaTemplate: "Webbplats för {company} (öppnas i ny flik)",
    themeSelection: "Temaval",
    themeLightCurrent: "Ljust läge, aktivt tema",
    themeLightSwitch: "Byt till ljust läge",
    themeDarkCurrent: "Mörkt läge, aktivt tema",
    themeDarkSwitch: "Byt till mörkt läge",
    languageSelection: "Språkval",
    languageEnCurrent: "Engelska, aktivt språk",
    languageEnSwitch: "Byt till engelska",
    languageSvCurrent: "Svenska, aktivt språk",
    languageSvSwitch: "Byt till svenska",
  },
  caseStudiesUi: {
    opensInNewTab: "(öppnas i ny flik)",
    emptyPlaceholder:
      "Inga fallstudier ännu. Lägg till poster i src/data/case-studies-blogs.json.",
    tagsListAriaLabel: "Artikeltaggar",
    articlesListAriaLabel: "Artiklar om tekniska fallstudier",
  },
};

const translations: Record<"en" | "sv", Translations> = { en, sv };

export function getTranslations(locale: "en" | "sv"): Translations {
  return translations[locale];
}

/** Task **2.6** — Localized `aria-label` for each experience timeline row. */
export function formatExperienceJobRowAriaLabel(
  template: string,
  item: { role: string; company: string; dateRange: string },
): string {
  return template
    .replaceAll("{role}", item.role)
    .replaceAll("{company}", item.company)
    .replaceAll("{dateRange}", item.dateRange);
}

/** Task **28.3** — Localized `aria-label` for a related-work chip link. */
export function formatExperienceRelatedWorkLinkAriaLabel(
  template: string,
  label: string,
): string {
  return template.replaceAll("{label}", label);
}

/** Task **28.3** — Localized `aria-label` for the employer homepage link on the company name. */
export function formatExperienceCompanySiteAriaLabel(
  template: string,
  company: string,
): string {
  return template.replaceAll("{company}", company);
}
