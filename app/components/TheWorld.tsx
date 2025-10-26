
import Image from "next/image";

const TheWorld = () => {
  return (
    <section id="the-world" className="py-20 px-4 bg-black text-white">
      <div className="w-3/5 mx-auto text-center">
        <h2 className="text-4xl font-heinzHeinrich text-center mb-12">The World of Bathala</h2>
        <h3 className="text-3xl font-dungeonMode mb-4">A Realm of Myth and Corruption</h3>
        <p className="text-center mb-12 max-w-3xl mx-auto font-satoshi">In the beginning, the divine union of Bathala and Amihan created the islands—a paradise where elemental spirits, the *anito*, lived in perfect balance. But this harmony was shattered. The *engkanto*, spirits of lies and illusion, have twisted the world, corrupting the noble guardians of nature and plunging the realm into chaos.</p>
        <p className="text-center mb-12 max-w-3xl mx-auto font-satoshi">A prophecy foretells of a hero who can master the sacred elemental deck and mend the fractured world. That hero is you.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Image src="/images/bathala_hero.png" alt="The Corrupted Ancestral Forests" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-dungeonMode mb-2">Chapter 1: The Corrupted Ancestral Forests</h3>
            <p className="font-satoshi">Navigate once-sacred balete groves where trickster spirits like the Tikbalang now lead travelers astray and the mighty Kapre, once a guardian, burns the forest it used to protect.</p>
          </div>
          <div>
            <Image src="/images/bathala_hero.png" alt="The Submerged Barangays" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-dungeonMode mb-2">Chapter 2: The Submerged Barangays</h3>
            <p className="font-satoshi">Explore drowned coastal settlements inspired by Visayan epics. Here, the healing waters of Tubig clash with the destructive force of Apoy, and the great Bakunawa threatens to devour the moon itself.</p>
          </div>
          <div>
            <Image src="/images/bathala_hero.png" alt="The Skyward Citadel" width={500} height={300} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-dungeonMode mb-2">Chapter 3: The Skyward Citadel</h3>
            <p className="font-satoshi">Ascend to the celestial realm, a dreamlike court of gods and omens. Here, you must confront a false deity born of mythic betrayal and restore order to the heavens.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheWorld;
