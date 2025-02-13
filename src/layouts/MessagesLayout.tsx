import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Index";
import Header from "../components/header/Index";

function MessagesLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default MessagesLayout;
