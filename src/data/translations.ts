import type { ExperienceTimelineItem } from "@/components/types";

export type Translations = {
  hero: {
    tagline: string;
    intro: string;
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
    /** Accessible name when details are collapsed (expand action). */
    expandJobDetails: string;
    /** Accessible name when details are expanded (collapse action). */
    collapseJobDetails: string;
    /** Task **28.3** — Visible subheading above related-work chip links. */
    relatedWorkHeading: string;
    /**
     * Task **28.3** — External / new-tab hint (match tone with **`caseStudiesUi.opensInNewTab`**;
     * may be concatenated in **`aria-label`** or **`sr-only`** next to chips).
     */
    opensInNewTab: string;
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
    intro: "Front-end focused Senior Software Engineer",
    nameHeadingSrNote:
      " Decorative terminal: the animated name cycles through English, Swedish, Hindi, Assamese, and Bengali once, then stays in English. Hover pauses; moving the pointer away replays. With reduced motion, only a static name is shown.",
  },
  sectionTitles: {
    problems: "What problems I solve",
    experience: "Experience",
    "case-studies": "Engineering Case Studies",
    demos: "Demos",
    ai: "AI",
  },
  problemsContent: [
    "Hi, I am Birat Bhattacharjee, a Senior Software Engineer with 6 years of experience building scalable, high-performance web applications using React, TypeScript, Node.js, and Go. I specialise in designing and implementing scalable frontend architecture, real-time systems, and performance optimisation, working with technologies such as WebRTC, WebSockets, and Server-Sent Events.",
    "I've led large frontend initiatives, built reusable UI platforms and component libraries, worked with monitoring tools like Sentry, Kibana, CubeAPM and developed backend micro-services that support thousands of users. My focus is on writing clean, scalable code through well-structured architectures, reusable abstractions, and solid test coverage, while collaborating closely with cross-functional teams, mentoring engineers through code reviews and design discussions, and driving reliable releases via strong CI/CD practices.",
  ],
  experienceTimeline: [
    {
      role: "Senior Software Engineer",
      company: "Healthplix Technologies",
      location: "Bengaluru",
      dateRange: "March 2024 – January 2026",
      highlights: [
        "Led frontend architecture for HALO (AI assistant), defining component boundaries and data flows across a multi-team setup.",
        "Built a real-time audio streaming pipeline using WebSockets and Web Workers, reducing transcription latency by 80% (10s → 2s) and improving responsiveness under load.",
        "Designed a JSON-driven UI system, reducing new template development time from ~3 days to near zero.",
        "Contributed to a secure attachment microservice (Go + AWS + MySQL), supporting 2000+ RPM with improved reliability.",
        "Improved Lighthouse performance score from 80 → 93, reducing LCP, CLS, and FID through targeted optimizations.",
        "Drove production issue resolution and RCA processes, improving release stability and team-wide engineering practices.",
      ],
      skills: [
        "React",
        "TypeScript",
        "Zustand",
        "TailwindCSS",
        "Web Workers",
        "WebSockets",
        "Node.js",
        "Go",
        "AWS",
      ],
    },
    {
      role: "Lead Software Developer / Software Developer",
      company: "MPSC Inc.",
      location: "Remote",
      dateRange: "March 2022 – February 2024",
      highlights: [
        "Built and scaled real-time communication interfaces for trading platforms using React and WebRTC.",
        "Reduced call drop rate by 25% by redesigning connection state management and reconnection flows.",
        "Implemented real-time event streaming using SSE and Web Workers, maintaining 30–80ms average delivery latency while improving UI responsiveness under high load.",
        "Designed and developed backend APIs to create and manage conferences with secure authentication using Auth0, and built a payment validation microservice improving licence conversion by 50%.",
        "Contributed to cloud-based conferencing infrastructure (GCP, Kubernetes, FreeSWITCH) for reliable session handling.",
        "Collaborated with cross-functional stakeholders to deliver features in iterative, milestone-driven cycles.",
        "Mentored engineers through code reviews, linting standards and design discussions.",
      ],
      skills: [
        "React",
        "Redux",
        "WebRTC",
        "Node.js",
        "WebSockets",
        "GCP",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      role: "Consultant II / Consultant I",
      company: "Hitachi Vantara",
      location: "Hyderabad",
      dateRange: "June 2019 – September 2021",
      highlights: [
        "Developed and maintained enterprise Java applications handling large-scale Change Order workflows.",
        "Improved query performance, reducing processing time for key operations.",
        "Built pixel-perfect, responsive UI components for an internal tool and improved accessibility (Lighthouse score 10 → 80).",
        "Integrated REST APIs to streamline data exchange across systems.",
      ],
      skills: [
        "Java",
        "React",
        "MySQL",
        "REST APIs",
        "Linux",
      ],
    },
  ],
  experienceUi: {
    expandJobDetails: "Expand job details",
    collapseJobDetails: "Collapse job details",
    relatedWorkHeading: "Related work",
    opensInNewTab: "(opens in a new tab)",
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
    intro: "Senior mjukvaruingenjör med fokus på front end",
    nameHeadingSrNote:
      " Dekorativ terminal: det animerade namnet visas på engelska, svenska, hindi, assamesiska och bengali en gång och stannar sedan på engelska. Hovring pausar; när pekaren lämnar rutan spelas animationen om. Vid nedsatt rörelse visas bara ett statiskt namn.",
  },
  sectionTitles: {
    problems: "Vilka problem jag löser",
    experience: "Erfarenhet",
    "case-studies": "Tekniska fallstudier",
    demos: "Demonstrationer",
    ai: "AI",
  },
  problemsContent: [
    "Jag heter Birat Bhattacharjee och är senior mjukvaruingenjör med 6 års erfarenhet av att bygga skalbara webbapplikationer med React, TypeScript, Node.js och Go. Jag är specialist på skalbara frontend-arkitekturer, realtidssystem och prestandaoptimering, med teknologier som WebRTC, WebSockets och Server-Sent Events.",
    "Jag har lett större frontend-initiativ, byggt återanvändbara UI-plattformar och komponentbibliotek, använt övervakningsverktyg som Sentry, Kibana och CubeAPM samt utvecklat backend-mikrotjänster som betjänar tusentals användare. Jag fokuserar på ren, skalbarkod genom tydlig arkitektur, återanvändbara abstraktioner och god testtäckning, i nära samarbete med tvärfunktionella team, mentorering via kodgranskningar och design, samt pålitliga releaser via stark CI/CD.",
  ],
  experienceTimeline: [
    {
      role: "Senior mjukvaruingenjör",
      company: "Healthplix Technologies",
      location: "Bengaluru",
      dateRange: "mars 2024 – januari 2026",
      highlights: [
        "Ledde frontend-arkitekturen för HALO (AI-assistent) och definierade komponentgränser och dataflöden i en miljö med flera team.",
        "Byggde en realtidsljudströmningspipeline med WebSockets och Web Workers och minskade transkriptionslatensen med 80 % (10 s → 2 s) och förbättrade respons vid belastning.",
        "Designade ett JSON-drivet UI-system och minskade utvecklingstiden för nya mallar från ~3 dagar till nära noll.",
        "Bidrog till en säker bilagemikrotjänst (Go + AWS + MySQL) med stöd för över 2000 RPM och förbättrad tillförlitlighet.",
        "Förbättrade Lighthouse-prestandapoängen från 80 till 93 genom riktade optimeringar av LCP, CLS och FID.",
        "Drev produktionsärenden och RCA-processer och förbättrade relestabilitet och ingenjörspraxis i hela teamet.",
      ],
      skills: [
        "React",
        "TypeScript",
        "Zustand",
        "TailwindCSS",
        "Web Workers",
        "WebSockets",
        "Node.js",
        "Go",
        "AWS",
      ],
    },
    {
      role: "Lead Software Developer / Software Developer",
      company: "MPSC Inc.",
      location: "Distans",
      dateRange: "mars 2022 – februari 2024",
      highlights: [
        "Byggde och skalade realtidsgränssnitt för handelsplattformar med React och WebRTC.",
        "Minskade samtalstappen med 25 % genom omdesign av anslutningshantering och återanslutningsflöden.",
        "Implementerade realtidshändelseströmning med SSE och Web Workers med i genomsnitt 30–80 ms leveranslatens samtidigt som UI-responsen under hög belastning förbättrades.",
        "Designade och utvecklade backend-API:er för att skapa och hantera konferenser med säker autentisering (Auth0) och byggde en betalningsvalideringsmikrotjänst som ökade licenskonvertering med 50 %.",
        "Bidrog till konferensinfrastruktur i molnet (GCP, Kubernetes, FreeSWITCH) för pålitlig sessionshantering.",
        "Samarbetade med tvärfunktionella intressenter för att leverera funktioner i iterativa, milstolpsdrivna cykler.",
        "Mentorerade ingenjörer genom kodgranskningar, lint-standarder och designdiskussioner.",
      ],
      skills: [
        "React",
        "Redux",
        "WebRTC",
        "Node.js",
        "WebSockets",
        "GCP",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      role: "Consultant II / Consultant I",
      company: "Hitachi Vantara",
      location: "Hyderabad",
      dateRange: "juni 2019 – september 2021",
      highlights: [
        "Utvecklade och underhöll Java-baserade företagsapplikationer för storskaliga Change Order-arbetsflöden.",
        "Förbättrade frågeprestanda och kortade behandlingstiden för nyckeloperationer.",
        "Byggde pixelperfekta, responsiva UI-komponenter för ett internt verktyg och förbättrade tillgänglighet (Lighthouse-poäng 10 → 80).",
        "Integrerade REST API:er för effektivare datautbyte mellan system.",
      ],
      skills: [
        "Java",
        "React",
        "MySQL",
        "REST APIs",
        "Linux",
      ],
    },
  ],
  experienceUi: {
    expandJobDetails: "Visa jobbdetaljer",
    collapseJobDetails: "Dölj jobbdetaljer",
    relatedWorkHeading: "Relaterat arbete",
    opensInNewTab: "(öppnas i ny flik)",
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
