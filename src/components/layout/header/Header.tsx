import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logoLight from "public/images/logo-light.png";
import logoDarkMenu from "public/images/logo-dark-menu.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar secondary--navbar";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  // Logo logic:
  // - Home page: always light logo
  // - Other pages: dark logo before scroll, light logo after scroll
  const isHomePage = router.pathname === "/";
  let logoSrc;
  
  if (isHomePage) {
    logoSrc = logoLight; // Always light logo on home page
  } else {
    logoSrc = scrolled ? logoLight : logoDarkMenu; // Dark before scroll, light after scroll
  }

  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image 
                        src={logoSrc} 
                        alt="Image" 
                        priority 
                        width={120}
                        height={40}
                        style={{ objectFit: 'contain' }}
                      />
                    </Link>
                  </div>
                  <div className="navbar__options">
                    <button
                      className="open-offcanvas-nav d-flex"
                      aria-label="toggle mobile menu"
                      title="open offcanvas menu"
                      onClick={handleNav}
                    ></button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default Header;
