import { Container } from "react-bootstrap";
import Heading from "../typography/Heading";
import AccommodationList from "../accomodation/AccommodationList";
import HeroImg from "./HeroImg";
import Paragraph from "../typography/Paragraph";
import Button from "react-bootstrap/Button";
import BookStay from "./BookStay";
import ExperienceList from "../experiences/ExperienceList";
import Footer from "../layout/Footer";

export default function Home() {
  return (
    <>
      <Container className="my-5">
        <Heading Tag="h1" title="ACCOMMODATION IN BERGEN" className="text-center"/>
        <HeroImg className="my-5 border-top border-bottom"/>
        <Container className="my-5 intro-container">
          <Heading Tag="h2" className="intro-h2" title="Welcome to Bergen!" />
          <Paragraph
            Tag="em"
            className="intro-text"
            content="As the city of the Gateway to the Fjords of Norway,
              Bergen is the ideal combination of nature, culture and
              exciting urban life all year around."
          />
          <Button className="my-3">Read More</Button>
        </Container>
        <Heading Tag="h3" title="Popular Resorts" className="mb-4"/>
        <AccommodationList />
        <Button className="my-3">See more</Button>
      </Container>
      <BookStay />
      <Container>
        <Heading Tag="h3" title="Experiences"  className="mb-4"/>
        <ExperienceList />
        <Button className="my-3">See more</Button>
      </Container>
      <Footer />
    </>
  )
}
