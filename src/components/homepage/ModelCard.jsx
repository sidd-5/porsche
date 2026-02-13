import Link from "next/link";

export default function ModelCard({ name, img, link, desc }) {
  return (
    <Link href={link} className="group relative rounded-2xl overflow-hidden">

      <img
        src={img}
        className="h-96 w-full object-cover group-hover:scale-110 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40" />

      <div className="absolute bottom-6 left-6 right-6">
        <h3 className="text-3xl font-bold mb-2">{name}</h3>
        <p className="text-gray-300 text-sm">{desc}</p>
      </div>

    </Link>
  );
}
