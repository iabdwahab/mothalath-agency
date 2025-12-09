import { FaStar } from "react-icons/fa";

function RatingStars({ rating }: { rating: string }) {
  const ratingElements = [];

  for (let i = 5; i >= 1; i--) {
    const ratingNumber = Number(rating);

    ratingElements.push(
      <span key={i}>
        <FaStar
          className={`text-sm ${i <= ratingNumber ? "text-background" : "text-[#A7FFBC29]"}`}
        />
      </span>,
    );
  }

  return <div className="flex gap-[1px]">{ratingElements}</div>;
}
export default RatingStars;
