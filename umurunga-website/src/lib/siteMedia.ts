/**
 * Paths match files in `public/images/` exactly (do not rename your image files).
 */
export const siteMedia = {
  logo: "/images/umurunga-logo.png",
  heroSlides: [
    "/images/hero_slide1.jpg",
    "/images/hero_slide2.jpg",
    "/images/hero_slide3.jpg",
  ] as const,
  /** Same order as people listed in `team.tsx` */
  teamPhotos: [
    "/images/team1_Irene.jpg",
    "/images/team2_guillaine.png",
    "/images/team3_Godfrey.png",
    "/images/team4_Amani.png",
  ] as const,
  /**
   * Annual action plan PDF. I added my file here:
   * `public/documents/umurunga-action-plan.pdf`
   */
  actionPlanPdf: "/documents/umurunga-action-plan.pdf",
} as const;
