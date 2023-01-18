const Header = () => {
  return (
    <header className="w-full px-4 flex justify-between items-center bg-neutral">
      <div className="nav-logo">
        <a href="/">
          {/* <img src="/logo.svg" alt="Logo" /> */}
          <h1 className="text-4xl font-bold">Logo</h1>
        </a>
      </div>
      <ul className="flex gap-4">
        <li>
          <a className="py-6 block" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="py-6 block" href="/contact">
            Contact
          </a>
        </li>
        <li>
          <a className="py-6 block" href="/about">
            About
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
