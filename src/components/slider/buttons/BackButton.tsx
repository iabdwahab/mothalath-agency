import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SliderContext } from "../context";
import Button from "./Button";

function BackButton() {
  const { setCurrentSlideIndex, currentSlideIndex } = useContext(SliderContext);
  const isLastSlide = currentSlideIndex === 0;

  function goBack() {
    setCurrentSlideIndex((prevIndex: number) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }

      return prevIndex;
    });
  }

  return (
    <Button onClick={goBack} disabled={isLastSlide}>
      <IoIosArrowForward />
    </Button>
  );
}
export default BackButton;
