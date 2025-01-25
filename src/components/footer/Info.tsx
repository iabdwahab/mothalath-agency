import logoText from '/logo-text.png';

function Info() {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <a href="#" className="block max-md:mx-auto w-fit mb-4">
        <img src={logoText} alt="Mothalath Agency Logo" className="w-26" />
      </a>
      <p className="font-medium text-xl md:max-w-3xl">هل تبحث عن شريك موثوق به لتعزيز حضورك الرقمي؟ نحن نقدم مجموعة شاملة من خدمات التسويق الرقمي، بما في ذلك تصميم المواقع، وإدارة وسائل التواصل الاجتماعي، وتحسين محركات البحث (SEO)، وإعلانات الدفع بالنقرة (PPC).</p>
    </div>
  );
}
export default Info;
