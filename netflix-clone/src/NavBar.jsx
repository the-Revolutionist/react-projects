import "./navbar.css";

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
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
