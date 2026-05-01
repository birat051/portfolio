/**
 * Experience timeline — employer + related-work links (**Task 28.1**)
 * ===================================================================
 * **Canonical data:** `sections.json` → `experience` → `timeline[]`.
 *
 * | Field | Type | Notes |
 * | ----- | ---- | ----- |
 * | **`companyUrl`** | `string` | Absolute **https** employer homepage (company heading link in **28.4**). |
 * | **`relatedWorks`** | `{ label, url }[]` | Chip row; **`url`** absolute **https**; order preserved. |
 * | **`companyDescription`** | `string` (optional) | Employer context for **SEO** only — serialized as JSON-LD (`Organization` descriptions) from **`page.tsx`**; **not** shown in the timeline. |
 * | **`intro`** | `string` | Brief job context in the timeline UI (under location, above **`highlights`**); canonical English in **`sections.json`**, localized in **`translations.ts`**. |
 *
 * Locale-specific copy (**`role`**, **`intro`**, **`highlights`**, **`skills`**, etc.) lives in **`translations.ts`**
 * (`experienceTimeline`). Merge at runtime with **`mergeExperienceTimelineWithLinks`** in
 * **`experience-timeline-merge.ts`** (**Task 28.2**), then pass the result to **`ExperienceTimeline`**
 * (**Task 28.6** wires **`home-content`**).
 */
export type {
  ExperienceRelatedWorkLink,
  ExperienceTimelineItem,
} from "@/components/types";

export { mergeExperienceTimelineWithLinks } from "@/data/experience-timeline-merge";
