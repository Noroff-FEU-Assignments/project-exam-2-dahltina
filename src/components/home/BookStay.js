import { Link } from "react-router-dom";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Heading from "../typography/Heading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BookStay() {

  const [startDate, setStartDate] = useState(new Date());
  const [dayAfter, setDayAfter] = useState(new Date(startDate.getTime() + 86400000));
  const [endDate, setEndDate] = useState(dayAfter);

  return (
    <div className="my-5 plan-and-book-container">
      <Container className="py-5">
        <Heading Tag="h3" title="Plan and Book" className="text-center"/>

        <Form id="plan-book-form">
          <Row>
            <Col className="col-6 col-lg-2">
              <Form.Group className="mb-4 mb-lg-5">
                <Form.Label>From</Form.Label>
                <DatePicker
                  dateFormat="dd.MM.yyyy"
                  calendarStartDay={1}
                  selected={startDate}
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
              </Form.Group>
            </Col>

            <Col className="col-6 col-lg-2">
              <Form.Group className="mb-4 mb-lg-5">
                <Form.Label>To</Form.Label>
                <DatePicker
                  dateFormat="dd.MM.yyyy"
                  calendarStartDay={1}
                  selected={endDate}
                  startDate={dayAfter}
                  endDate={endDate}
                  minDate={dayAfter}
                />
              </Form.Group>
            </Col>

            <Col className="col-6 col-lg-2">
              <Form.Group className="mb-4 mb-lg-5">
                <Form.Label>Guests</Form.Label>
                <Form.Select>
                  <option>Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                  <option value="3">6</option>
                  <option value="3">7</option>
                  <option value="3">8</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col className="col-6 col-lg-2">
              <Form.Group className="mb-4 mb-lg-5">
                <Form.Label>Rooms</Form.Label>
                <Form.Select >
                  <option>Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col className="col-12 col-lg-4 align-self-end">
              <Link to="/accommodation">
                <Button variant="primary" className="mb-4 mb-lg-5 mt-4 mt-lg-0">
                  Search
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>

      </Container>
    </div>
  )
}
