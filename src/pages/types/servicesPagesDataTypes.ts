export const servicesPageDefaultData = {
  landing_background_image: "",
  landing_heading: {
    en: "",
    ar: "",
  },
  landing_description: {
    en: "",
    ar: "",
  },
  features_title: {
    en: "",
    ar: "",
  },
  features: {
    feature: {
      feature_title: {
        en: "",
        ar: "",
      },
      feature_description: {
        en: "",
        ar: "",
      },
    },
  },
};

export type servicePageDataType = {
  landing_background_image: string;
  landing_heading: {
    en: string;
    ar: string;
  };
  landing_description: {
    en: string;
    ar: string;
  };
  features_title: {
    en: string;
    ar: string;
  };
  features: {
    [key: string]: {
      feature_title: {
        en: string;
        ar: string;
      };
      feature_description: {
        en: string;
        ar: string;
      };
    };
  };
};
