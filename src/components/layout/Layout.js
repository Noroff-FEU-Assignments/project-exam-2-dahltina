import logo from "../../logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import Accomodation from "../accomodation/Accomodation";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import WhyBergen from "../why-bergen/WhyBergen";
import Form from "react-bootstrap/Form";

function Layout() {
 return (
  <Router>
    <Navbar expand="lg" className="px-3 px-md-5">
      <NavLink to="/" exact>
        <Navbar.Brand>
          <img src={logo} className="logo" alt="logo" />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/why-bergen" exact className="nav-link text-uppercase">
              Why Bergen
            </NavLink>
            <NavLink to="/accomodation" className="nav-link text-uppercase">
              Accomodation
            </NavLink>
            <NavLink to="/contact" className="nav-link text-uppercase">
              Contact
            </NavLink>
          </Nav>
          <NavLink to="/login" className="nav-link login login-menu">
            Login
          </NavLink>
          <Form.Group className="d-flex" id="search-form">
            <Form.Control className="form-control me-2" id="search" type="search" placeholder="Search" />
          </Form.Group>
        </Navbar.Collapse>
    </Navbar>
    <Container>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/why-bergen" element={<WhyBergen />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  </Router>
 );
}

export default Layout;
