const PrivacyPage = () => {
  const updatedDate = "31-01-2025";
  return (
    <div className="mx-auto max-w-4xl p-6 text-left">
      <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
      <p className="mb-6 text-gray-700">Last Updated: {updatedDate}</p>

      <h2 className="mb-2 text-2xl font-semibold">1. Introduction</h2>
      <p className="mb-4 text-gray-600">
        Welcome to JobFlow. We value your privacy and are committed to
        protecting your personal information. This Privacy Policy outlines how
        we collect, use, and safeguard your data.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">2. Information We Collect</h2>
      <p className="mb-4 text-gray-600">
        We collect personal information such as your name, email, resume, and
        job preferences when you use our platform.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">
        3. How We Use Your Information
      </h2>
      <p className="mb-4 text-gray-600">
        Your data is used to provide job matching services, improve our
        platform, and communicate with you about relevant job opportunities.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">
        4. Data Sharing and Security
      </h2>
      <p className="mb-4 text-gray-600">
        We do not sell your personal data. Your information may be shared with
        employers and service providers as needed to facilitate job placements.
        We take appropriate measures to secure your data from unauthorized
        access.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">
        5. Your Rights and Choices
      </h2>
      <p className="mb-4 text-gray-600">
        You have the right to update, delete, or request access to your personal
        data at any time. Contact us for any data-related inquiries.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">6. Changes to This Policy</h2>
      <p className="mb-4 text-gray-600">
        We may update this Privacy Policy from time to time. Continued use of
        JobFlow constitutes acceptance of any changes.
      </p>

      <p className="mt-6 text-gray-700">
        If you have any questions about this Privacy Policy, please contact us
        at [Insert Contact Info].
      </p>
    </div>
  );
};

export default PrivacyPage;
