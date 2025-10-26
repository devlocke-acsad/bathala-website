
const TheGame = () => {
  return (
    <section id="the-game" className="py-20 px-4 bg-black text-white">
      <div className="w-3/5 mx-auto">
        <h2 className="text-4xl font-heinzHeinrich text-center mb-12">The Game: An Overview</h2>
        <h3 className="text-3xl font-dungeonMode mb-4">What is Bathala?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-4 font-satoshi">*Bathala* is a single-player, deck-building roguelike set in a world steeped in Filipino mythology. The core of the game revolves around a unique <strong>poker-based combat system</strong>. You are the Babaylan, a spiritual leader tasked with a divine quest: to journey through corrupted lands and restore cosmic harmony.</p>
            <p className="mb-4 font-satoshi">Each run challenges you to survive a procedurally generated world, where every encounter and every choice matters. You will:</p>
            <ul className="list-disc list-inside mb-4 font-satoshi">
              <li key="1"><strong>BUILD YOUR HAND:</strong> Draw from a 52-card deck and form powerful poker hands to attack, defend, and unleash special abilities.</li>
              <li key="2"><strong>SCULPT YOUR DECK:</strong> At campfires and shops, you can <strong>Purify</strong> (remove), <strong>Attune</strong> (upgrade), and <strong>Infuse</strong> (add) cards, strategically shaping your deck to suit your playstyle.</li>
              <li key="3"><strong>SURVIVE THE CYCLE:</strong> Journey through a world that shifts between day and night. Actions advance the clock, with the day offering safer passage and aight bringing more aggressive and dangerous foes. Survive five full cycles to confront the chapter's final boss.</li>
            </ul>
            <p className="font-satoshi">*Bathala* is a game of strategy, adaptation, and cultural discovery, designed to be endlessly replayable.</p>
          </div>
          <div>
            <h3 className="text-3xl font-dungeonMode mb-4">A Mission of Cultural Revival</h3>
            <p className="font-satoshi">Beyond its complex mechanics, *Bathala* was created to address the underrepresentation of Filipino mythology in the global gaming landscape. While many games draw from Western and Japanese folklore, the rich pantheon of deities, spirits, and creatures from the Philippines remains largely untapped.</p>
            <p className="font-satoshi">Our mission is to revitalize these indigenous narratives through interactive media, transforming passive learning into participatory cultural appreciation. By embedding Filipino lore, values, and aesthetics into its core, *Bathala* serves as an "interactive mythology museum"—an engaging way for a new generation to connect with their heritage.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheGame;
