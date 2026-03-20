/**
 * Experience timeline — employer + related-work links (**Task 28.1**)
 * ===================================================================
 * **Canonical data:** `sections.json` → `experience` → `timeline[]`.
 *
 * | Field | Type | Notes |
 * | ----- | ---- | ----- |
 * | **`companyUrl`** | `string` | Absolute **https** employer homepage (company heading link in **28.4**). |
 * | **`relatedWorks`** | `{ label, url }[]` | Chip row; **`url`** absolute **https**; order preserved. |
 *
 * Locale-specific copy (**`role`**, **`highlights`**, **`skills`**, etc.) lives in **`translations.ts`**
 * (`experienceTimeline`). Merge at runtime with **`mergeExperienceTimelineWithLinks`** in
 * **`experience-timeline-merge.ts`** (**Task 28.2**), then pass the result to **`ExperienceTimeline`**
 * (**Task 28.6** wires **`home-content`**).
 */
export type {
  ExperienceRelatedWorkLink,
  ExperienceTimelineItem,
} from "@/components/types";

export { mergeExperienceTimelineWithLinks } from "@/data/experience-timeline-merge";
