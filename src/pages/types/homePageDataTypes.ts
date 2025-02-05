interface MultiLangText {
  en: string;
  ar: string;
}

interface Landing {
  slogan: MultiLangText;
  heading: MultiLangText;
  description: MultiLangText;
}

interface MarketingSolutionsTextSide {
  first_text: MultiLangText;
  middle_text: MultiLangText;
  last_text: MultiLangText;
}

interface MarketingSolutionsIllustrationsSide {
  consultation_text: MultiLangText;
  consultation_image: boolean;
  hero_image: boolean;
  hero_title: MultiLangText;
  hero_description: MultiLangText;
}

interface MarketingSolutions {
  text_side: MarketingSolutionsTextSide;
  illustrations_side: MarketingSolutionsIllustrationsSide;
}

interface CustomerList {
  customer_1: boolean;
  customer_2: boolean;
  customer_3: boolean;
  customer_4: boolean;
  customer_5: boolean;
  customer_6: boolean;
  customer_7: boolean;
  customer_8: boolean;
}

interface FeatureItem {
  feature_title: MultiLangText;
  feature_description: MultiLangText;
}

interface Features {
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

interface WebsiteContent {
  landing: Landing;
  marketing_solutions: MarketingSolutions;
  our_customers: CustomerList;
  features: Features;
}
