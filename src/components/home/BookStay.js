import { Container } from "react-bootstrap";
import Heading from "../typography/Heading";

export default function BookStay() {
  return (
    <div className="my-5 plan-and-book-container">
      <Container className="py-5">
        <Heading Tag="h3" title="Plan and Book" className="text-center"/>
      </Container>
    </div>
  )
}
