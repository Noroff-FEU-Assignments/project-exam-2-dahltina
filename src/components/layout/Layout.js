import { useState } from "react";
import logo from "../../images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import Home from "../home/Home";
import Accomodation from "../accomodation/Accomodation";
import AccommodationDetails from "../accomodation/AccommodationDetails";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import WhyBergen from "../why-bergen/WhyBergen";
import Form from "react-bootstrap/Form";
import { AuthProvider } from "../../context/AuthContext";
import AdminPanel from "../admin/AdminPanel";

function Layout() {

  const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem("auth"));
  // const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("auth");
    setisLoggedIn(null);
  }

  console.log(isLoggedIn);

  return (
    <AuthProvider>
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
                <NavLink to="/accommodation" className="nav-link text-uppercase">
                  Accommodation
                </NavLink>
                <NavLink to="/contact" className="nav-link text-uppercase">
                  Contact
                </NavLink>

                {isLoggedIn ? (
                  <NavLink to="/admin" className="nav-link text-uppercase">
                    Admin
                  </NavLink>
                ) : (
                  <></>
                )}

              </Nav>

              {isLoggedIn ? (
                <Link onClick={logout} className="nav-link login login-menu logout" to="./">Logout</Link>
              ) : (
                <Link className="nav-link login login-menu" to="/login">Login</Link>
              )}

              <Form.Group className="d-flex" id="search-form">
                <Form.Control className="form-control me-2" id="search" type="search" placeholder="Search" />
              </Form.Group>
            </Navbar.Collapse>
        </Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/why-bergen" element={<WhyBergen />} />
          <Route path="/accommodation" element={<Accomodation />} />
          <Route path="/accommodation/:id" element={<AccommodationDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default Layout;
