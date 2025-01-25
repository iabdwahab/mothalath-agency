export type slideDataType = {
  id: number;
  textSide: {
    title: string;
    description: string;
  };
  ImageSide: {
    title: string;
    description: string;
  };
};

export type textSideType = {
  data: {
    title: string;
    description: string;
  };
  setCurrentSlide: Function;
};

export type imageSideType = {
  id: number;
  data: {
    title: string;
    description: string;
  };
};
