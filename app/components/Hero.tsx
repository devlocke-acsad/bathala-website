
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="h-screen relative flex items-center justify-center">
      <div 
        className="absolute inset-0 w-screen h-screen bg-cover bg-center -z-10"
        style={{
          backgroundImage: "url(/images/bathala_hero.png)",
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-[16rem] font-pixeled text-white text-center">bathala</h1>
        <div className="w-[40vw] min-w-[320px] max-w-[700px] text-center text-white">
          <p className="text-3xl font-dungeonMode">Mend the Shattered Balance.</p>
          <p className="text-xl mt-2 font-dungeonMode">Wield divine power in a Filipino mythology-inspired roguelike where poker meets ancient spirits. Can you restore what was broken?</p>
          <Link
            href="https://play.bathala.quest/"
            className="block mx-auto mt-10 px-16 py-6 font-dungeonMode text-3xl text-[#8ca0b6] relative"
            style={{
              border: '4px double',
              borderColor: '#8ca0b6',
              background: 'transparent',
              borderRadius: '8px',
              letterSpacing: '0.1em',
              fontWeight: 700,
              textShadow: '0 2px 0 #222',
            }}
          >
            <span style={{padding: '1rem', display: 'inline-block'}}>&gt; PLAY NOW</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
