import { useState } from "react";
import logo from "../../images/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "../home/Home";
import Accomodation from "../accomodation/Accomodation";
import AccommodationDetails from "../accomodation/AccommodationDetails";
import Contact from "../contact/Contact";
import Login from "../login/Login";
import WhyBergen from "../why-bergen/WhyBergen";
import { AuthProvider } from "../../context/AuthContext";
import AdminPanel from "../admin/AdminPanel";
import AddAccommodation from "../admin/AddAccommodation";
import SearchBar from "./SearchBar";
import DataContext from "../../context/DataContext";

function Layout() {

  const [isLoggedIn, setisLoggedIn] = useState(localStorage.getItem("auth"));

  function logout() {
    localStorage.removeItem("auth");
    setisLoggedIn(null);
  }

  return (
    <AuthProvider>
      <DataContext>
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

                <SearchBar />

              </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/why-bergen" element={<WhyBergen />} />
            <Route exact path="/accommodation" element={<Accomodation />} />
            <Route path="/accommodation/:id" element={<AccommodationDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/admin" element={<AdminPanel />} />
            <Route path="/add-accommodation" element={<AddAccommodation />} />
          </Routes>
        </Router>
      </DataContext>
    </AuthProvider>
  );
}

export default Layout;
