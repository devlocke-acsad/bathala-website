import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-black text-white">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-3xl font-dungeonMode text-center mb-12 uppercase">
          KEY FEATURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-4">
            <h3 className="text-2xl font-dungeonMode mb-2">
              Strategic Poker-Based Combat
            </h3>
            <p className="font-satoshi">
              Combat in *Bathala* is intuitive yet deep. You don't just play
              cards; you form poker hands. A <strong>Pair</strong> might be a
              simple jab, but a <strong>Full House</strong> or a{" "}
              <strong>Straight Flush</strong> can unleash devastating power.
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-dungeonMode mb-2">
              The Four Elemental Suits
            </h3>
            <p className="font-satoshi">
              The standard card suits are replaced with four elemental forces
              from Filipino folklore: Apoy (Fire), Tubig (Water), Lupa (Earth),
              and Hangin (Air).
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-dungeonMode mb-2">
              A Challenge That Adapts to You (DDA)
            </h3>
            <p className="font-satoshi">
              *Bathala* features a Dynamic Difficulty Adjustment system that
              learns from how you play, ensuring the challenge is always fair
              and engaging.
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-dungeonMode mb-2">
              Endless Worlds with Procedural Generation (PCG)
            </h3>
            <p className="font-satoshi">
              No two journeys are the same. *Bathala* uses a sophisticated
              procedural generation system to create a unique overworld map for
              every run.
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-dungeonMode mb-2">
              The Landás System: A Narrative Choice
            </h3>
            <p className="font-satoshi">
              Your choices to Slay or Spare foes shape your narrative journey,
              influencing story outcomes and your ultimate ending.
            </p>
          </div>
          <div className="text-center p-4">
            <h3 className="text-2xl font-dungeonMode mb-2">
              Powerful Relics & Potions
            </h3>
            <p className="font-satoshi">
              Discover and equip powerful Agimat (Relics) and use single-use
              potions to gain the upper hand in battle.
            </p>
          </div>
        </div>
        <hr className="border-[#77888C] border-dotted border-2 w-2/3 mx-auto mt-16" />
      </div>
    </section>
  );
};

export default Features;
