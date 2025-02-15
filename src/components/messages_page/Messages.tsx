import { useEffect, useState } from "react";
import Container from "../Container";
import SectionHeading from "../global/SectionHeading";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../utils/firebaseUtils";

function Messages() {
  const [messages, setMessages] = useState<DocumentData[]>([]);
  const [copiedField, setCopiedField] = useState<{ id: string; field: string } | null>(null);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(firestoreDB, "messages"));
      const messagesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(messagesList);
    }

    getData();
  }, []);

  const copyToClipboard = (id: string, field: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField({ id, field });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <main className="min-h-screen py-24 text-white">
      <Container>
        <SectionHeading>📩 الرسائل الواردة</SectionHeading>

        {messages.length === 0 ? (
          <p className="mt-6 text-center text-lg text-gray-400">لا توجد رسائل حاليًا.</p>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className="rounded-2xl border border-[#eeeeee4f] bg-black p-6 shadow-lg"
              >
                <h3 className="mb-6 text-xl font-bold text-background">✉️ تفاصيل الرسالة</h3>

                <div className="grid gap-2 text-lg">
                  {/* Function to render each field with a copy button */}
                  {[
                    { label: "👤 الاسم", value: message.name, field: "name" },
                    { label: "📞 الهاتف", value: message.phone, field: "phone" },
                    { label: "✉️ البريد الإلكتروني", value: message.email, field: "email" },
                    { label: "🛠️ الخدمة", value: message.service, field: "service" },
                    { label: "💬 الرسالة", value: message.message, field: "message" },
                  ].map(({ label, value, field }) => (
                    <div
                      key={field}
                      className="flex items-start justify-between border-b border-[#eeeeee4f] bg-black px-3 py-2"
                    >
                      <p className="w-full max-w-full overflow-hidden break-all">
                        <span className="font-semibold text-gray-300">{label}:</span> {value}
                      </p>
                      <button
                        onClick={() => copyToClipboard(message.id, field, value)}
                        className={`rounded-lg px-3 py-1 text-sm font-semibold transition duration-200 ${copiedField?.id === message.id && copiedField?.field === field ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"} `}
                      >
                        {copiedField?.id === message.id && copiedField?.field === field
                          ? "✅ تم النسخ!"
                          : "📋 نسخ"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </main>
  );
}
export default Messages;
