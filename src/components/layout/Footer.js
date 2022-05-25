import logo from "../../images/logo-light.png";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactInfo from "../contact/ContactInfo";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Image from "react-bootstrap/Image";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="mt-5 py-5">
        <Row>
          <Col className="d-flex flex-column col-6 col-md-2">
            <Image src={logo} alt="logo" width="180px"/>
            <ContactInfo />
          </Col>
          <Col className="d-flex flex-column col-6 col-md-2 mt-0">
            <Heading Tag="h3" title="Help" />
            <Link to="#">About</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="#">Covid 19</Link>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms and conditions</Link>
          </Col>
          <Col className="col-sm-12 col-md-7 mt-4 mt-md-0">
            <Heading Tag="h3" title="Newsletter" />
            <Paragraph Tag="p" content="Sign up for our newletter for news, offers and more" />
            <form className="d-flex flex-wrap">
              <label htmlFor="email" className="form-label">Email address
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
