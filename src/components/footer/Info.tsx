import logoText from "/logo-text.png";

function Info() {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <a href="#" className="mb-4 block w-fit max-md:mx-auto">
        <img src={logoText} alt="Mothalath Agency Logo" className="w-24" />
      </a>
      <p className="text-xl font-medium md:max-w-3xl">
        هل تبحث عن شريك موثوق به لتعزيز حضورك الرقمي؟ نحن نقدم مجموعة شاملة من
        خدمات التسويق الرقمي، بما في ذلك تصميم المواقع، وإدارة وسائل التواصل
        الاجتماعي، وتحسين محركات البحث (SEO)، وإعلانات الدفع بالنقرة (PPC).
      </p>
    </div>
  );
}
export default Info;
