"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 text-center">
        Last updated: {new Date().getFullYear()}
      </p>

      <p className="mb-4">
        At <strong>QRLabz</strong> (accessible at{" "}
        <span className="break-all">https://qrlabz.vercel.app</span>), we value
        your privacy and are committed to protecting any information you share
        when using our QR code generator tool.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Information We Collect</h2>
      <p className="mb-4">
        QRLabz does not require you to create an account, and we do not collect
        personal details such as your name, address, or contact information.
      </p>
      <p className="mb-4">
        The text or URL you enter to generate a QR code is processed temporarily
        for the purpose of creating the QR image and is not stored in any
        database. Standard server logs such as IP address and browser
        information may be collected automatically for analytics and security.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Cookies & Analytics</h2>
      <p className="mb-4">
        We use cookies and similar technologies to improve site performance,
        understand visitor behavior, and maintain security. These cookies do not
        store personally identifiable information.
      </p>
      <p className="mb-4">
        Third-party analytics services may also set cookies to measure traffic
        and usage patterns. You may disable cookies in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Advertising (Google AdSense)</h2>
      <p className="mb-4">
        QRLabz may display ads served by Google or other advertising partners.
        These third parties may use cookies or similar technologies to show
        relevant ads based on your browsing activity.
      </p>
      <p className="mb-4">
        You may opt out of personalized advertising through your Google Ads
        Settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Third-Party Links</h2>
      <p className="mb-4">
        QR codes you generate may lead to external websites. We are not
        responsible for the content or privacy practices of those websites.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Data Security</h2>
      <p className="mb-4">
        We take reasonable steps to protect data related to the operation of
        this site, but no internet transmission is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated date.
      </p>

      <Link href="/" className="text-indigo-500 hover:underline block mt-8">
        ← Back to Home
      </Link>
    </main>
  );
}
