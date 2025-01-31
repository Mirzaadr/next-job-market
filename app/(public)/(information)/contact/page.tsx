const ContactPage = () => {
  return (
    <div className="mx-auto max-w-4xl p-6 text-left">
      <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
      <p className="mb-6 text-foreground">
        We&apos;d love to hear from you! Reach out to us through any of the
        methods below.
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Customer Support</h2>
      <p className="mb-4 text-muted-foreground">Email: support@jobflow.com</p>
      <p className="mb-4 text-muted-foreground">Phone: +1 123-456-7890</p>

      <h2 className="mb-2 text-2xl font-semibold">Business Inquiries</h2>
      <p className="mb-4 text-muted-foreground">Email: business@jobflow.com</p>

      <h2 className="mb-2 text-2xl font-semibold">Office Address</h2>
      <p className="mb-4 text-muted-foreground">
        123 JobFlow Street, Suite 500, JobCity, JC 45678
      </p>

      <h2 className="mb-2 text-2xl font-semibold">Follow Us</h2>
      <p className="mb-4 text-muted-foreground">Twitter: @JobFlow</p>
      <p className="mb-4 text-muted-foreground">
        LinkedIn: linkedin.com/company/jobflow
      </p>

      <p className="mt-6 text-foreground">
        For any other inquiries, feel free to fill out our contact form or reach
        us through our social media channels.
      </p>
    </div>
  );
};

export default ContactPage;
