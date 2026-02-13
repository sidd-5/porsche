import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function PageCayenne() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-28">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Cayenne
            </h1>

            <p className="text-gray-400 text-lg">
              A luxury performance SUV that blends everyday practicality with
              sports car DNA. Designed for comfort, engineered for speed,
              and built for confidence on every terrain.
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">

              <div>
                <p className="text-gray-500 text-sm">Power</p>
                <p className="text-2xl font-semibold">541 HP</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Seating</p>
                <p className="text-2xl font-semibold">5 Adults</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Drive</p>
                <p className="text-2xl font-semibold">AWD</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Category</p>
                <p className="text-2xl font-semibold">Luxury SUV</p>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6">
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                Build & Price
              </button>

              <button className="border border-gray-600 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                Book Test Drive
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/cayenne.png"
              alt="Cayenne SUV"
              className="rounded-2xl w-full object-cover shadow-2xl"
            />
          </div>

        </section>

        {/* FEATURE BLOCKS */}
        <section className="bg-gray-900 py-20 mb-24">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold mb-12">
              Luxury Meets Performance
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div className="p-8 border border-gray-800 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3">
                  Performance Engine
                </h3>
                <p className="text-gray-400">
                  Turbocharged powertrain delivering strong acceleration
                  while maintaining smooth highway cruising.
                </p>
              </div>

              <div className="p-8 border border-gray-800 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3">
                  Premium Interior
                </h3>
                <p className="text-gray-400">
                  Hand-crafted materials, digital cockpit, and intelligent
                  driver assistance systems.
                </p>
              </div>

              <div className="p-8 border border-gray-800 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3">
                  All-Terrain Control
                </h3>
                <p className="text-gray-400">
                  Adaptive suspension and AWD system for confident handling
                  across road conditions.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* TECH SPECS */}
        <section className="max-w-7xl mx-auto px-6 mb-24">

          <h2 className="text-4xl font-bold mb-10">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">

            <div className="space-y-3">
              <p>Engine: Twin Turbo V8</p>
              <p>Transmission: 8-Speed Automatic</p>
              <p>Drivetrain: Active AWD</p>
              <p>Fuel: Petrol / Hybrid Options</p>
            </div>

            <div className="space-y-3">
              <p>Torque: 770 Nm</p>
              <p>0–100 km/h: 3.9 sec</p>
              <p>Suspension: Adaptive Air</p>
              <p>Cargo Capacity: High Utility Space</p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center pb-20">
          <h2 className="text-3xl font-bold mb-6">
            Command Every Road with Cayenne
          </h2>

          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Schedule Your Drive
          </button>
        </section>

      </main>

      <Footer />
    </>
  );
}
