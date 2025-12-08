import { createContext } from "react";
import { slideDataType } from "./types";

const defaultValues = {
  slidesLength: 0,
  currentSlideIndex: 0,
  setCurrentSlideIndex: () => {},
  slide: {
    slug: "",
    acf: {
      services_slider_data: {
        text_side: {
          title: { en: "", ar: "" },
          description: { en: "", ar: "" },
        },
        image_side: {
          title: { en: "", ar: "" },
          description: { en: "", ar: "" },
          hero_image: {
            url: "",
            alt: "",
          },
          illustration_image: {
            url: "",
            alt: "",
          },
        },
      },
    },
  },
};

export const SliderContext = createContext<{
  currentSlideIndex: number;
  setCurrentSlideIndex: Function;
  slide: slideDataType;
  slidesLength: number;
}>(defaultValues);
