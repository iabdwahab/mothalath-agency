import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import { createContext, useEffect, useState } from "react";
import MessagesPage from "./pages/MessagesPage";
import MessagesLayout from "./layouts/MessagesLayout";

import AOS from "aos";
import "aos/dist/aos.css";

export const WebsiteLangContext = createContext<{
  websiteLang: "en" | "ar";
  setWebsiteLang: Function;
}>({
  websiteLang: "en",
  setWebsiteLang: () => {},
});

function App() {
  const [websiteLang, setWebsiteLang] = useState<"en" | "ar">("ar");

  document.dir = websiteLang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust animation duration
      offset: 100, // Offset before animation triggers
      easing: "ease-in-out", // Animation easing function
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate again on scroll-up
    });

    AOS.refresh(); // Refresh AOS to detect newly added elements
  }, []);

  return (
    <WebsiteLangContext.Provider value={{ websiteLang, setWebsiteLang }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:service_slug" element={<ServicePage />} />
          </Route>
          <Route path="/messages" element={<MessagesLayout />}>
            <Route path="/messages" element={<MessagesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </WebsiteLangContext.Provider>
  );
}
export default App;
