const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="m-auto my-10 flex max-w-5xl flex-col items-center gap-5 px-3 md:flex-row md:items-start">
      {children}
    </main>
  );
};

export default Layout;
