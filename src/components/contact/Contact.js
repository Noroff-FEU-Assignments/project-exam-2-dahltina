import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import ContactForm from "../forms/ContactForm";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import ContactInfo from "./ContactInfo";
import logo from "../../images/logo.png";
import Footer from "../layout/Footer";

export default function Contact() {

  useEffect(() => {
    document.title = "Contact | Holidaze";
  }, []);

  return (
    <>
      <Container className="my-5 contact-wrapper">
        <Heading Tag="h1" title="How can we help?" className="text-center" />
        <Paragraph
          Tag="p"
          content="Please do not hesitate to get in touch with any
          question you might have. If you're in Bergen feel free to stop
          by for a coffee and a chat :)"
          className="text-center"
        />
        <Row>
          <Col className="col-12 col-sm-7 col-lg-8 mt-3 mt-md-4 mb-4 mb-md-0">
            <ContactForm />
          </Col>
          <Col className="col-12 col-sm-5 col-lg-4 mt-3 mt-md-4">
          <Container className="contact-info">
            <Heading Tag="h3" title="Contact info"  className="mb-3"/>
            <img src={logo} alt="logo" width="180px" />
            <ContactInfo />
            <p>Find us on <a href="https://maps.google.com" target="_blank">google maps</a></p>
          </Container>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
