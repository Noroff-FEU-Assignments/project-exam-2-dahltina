import AddAccommodationForm from "../forms/AddAccommodationForm";
import Container from "react-bootstrap/Container";
import Footer from "../layout/Footer";

export default function AddAccommodation() {
  return (
    <>
      <Container className="my-5">
        <AddAccommodationForm />
      </Container>
      <Footer />
    </>
  )
}
