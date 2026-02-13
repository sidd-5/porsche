import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function PageTaycan() {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white pt-28">

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="/taycan.png"
            className="rounded-2xl"
          />

          <div>
            <h1 className="text-5xl font-bold mb-6">Taycan Turbo</h1>
            <p className="text-gray-400 mb-6">
              Fully electric sports sedan delivering instant torque,
              silent acceleration, and futuristic performance engineering.
            </p>

            <ul className="space-y-2 text-gray-300 mb-6">
              <li>Range: 450 km</li>
              <li>Power: 750 HP</li>
              <li>0–100 km/h: 2.8 sec</li>
              <li>Charging: Ultra Fast DC</li>
              <li>Drive: AWD</li>
              <li>Launch Control</li>
            </ul>

            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200">
              Explore Electric
            </button>
          </div>

        </section>

        {/* ELECTRIC ADVANTAGE */}
        <section className="max-w-7xl mx-auto px-6 mt-24 grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Instant Torque</h3>
            <p className="text-gray-400">
              Electric drivetrain delivers maximum torque instantly
              for unmatched launch performance.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Fast Charging</h3>
            <p className="text-gray-400">
              High-voltage architecture supports ultra-fast charging,
              minimizing downtime on long trips.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">Efficiency</h3>
            <p className="text-gray-400">
              Smart energy recovery and battery cooling systems
              maximize range and performance stability.
            </p>
          </div>

        </section>

        {/* DIGITAL COCKPIT */}
        <section className="max-w-7xl mx-auto px-6 mt-24">
          <h2 className="text-3xl font-bold mb-8">Digital Cockpit</h2>

          <div className="grid md:grid-cols-2 gap-10 text-gray-400">
            <p>
              The Taycan cockpit is fully digital with multiple high-resolution
              displays, touch panels, and AI-based driving assistance.
              Everything is optimized for performance-focused drivers.
            </p>

            <p>
              Over-the-air updates, smart navigation with charging planning,
              and connected vehicle technology ensure the car improves
              over time.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
