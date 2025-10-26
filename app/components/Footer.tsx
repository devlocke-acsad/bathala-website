
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 font-satoshi">
          <Link href="https://adizon.itch.io/bathala" className="hover:text-[#77888C] transition-colors">Itch.io</Link>
          <Link href="https://github.com/ExequielAdizon/Bathala" className="hover:text-[#77888C] transition-colors">GitHub</Link>
          <Link href="#" className="hover:text-[#77888C] transition-colors">Thesis Document</Link>
        </div>
        <p className="font-satoshi mt-4">Contact: adizon.exequel@gmail.com</p>
        <p className="font-satoshi">© 2024 Bathala</p>
      </div>
    </footer>
  );
};

export default Footer;
