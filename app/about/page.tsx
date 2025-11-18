"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-center px-6">
      <motion.div
        className="max-w-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4">About QRLabz</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          QRLabz is a fast, simple, and reliable online tool for generating
          custom QR codes instantly. Whether you need QR codes for business
          cards, websites, WiFi networks, payments, or promotions — QRLabz makes
          it effortless.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Built using modern web technologies like Next.js and deployed on
          Vercel, QRLabz ensures speed, security, and smooth performance across
          all devices.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Our mission is to provide a clean, ad-safe, and user-friendly QR
          generation experience for everyone.
        </p>

        <Link href="/" className="text-indigo-500 hover:underline mt-4 block">
          ← Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
