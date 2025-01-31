const TermsAndConditionPage = () => {
  const updatedDate = "31-01-2025";
  return (
    <div className="mx-auto max-w-4xl p-6 text-left">
      <h1 className="mb-4 text-4xl font-bold">Terms and Conditions</h1>
      <p className="mb-6 text-gray-700">Last Updated: {updatedDate}</p>

      <h2 className="mb-2 text-2xl font-semibold">1. Introduction</h2>
      <p className="mb-4 text-gray-600">
        Welcome to JobFlow. By accessing or using our platform, you agree to be
        bound by these Terms and Conditions. If you do not agree with any part
        of these terms, please do not use our services.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">2. User Responsibilities</h2>
      <p className="mb-4 text-gray-600">
        Users must provide accurate information, respect other users, and comply
        with all applicable laws while using JobFlow.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">
        3. Job Posting & Applications
      </h2>
      <p className="mb-4 text-gray-600">
        Employers are responsible for the accuracy and legitimacy of job
        postings. Job seekers should verify job offers before taking any action.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">4. Privacy Policy</h2>
      <p className="mb-4 text-gray-600">
        Our use of your personal data is governed by our Privacy Policy, which
        explains how we collect, use, and protect your information.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">5. Termination</h2>
      <p className="mb-4 text-gray-600">
        We reserve the right to terminate or suspend user accounts that violate
        these terms without prior notice.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">6. Changes to Terms</h2>
      <p className="mb-4 text-gray-600">
        JobFlow reserves the right to update these terms at any time. Continued
        use of our platform constitutes acceptance of the new terms.
      </p>

      <p className="mt-6 text-gray-700">
        If you have any questions about these Terms and Conditions, please
        contact us at [Insert Contact Info].
      </p>
    </div>
  );
};

export default TermsAndConditionPage;
