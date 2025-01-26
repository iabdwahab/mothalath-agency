function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a href="#" className={`px-12 py-[6px] text-sm font-black bg-main text-background hover:bg-background hover:text-main hover:outline outline-1 outline-main duration-medium rounded-full ${className}`}>
      تواصل معنا
    </a>
  );
}
export default ContactButton;
