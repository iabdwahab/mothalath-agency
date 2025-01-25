import Articles from './components/articles/Index';
import Footer from './components/footer/Index';
import BlurryCircle from './components/global/BlurryCircle';
import Questions from './components/questions/Index';
import SliderSection from './components/slider/Index';
import Testimonials from './components/testimonials/Index';

function App() {
  return (
    <div className="relative text-white bg-top bg-contain overflow-x-hidden">
      <BlurryCircle direction="left" />
      <BlurryCircle direction="right" />
      <SliderSection />
      <Testimonials />
      <Articles />
      <Questions />
      <Footer />
    </div>
  );
}
export default App;
