import Container from '../Container';

import logoText from '/logo-text.png';

function Header() {
  const navLinks = [
    { id: 1, text: 'الرئيسية', link: '#' },
    { id: 2, text: 'نبذة عنا', link: '#' },
    { id: 3, text: 'خدماتنا', link: '#' },
    { id: 4, text: 'المدونة', link: '#' },
  ];

  const navLinksElements = navLinks.map((navLink) => {
    return (
      <li key={navLink.id}>
        <a href={navLink.link} className="hover:text-supporter duration-medium font-bold">
          {navLink.text}
        </a>
      </li>
    );
  });

  return (
    <header>
      <Container className="fixed w-full top-3 left-0 right-0 z-50 max-w-[940px] flex justify-between items-center h-[70px] px-8 py-4 rounded-full border-[0.1px] border-[#ffffff34] bg-[#1E1E1E1A] bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">
        <div>
          <a href="#">
            <img src={logoText} alt="Logo" className="w-24" />
          </a>
        </div>
        <nav>
          <ul className="flex gap-12">{navLinksElements}</ul>
        </nav>
        <div>
          <a href="#" className="px-12 py-[6px] text-sm font-black bg-main text-background hover:bg-background hover:text-main hover:outline outline-1 outline-main duration-medium rounded-full">
            تواصل معنا
          </a>
        </div>
      </Container>
    </header>
  );
}
export default Header;
