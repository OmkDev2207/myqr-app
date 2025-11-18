"use client";

import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import { Download, Link as LinkIcon, Sun, Moon } from "lucide-react";

export default function Home() {
  const [url, setUrl] = useState<string>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const a = document.createElement("a");
    a.href = (canvas as HTMLCanvasElement).toDataURL("image/png");
    a.download = "myqr-code.png";
    a.click();
  };

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"
          : "bg-gradient-to-br from-indigo-100 via-white to-blue-100 text-gray-900"
      } p-4 relative overflow-hidden`}
    >
      {/* Gradient glows */}
      <div
        className={`absolute top-[-10rem] left-[-10rem] w-[22rem] h-[22rem] rounded-full blur-3xl opacity-25 transition-all duration-700 ${
          darkMode ? "bg-indigo-700" : "bg-indigo-300"
        }`}
      ></div>
      <div
        className={`absolute bottom-[-10rem] right-[-10rem] w-[20rem] h-[20rem] rounded-full blur-3xl opacity-25 transition-all duration-700 ${
          darkMode ? "bg-blue-700" : "bg-blue-200"
        }`}
      ></div>

      {/* Main Card */}
      <motion.div


        className={`z-10 max-w-md w-full ${
          darkMode ? "bg-gray-900/70 border-gray-700" : "bg-white/70 border-gray-200"
        } backdrop-blur-2xl border rounded-3xl shadow-2xl p-8`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
      {/* Navigation bar */}
<nav className="flex justify-end mb-4">
  <a
    href="/about"
    className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
      darkMode
        ? "text-gray-300 hover:text-white hover:bg-gray-800"
        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
    }`}
  >
    About
  </a>
</nav>
        {/* Ad Placeholder */}
        <div
          className={`w-full h-16 rounded-xl mb-6 flex items-center justify-center text-sm font-medium transition-all ${
            darkMode
              ? "bg-gray-800/80 text-gray-400 border border-gray-700"
              : "bg-gray-200/60 text-gray-600 border border-gray-300"
          }`}
        >
          Google Ad Placeholder
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <motion.h1
            className={`text-4xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My<span className="text-indigo-500">QR</span>
          </motion.h1>

          {/* Light/Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full border transition-all ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 border-gray-600"
                : "bg-gray-100 hover:bg-gray-200 border-gray-300"
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <p className="text-sm opacity-80 text-center mb-8">
          Generate instant QR codes — fast, clean, and elegant.
        </p>

        {/* Input Field */}
        <label className="block mb-2 text-sm font-medium opacity-90">
          Enter URL or text:
        </label>
        <div className="flex items-center gap-2 mb-6">
          <LinkIcon className="opacity-70" size={18} />
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            className={`flex-1 rounded-lg border p-2 focus:ring-2 transition-all ${
              darkMode
                ? "bg-gray-800 border-gray-600 focus:ring-indigo-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 focus:ring-indigo-400"
            }`}
          />
        </div>

        {/* QR Code */}
        {url ? (
          <motion.div
            className="flex flex-col items-center mt-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`p-4 rounded-2xl border shadow-lg transition-all duration-500 ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <QRCodeCanvas
                value={url}
                size={250}
                fgColor={darkMode ? "#ffffff" : "#000000"}
                bgColor={darkMode ? "#111111" : "#ffffff"}
                level={"M"}
                includeMargin={true}
                ref={canvasRef}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className={`mt-6 flex items-center gap-2 px-5 py-2 rounded-lg shadow transition-all duration-300 ${
                darkMode
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              <Download size={18} />
              Download QR
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            className="text-center text-gray-500 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Enter a link to generate your QR code
          </motion.div>
        )}
      </motion.div>
        <section className="mt-16 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed px-4">
  <h2 className="text-2xl font-semibold mb-3">What is a QR Code?</h2>
  <p className="mb-4">
    A QR code (Quick Response code) is a two-dimensional barcode that can store
    URLs, text, WiFi credentials, payment links, and more. They can be scanned
    instantly with any smartphone camera.
  </p>

  <h2 className="text-2xl font-semibold mb-3">Why Use QRLabz?</h2>
  <p className="mb-4">
    QRLabz provides fast, clean, and minimal QR code generation with an easy
    interface and dark/light theme support. No login, no data collection, and
    no unnecessary steps.
  </p>

  <h2 className="text-2xl font-semibold mb-3">How to Create a QR Code</h2>
  <p className="mb-4">
    1. Enter your URL or text above.<br />
    2. Switch between dark or light theme.<br />
    3. Click <strong>Generate</strong>.<br />
    4. Download your high-quality QR code instantly.
  </p>

  <h2 className="text-2xl font-semibold mb-3">Features</h2>
  <ul className="list-disc ml-6">
    <li>Instant QR generation</li>
    <li>Clean and minimal design</li>
    <li>Dark & light themes</li>
    <li>High-quality PNG download</li>
    <li>No signup required — 100% free</li>
  </ul>
</section>

      <footer className="mt-12 mb-8 text-center text-sm text-gray-600 dark:text-gray-400">
  <div className="space-x-4">
    <a href="/about" className="hover:underline">About</a>
    <a href="/privacy" className="hover:underline">Privacy Policy</a>
    <a href="/terms" className="hover:underline">Terms of Service</a>
  </div>
</footer>

    </main>
  );
}
