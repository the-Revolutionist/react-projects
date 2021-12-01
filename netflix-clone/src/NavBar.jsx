import "./navbar.css";

import { useEffect, useState } from "react";

export const NavBar = () => {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setHandleShow(true);
      } else setHandleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <nav className={handleShow ? "nav__black" : "nav"}>
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix_logo"
        />
        {/* <div className="nav__links">
          <p className="nav__links_item">Home</p>
          <p className="nav__links_item">Home</p>
          <p className="nav__links_item">Home</p>
          <p className="nav__links_item">Home</p>
          <p className="nav__links_item">Home</p>
        </div> */}

        <img
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="netflix_avatar"
        />
      </nav>
    </>
  );
};
