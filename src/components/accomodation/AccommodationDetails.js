import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_API } from "../../constants/api";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Footer from "../layout/Footer";
import RoomTypes from "./RoomTypes";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const url = BASE_API + "wp/v2/accommodations/";

export default function AccomodationDetails() {

  const [accommodation, setAccommodation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate.push("/");
  }

  const api = url + id;

  useEffect(function() {
    async function getData() {

      try {
        const response = await fetch(api);

        if (response.ok) {
          const json = await response.json();
          setAccommodation(json);
        }
      }

      catch (error) {
        setError(error.toString())
      }

      finally {
        setLoading(false);
      }
    }
    getData()
  }, [])

  if (loading) {
    return <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
  }

  if (error) {
    return <Alert className="alert-danger text-center">
              An error occured while trying to fetch details
            </Alert>
  }

  return (
    <>
      <Container className="mt-5 accommodation-details">
        <Breadcrumb>
          <Breadcrumb.Item href="/accommodation">Accommodation</Breadcrumb.Item>
          <Breadcrumb.Item active>{accommodation.acf.title}</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col className="d-flex flex-column col-8 mb-5">
            <Image src={accommodation.acf.img_1} />
          </Col>
          <Col className="d-flex flex-column col-4 mb-5">
            <Image src={accommodation.acf.img_2} className="mb-3" />
            <Image src={accommodation.acf.img_3} />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex flex-column col-12 col-lg-7">
            <Heading Tag="h1" title={accommodation.acf.title} className="fs-2" />
            <Paragraph Tag="em" content={accommodation.acf.location} className="fs-5" />
            <div className="my-5" dangerouslySetInnerHTML={{ __html: accommodation.acf.description }} />
            <Heading Tag="h3" title="Facilities" />
            <Paragraph Tag="p" content={accommodation.acf.facilities} />
          </Col>
          <Col className="d-flex col-lg-5 align-items-lg-end flex-column">
            <RoomTypes />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
