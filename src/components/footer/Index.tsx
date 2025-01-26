import Container from "../Container";
import Info from "./Info";
import Navbar from "./Navbar";
import Contact from "./Contact";

function Footer() {
  return (
    <footer className="bg-background py-8 text-black lg:py-16">
      <Container className="grid max-lg:gap-7 max-md:text-center md:grid-cols-2 lg:grid-cols-3">
        <Info />
        <Navbar />
        <Contact />
      </Container>
    </footer>
  );
}

export default Footer;
