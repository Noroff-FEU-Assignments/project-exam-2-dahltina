import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../layout/Footer";
import Heading from "../typography/Heading";
import { getUsername } from "../../hooks/useLocalStorage";
import GetMessages from "./GetMessages";
import GetEnquiries from "./GetEnquiries";
import { Link } from "react-router-dom";

export default function AdminPanel() {

  useEffect(() => {
    document.title = "Admin panel | Holidaze";
  }, []);

  const username = getUsername();

  return (
    <>
      <Container className="my-5">
        <Heading Tag="h1" title={`Hi, ${username}`} className="text-center"></Heading>
        <Row className="mt-5">
          <Col className="col-12 col-lg-5">
            <Heading Tag="h5" title="Messages" />
            <GetMessages />
          </Col>
          <Col className="col-12 col-lg-5">
            <Heading Tag="h5" title="Enquiries" />
            <GetEnquiries />
          </Col>
          <Col className="col-12 col-lg-2">
          <Heading Tag="h5" title="Actions" />
          <div className="my-4">
          <div className="add-accommodation-btn mb-3">
            <Link to="/add-accommodation">Add accommodation</Link>
          </div>
            <div className="add-accommodation-btn">Edit accommodation</div>
          </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
