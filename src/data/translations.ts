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
    intro: "Full-stack developer",
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
        "Led frontend architecture for HALO, the platform's AI assistant — collaborating across backend, product, and design to define component boundaries, data flows, and release strategy for a scalable, multi-team delivery.",
        "Built a real-time audio recording pipeline using Web Workers and WebSockets, enabling low-latency audio uploads at scale across the enterprise user base.",
        "Designed a JSON-driven UI engine that eliminated per-template frontend development, cutting turnaround from 3 days to zero for new clinical form templates.",
        "Developed a secure attachment microservice in Go, MySQL, GRPC and AWS cloudfront, serving 5 million patients with improved fault tolerance.",
        "Improved HALO lighthouse score from 80 to 93 through targeted Core Web Vitals optimisation, reducing FID, LCP and CLS scores.",
        "Owned production debugging and RCA of critical issues, driving improvements in code quality, linting standards, release strategies, and sharing learnings across teams to prevent regressions.",
      ],
      skills: [
        "React",
        "Zustand",
        "React Testing Library",
        "TailwindCSS",
        "Lighthouse",
        "Rollup",
        "Go",
        "Node.js",
        "Sentry",
        "Kibana",
        "CubeAPM",
        "NPM",
        "Service Workers",
        "REST",
        "SSE",
        "WebSockets",
        "GRPC",
        "AWS",
        "MySQL",
      ],
    },
    {
      role: "Lead Software Developer / Software Developer",
      company: "MPSC Inc.",
      location: "Remote",
      dateRange: "March 2022 – February 2024",
      highlights: [
        "Built and led development of low-latency real-time communication platforms for financial trading systems using React, WebRTC and Node.js.",
        "Implemented Redux-based connection state management combined with callbacks to handle reconnects one call at a time, reducing call drops by 25%.",
        "Delivered real-time conference event updates using Websocket combined with Web Workers, improving UI responsiveness under high load.",
        "Designed and developed backend APIs to create and manage conferences with secure authentication using Auth0, and built a payment validation microservice improving licence conversion by 50%.",
        "Engineered scalable conferencing infrastructure on GCP using GKE, provisioning FreeSWITCH nodes and ensuring session stickiness via SIP proxy for reliable call routing.",
        "As a lead, collaborated with stakeholders to define requirements, plan timelines and drive milestone-based delivery, ensuring predictable releases.",
        "Mentored engineers and improved team delivery efficiency through code reviews and architectural guidance.",
      ],
      skills: [
        "React",
        "Redux",
        "CSS",
        "FreeSWITCH",
        "Rollup",
        "WebRTC",
        "Node.js",
        "Kubernetes",
        "Docker",
        "REST",
        "WebSockets",
        "GCP",
        "Azure",
        "Mongo",
      ],
    },
    {
      role: "Consultant II / Consultant I",
      company: "Hitachi Vantara",
      location: "Hyderabad",
      dateRange: "June 2019 – September 2021",
      highlights: [
        "Developed new features and enhanced existing functionality in a Java-based engine that processed Change Orders between two PLM enterprise applications.",
        "Optimized SQL queries for faster lookups, reducing Change Order processing time.",
        "Implemented scheduling mechanisms on Linux and Windows servers to run the engine reliably.",
        "Additionally, built pixel-perfect, responsive UI components for an internal tool.",
        "Improved accessibility and performance, increasing accessibility score in Lighthouse from 10 to 80.",
        "Integrated REST APIs to enable seamless data exchange between frontend and backend systems.",
      ],
      skills: [
        "Java",
        "MySQL",
        "React",
        "HTML",
        "CSS",
        "Webpack",
        "Accessibility",
        "REST",
      ],
    },
  ],
  experienceUi: {
    expandJobDetails: "Expand job details",
    collapseJobDetails: "Collapse job details",
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
    intro: "Fullstackutvecklare",
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
        "Ledde frontend-arkitekturen för HALO, plattformens AI-assistent — samarbete med backend, produkt och design för komponentgränser, dataflöden och release-strategi för skalbart leverans med flera team.",
        "Byggde en realtids-ljudinspelningspipeline med Web Workers och WebSockets för låg latens och uppladdning i skala över hela användarbasen.",
        "Designade en JSON-driven UI-motor som tog bort frontend-utveckling per mall och minskade ledtiden från 3 dagar till noll för nya kliniska formulärmallar.",
        "Utvecklade en säker bilagemikrotjänst i Go, MySQL, GRPC och AWS CloudFront som betjänar 5 miljoner patienter med bättre feltolerans.",
        "Förbättrade HALOs Lighthouse-poäng från 80 till 93 genom riktad Core Web Vitals-optimering (FID, LCP, CLS).",
        "Drev felsökning och RCA av kritiska problem i produktion samt förbättringar av kodkvalitet, lint-standarder och release-strategier, och delade lärdomar över team för att undvika regressioner.",
      ],
      skills: [
        "React",
        "Zustand",
        "React Testing Library",
        "TailwindCSS",
        "Lighthouse",
        "Rollup",
        "Go",
        "Node.js",
        "Sentry",
        "Kibana",
        "CubeAPM",
        "NPM",
        "Service Workers",
        "REST",
        "SSE",
        "WebSockets",
        "GRPC",
        "AWS",
        "MySQL",
      ],
    },
    {
      role: "Lead Software Developer / Software Developer",
      company: "MPSC Inc.",
      location: "Distans",
      dateRange: "mars 2022 – februari 2024",
      highlights: [
        "Byggde och ledde utveckling av kommunikationsplattformar med låg latens för finansiella handelssystem med React, WebRTC och Node.js.",
        "Implementerade Redux-baserad anslutningshantering tillsammans med callbacks för återanslutning ett samtal i taget, vilket minskade samtalstapp med 25%.",
        "Levererade realtidsuppdateringar för konferensevenemang via WebSocket och Web Workers och förbättrade UI-respons under hög belastning.",
        "Designade och utvecklade backend-API:er för att skapa och hantera konferenser med säker autentisering (Auth0) och byggde en betalningsvalideringsmikrotjänst som ökade licenskonvertering med 50%.",
        "Byggde skalbara konferensinfrastruktur på GCP med GKE, etablerade FreeSWITCH-noder och session stickiness via SIP-proxy för pålitlig samtalrouting.",
        "Som lead samarbetade med intressenter för krav, tidslinjer och milstolpar för förutsägbara releaser.",
        "Mentorerade ingenjörer och förbättrade teamets leveranseffektivitet genom kodgranskningar och arkitekturguidning.",
      ],
      skills: [
        "React",
        "Redux",
        "CSS",
        "FreeSWITCH",
        "Rollup",
        "WebRTC",
        "Node.js",
        "Kubernetes",
        "Docker",
        "REST",
        "WebSockets",
        "GCP",
        "Azure",
        "Mongo",
      ],
    },
    {
      role: "Consultant II / Consultant I",
      company: "Hitachi Vantara",
      location: "Hyderabad",
      dateRange: "juni 2019 – september 2021",
      highlights: [
        "Utvecklade nya funktioner och förbättrade befintlig funktionalitet i en Java-baserad motor som processade Change Orders mellan två PLM-företagsapplikationer.",
        "Optimerade SQL-frågor för snabbare sökningar och kortare processningstid för Change Orders.",
        "Implementerade schemaläggningsmekanismer på Linux- och Windows-servrar för pålitlig körning av motorn.",
        "Byggde dessutom pixelperfekta, responsiva UI-komponenter för ett internt verktyg.",
        "Förbättrade tillgänglighet och prestanda och ökade tillgänglighetspoängen i Lighthouse från 10 till 80.",
        "Integrerade REST API:er för sömlös datautbyte mellan frontend och backend.",
      ],
      skills: [
        "Java",
        "MySQL",
        "React",
        "HTML",
        "CSS",
        "Webpack",
        "Tillgänglighet",
        "REST",
      ],
    },
  ],
  experienceUi: {
    expandJobDetails: "Visa jobbdetaljer",
    collapseJobDetails: "Dölj jobbdetaljer",
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
