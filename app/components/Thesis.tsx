
const Thesis = () => {
  return (
    <section id="the-thesis" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heinzHeinrich text-center mb-12">Core Research Contributions</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-3xl font-dungeonMode mb-4">1. Cultural Preservation through Interactive Media</h3>
            <p className="mb-4 font-satoshi">A primary objective of this research is to demonstrate the viability of digital games as "interactive mythology museums." The project addresses the significant underrepresentation of Filipino folklore in mainstream gaming by developing a system to authentically integrate cultural narratives into game mechanics.</p>
            <ul className="list-disc list-inside font-satoshi">
              <li>**Implementation:** This was achieved through extensive research into Filipino folklore, consultation with cultural experts, and the careful translation of mythological themes, characters, and values into the game's design, art, and narrative.</li>
            </ul>
          </div>
          <div className="mb-12">
            <h3 className="text-3xl font-dungeonMode mb-4">2. A Rule-Based Dynamic Difficulty Adjustment (DDA) System</h3>
            <p className="mb-4 font-satoshi">The central technical contribution is a transparent, rule-based DDA system designed to maintain player "flow."</p>
            <ul className="list-disc list-inside font-satoshi">
              <li className="mb-2">**Research Question:** "How can a rule-based adaptive difficulty system be designed to maintain a state of 'flow' for players of varying skill levels in a strategic roguelike game?"</li>
              <li className="mb-2">**Methodology:** We chose a rule-based approach over machine learning for its transparency and reproducibility. The system is driven by a Player Performance Score (PPS), a 0.0-5.0 scale calculated from eight distinct, weighted performance factors.</li>
              <li>**Implementation:** The PPS score maps to one of five difficulty tiers that dynamically adjust over 15 parameters, including enemy stats, shop prices, and gold rewards.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-dungeonMode mb-4">3. A Delaunay-Inspired Procedural Content Generation (PCG) Framework</h3>
            <p className="mb-4 font-satoshi">To ensure high replayability and varied gameplay, this research involved the design of a novel PCG system for overworld map generation.</p>
            <ul className="list-disc list-inside font-satoshi">
              <li className="mb-2">**Research Goal:** To implement and evaluate a graph-based corridor generation system that creates coherent, navigable, and aesthetically interesting levels.</li>
              <li className="mb-2">**Methodology:** The system uses a seven-stage pipeline inspired by Delaunay triangulation and A* pathfinding.</li>
              <li>**Validation:** The system's effectiveness is measured against clear metrics, including a high connectivity ratio (>95%), low dead-end ratio (<20%), and fast generation time (<25ms).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thesis;
