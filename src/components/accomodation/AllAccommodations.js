import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Image from "react-bootstrap/Image";

export default function AllAccommodations() {

  const data = useContext(DataContext);

  return (
    <div className="all-accommodations-container">
      {data.map((item) => {
        return (
          <Link key={item.id} to={`${item.id}`} className="text-decoration-none">
            <Container className="py-5 accommodation-item">
              <Row>
                <Col className="col-12 col-lg-5 mb-5 mb-lg-0">
                  <Image src={item.acf.img_1} alt={item.acf.title} />
                </Col>
                <Col className="col-12 col-lg-4">
                  <Heading Tag="h3" title={item.acf.title} className="fs-3"/>
                  <Paragraph Tag="em" content={item.acf.location} className="fs-4" />
                  <div className="my-4 fs-5" dangerouslySetInnerHTML={{ __html: item.acf.excerpt }} />
                  <Heading Tag="h4" title="HIGHLIGHTS" />
                  <Paragraph Tag="em" content={item.acf.facilities} className="fs-6"/>
                </Col>
                <Col className="col-12 col-lg-3 align-self-end">
                  <Paragraph Tag="p" content={`From $${item.acf.price} / night`} />
                  <Button>More details</Button>
                </Col>
              </Row>
            </Container>
          </Link>
        )
      })}
    </div>
  )
}
