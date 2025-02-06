import { ImageType, MultiLangTextType } from "../../../types/global";

export type ArticleType = {
  acf: {
    article_image: ImageType;
    title: MultiLangTextType;
    summary: MultiLangTextType;
    article_body: MultiLangTextType;
  };
  date_gmt: string;
  slug: string;
};
