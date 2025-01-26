import article1 from "/imgs/articles/article-1.png";

function Article() {
  return (
    <div className="flex flex-col gap-4">
      <a
        href="#"
        className="group relative flex items-center justify-center overflow-hidden rounded-xl"
      >
        {/* <span className="absolute w-0 h-0 invisibl group-hover:h-full group-hover:w-full duration-medium bg-[#1E1E1E1A] bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100"></span> */}
        <img
          src={article1}
          alt="Article"
          className="h-64 w-full object-cover duration-medium group-hover:blur-[3px]"
        />
      </a>

      <h5 className="text-base font-bold">
        <a href="#" className="hover:duration-hover hover:text-supporter">
          تحول كبير في عالم سوق التجارة الإلكترونية
        </a>
      </h5>
      <p className="text-[13px] font-thin">
        لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور
        طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه … بروشور او فلاير على
        سبيل المثال
      </p>
      <p className="text-xs font-bold">12/8/2025</p>
    </div>
  );
}
export default Article;
