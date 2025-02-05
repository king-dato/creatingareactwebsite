import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nav className="navbar">
      <h1>My Logo</h1>
      <div className="Home">
        <a href="/">Home</a>
      </div>
      <div className="NewBlog">
        <a href="/">NewBlog</a>
      </div>
      <div className="Skills">
        <a href="/">
          <h1>Skills</h1>
        </a>
      </div>
      <div className="ContactMe">
        <a href="/">
          <h1>Contact Me</h1>
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;
