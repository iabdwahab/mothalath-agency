import { MultiLangText } from "./global";

export interface Landing {
  slogan: MultiLangText;
  heading: MultiLangText;
  description: MultiLangText;
}

export interface MarketingSolutionsTextSide {
  first_text: MultiLangText;
  middle_text: MultiLangText;
  last_text: MultiLangText;
}

export interface MarketingSolutionsIllustrationsSide {
  consultation_text: MultiLangText;
  consultation_image: boolean;
  hero_image: boolean;
  hero_title: MultiLangText;
  hero_description: MultiLangText;
}

export interface MarketingSolutions {
  text_side: MarketingSolutionsTextSide;
  illustrations_side: MarketingSolutionsIllustrationsSide;
}

export interface FeatureItem {
  feature_title: MultiLangText;
  feature_description: MultiLangText;
}

export interface Features {
  features_content: {
    heading: MultiLangText;
    description: MultiLangText;
  };
  features_list: {
    feature_1: FeatureItem;
    feature_2: FeatureItem;
  };
  special_feature: FeatureItem;
}

export interface homePageContentType {
  landing: Landing;
  marketing_solutions: MarketingSolutions;
  features: Features;
}
