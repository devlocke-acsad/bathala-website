
const Features = () => {
  return (
    <section id="features" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heinzHeinrich text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
            <h3 className="text-2xl font-dungeonMode mb-2">Strategic Poker-Based Combat</h3>
            <p className="font-satoshi">Combat in *Bathala* is intuitive yet deep. You don't just play cards; you form poker hands. A **Pair** might be a simple jab, but a **Full House** or a **Straight Flush** can unleash devastating power.</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
            <h3 className="text-2xl font-dungeonMode mb-2">The Four Elemental Suits</h3>
            <p className="font-satoshi">The standard card suits are replaced with four elemental forces from Filipino folklore: Apoy (Fire), Tubig (Water), Lupa (Earth), and Hangin (Air).</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
            <h3 className="text-2xl font-dungeonMode mb-2">A Challenge That Adapts to You (DDA)</h3>
            <p className="font-satoshi">*Bathala* features a Dynamic Difficulty Adjustment system that learns from how you play, ensuring the challenge is always fair and engaging.</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
            <h3 className="text-2xl font-dungeonMode mb-2">Endless Worlds with Procedural Generation (PCG)</h3>
            <p className="font-satoshi">No two journeys are the same. *Bathala* uses a sophisticated procedural generation system to create a unique overworld map for every run.</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
            <h3 className="text-2xl font-dungeonMode mb-2">The Landás System: A Narrative Choice</h3>
            <p className="font-satoshi">Your choices to Slay or Spare foes shape your narrative journey, influencing story outcomes and your ultimate ending.</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-800 rounded-full mx-auto mb-4"></div>
            <h3 className="text-2xl font-dungeonMode mb-2">Powerful Relics & Potions</h3>
            <p className="font-satoshi">Discover and equip powerful Agimat (Relics) and use single-use potions to gain the upper hand in battle.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
