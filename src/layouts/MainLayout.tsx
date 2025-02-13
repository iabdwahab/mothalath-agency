import { Outlet, useLocation } from "react-router-dom";
import Articles from "../components/articles/Index";
import Footer from "../components/footer/Index";
import Header from "../components/header/Index";
import FAQs from "../components/faqs/Index";
import Testimonials from "../components/testimonials/Index";
import { useEffect } from "react";
import ContactForm from "../components/contact_form/Index";
// import Modal from "../components/global/Modal";

function MainLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative overflow-x-hidden bg-contain bg-top text-white">
      <Header />
      <ContactForm />
      <Outlet />
      <Testimonials />
      <Articles />
      <FAQs />
      <Footer />
    </div>
  );
}
export default MainLayout;
