export const navLinks = [
  { id: 1, text: 'الرئيسية', link: '#' },
  { id: 2, text: 'نبذة عنا', link: '#' },
  { id: 3, text: 'خدماتنا', link: '#' },
  { id: 4, text: 'المدونة', link: '#' },
];

export const navLinksElements = navLinks.map((navLink, index) => {
  return (
    <>
      <li key={navLink.id} className="max-md:w-full">
        <a href={navLink.link} className={`hover:text-supporter duration-medium font-bold block max-md:py-5 max-md:w-full max-md:text-center ${index !== 0 ? 'border-t' : ''}`}>
          {navLink.text}
        </a>
      </li>
    </>
  );
});
