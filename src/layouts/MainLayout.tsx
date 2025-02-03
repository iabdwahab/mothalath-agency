import { Outlet, useLocation } from "react-router-dom";
import Articles from "../components/articles/Index";
import Footer from "../components/footer/Index";
import Header from "../components/header/Index";
import Questions from "../components/questions/Index";
import Testimonials from "../components/testimonials/Index";
import { useEffect } from "react";

function MainLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
