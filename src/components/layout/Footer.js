import logo from "../../images/logo-light.png";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactInfo from "../contact/ContactInfo";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="mt-5 py-5">
        <Row>
          <Col className="d-flex flex-column col-6 col-md-2">
            <img src={logo} alt="logo" width="180px"/>
            <ContactInfo />
          </Col>
          <Col className="d-flex flex-column col-6 col-md-2 mt-0">
            <h3>Help</h3>
            <p><a href="#">About</a></p>
            <Link to="/contact">
              <p>Contact us</p>
            </Link>
            <p><a href="#">Covid 19</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Terms and conditions</a></p>
          </Col>
          <Col className="col-sm-12 col-md-7 mt-4 mt-md-0">
            <h3>Newsletter</h3>
            <p>Sign up for our newletter for news, offers and more</p>
            <form className="d-flex flex-wrap">
              <label for="email" className="form-label">Email address
                <input type="email" className="form-control" id="email" />
              </label>
              <button type="submit" className="btn btn-primary">Sign me up!</button>
            </form>
          </Col>
          <Col className="col-12 col-md-1 mt-4 mt-md-0">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
