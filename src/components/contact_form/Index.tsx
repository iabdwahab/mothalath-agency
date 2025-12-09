import { useForm } from "react-hook-form";
import Container from "../Container";
import illustration from "/imgs/form/growth.png";
import ErrorMessage from "./ErrorMessage";
import { useContext, useRef } from "react";
import translations from "../../tanslations/translations";
import { WebsiteLangContext } from "../../App";
import useServicesList from "../../data/useServicesList";
import { FormDataInterface } from "./types";

function ContactForm() {
  const { websiteLang } = useContext(WebsiteLangContext);
  const { list: servicesList } = useServicesList();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormDataInterface>();
  const statusElement = useRef<HTMLParagraphElement>(null);

  async function onSubmit(data: FormDataInterface) {
    try {
      const formData = new FormData();
      formData.append("_wpcf7_unit_tag", "wpcf7-f26-o1");
      formData.append("your-name", data["your-name"]);
      formData.append("your-phone", data["your-phone"]);
      formData.append("your-email", data["your-email"]);
      formData.append("your-service", data["your-service"]);
      formData.append("your-message", data["your-message"]);

      const response = await fetch(
        "https://mothalthagency.com/wp-json/contact-form-7/v1/contact-forms/602/feedback",
        {
          method: "POST",
          body: formData,
        },
      );

      const result = await response.json();

      console.log("CF7 API response:", result);

      if (result.status === "mail_sent") {
        if (statusElement.current) {
          statusElement.current.textContent = translations.send_succes[websiteLang];
          statusElement.current.classList.add("bg-green-500");
          statusElement.current.classList.remove("hidden");
        }
        reset();
      } else {
        throw new Error("CF7 did not accept submission.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      if (statusElement.current) {
        statusElement.current.textContent = translations.try_again[websiteLang];
        statusElement.current.classList.add("bg-red-500");
        statusElement.current.classList.remove("hidden");
      }
    }
  }

  return (
    <section className="bg-black py-section capitalize text-white">
      <Container className="grid-cols-2 lg:grid">
        <div data-aos="fade-left" className="flex items-center justify-center max-lg:hidden">
          <img src={illustration} alt="Illustration" className="w-full" />
        </div>

        <div
          data-aos="fade-right"
          className="mx-auto w-full max-w-lg rounded-lg border border-[#ffffff34] px-4 py-8"
        >
          <h4 className="text-center text-3xl text-background">
            {translations.contact_us[websiteLang]}
          </h4>
          <hr className="my-6 border-[#ffffff34]" />
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <label className="flex flex-col gap-2">
              <span className="text-lg">{translations.name[websiteLang]}:</span>
              <input
                type="text"
                {...register("your-name", {
                  required: translations.name_required[websiteLang],
                  minLength: { value: 4, message: translations.name_4_chars[websiteLang] },
                })}
                placeholder={translations.name[websiteLang]}
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
              />
              {errors["your-name"] && <ErrorMessage>{errors["your-name"].message}</ErrorMessage>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-lg">{translations.phone_number[websiteLang]}:</span>
              <input
                type="text"
                {...register("your-phone", { required: translations.phone_required[websiteLang] })}
                placeholder={translations.phone_number[websiteLang]}
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
              />
              {errors["your-phone"] && <ErrorMessage>{errors["your-phone"].message}</ErrorMessage>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-lg">{translations.email[websiteLang]}:</span>
              <input
                type="email"
                {...register("your-email", {
                  required: translations.email_required[websiteLang],
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: translations.email_correct[websiteLang],
                  },
                })}
                placeholder={translations.email[websiteLang]}
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
              />
              {errors["your-email"] && <ErrorMessage>{errors["your-email"].message}</ErrorMessage>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-lg">{translations.service[websiteLang]}:</span>
              <select
                {...register("your-service", {
                  required: translations.service_required[websiteLang],
                })}
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
              >
                <option value="">{translations.service_choose[websiteLang]}</option>
                {servicesList.map((service, index) => (
                  <option key={index} value={service.acf.name.en}>
                    {service.acf.name[websiteLang]}
                  </option>
                ))}
              </select>
              {errors["your-service"] && (
                <ErrorMessage>{errors["your-service"].message}</ErrorMessage>
              )}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-lg">{translations.message[websiteLang]}:</span>
              <textarea
                {...register("your-message", {
                  required: translations.message_required[websiteLang],
                  minLength: { value: 10, message: translations.message_10_chars[websiteLang] },
                })}
                placeholder={translations.message[websiteLang]}
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
                rows={4}
              />
              {errors["your-message"] && (
                <ErrorMessage>{errors["your-message"].message}</ErrorMessage>
              )}
            </label>

            <button
              className="mt-4 w-full rounded-lg bg-main px-4 py-2 text-lg font-bold capitalize text-background duration-medium hover:border-background hover:bg-background hover:text-main"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? translations.sending[websiteLang] : translations.send[websiteLang]}
            </button>
          </form>
          <p ref={statusElement} className="mt-3 hidden rounded-lg py-2 text-center font-bold"></p>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;
