function Navbar() {
  const navLinks = [
    { id: 1, text: "الرئيسية", link: "#" },
    { id: 2, text: "من نحن", link: "#" },
    { id: 3, text: "خدماتنا", link: "#" },
    { id: 4, text: "الأسئلة الشائعة", link: "#" },
    { id: 5, text: "تواصل معنا", link: "#" },
  ];

  const navLinksElements = navLinks.map((navLink) => {
    return (
      <li key={navLink.id}>
        <a
          href={navLink.link}
          className="text-base duration-slow hover:text-supporter"
        >
          {navLink.text}
        </a>
      </li>
    );
  });

  return (
    <div className="font-bold text-main lg:mx-auto">
      <h4 className="text-h4 mb-4">روابط مختصرة</h4>
      <nav>
        <ul className="grid gap-4">{navLinksElements}</ul>
      </nav>
    </div>
  );
}
export default Navbar;
