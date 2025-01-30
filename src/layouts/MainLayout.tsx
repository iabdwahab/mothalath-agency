import { Outlet } from "react-router-dom";
import Articles from "../components/articles/Index";
import Footer from "../components/footer/Index";
import Header from "../components/header/Index";
import Questions from "../components/questions/Index";
import Testimonials from "../components/testimonials/Index";

function MainLayout() {
  return (
    <div className="relative overflow-x-hidden bg-contain bg-top text-white">
      <Header />
      <Outlet />
      <Testimonials />
      <Articles />
      <Questions />
      <Footer />
    </div>
  );
}
export default MainLayout;
