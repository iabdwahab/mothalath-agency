import { Link } from "react-router-dom";
import logoText from "/logo-text.png";

function LogoContainer() {
  return (
    <div>
      <Link to="/">
        <img src={logoText} alt="Logo" className="w-24" />
      </Link>
    </div>
  );
}
export default LogoContainer;
