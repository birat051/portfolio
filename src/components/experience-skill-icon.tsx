import { HiOutlineCloud, HiOutlineCommandLine } from "react-icons/hi2";
import { MdOutlineAccessibilityNew } from "react-icons/md";
import {
  SiApachekafka,
  SiAsterisk,
  SiAudacity,
  SiAuth0,
  SiBigbluebutton,
  SiDocker,
  SiFlask,
  SiGithubactions,
  SiGo,
  SiJenkins,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiOpenai,
  SiOpenapiinitiative,
  SiOpenjdk,
  SiPhp,
  SiPython,
  SiReact,
  SiRedux,
  SiSemanticrelease,
  SiSocketdotio,
  SiSwagger,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si";
import { TbPuzzle } from "react-icons/tb";

import type { IconType } from "react-icons";

/**
 * Experience **`skills`** chips + engineering case-study **`tags`** (shared icon map).
 * Unknown labels fall back to **`HiOutlineCommandLine`**.
 */
const TECH_CHIP_ICONS: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  Zustand: TbPuzzle,
  WebSockets: SiSocketdotio,
  WebSocket: SiSocketdotio,
  Python: SiPython,
  Flask: SiFlask,
  "Node.js": SiNodedotjs,
  Go: SiGo,
  AWS: HiOutlineCloud,
  Kafka: SiApachekafka,
  Redux: SiRedux,
  BigBlueButton: SiBigbluebutton,
  SSE: SiSocketdotio,
  Auth0: SiAuth0,
  OpenAPI: SiOpenapiinitiative,
  Java: SiOpenjdk,
  SQL: SiMysql,
  REST: SiSwagger,
  WCAG: MdOutlineAccessibilityNew,
  PHP: SiPhp,

  Jenkins: SiJenkins,
  npm: SiNpm,
  "CI/CD": SiGithubactions,
  "Semantic versioning": SiSemanticrelease,
  "Semantisk versionering": SiSemanticrelease,
  WaveSurfer: SiAudacity,
  AI: SiOpenai,
  Microservices: SiDocker,
  Mikrotjänster: SiDocker,
  FreeSWITCH: SiAsterisk,
  WebRTC: SiWebrtc,
  "Next.js": SiNextdotjs,
};

type ExperienceSkillIconProps = Readonly<{
  skill: string;
  className?: string;
}>;

export function ExperienceSkillIcon({ skill, className }: ExperienceSkillIconProps) {
  const Icon = TECH_CHIP_ICONS[skill] ?? HiOutlineCommandLine;
  return <Icon className={className} aria-hidden />;
}
