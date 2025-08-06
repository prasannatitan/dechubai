import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 mt-10">
      <h1 className="text-3xl font-bold text-purple-800 mb-6 border-b pb-2">
        Privacy Policy
      </h1>

      <p className="mb-4">
        <strong>Effective Date:</strong> August 3, 2025<br />
        <strong>Last Updated:</strong> August 3, 2025
      </p>

      <p className="mb-6">
        Welcome to <strong>Dechub.ai</strong> (“we,” “our,” or “us”). Your privacy is important to us.
        This Privacy Policy explains how we collect, use, and protect your personal information when
        you use our platform at <a href="https://dechub.ai" className="text-blue-600 underline">https://dechub.ai</a>.<br/>
        Our Home Page is <a href="https://dechub.ai" className="text-blue-600 underline">https://dechub.ai</a>
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-2"><strong>a. Information You Provide:</strong></p>
      <ul className="list-disc list-inside mb-4">
        <li>Name, email address, password</li>
        <li>Company name, role, and contact info</li>
        <li>Data from forms, surveys, or support requests</li>
      </ul>

      <p className="mb-2"><strong>b. Automatically Collected Information:</strong></p>
      <ul className="list-disc list-inside mb-4">
        <li>IP address, browser type, device info</li>
        <li>Pages visited and interaction patterns</li>
        <li>Cookies and similar tracking technologies</li>
      </ul>

      <p className="mb-2"><strong>c. Third-Party Sign-In:</strong></p>
      <p className="mb-4">
        If you use Google Sign-In, we collect your name, email, and profile picture via OAuth. We do not access your password.
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain our services</li>
        <li>To manage user accounts and authentication</li>
        <li>To improve our platform and user experience</li>
        <li>To send important updates or notices</li>
        <li>To comply with legal requirements</li>
      </ul>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">3. How We Share Information</h2>
      <p className="mb-4">
        We <strong>do not sell</strong> your personal data. We may share your information with:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Trusted third-party service providers</li>
        <li>Analytics platforms like Google Analytics (with anonymized data)</li>
        <li>Authorities, if required by law</li>
      </ul>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">4. Your Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have the right to:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Access, update, or delete your data</li>
        <li>Withdraw consent for data usage</li>
        <li>Request a copy of your personal data</li>
      </ul>
      <p className="mb-4">
        To exercise these rights, contact us at <a href="mailto:support@dechub.ai" className="text-blue-600 underline">support@dechub.ai</a>.
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">5. Security</h2>
      <p className="mb-4">
        We use industry-standard measures to protect your data, but no system is 100% secure.
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">6. Data Retention</h2>
      <p className="mb-4">
        We keep your data as long as needed to deliver our services or comply with regulations.
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">7. Cookies</h2>
      <p className="mb-4">
        We use cookies to personalize your experience and analyze traffic. You can manage cookies in your browser settings.
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">8. International Transfers</h2>
      <p className="mb-4">
        Your information may be processed in countries outside your own. By using our services, you agree to this transfer.
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">9. Children’s Privacy</h2>
      <p className="mb-4">
        Dechub.ai is not intended for children under 13. We do not knowingly collect data from minors.
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">10. Policy Updates</h2>
      <p className="mb-4">
        We may revise this policy periodically. Updates will be posted on this page with the effective date.
      </p>

      <h2 className="text-xl font-semibold text-purple-700 mt-6 mb-2">11. Contact Us</h2>
      <p className="mb-4">
        If you have questions, contact us at:<br />
        <strong>Email:</strong> <a href="mailto:support@dechub.ai" className="text-blue-600 underline">support@dechub.ai</a><br />
        <strong>Website:</strong> <a href="https://dechub.ai" className="text-blue-600 underline">https://dechub.ai</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
