import AddAccommodationForm from "../forms/AddAccommodationForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../layout/Footer";
import UploadImages from "../forms/UploadImages";
import Heading from "../typography/Heading";

export default function AddAccommodation() {
  return (
    <>
      <Container className="my-5">
        <Heading Tag="h1" title="Add listing" className="text-center"/>
        <Row>
          <Col className="col-12 col-lg-5 my-3">
            <UploadImages />
          </Col>
          <Col className="col-12 col-lg-7 my-3">
            <AddAccommodationForm />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
