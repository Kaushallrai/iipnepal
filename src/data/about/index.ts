export * from "./hero";
export * from "./what-we-do";
export * from "./leadership";
export * from "./admissions";
export * from "./prospectus";
export * from "./cta";

import { aboutHeroData } from "./hero";
import { aboutWhatWeDoData } from "./what-we-do";
import { aboutLeadershipData } from "./leadership";
import { aboutAdmissionsData } from "./admissions";
import { aboutProspectusData } from "./prospectus";
import { aboutCtaData } from "./cta";

export const aboutData = {
  hero: aboutHeroData,
  whatWeDo: aboutWhatWeDoData,
  leadership: aboutLeadershipData,
  admissions: aboutAdmissionsData,
  prospectus: aboutProspectusData,
  cta: aboutCtaData,
};
