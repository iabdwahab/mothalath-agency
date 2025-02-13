import { useForm } from "react-hook-form";
import Container from "../Container";
import illustration from "/imgs/form/growth.png";
import { addDoc, collection } from "firebase/firestore";
import { firestoreDB } from "../../utils/firebaseUtils";
import ErrorMessage from "./ErrorMessage";
import { useRef } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  const statusElement = useRef<HTMLParagraphElement>(null);

  async function onSubmit(data: FormData) {
    try {
      await addDoc(collection(firestoreDB, "messages"), data);
      alert("تم إرسال الرسالة بنجاح!");
      if (statusElement.current) {
        statusElement.current.textContent = "تم الإرسال بنجاح.";
        statusElement.current.classList.add("bg-green-500");
        statusElement.current.classList.remove("hidden");
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);

      if (statusElement.current) {
        statusElement.current.textContent = "يرجى المحاولة مرة أخرى.";
        statusElement.current.classList.add("bg-red-500");
        statusElement.current.classList.remove("hidden");
      }
    }
  }

  return (
    <section className="bg-black py-section text-white">
      <Container className="grid-cols-2 lg:grid">
        <div className="flex items-center justify-center max-lg:hidden">
          <img src={illustration} alt="Illustration" className="w-full" />
        </div>
        <div className="mx-auto w-full max-w-lg rounded-lg border border-[#ffffff34] px-4 py-8">
          <h4 className="text-center text-3xl text-background">تواصل معنا</h4>
          <hr className="my-6 border-[#ffffff34]" />
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <label className="flex flex-col gap-2">
              <span className="text-lg">الاسم:</span>
              <input
                type="text"
                {...register("name", {
                  required: "يجب إدخال الاسم",
                  minLength: { value: 4, message: "يجب أن يتكون الاسم من 4 أحرف على الأقل" },
                })}
                placeholder="الاسم"
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
              />
              {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-lg">رقم الهاتف:</span>
              <input
                type="tel"
                {...register("phone", { required: "يجب إدخال رقم الهاتف" })}
                placeholder="رقم الهاتف"
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
              />
              {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-lg">البريد الإلكتروني:</span>
              <input
                type="email"
                {...register("email", {
                  required: "يجب إدخال البريد الإلكتروني",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "يجب إدخال بريد إلكتروني صحيح",
                  },
                })}
                placeholder="البريد الإلكتروني"
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-lg">الخدمة المطلوبة:</span>
              <select
                {...register("service", { required: "يجب اختيار خدمة" })}
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
              >
                <option value="">اختر خدمة</option>
                <option value="web-dev">تصميم المواقع</option>
                <option value="social-media">تطوير</option>
              </select>
              {errors.service && <ErrorMessage>{errors.service.message}</ErrorMessage>}
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-lg">الرسالة:</span>
              <textarea
                {...register("message", {
                  required: "يجب إدخال الرسالة",
                  minLength: { value: 10, message: "يجب أن تكون الرسالة 10 أحرف على الأقل" },
                })}
                placeholder="الرسالة"
                className="w-full rounded-lg border border-[#ffffff34] bg-black px-4 py-3 text-lg text-white"
                rows={4}
              />
              {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
            </label>

            <button
              className="mt-4 w-full rounded-lg bg-main px-4 py-2 text-lg font-bold text-background duration-medium hover:border-background hover:bg-background hover:text-main"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "جاري الإرسال..." : "إرسال"}
            </button>
          </form>
          <p ref={statusElement} className="mt-3 hidden rounded-lg py-2 text-center font-bold"></p>
        </div>
      </Container>
    </section>
  );
}

export default ContactForm;
