import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const links = ["Home", "Concerts", "Movies", "Theater Events"];

const Nav = () => {
  return (
    <nav className="text-text-primary bg-bg-secondary py-5">
      {/* Wrapper */}
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo + Links */}
          <div className="flex items-center gap-20">
            {/* Logo */}
            <Link href="/" className="flex gap-2 items-center">
              <Image
                src="/assets/Logo.png"
                alt="logo"
                width={36}
                height={36}
              />
              <h1 className="text-red-primary font-bold text-3xl">TICKIT</h1>
            </Link>

            {/* Links */}
            <ul className="flex items-center gap-8 text-sm">
              {links.map((link) => (
                <Link key={link} href="/">
                  <li className="py-1 cursor-pointer border-b-2 border-b-transparent hover:border-b-red-primary transition-all duration-300">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Login/Register */}
          <div className="flex items-center gap-8">
            <div className="px-2 py-3 rounded-md cursor-pointer hover:bg-purple-600 transition-all duration-300">
              Login
            </div>
            <div className="bg-red-primary px-2 py-3 rounded-md cursor-pointer hover:bg-purple-600 transition-all duration-300">
              Register
            </div>
          </div>
        </div>
      </Container>
      {/* Wrapper End */}
    </nav>
  );
};

export default Nav;
