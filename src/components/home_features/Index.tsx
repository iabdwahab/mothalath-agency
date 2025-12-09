import Container from "../Container";
import ConsultationButton from "../global/ConsultationButton";
import SpecialCard from "./SpecialCard";
import RegularCardsContainer from "./RegularCardsContainer";
import FeaturesContent from "./FeaturesContent";
import { useContext } from "react";
import { HomePageDataContext } from "../../pages/HomePage";

function HomeFeatures() {
  const { features } = useContext(HomePageDataContext);
  const { features_content, features_list, special_feature } = features;

  return (
    <section className="py-section">
      <Container className="flex flex-col gap-8">
        <FeaturesContent data={features_content} />

        <div className="relative grid gap-6 pt-7 md:grid-cols-2 lg:grid-cols-3">
          <RegularCardsContainer features_list={features_list} />
          <div className="relative md:col-span-2 lg:-top-7 lg:col-span-1">
            <SpecialCard data={special_feature} />
          </div>
        </div>

        <ConsultationButton className="dark-button mx-auto w-fit px-20" />
      </Container>
    </section>
  );
}
export default HomeFeatures;
