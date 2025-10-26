
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(/images/bathala_hero.png)" }}>
      <div className="text-center text-white">
        <h1 className="text-8xl font-bathala">BATHALA</h1>
                <p className="text-2xl mt-4 font-satoshi">Mend the Shattered Balance.</p>
        <p className="text-lg mt-2 font-satoshi">Wield divine power in a Filipino mythology-inspired roguelike where poker meets ancient spirits. Can you restore what was broken?</p>
        <button className="bg-white text-black px-8 py-3 mt-8 rounded-full font-bold">Play Now on Itch.io</button>
      </div>
    </section>
  );
};

export default Hero;
