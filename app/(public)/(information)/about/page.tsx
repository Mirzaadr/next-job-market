const AboutPage = () => {
  return (
    <div className="mx-auto max-w-4xl p-6 text-center">
      <h1 className="mb-4 text-4xl font-bold">About JobFlow</h1>
      <p className="mb-6 text-lg italic text-muted-foreground">
        &quot;Connect Talents with Opportunity&quot;
      </p>
      <p className="text-lg text-foreground">
        JobFlow is a dynamic job market platform designed to bridge the gap
        between job seekers and employers. Our mission is to simplify the hiring
        process by providing a seamless experience for both parties.
      </p>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-card p-6 shadow-md dark:border-2">
          <h2 className="mb-2 text-2xl font-semibold">For Job Seekers</h2>
          <p className="text-muted-foreground">
            Discover thousands of job opportunities tailored to your skills and
            preferences. Create a profile, apply with ease, and take the next
            step in your career.
          </p>
        </div>
        <div className="rounded-lg bg-card p-6 shadow-md dark:border-2">
          <h2 className="mb-2 text-2xl font-semibold">For Employers</h2>
          <p className="text-muted-foreground">
            Post job openings and find top talent effortlessly. Our platform
            connects you with qualified candidates to help your business grow.
          </p>
        </div>
      </div>
      <p className="mt-8 text-muted-foreground">
        Whether you&apos;re looking for your next career move or the perfect
        candidate, JobFlow is here to make the process smoother and more
        efficient. Join us today and explore endless possibilities!
      </p>
    </div>
  );
};

export default AboutPage;
