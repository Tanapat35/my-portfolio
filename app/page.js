import Image from "next/image";

export default function Home() {
  const name = "Tanapat Saeliw";

  return (
    <main
  className="min-h-screen flex items-center justify-center bg-center bg-cover"
  style={{ backgroundImage: "url('/logo.jpg')" }}
>
      <div className="text-center text-white px-6">

        <Image
          src="/oniman.jpg"
          alt="รูปโปรไฟล์"
          width={180}
          height={180}
          className="rounded-full mx-auto mb-6 object-cover border-4 border-white"
        />

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold mb-4">
           {name}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Web Developer · Bangkok
        </p>

        {/* Buttons */}
        <div className="flex flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            ดู Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>

        {/* Video */}
        <div className="mt-8 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/IOskjMPcFXw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
    </main>
  );
}