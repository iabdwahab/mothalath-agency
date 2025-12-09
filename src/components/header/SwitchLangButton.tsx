import { useContext } from "react";
import { WebsiteLangContext } from "../../App";

function SwitchLangButton() {
  const { websiteLang, setWebsiteLang } = useContext(WebsiteLangContext);

  function toggleLang() {
    setWebsiteLang((prev: "ar" | "en") => (prev === "ar" ? "en" : "ar"));
  }
  return (
    <button
      onClick={toggleLang}
      className="rounded-full bg-main px-4 py-2 text-sm font-black capitalize text-background outline-1 outline-main duration-medium hover:bg-background hover:text-main hover:outline"
    >
      {websiteLang === "ar" ? "English" : "عربي"}
    </button>
  );
}
export default SwitchLangButton;
