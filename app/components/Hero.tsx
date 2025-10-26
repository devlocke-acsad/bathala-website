
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
        <h1 className="text-[16rem] font-pixeled text-white text-center" >bathala</h1>
        <div className="w-[40vw] min-w-[320px] max-w-[700px] text-center text-white">
          <div className="flex justify-center" style={{gap: '1rem',}}>
            <Link
              href="https://play.bathala.quest/"
              className="block px-16 py-6 font-dungeonMode text-3xl no-underline relative"
              style={{
                border: '4px double',
                borderColor: '#77888C',
                color: '#77888C',
                background: 'transparent',
                borderRadius: '8px',
                letterSpacing: '0.1em',
                fontWeight: 700,
                textShadow: '0 2px 0 #222',
              }}
            >
              <span style={{padding: '1rem', display: 'inline-block'}}>&gt; PLAY NOW</span>
            </Link>
            <Link
              href="#the-game"
              className="block px-16 py-6 font-dungeonMode text-3xl no-underline relative"
              style={{
                border: '4px double',
                borderColor: '#77888C',
                color: '#77888C',
                background: 'transparent',
                borderRadius: '8px',
                letterSpacing: '0.1em',
                fontWeight: 700,
                textShadow: '0 2px 0 #222',
              }}
            >
              <span style={{padding: '1rem', display: 'inline-block'}}>&gt; LEARN MORE</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
