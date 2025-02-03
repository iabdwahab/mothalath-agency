import { createContext } from "react";
import { slideDataType } from "./types";

const defaultValues = {
  slidesLength: 0,
  currentSlideIndex: 0,
  setCurrentSlideIndex: () => {},
  slide: {
    id: 0,
    ImageSide: {
      title: "",
      description: "",
    },
    textSide: {
      title: "",
      description: "",
      servicePageLink: "",
    },
  },
};

export const SliderContext = createContext<{
  currentSlideIndex: number;
  setCurrentSlideIndex: Function;
  slide: slideDataType;
  slidesLength: number;
}>(defaultValues);
