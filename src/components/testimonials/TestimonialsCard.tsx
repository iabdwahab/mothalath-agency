import person from '/imgs/testimonials/photo-1.jpg';
import filledStar from '/imgs/testimonials/star-filled.svg';
import emptyStar from '/imgs/testimonials/star-empty.svg';

function TestimonialsCard() {
  return (
    <div className="text-sm grid gap-4 grid-cols-[40px,1fr] p-6 md:p-8 rounded-xl border border-half-white">
      <div className="rounded-full border border-background overflow-hidden">
        <img src={person} alt="Person" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-1 text-sm">
        <div className="flex justify-between">
          <p className="font-bold">محمد سالم</p>
          <div className="flex">
            <img src={emptyStar} alt="Star" className="w-4" />
            <img src={filledStar} alt="Star" className="w-4" />
            <img src={filledStar} alt="Star" className="w-4" />
            <img src={filledStar} alt="Star" className="w-4" />
            <img src={filledStar} alt="Star" className="w-4" />
          </div>
        </div>
        <p className="font-thin">MohamedSallem24@gmail.com</p>
      </div>
      <div className="col-start-2 font-thin">"تعاملت مع مثلث لزيادة مبيعات متجري الإلكتروني، وكانت النتائج مبهرة حقًا! لقد زادت مبيعاتي بنسبة 30% خلال الشهر الأول. الفريق المحترف هناك قدم لي استراتيجية تسويقية مخصصة، وشرحوا لي كل خطوة بالتفصيل. أنصح بهم بشدة"</div>
    </div>
  );
}
export default TestimonialsCard;
