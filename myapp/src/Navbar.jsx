import { Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <Nav className="navbar">
      <h1>My Logo</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create">New Blog</a>
      </div>
      <h1>Skills</h1>
      <h1>Contact Me</h1>
    </Nav>
  );
};

export default Navbar;
