import logoText from "/logo-text.png";

function LogoContainer() {
  return (
    <div>
      <a href="#">
        <img src={logoText} alt="Logo" className="w-24" />
      </a>
    </div>
  );
}
export default LogoContainer;
