import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HeroImg from "../home/HeroImg";
import Footer from "../layout/Footer";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Image from 'react-bootstrap/Image';
import Img1 from "../../images/content-1.jpg";
import Img2 from "../../images/content-2.jpg";
import Img3 from "../../images/content-3.jpg";

export default function WhyBergen() {
  return (
    <>
      <Container className="my-5">
        <Heading Tag="h1" title="DISCOVER BERGEN" className="text-center"/>
        <HeroImg />
        <Container className="my-5 intro-container">
          <Paragraph
            Tag="em"
            className="text-center intro-text"
            content="As the city of the Gateway to the Fjords of Norway,
              Bergen is the ideal combination of nature, culture and
              exciting urban life all year around."
          />
        </Container>
        <Row className="d-flex align-items-center my-5">
          <Col className="col-12 col-lg-6 order-1">
            <Heading Tag="h2" title="Mountain Hiking" className="mt-5"/>
            <Paragraph
              Tag="p"
              className="fs-4"
              content="Bergen is known as the city of seven mountains -
                most of the urban area is on or close to a fjord or bay,
                although the urban area has several mountains.
                The city centre is surrounded by the Seven Mountains Ulriken, Fløyen,
                Løvstakken, Damsgårdsfjellet, Lyderhorn, Sandviksfjellet and Blåmanen
                which means you have plenty of hikes to choose from"
            />
            <p className="fs-4">Find&nbsp;
              <a href="https://ut.no/utforsker/stedsnavn/551660/bergen/turforslag" target="_blank">
                hiking routes
              </a> in the area
            </p>
          </Col>
          <Col className="col-12 col-lg-6">
            <Image src={Img3} />
          </Col>
        </Row>
        <Row className="d-flex align-items-center my-5">
          <Col className="col-12 col-lg-6">
            <Heading Tag="h2" title="Culture, music and art" className="mt-5" />
            <Paragraph
              Tag="p"
              className="fs-4"
              content="Bergen has been the home of several notable alternative bands,
                collectively referred to as the Bergen Wave. These bands include
                Röyksopp, Aurora, Sondre Lerche, Kygo, and Alan Walker.
                Bergen is also known as the black metal capital of Norway, due to its
                role in the early Norwegian black metal scene and the amount of acts to
                come from the city in the early 1990s"
            />
            <Paragraph
              Tag="p"
              className="fs-4"
              content="Bergen is also considered to be the street art capital of Norway.
                Famed artist Banksy visited the city in 2000 and inspired many to start
                creating street art. Soon after, the city brought up the most famous
                street artist in Norway: Dolk"
            />
          </Col>
          <Col className="col-12 col-lg-6">
            <Image src={Img1} />
          </Col>
        </Row>
        <Row className="d-flex align-items-center my-5">
          <Col className="col-12 col-lg-6 order-1">
            <Heading Tag="h2" title="Restaurants, cafés and bars" className="mt-5" />
            <Paragraph
              Tag="p"
              className="fs-4"
              content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et accusam et justo duo."
            />
          </Col>
          <Col className="col-12 col-lg-6">
            <Image src={Img2} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}




