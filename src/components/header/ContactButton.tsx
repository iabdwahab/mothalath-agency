function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#"
      className={`rounded-full bg-main px-12 text-sm font-black text-background outline-1 outline-main duration-medium hover:bg-background hover:text-main hover:outline ${className}`}
    >
      تواصل معنا
    </a>
  );
}
export default ContactButton;
