import { useContext } from "react";
import logoText from "/logo-text.png";
import { WebsiteLangContext } from "../../App";

function Info() {
  const { websiteLang } = useContext(WebsiteLangContext);

  return (
    <div className="md:col-span-2 lg:col-span-1">
      <a href="#" className="mb-4 block w-fit max-md:mx-auto">
        <img src={logoText} alt="Mothalath Agency Logo" className="w-24" />
      </a>
      <p className="text-xl font-medium md:max-w-3xl">
        {websiteLang === "ar"
          ? `هل تبحث عن شريك موثوق به لتعزيز حضورك الرقمي؟ نحن نقدم مجموعة شاملة من
        خدمات التسويق الرقمي، بما في ذلك تصميم المواقع، وإدارة وسائل التواصل
        الاجتماعي، وتحسين محركات البحث (SEO)، وإعلانات الدفع بالنقرة (PPC).`
          : `Looking for a reliable partner to boost your digital presence? We offer a comprehensive range of digital marketing services, including website design, social media management, search engine optimization (SEO), and pay-per-click (PPC) advertising.`}
      </p>
    </div>
  );
}
export default Info;
