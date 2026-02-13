import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Page911() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-28">

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              911 Carrera
            </h1>

            <p className="text-gray-400 text-lg">
              The legendary rear-engine sports car that defines performance,
              precision, and timeless automotive design. Built for drivers who
              demand emotion behind the wheel.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">

              <div>
                <p className="text-gray-500 text-sm">Top Speed</p>
                <p className="text-2xl font-semibold">308 km/h</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Power</p>
                <p className="text-2xl font-semibold">473 HP</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">0-100 km/h</p>
                <p className="text-2xl font-semibold">3.4 sec</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Engine</p>
                <p className="text-2xl font-semibold">Rear Engine</p>
              </div>

            </div>

            <div className="flex gap-4 pt-6">
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                Build & Price
              </button>

              <button className="border border-gray-600 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
                Book Test Drive
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/911.png"
              alt="911 Carrera"
              className="rounded-2xl w-full object-cover shadow-2xl"
            />
          </div>

        </section>

        {/* PERFORMANCE SECTION */}
        <section className="bg-gray-900 py-20 mb-24">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl font-bold mb-12">
              Performance Highlights
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div className="p-8 border border-gray-800 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3">
                  Turbocharged Power
                </h3>
                <p className="text-gray-400">
                  Advanced turbocharged engine delivers explosive acceleration
                  with smooth high-speed stability.
                </p>
              </div>

              <div className="p-8 border border-gray-800 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3">
                  Precision Handling
                </h3>
                <p className="text-gray-400">
                  Track-inspired chassis tuning ensures maximum cornering
                  control and driver confidence.
                </p>
              </div>

              <div className="p-8 border border-gray-800 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-3">
                  Driver Focused
                </h3>
                <p className="text-gray-400">
                  Cockpit ergonomics built around the driver for perfect
                  feedback and control.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SPECIFICATIONS */}
        <section className="max-w-7xl mx-auto px-6 mb-24">

          <h2 className="text-4xl font-bold mb-10">
            Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">

            <div className="space-y-3">
              <p>Engine: 3.0L Twin Turbo Flat-Six</p>
              <p>Transmission: 8-Speed PDK</p>
              <p>Drivetrain: RWD / AWD Options</p>
              <p>Fuel Type: Premium Petrol</p>
            </div>

            <div className="space-y-3">
              <p>Torque: 530 Nm</p>
              <p>Weight: 1,565 kg</p>
              <p>Brakes: Performance Disc</p>
              <p>Suspension: Adaptive Sport</p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="text-center pb-20">
          <h2 className="text-3xl font-bold mb-6">
            Experience the 911 Today
          </h2>

          <button className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Schedule a Test Drive
          </button>
        </section>

      </main>

      <Footer />
    </>
  );
}
