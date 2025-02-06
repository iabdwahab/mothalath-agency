import { MultiLangTextType } from "../../types/global";

export const servicesPageDefaultData: servicePageDataType = {
  landing: {
    landing_background_image: "",
    landing_heading: {
      en: "",
      ar: "",
    },
    landing_description: {
      en: "",
      ar: "",
    },
  },
  features: {
    features_title: {
      en: "",
      ar: "",
    },
    features_list: {
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
  },
};

export type servicePageDataType = {
  landing: {
    landing_background_image: string;
    landing_heading: MultiLangTextType;
    landing_description: MultiLangTextType;
  };
  features: {
    features_title: {
      en: string;
      ar: string;
    };
    features_list: {
      [key: string]: {
        feature_title: MultiLangTextType;
        feature_description: MultiLangTextType;
      };
    };
  };
};
