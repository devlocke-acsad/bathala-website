
import Image from "next/image";

const Media = () => {
  return (
    <section id="media" className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heinzHeinrich text-center mb-12">Media Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Image src="/images/bathala_hero.png" alt="Media Gallery Image 1" width={500} height={300} className="rounded-lg" />
          <Image src="/images/bathala_hero.png" alt="Media Gallery Image 2" width={500} height={300} className="rounded-lg" />
          <Image src="/images/bathala_hero.png" alt="Media Gallery Image 3" width={500} height={300} className="rounded-lg" />
          <Image src="/images/bathala_hero.png" alt="Media Gallery Image 4" width={500} height={300} className="rounded-lg" />
          <Image src="/images/bathala_hero.png" alt="Media Gallery Image 5" width={500} height={300} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Media;
