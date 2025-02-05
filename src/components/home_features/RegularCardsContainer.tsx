import { useContext } from "react";
import RegularCard from "./RegularCard";
import { WebsiteLangContext } from "../../App";
import { FeatureItem } from "../../types/homepageTypes";

type propsType = {
  features_list: {
    feature_1: FeatureItem;
    feature_2: FeatureItem;
  };
};

function RegularCardsContainer({ features_list }: propsType) {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { feature_1, feature_2 } = features_list;

  return (
    <>
      <RegularCard
        blurryCirclePositionX="right"
        blurryCirclePositionY="top"
        title={feature_1.feature_title[websiteLang]}
        description={feature_1.feature_description[websiteLang]}
      />
      <RegularCard
        blurryCirclePositionX="left"
        blurryCirclePositionY="bottom"
        title={feature_2.feature_title[websiteLang]}
        description={feature_2.feature_description[websiteLang]}
      />
    </>
  );
}
export default RegularCardsContainer;
