import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import { createContext, useState } from "react";

export const WebsiteLangContext = createContext<{
  websiteLang: "en" | "ar";
  setWebsiteLang: Function;
}>({
  websiteLang: "en",
  setWebsiteLang: () => {},
});

function App() {
  const [websiteLang, setWebsiteLang] = useState<"en" | "ar">("en");

  document.dir = websiteLang === "ar" ? "rtl" : "ltr";

  return (
    <WebsiteLangContext.Provider value={{ websiteLang, setWebsiteLang }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:service_slug" element={<ServicePage />} />
          </Route>
        </Routes>
      </HashRouter>
    </WebsiteLangContext.Provider>
  );
}
export default App;
