import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ServicePage from "./pages/ServicePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:service_slug" element={<ServicePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default App;
