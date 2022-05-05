import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../layout/Footer";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import { getUsername } from "../../hooks/useLocalStorage";
import GetMessages from "./GetMessages";
import GetEnquiries from "./GetEnquiries";

export default function AdminPanel() {

  const username = getUsername();

  return (
    <>
      <Container className="my-5">
        <Heading Tag="h1" title={`Hi, ${username}`} className="text-center"></Heading>
        <Paragraph Tag="p" content="You have x new messages and x new enquiries" className="text-center"/>
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
            <div className="add-accommodation-btn my-5">Add accommodation</div>
            <div className="add-accommodation-btn my-5">Edit accommodation</div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
