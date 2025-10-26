const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-dungeonMode mb-8 uppercase">
          ABOUT THE TEAM
        </h2>
        <p className="max-w-3xl mx-auto mb-8 font-satoshi">
          *Bathala* was developed as a Bachelor of Science in Computer Science
          thesis project at the University of Makati by:
        </p>
        <div className="flex justify-center gap-8 mb-8 font-satoshi">
          <p>Adizon, Exequel</p>
          <p>Cabus, Clement Harold Miguel</p>
          <p>Magtajas, Chester</p>
          <p>Olimberio, David Christian</p>
        </div>
        <p className="max-w-3xl mx-auto font-satoshi">
          We were advised and inspired by mythology experts **Mr. Nitten Nair
          (CEO of Mythlok)** and **Sir Alymer of Y Realm Studios**, whose
          guidance was invaluable in ensuring the respectful and authentic
          representation of Filipino culture.
        </p>
        <hr className="border-[#77888C] border-dotted border-2 w-2/3 mx-auto mt-16" />
      </div>
    </section>
  );
};

export default About;
