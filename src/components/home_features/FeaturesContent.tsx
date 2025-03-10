import { useContext } from "react";
import { MultiLangTextType } from "../../types/global";
import { WebsiteLangContext } from "../../App";

type propsType = {
  data: {
    heading: MultiLangTextType;
    description: MultiLangTextType;
  };
};

function FeaturesContent({ data }: propsType) {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { heading, description } = data;

  return (
    <div className="flex flex-col gap-4 max-lg:text-center lg:max-w-[55%]">
      <h2
        className="gradient-text text-4xl font-black leading-snug"
        dangerouslySetInnerHTML={{
          __html: heading[websiteLang],
        }}
        data-aos="fade-up"
      >
        {/* <span className="bg-gradient-to-l from-supporter to-background bg-clip-text text-supporter text-transparent">
      نحن لا نقوم
    </span>{" "}
    فقط بالتسويق، بل نبني علامتك التجارية ونحقق{" "}
    <span className="bg-gradient-to-l from-supporter to-background bg-clip-text text-supporter text-transparent">
      النمو المستدام
    </span> */}
      </h2>
      <p className="gradient-text" data-aos="fade-up">
        {description[websiteLang]}
      </p>
    </div>
  );
}
export default FeaturesContent;
