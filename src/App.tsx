import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";
import { createContext, useState } from "react";
import MessagesPage from "./pages/MessagesPage";
import MessagesLayout from "./layouts/MessagesLayout";

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
