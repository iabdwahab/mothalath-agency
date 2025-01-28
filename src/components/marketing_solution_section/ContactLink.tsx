import { GoArrowLeft } from "react-icons/go";

function ContactLink() {
  return (
    <a
      href="#"
      className="group flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 duration-medium hover:bg-main"
    >
      <span className="font-semibold text-main group-hover:text-white">
        تواصل الآن
      </span>
      <span className="flex items-center justify-center rounded-full bg-main p-1 text-white group-hover:bg-white group-hover:text-main">
        <GoArrowLeft />
      </span>
    </a>
  );
}
export default ContactLink;
