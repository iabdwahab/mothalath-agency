import { useState } from "react";
import Container from "../Container";
import illustration from "/imgs/form/growth.png";
import { addDoc, collection } from "firebase/firestore";
import { firestoreDB } from "../../utils/firebaseUtils";

function ContactForm() {
  const inputStyles = `px-4 py-3 text-lg bg-black border border-[#ffffff34] rounded-lg text-white w-full`;
  const labelStyles = `flex flex-col gap-2`;
  const labelTitleStyles = `text-lg`;

  const [status, setStatus] = useState<"initial" | "submitting" | "sended">("initial");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    formData.name.length < 4
      ? alert("الاسم يجب أن يتكون من 4 أحرف على الأقل.")
      : setStatus("submitting");

    // try {
    //   const docRef = await addDoc(collection(firestoreDB, "messages"), formData);
    // } catch (error) {
    //   console.log(error);
    // }
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
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <label className={labelStyles}>
              <span className={labelTitleStyles}>الاسم:</span>
              <input
                type="text"
                name="name"
                placeholder="الاسم"
                className={inputStyles}
                onChange={handleChange}
              />
              <p className="text-sm text-red-500" id="name-error">
                يجب أن يتكون الاسم من 4 أحرف على الأقل.
              </p>
            </label>

            <label className={labelStyles}>
              <span className={labelTitleStyles}>رقم الهاتف:</span>
              <input
                type="tel"
                name="phone"
                placeholder="رقم الهاتف"
                className={inputStyles}
                onChange={handleChange}
              />
            </label>

            <label className={labelStyles}>
              <span className={labelTitleStyles}>البريد الإلكتروني:</span>
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                className={inputStyles}
                onChange={handleChange}
              />
            </label>

            <label className={labelStyles}>
              <span className={labelTitleStyles}>الخدمة المطلوبة:</span>
              <select className={inputStyles} name="service" onChange={handleChange}>
                <option value="" disabled>
                  اختر خدمة
                </option>
                <option value="web-dev">تصميم المواقع</option>
                <option value="social-media">تطوير</option>
              </select>
            </label>

            <label className={labelStyles}>
              <span className={labelTitleStyles}>الرسالة:</span>
              <textarea
                placeholder="الرسالة"
                name="message"
                className={inputStyles}
                rows={4}
                onChange={handleChange}
              />
            </label>

            <button className="mt-4 w-full rounded-lg bg-main px-4 py-2 text-lg font-bold text-background duration-medium hover:border-background hover:bg-background hover:text-main">
              إرسال
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
export default ContactForm;

//
// الاسم
// رقم الهاتف
// الإيميل
// الرسالة
// الخدمة المطلوبة
