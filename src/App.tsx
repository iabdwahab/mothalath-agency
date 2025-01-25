import Articles from './components/articles/Index';
import Footer from './components/footer/Index';
import Questions from './components/questions/Index';
// import SliderSection from './components/slider/Index';
import Testimonials from './components/testimonials/Index';

// import heroImage from '/imgs/hero.png';

function App() {
  return (
    <div className="text-white bg-top bg-contain">
      {/* <SliderSection /> */}
      <Testimonials />
      <Articles />
      <Questions />
      <Footer />
    </div>
  );
}
export default App;
