"use client";

import { useState } from "react";
import QRCode from "react-qr-code";
import { Moon, Sun, Link2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleGenerate = () => {
    const trimmed = input.trim();
    if (!trimmed) {
      setQrValue("");
      return;
    }
    setQrValue(trimmed);
  };

  const downloadQR = () => {
    if (!qrValue) return;
    const svg = document.getElementById("qrlabz-qr") as SVGSVGElement | null;
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);

    const canvas = document.createElement("canvas");
    const size = 512;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);
      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "qrlabz-qr.png";
      link.click();
    };

    img.src = url;
  };

  return (
    <main
      className={`min-h-screen px-4 py-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-50"
          : "bg-gradient-to-br from-indigo-900 via-slate-900 to-fuchsia-800 text-slate-50"
      }`}
    >
      {/* NAVBAR */}
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center mb-8">
        <Link
          href="/"
          className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent"
        >
          QRLabz
        </Link>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border border-slate-600 bg-slate-900/60 hover:bg-slate-800 transition-all"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* MAIN LAYOUT: LEFT AD – CARD – RIGHT AD */}
      <div className="w-full max-w-6xl mx-auto flex justify-center mt-4">
        {/* LEFT AD (desktop only) */}
        <div className="hidden lg:flex mr-6">
          <div className="w-[300px] h-[600px] bg-slate-900/60 border border-slate-700 rounded-2xl flex items-center justify-center text-xs text-slate-300">
            Ad Placeholder
          </div>
        </div>

        {/* CENTER COLUMN (CARD + SEO) */}
        <div className="flex flex-col items-center flex-1 max-w-xl">
          {/* CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-xl shadow-2xl p-6 sm:p-8"
          >
            {/* Top row: About link */}
            <div className="flex items-center justify-between mb-3">
              <Link
                href="/about"
                className="text-xs sm:text-sm text-slate-300 hover:text-white underline-offset-2 hover:underline"
              >
                About
              </Link>
            </div>

            {/* Heading */}
            <div className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Instant QR Codes
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300">
                Paste any URL or text below and generate a clean, scannable QR
                code in one click.
              </p>
            </div>

            {/* INPUT */}
            <div className="mb-4">
              <label className="block mb-1 text-xs text-slate-300">
                Enter URL or text:
              </label>
              <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-slate-900 border border-slate-700">
                <Link2 size={16} className="text-slate-400" />
                <input
                  type="text"
                  placeholder="https://example.com"
                  value={input}
                  onChange={(e) => {
  setInput(e.target.value);
  setQrValue("");   // Clear old QR when typing
}}

                  className="w-full bg-transparent outline-none text-sm placeholder:text-slate-500"
                />
              </div>
            </div>

            {/* GENERATE BUTTON */}
            <button
              onClick={handleGenerate}
              disabled={!input.trim()}
              className="w-full py-2.5 rounded-2xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-400 hover:to-indigo-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-lg shadow-sky-500/30"
            >
              Generate QR Code
            </button>

            {/* QR PREVIEW */}
            <div className="mt-6 flex flex-col items-center">
              {qrValue ? (
                <>
                  <div className="p-3 rounded-2xl bg-slate-900 shadow-xl">
                    <QRCode
                      id="qrlabz-qr"
                      value={qrValue}
                      size={192}
                      bgColor={darkMode ? "#020617" : "#0f172a"}
                      fgColor={darkMode ? "#e5e7eb" : "#e5e7eb"}
                      style={{ height: "192px", width: "192px" }}
                    />
                  </div>
                  <button
                    onClick={downloadQR}
                    className="mt-4 px-4 py-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-sm font-medium text-slate-900 shadow-md transition-all"
                  >
                    Download QR as PNG
                  </button>
                  <p className="mt-2 text-xs text-slate-300">
                    Works with any modern smartphone camera.
                  </p>
                </>
              ) : (
                <p className="text-xs text-slate-400 text-center">
                  Enter a link or text above and click{" "}
                  <span className="font-semibold">Generate QR Code</span> to see
                  your QR here.
                </p>
              )}
            </div>
          </motion.div>

          {/* SEO / INFO SECTION */}
          <section className="mt-10 w-full text-sm leading-relaxed text-slate-100/90">
            <h2 className="text-xl font-semibold mb-2">What is a QR Code?</h2>
            <p className="mb-4">
              A QR code (Quick Response code) is a two-dimensional barcode that
              can store URLs, text, WiFi credentials, payment links, and more.
              It can be scanned instantly using any smartphone camera, making it
              perfect for quick sharing.
            </p>

            <h2 className="text-xl font-semibold mb-2">Why Use QRLabz?</h2>
            <p className="mb-4">
              QRLabz focuses on speed, clarity, and a distraction-free
              experience. There&apos;s no signup, no complex settings, and no
              data collection — just a simple tool to generate high-quality QR
              codes in seconds.
            </p>

            <h2 className="text-xl font-semibold mb-2">How to Create a QR Code</h2>
            <ol className="list-decimal ml-5 space-y-1 mb-4">
              <li>Enter your URL or text in the input box above.</li>
              <li>Click the <strong>Generate QR Code</strong> button.</li>
              <li>Your QR code appears instantly.</li>
              <li>Download it as a PNG and use it anywhere.</li>
            </ol>

            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc ml-5 space-y-1 mb-2">
              <li>Instant QR creation</li>
              <li>High-quality scannable output</li>
              <li>Neon gradient UI with dark mode</li>
              <li>No login, no tracking</li>
              <li>Completely free to use</li>
            </ul>
          </section>

          {/* FOOTER */}
          <footer className="mt-10 mb-6 text-center text-xs text-slate-300">
            <div className="space-x-4">
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </div>
            <p className="mt-2">
              © {new Date().getFullYear()} QRLabz. All rights reserved.
            </p>
          </footer>
        </div>

        {/* RIGHT AD (desktop only) */}
        <div className="hidden lg:flex ml-6">
          <div className="w-[300px] h-[600px] bg-slate-900/60 border border-slate-700 rounded-2xl flex items-center justify-center text-xs text-slate-300">
            Ad Placeholder
          </div>
        </div>
      </div>
    </main>
  );
}
