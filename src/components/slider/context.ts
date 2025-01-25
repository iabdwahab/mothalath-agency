import { createContext } from 'react';
import { slideDataType } from './types';

const defaultValues = {
  currentSlideIndex: 0,
  setCurrentSlideIndex: () => {},
  slide: {
    id: 0,
    ImageSide: {
      title: '',
      description: '',
    },
    textSide: {
      title: '',
      description: '',
    },
  },
};

export const SliderContext = createContext<{
  currentSlideIndex: number;
  setCurrentSlideIndex: Function;
  slide: slideDataType;
}>(defaultValues);
