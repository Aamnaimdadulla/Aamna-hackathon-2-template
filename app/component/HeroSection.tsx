import Image from "next/image";  

export default function HeroSection() {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 md:mb-20">
        <div className="bg-[#2A254B] text-white p-12 md:p-24 flex flex-col justify-center">
          <h1 className="font-clash text-4xl md:text-5xl font-medium mb-6">
            It started with a small idea
          </h1>
          <p className="text-lg mb-8 max-w-md">
            The furniture brand for the future, with timeless designs
          </p>
          <button className="self-start border-white bg-gray-300 hover:bg-white hover:text-[#2A254B] text-black px-6 py-2 rounded-md">
            View collection
          </button>

          <p className="text-lg mb-8 max-w-md">
            A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
          </p>
        </div>

        <div className="relative bg-gray-200 aspect-square md:aspect-auto">
           <Image
            src="/chair.jpeg"  
            alt="Chair image"
            layout="fill"  
            objectFit="cover" 
            className="absolute top-0 left-0"
          />  
        </div>
      </section>
    </div>
  );
}
