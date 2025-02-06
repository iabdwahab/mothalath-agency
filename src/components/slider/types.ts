import { MultiLangTextType } from "../../types/global";

export type slideDataType = {
  slug: string;
  acf: {
    services_slider_data: {
      text_side: {
        title: MultiLangTextType;
        description: MultiLangTextType;
      };
      image_side: {
        title: MultiLangTextType;
        description: MultiLangTextType;
        hero_image: {
          url: string;
          alt: string;
        };
        illustration_image: {
          url: string;
          alt: string;
        };
      };
    };
  };
};

export type textSideType = {
  data: {
    title: string;
    description: string;
  };
  setCurrentSlide: Function;
};

export type imageSideType = {
  data: {
    title: string;
    description: string;
  };
};
