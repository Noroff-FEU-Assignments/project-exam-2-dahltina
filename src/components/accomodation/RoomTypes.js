import { useState } from "react";
import Heading from "../typography/Heading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paragraph from "../typography/Paragraph";
import Button from "react-bootstrap/Button";
import BookingForm from "../forms/BookingForm";
import Modal from "react-bootstrap/Modal";

export default function RoomTypes() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="room-types">
      <Row>
        <Col>
          <Heading Tag="h5" title="Room Type" className="mb-5" />
          <Paragraph Tag="p" content="Double" className="py-2"/>
          <Paragraph Tag="p" content="Single" className="py-2"/>
          <Paragraph Tag="p" content="Triple" className="py-2"/>
          <Paragraph Tag="p" content="Family" className="py-2"/>
        </Col>
        <Col>
          <Heading Tag="h5" title="Fits" className="mb-5" />
          <Paragraph Tag="p" content="2" className="py-2"/>
          <Paragraph Tag="p" content="1" className="py-2"/>
          <Paragraph Tag="p" content="3" className="py-2"/>
          <Paragraph Tag="p" content="5" className="py-2"/>
        </Col>
        <Col>
          <Heading Tag="h5" title="From" className="mb-5" />
          <Paragraph Tag="p" content="$109 / night" className="py-2"/>
          <Paragraph Tag="p" content="$99 / night" className="py-2"/>
          <Paragraph Tag="p" content="$129 / night" className="py-2"/>
          <Paragraph Tag="p" content="$149 / night" className="py-2"/>
        </Col>
        <Button className="mt-4" onClick={handleShow}>Book</Button>
          <Modal show={show} onHide={handleClose} animation={false}>
            <BookingForm />
          </Modal>
      </Row>
    </div>
  )
}
