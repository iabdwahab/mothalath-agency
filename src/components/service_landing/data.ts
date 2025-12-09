import imageOne from "/imgs/services/web-dev.jpg";
import imageTwo from "/imgs/services/social-media.avif";
import imageThree from "/imgs/services/payed-ads.jpg";

type ServiceData = {
  heading: string;
  description: string;
  bgImage: string;
};

type ServicesData = {
  [key: string]: ServiceData;
};

export const servicesData: ServicesData = {
  "web-dev": {
    heading: "صمم موقعك الإلكتروني واحترف عالم الإنترنت",
    description:
      "نحن نساعدك في تحقيق ذلك! فريقنا من المصممين المهرة والمبرمجين المتخصصين يقدم لك حلول تصميم مواقع إلكترونية مبتكرة تلبي احتياجاتك وتتجاوز توقعhتك.",
    bgImage: imageOne,
  },
  "social-media": {
    heading: "إدارة السوشيال ميديا: مفتاح نجاحك في عالم الإنترنت",
    description:
      "إدارة السوشيال ميديا هي الحل الأمثل! فهي عملية استراتيجية تهدف إلى بناء وتقوية علاقتك بجمهورك المستهدف عبر مختلف منصات التواصل الاجتماعي.",
    bgImage: imageTwo,
  },
  "payed-ads": {
    heading: "الإعلانات الممولة: دفعة قوية لعلامتك التجارية",
    description:
      "الإعلانات الممولة هي الحل الأمثل! فهي أداة تسويقية قوية تسمح لك بعرض إعلاناتك بشكل مدفوع على مختلف المنصات الرقمية، مما يضمن وصولها إلى الجمهور المستهدف بدقة.",
    bgImage: imageThree,
  },
  "google-ads": {
    heading: "إعلانات جوجل: مفتاحك للوصول إلى العملاء المحتملين",
    description:
      "إعلانات جوجل هي الحل الأمثل! فهي منصة إعلانية قوية تتيح لك عرض إعلاناتك النصية أو المرئية لملايين المستخدمين الذين يبحثون عن منتجات أو خدمات مشابهة لما تقدمه.",
    bgImage: imageOne,
  },
  "story-telling": {
    heading: "تصوير وإعلانات سينمائية: احكي قصتك بصريًا",
    description:
      "التصوير والإعلانات السينمائية هي الوسيلة المثلى لتحقيق ذلك. فهي تجمع بين القوة البصرية لسرد القصص والإمكانيات الإبداعية التي لا حدود لها.",
    bgImage: imageTwo,
  },
  "motion-graphic": {
    heading: "فيديو الموشن جرافيك: قصة مرئية تجذب الأنظار",
    description:
      "فيديو الموشن جرافيك هو الحل الأمثل! فهو فن تحريك الرسوم والتصاميم لإنشاء مقاطع فيديو قصيرة ومؤثرة، قادرة على جذب الانتباه وتبسيط المعلومات المعقدة.",
    bgImage: imageThree,
  },
};
