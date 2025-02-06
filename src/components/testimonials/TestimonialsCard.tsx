import person from "/imgs/testimonials/photo-1.jpg";
import filledStar from "/imgs/testimonials/star-filled.svg";
import emptyStar from "/imgs/testimonials/star-empty.svg";
import { TestimonialType } from "./types/types";
import { useContext } from "react";
import { WebsiteLangContext } from "../../App";
import { FaStar } from "react-icons/fa";

function TestimonialsCard({ testimonial }: { testimonial: TestimonialType }) {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { customer_image, customer_name, customer_email, rating, testimonial_text } = testimonial;

  const ratingElements = [];

  for (let i = 5; i >= 1; i--) {
    const ratingNumber = Number(rating);

    ratingElements.push(
      <span>
        <FaStar className={`text-sm ${i <= ratingNumber ? "text-background" : "text-main"}`} />
      </span>,
    );
  }

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 rounded-xl border border-half-white p-6 text-sm md:p-8">
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
          <div className="flex gap-[2px]">{ratingElements}</div>
        </div>
        <p className="font-thin">{customer_email}</p>
      </div>
      <div className="col-start-2 font-thin">{testimonial_text[websiteLang]}</div>
    </div>
  );
}
export default TestimonialsCard;
