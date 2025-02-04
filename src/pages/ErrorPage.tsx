import { Link } from "react-router-dom";
import Container from "../components/Container";

function ErrorPage() {
  return (
    <main>
      <Container className="flex min-h-screen flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">عذرًا؛ الصفحة غير موجودة.</h1>
        <p>
          بإمكانك الذهاب إلى:{" "}
          <Link to="/" className="font-bold text-background">
            الصفحة الرئيسة
          </Link>
          .
        </p>
      </Container>
    </main>
  );
}
export default ErrorPage;
