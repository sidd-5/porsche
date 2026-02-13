"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full fixed top-0 z-50 border-b border-gray-800 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold tracking-widest">
          PORSCHE
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm uppercase">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/911">911</Link>
          <Link href="/taycan">Taycan</Link>
          <Link href="/cayenne">Cayenne</Link>
          <button className="border px-4 py-1 rounded-full hover:bg-white hover:text-black transition">
            Test Drive
          </button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black px-6 pb-6 space-y-4 border-t border-gray-800">
          <Link href="/" onClick={()=>setOpen(false)}>Home</Link><br/>
          <Link href="/911" onClick={()=>setOpen(false)}>911</Link><br/>
          <Link href="/taycan" onClick={()=>setOpen(false)}>Taycan</Link><br/>
          <Link href="/cayenne" onClick={()=>setOpen(false)}>Cayenne</Link>
        </div>
      )}
    </nav>
  );
}
