import { MultiLangTextType } from "./global";

export interface LandingType {
  slogan: MultiLangTextType;
  heading: MultiLangTextType;
  description: MultiLangTextType;
}

export interface MarketingSolutionsTextSideType {
  first_text: MultiLangTextType;
  middle_text: MultiLangTextType;
  last_text: MultiLangTextType;
}

export interface MarketingSolutionsIllustrationsSideType {
  consultation_text: MultiLangTextType;
  consultation_image: string;
  consultation_link_text: MultiLangTextType;
  hero_image: string;
  hero_title: MultiLangTextType;
  hero_description: MultiLangTextType;
}

export interface MarketingSolutionsType {
  text_side: MarketingSolutionsTextSideType;
  illustrations_side: MarketingSolutionsIllustrationsSideType;
}

export interface FeatureItemType {
  feature_title: MultiLangTextType;
  feature_description: MultiLangTextType;
}

export interface FeaturesType {
  features_content: {
    heading: MultiLangTextType;
    description: MultiLangTextType;
  };
  features_list: {
    feature_1: FeatureItemType;
    feature_2: FeatureItemType;
  };
  special_feature: FeatureItemType;
}

export interface homePageContentType {
  landing: LandingType;
  marketing_solutions: MarketingSolutionsType;
  features: FeaturesType;
}
