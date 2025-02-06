import { homePageContentType } from "./homepageTypes";

export const defaultHomePageContent: homePageContentType = {
  landing: {
    slogan: { en: "", ar: "" },
    heading: { en: "", ar: "" },
    description: { en: "", ar: "" },
  },
  marketing_solutions: {
    text_side: {
      first_text: { en: "", ar: "" },
      middle_text: { en: "", ar: "" },
      last_text: { en: "", ar: "" },
    },
    illustrations_side: {
      consultation_text: { en: "", ar: "" },
      consultation_image: "",
      consultation_link_text: { en: "", ar: "" },
      hero_image: "",
      hero_title: { en: "", ar: "" },
      hero_description: { en: "", ar: "" },
    },
  },
  features: {
    features_content: {
      heading: { en: "", ar: "" },
      description: { en: "", ar: "" },
    },
    features_list: {
      feature_1: {
        feature_title: { en: "", ar: "" },
        feature_description: { en: "", ar: "" },
      },
      feature_2: {
        feature_title: { en: "", ar: "" },
        feature_description: { en: "", ar: "" },
      },
    },
    special_feature: {
      feature_title: { en: "", ar: "" },
      feature_description: { en: "", ar: "" },
    },
  },
};
