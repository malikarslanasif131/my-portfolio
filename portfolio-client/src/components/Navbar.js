import React, { useEffect, useState, useMemo } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home_main"); // Initialize with the "Home" section ID

  // Define the sections and their corresponding IDs
  // Use useMemo to memoize the sections array
  const sections = useMemo(
    () => [
      { name: "Home", id: "home_main" },
      { name: "About", id: "about_me" },
      { name: "Service", id: "service_id" },
      { name: "Skills", id: "skills_id" },
      { name: "Education", id: "education_id" },
      { name: "Projects", id: "project_id" },
      { name: "Experience", id: "experience_id" },
      { name: "Testimonials", id: "testimonial_id" },
      { name: "Contact Me", id: "contact_id" },
    ],
    [] // Empty dependency array as it's not dependent on any props or state
  );

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetScrollPosition = targetElement.offsetTop - 100;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
      // Close the mobile menu
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");

      if (navbarToggler && navbarCollapse) {
        navbarToggler.classList.add("collapsed");
        navbarCollapse.classList.remove("show");
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const targetElement = document.getElementById(section.id);

        if (targetElement) {
          const sectionTop = targetElement.offsetTop - 200;
          const sectionBottom = sectionTop + targetElement.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
            return;
          }
        }
      }

      setActiveSection(null);
    };

    // Check if the screen width is greater than a certain value (e.g., 768px for mobile screens)
    const isMobileScreen = window.innerWidth <= 768;

    // Add or remove the scroll event listener based on the screen width
    if (!isMobileScreen) {
      window.addEventListener("scroll", handleScroll);
    }

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      if (!isMobileScreen) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [sections]);
  useEffect(() => {
    const handleSmallScreenScroll = () => {
      const stickyElement = document.querySelector(".sticky-top-top");

      const scrollOffset = window.scrollY;

      // Check if scrolling down
      if (scrollOffset > 20) {
        // stickyElement.style.top = "20px";
      } else {
        // Scrolling up
        stickyElement.style.top = "0";
      }
    };

    const isSmallScreen = window.innerWidth <= 768;

    if (isSmallScreen) {
      window.addEventListener("scroll", handleSmallScreenScroll);
    }

    return () => {
      if (isSmallScreen) {
        window.removeEventListener("scroll", handleSmallScreenScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="sticky-top-top container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light sticky-top nav__style">
          <div className="container-fluid">
            <a
              className="navbar-brand custom_nav_brand px-5 pb-0 text-light "
              href="/"
            >
              {/* &lt; Malik Arslan Asif /&gt; */}
              <img
                // src={require("../images/arslogo.png")}
                src={require("../images/pinklogo-bg.png")}
                // src={require("../images/download.gif")}
                style={{
                  objectFit: "scale-down",
                  width: "50%",
                  height: "50%",
                }}
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto p-2 letter__spacing">
                {sections.map((section) => (
                  <NavLink
                    key={section.id}
                    className={`nav-link text__pink me-3 ${
                      activeSection === section.id ? "nav__active" : ""
                    }`}
                    to={`#${section.id}`}
                    onClick={(e) => handleLinkClick(e, section.id)}
                  >
                    {section.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
