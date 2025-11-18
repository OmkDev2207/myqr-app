"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>

      <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 text-center">
        Last updated: {new Date().getFullYear()}
      </p>

      <p className="mb-4">
        These Terms of Service (&quot;Terms&quot;) govern your use of{" "}
        <strong>QRLabz</strong> (the &quot;Service&quot;). By using the site at{" "}
        <span className="break-all">https://qrlabz.vercel.app</span>, you agree
        to these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Use of the Service</h2>
      <p className="mb-4">
        You may use QRLabz to generate QR codes for personal or business use.
        You agree not to use the Service for illegal or harmful activities.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">User Content</h2>
      <p className="mb-4">
        You are responsible for the content you encode into QR codes. You agree
        not to use QRLabz to create QR codes that:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Contain malware, phishing, or harmful links</li>
        <li>Violate intellectual property rights</li>
        <li>Promote illegal or abusive content</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">
        No Warranty / Service Availability
      </h2>
      <p className="mb-4">
        QRLabz is provided &quot;as is&quot; without warranties of any kind.
        Availability is not guaranteed, and features may change without notice.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Limitation of Liability</h2>
      <p className="mb-4">
        QRLabz and its developers are not liable for losses or damages resulting
        from the use or inability to use the Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Third-Party Links</h2>
      <p className="mb-4">
        QR codes generated through QRLabz may lead to external websites. We are
        not responsible for any third-party content or policies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Changes to These Terms</h2>
      <p className="mb-4">
        We may update these Terms at any time. Updates will be posted on this
        page with a revised date.
      </p>

      <Link href="/" className="text-indigo-500 hover:underline block mt-8">
        ← Back to Home
      </Link>
    </main>
  );
}
