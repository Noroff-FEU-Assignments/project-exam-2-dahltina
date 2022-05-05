import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../layout/Footer";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";

export default function AdminPanel() {
  return (
    <>
      <Container className="my-5">
        <Heading Tag="h1" title="Hi, username" className="text-center"/>
        <Paragraph Tag="p" content="You have x new messages and x new enqueries" className="text-center"/>
        <Row className="mt-5">
          <Col>
            <Heading Tag="h5" title="Messages" />
          </Col>
          <Col>
            <Heading Tag="h5" title="Enqueries" />
          </Col>
          <Col>
            <Heading Tag="h5" title="Actions" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
