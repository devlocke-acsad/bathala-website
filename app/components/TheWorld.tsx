const TheWorld = () => {
  return (
    <section id="the-world" className="py-20 px-4 bg-black text-white">
      <div className="w-full max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-3xl font-dungeonMode text-center mb-12 uppercase">
          THE WORLD OF BATHALA
        </h2>
        <h3 className="text-3xl font-dungeonMode mb-4">
          A Realm of Myth and Corruption
        </h3>
        <p className="text-center mb-12 max-w-3xl mx-auto font-satoshi text-left sm:text-center">
          In the beginning, the divine union of Bathala and Amihan created the
          islands—a paradise where elemental spirits, the <em>anito</em>, lived in
          perfect balance. But this harmony was shattered. The <em>engkanto</em>,
          spirits of lies and illusion, have twisted the world, corrupting the
          noble guardians of nature and plunging the realm into chaos.
        </p>
        <p className="text-center mb-12 max-w-3xl mx-auto font-satoshi text-left sm:text-center">
          A prophecy foretells of a hero who can master the sacred elemental
          deck and mend the fractured world. That hero is you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <h3 className="text-2xl font-dungeonMode mb-2">
              Chapter 1: The Corrupted Ancestral Forests
            </h3>
            <p className="font-satoshi text-left sm:text-center">
              Navigate once-sacred balete groves where trickster spirits like
              the Tikbalang now lead travelers astray and the mighty Kapre, once
              a guardian, burns the forest it used to protect.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-dungeonMode mb-2">
              Chapter 2: The Submerged Barangays
            </h3>
            <p className="font-satoshi text-left sm:text-center">
              Explore drowned coastal settlements inspired by Visayan epics.
              Here, the healing waters of Tubig clash with the destructive force
              of Apoy, and the great Bakunawa threatens to devour the moon
              itself.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-2xl font-dungeonMode mb-2">
              Chapter 3: The Skyward Citadel
            </h3>
            <p className="font-satoshi text-left sm:text-center">
              Ascend to the celestial realm, a dreamlike court of gods and
              omens. Here, you must confront a false deity born of mythic
              betrayal and restore order to the heavens.
            </p>
          </div>
        </div>
        <hr className="border-[#77888C] border-dotted border-2 w-2/3 mx-auto mt-16" />
      </div>
    </section>
  );
};

export default TheWorld;
