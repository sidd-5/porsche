import Hero from "@/components/homepage/Hero";
import ModelCard from "@/components/homepage/ModelCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="bg-black text-white">

      <Hero />

      {/* Models */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12">Our Models</h2>

        <div className="grid md:grid-cols-3 gap-10">

          <ModelCard
            name="911"
            link="/911"
            desc="Legendary sports coupe"
            img="911.png"
          />

          <ModelCard
            name="Taycan"
            link="/taycan"
            desc="Electric performance"
            img="/taycan.png"
          />

          <ModelCard
            name="Cayenne"
            link="/cayenne"
            desc="Luxury performance SUV"
            img="/cayenne.png"
          />

        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-3xl font-bold mb-3">650+ HP</h3>
            <p className="text-gray-400">Track-level performance engineering</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-3">2.7 sec</h3>
            <p className="text-gray-400">0-100 km/h acceleration</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-3">Electric Ready</h3>
            <p className="text-gray-400">Next generation mobility</p>
          </div>

        </div>
      </section>

    </main>
    <Footer />
    </>
  );
}
