"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-indigo-100 flex flex-col items-center justify-center px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl bg-white shadow-2xl rounded-3xl p-8 border border-gray-100"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          About <span className="text-indigo-600">QRLabz</span>
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to <strong>QRLabz</strong> — a simple, elegant, and fast QR code
          generator built to make sharing links effortless. Our goal is to help
          individuals and businesses create custom QR codes in seconds without
          complexity.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          QRLabz was created with the belief that technology should make life
          easier, not harder. From sleek design to smooth performance, everything
          here is crafted with care and simplicity in mind.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>

      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} QRLabz — All rights reserved.
      </footer>
    </main>
  );
}
