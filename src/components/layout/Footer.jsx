export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-8 text-gray-400">

        <div>
          <h3 className="text-white font-semibold mb-4">Models</h3>
          <p>911 Series</p>
          <p>Taycan Electric</p>
          <p>Cayenne SUV</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <p>Book Test Drive</p>
          <p>Financing</p>
          <p>Maintenance</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Experience</h3>
          <p>Motorsport</p>
          <p>Innovation</p>
          <p>Technology</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>

      </div>

      <div className="text-center text-gray-600 pb-8">
        © 2026 Performance Cars Experience
      </div>
    </footer>
  );
}
