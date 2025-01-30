import Articles from "./components/articles/Index";
import Footer from "./components/footer/Index";
import Header from "./components/header/Index";
import HomeLanding from "./components/home_landing/Index";
import Questions from "./components/questions/Index";
import SliderSection from "./components/slider/Index";

import heroImage from "/imgs/hero.png";
import HomeFeatures from "./components/home_features/Index";
import StepsSection from "./components/steps/Index";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-contain bg-top text-white">
      <Header />

      <div
        className="bg-no-repeat md:bg-[100%,100%]"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <HomeLanding />
        <HomeFeatures />
      </div>

      <StepsSection />
      <SliderSection />
      <Articles />
      <Questions />
      <Footer />
    </div>
  );
}
export default App;
