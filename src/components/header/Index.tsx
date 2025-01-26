import Container from '../Container';

import logoText from '/logo-text.png';
import ContactButton from './ContactButton';

function Header() {
  const navLinks = [
    { id: 1, text: 'الرئيسية', link: '#' },
    { id: 2, text: 'نبذة عنا', link: '#' },
    { id: 3, text: 'خدماتنا', link: '#' },
    { id: 4, text: 'المدونة', link: '#' },
  ];

  const navLinksElements = navLinks.map((navLink) => {
    return (
      <li key={navLink.id} className="max-md:w-full">
        <a href={navLink.link} className="hover:text-supporter duration-medium font-bold block max-md:py-2 max-md:w-full max-md:text-center">
          {navLink.text}
        </a>
      </li>
    );
  });

  return (
    <header className="fixed z-50 mx-auto w-[calc(100%-24px)] top-3 left-0 right-0 max-w-[940px]">
      <nav className="hidden flex-col  gap-2 absolute left-0 top-[calc(100%+20px)] w-full py-4 px-6 rounded-2xl bg-[#1E1E1E1A] backdrop-blur-[27px]">
        <ul className="flex flex-col items-center w-full gap-2">{navLinksElements}</ul>
        <ContactButton className="text-center py-[10px]" />
      </nav>
      <Container className="flex justify-between items-center py-4 px-6 rounded-full border-[0.1px] border-[#ffffff34] bg-[#1E1E1E1A] backdrop-blur-[27px] ">
        <div>
          <a href="#">
            <img src={logoText} alt="Logo" className="w-24" />
          </a>
        </div>
        <nav className="max-md:hidden">
          <ul className="flex items-center w-full md:gap-12">{navLinksElements}</ul>
        </nav>
        <div className="max-md:hidden">
          <a href="#" className="px-12 py-[6px] text-sm font-black bg-main text-background hover:bg-background hover:text-main hover:outline outline-1 outline-main duration-medium rounded-full">
            تواصل معنا
          </a>
        </div>
        <button className="md:hidden text-2xl border border-background text-background hover:bg-background hover:text-main hover:border-main duration-medium p-1 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </button>
      </Container>
    </header>
  );
}

export default Header;
