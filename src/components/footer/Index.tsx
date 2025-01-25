import Container from '../Container';
import Info from './Info';
import Navbar from './Navbar';
import Contact from './Contact';

function Footer() {
  return (
    <footer className="bg-background text-black py-8 lg:py-16">
      <Container className="grid md:grid-cols-2 lg:grid-cols-3 max-lg:gap-7">
        <Info />
        <Navbar />
        <Contact />
      </Container>
    </footer>
  );
}

export default Footer;
