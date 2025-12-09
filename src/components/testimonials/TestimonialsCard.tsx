import { TestimonialType } from "./types/types";
import { useContext } from "react";
import { WebsiteLangContext } from "../../App";
import RatingStars from "./RatingStars";

function TestimonialsCard({ testimonial }: { testimonial: TestimonialType }) {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { customer_image, customer_name, customer_email, rating, testimonial_text } = testimonial;

  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-[40px,1fr] gap-4 rounded-xl border border-half-white p-6 text-sm md:p-8"
    >
      <div className="overflow-hidden">
        <img
          src={customer_image.url}
          alt={customer_image.alt}
          className="h-10 w-10 rounded-full border border-background object-cover"
        />
      </div>
      <div className="flex flex-col gap-[2px] text-sm">
        <div className="flex justify-between">
          <p className="font-bold">{customer_name[websiteLang]}</p>
          <RatingStars rating={rating} />
        </div>
        <p className="font-thin">{customer_email}</p>
      </div>
      <div className="col-start-2 font-thin">{testimonial_text[websiteLang]}</div>
    </div>
  );
}
export default TestimonialsCard;
