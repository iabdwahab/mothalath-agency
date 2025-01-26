import { useContext } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { SliderContext } from "../context";
import Button from "./Button";

function NextButton() {
  const { slidesLength, currentSlideIndex, setCurrentSlideIndex } =
    useContext(SliderContext);
  const isLastSlide = currentSlideIndex >= slidesLength - 1;

  function goNext() {
    setCurrentSlideIndex((prevIndex: number) => {
      if (prevIndex < slidesLength - 1) {
        return prevIndex + 1;
      }

      return prevIndex;
    });
  }

  return (
    <Button onClick={goNext} disabled={isLastSlide}>
      <IoIosArrowBack />
    </Button>
  );
}
export default NextButton;
