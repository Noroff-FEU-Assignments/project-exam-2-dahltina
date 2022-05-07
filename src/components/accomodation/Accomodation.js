import Container from "react-bootstrap/Container";
import Footer from "../layout/Footer";
import Heading from "../typography/Heading";
import AccomodationList from "./AccommodationList";

export default function Accomodation() {
  return (
    <>
      <Container className="my-5">
        <Heading Tag="h1" title="Accommodation" />
        <AccomodationList />
      </Container>
      <Footer />
    </>
  )
}
