
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-8 font-satoshi">
          <Link href="#">Itch.io</Link>
          <Link href="#">GitHub</Link>
          <Link href="#">Thesis Document</Link>
        </div>
        <p className="font-satoshi">Contact: example@email.com</p>
        <p className="font-satoshi">© 2025 Your Team Name</p>
      </div>
    </footer>
  );
};

export default Footer;
