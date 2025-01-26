import article1 from '/imgs/articles/article-1.png';

function Article() {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative flex justify-center items-center group  rounded-xl overflow-hidden">
        {/* <span className="absolute w-0 h-0 invisibl group-hover:h-full group-hover:w-full duration-medium bg-[#1E1E1E1A] bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100"></span> */}
        <img src={article1} alt="Article" className="w-full h-64 object-cover group-hover:blur-[3px] duration-medium" />
      </a>

      <h5 className="font-bold text-base">
        <a href="#" className="hover:text-supporter hover:duration-hover">
          تحول كبير في عالم سوق التجارة الإلكترونية
        </a>
      </h5>
      <p className="text-[13px] font-thin">لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على سبيل المثال</p>
      <p className="text-xs font-bold">12/8/2025</p>
    </div>
  );
}
export default Article;
