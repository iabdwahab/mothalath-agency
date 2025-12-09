import { useContext } from "react";
import { ArticleType } from "./types/types";
import { WebsiteLangContext } from "../../App";
import { formatISOToDMY } from "../../utils/dateUtils";
import { truncateText } from "../../utils/textUtils";
import { Link } from "react-router-dom";

function Article({ data }: { data: ArticleType }) {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { slug, date_gmt, acf } = data;
  const { article_image, title, summary } = acf;

  return (
    <div className="flex flex-col gap-4" data-aos="fade-up">
      <Link
        to={`#${slug}`}
        className="group relative flex items-center justify-center overflow-hidden rounded-xl"
      >
        <img
          src={article_image.url}
          alt={article_image.alt}
          className="h-64 w-full object-cover duration-medium group-hover:blur-[3px]"
        />
      </Link>

      <h5 className="text-base font-bold">
        <Link to={`#${slug}`} className="hover:duration-hover line-clamp-2 hover:text-supporter">
          {title[websiteLang]}
        </Link>
      </h5>
      <p className="text-[13px] font-thin">{truncateText(summary[websiteLang], 180)}</p>
      <p className="text-xs font-bold">{formatISOToDMY(date_gmt)}</p>
    </div>
  );
}
export default Article;
