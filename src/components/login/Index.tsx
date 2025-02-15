import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { firebaseAuth } from "../../utils/firebaseUtils";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = ({ setIsAuthenticated }: { setIsAuthenticated: Function }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    signInWithEmailAndPassword(firebaseAuth, data.email, data.password).then((userCredential) => {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-semibold text-[#244441]">تسجيل الدخول</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-right">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-[#244441]">البريد الإلكتروني</label>
            <input
              type="email"
              {...register("email", {
                required: "البريد الإلكتروني مطلوب",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "صيغة البريد الإلكتروني غير صحيحة",
                },
              })}
              className={`mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring ${
                errors.email ? "border-red-500" : "border-[#42AA8E]"
              }`}
              placeholder="أدخل بريدك الإلكتروني"
              style={{ backgroundColor: "#0006EA0D" }}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-[#244441]">كلمة المرور</label>
            <input
              type="password"
              {...register("password", {
                required: "كلمة المرور مطلوبة",
                minLength: {
                  value: 6,
                  message: "يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل",
                },
              })}
              className={`mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring ${
                errors.password ? "border-red-500" : "border-[#42AA8E]"
              }`}
              placeholder="أدخل كلمة المرور"
              style={{ backgroundColor: "#0006EA0D" }}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#42AA8E] px-4 py-2 text-white transition hover:bg-[#244441] focus:outline-none focus:ring"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
