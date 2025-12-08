import { ImageType, MultiLangTextType } from "../../../types/global";

export interface TestimonialType {
  customer_image: ImageType;
  customer_name: MultiLangTextType;
  customer_email: string;
  rating: string;
  testimonial_text: MultiLangTextType;
}
