import logo from "../../images/logo-light.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="mt-5 py-5">
        <Row>
          <Col className="d-flex flex-column col-6 col-md-2">
            <img src={logo} alt="logo" width="180px"/>
            <p className="mt-4">Bergen Brygge 10 <br />
              1222 Bergen <br />
              Norway</p>
            <p>Tel: <a href="#">+47 00 00 00 00</a></p>
            <p>Mail: <a href="#">hello@holidaze.com</a></p>
          </Col>
          <Col className="d-flex flex-column col-6 col-md-2 mt-0">
            <h3>Help</h3>
            <p><a href="#">About</a></p>
            <p><a href="#">Contact us</a></p>
            <p><a href="#">Covid 19</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Terms and conditions</a></p>
          </Col>
          <Col className="col-sm-12 col-md-7 mt-4 mt-md-0">
            <h3>Newsletter</h3>
            <p>Sign up for our newletter for news, offers and more</p>
            <form class="d-flex flex-wrap">
              <label for="email" class="form-label">Email address
                <input type="email" class="form-control" id="email" />
              </label>
              <button type="submit" class="btn btn-primary">Sign me up!</button>
            </form>
          </Col>
          <Col className="col-12 col-md-1 mt-4 mt-md-0">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
