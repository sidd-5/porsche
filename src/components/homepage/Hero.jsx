export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">

      <img
        src="/hero.png"
        className="absolute w-full h-full object-cover opacity-50"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Engineered for <br/> Driving Pleasure
          </h1>

          <p className="text-gray-300 mb-8 text-lg">
            Experience the perfect fusion of luxury, speed, and innovation.
            Built with precision. Driven by passion.
          </p>

          <div className="flex gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
              Explore Models
            </button>

            <button className="border px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Build Your Car
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
