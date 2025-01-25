function Navbar() {
  const navLinks = [
    { id: 1, text: 'الرئيسية', link: '#' },
    { id: 2, text: 'من نحن', link: '#' },
    { id: 3, text: 'خدماتنا', link: '#' },
    { id: 4, text: 'الأسئلة الشائعة', link: '#' },
    { id: 5, text: 'تواصل معنا', link: '#' },
  ];

  const navLinksElements = navLinks.map((navLink) => {
    return (
      <li key={navLink.id}>
        <a href={navLink.link} className="hover:text-supporter text-base duration-slow">
          {navLink.text}
        </a>
      </li>
    );
  });

  return (
    <div className="text-main font-bold lg:mx-auto">
      <h4 className="mb-4 text-h4">روابط مختصرة</h4>
      <nav>
        <ul className="grid gap-4">{navLinksElements}</ul>
      </nav>
    </div>
  );
}
export default Navbar;
