import Link from "next/link";
import "./_Header.css";

interface HeaderProps {
  logo: string; // URL to the logo image
}

const Header: React.FC<HeaderProps> = ({ logo }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          {/* <img src={logo} alt="Logo" className="logo" /> */}
        </div>
        <nav className="nav-links">
          {/* <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link> */}
          <Link href="https://medium.com/@sanket467" className="nav-link" target="external">
            Blog
          </Link>
        </nav>
        <div className="mobile-menu">
          <button className="menu-button" aria-label="Open menu">
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
