
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-8 font-satoshi">
          <Link href="https://adizon.itch.io/bathala">Itch.io</Link>
          <Link href="https://github.com/ExequielAdizon/Bathala">GitHub</Link>
          <Link href="#">Thesis Document</Link>
        </div>
        <p className="font-satoshi">Contact: adizon.exequel@gmail.com</p>
        <p className="font-satoshi">© 2024 Bathala</p>
      </div>
    </footer>
  );
};

export default Footer;
