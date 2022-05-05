import { useState, useEffect} from "react";
import { BASE_API } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Paragraph from "../typography/Paragraph";

const url = BASE_API + "wp/v2/enquiry";

export default function GetEnquiries() {

  const [enquiry, setEnquiry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function() {
    async function getData() {
      try {
        const response = await fetch(url);

        if(response.ok) {
          const json = await response.json();
          console.log(json);
          setEnquiry(json);
        }
        else {
          setError("An error occured");
        }
      }

      catch (error) {
        setError("An error occured");
      }

      finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <div class="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
  }

  if (error) {
    return  <Alert className="alert-danger text-center">
              An error occured while trying to fetch messages
            </Alert>
  }

  return (
    <div className="admin-enquiry-container my-4">
      {enquiry.map(function (enquiry) {
        const { id, acf, date } = enquiry;
        const newDate = new Date(date).toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
      });
        return <div className="admin-enquiry mx-4 my-4" key={id} acf={acf} date={date}>
          <Row className="p-4">
            <Col className="col-3">
              <Paragraph Tag="b" content="Recieved:" />
              <Paragraph Tag="b" content="Name:" />
              <Paragraph Tag="b" content="E-mail:" />
              <Paragraph Tag="b" content="From:" />
              <Paragraph Tag="b" content="To:" />
              <Paragraph Tag="b" content="Guests:" />
              <Paragraph Tag="b" content="Rooms:" />
              <Paragraph Tag="b" content="Message:" />
            </Col>
            <Col className="col-9">
              <Paragraph Tag="p" content={`${newDate}`} />
              <Paragraph Tag="p" content={`${acf.name}`} />
              <Paragraph Tag="p" content={`${acf.email}`} />
              <Paragraph Tag="p" content={`${acf.from}`} />
              <Paragraph Tag="p" content={`${acf.to}`} />
              <Paragraph Tag="p" content={`${acf.guests}`} />
              <Paragraph Tag="p" content={`${acf.rooms}`} />
              <Paragraph Tag="p" content={`${acf.message}`} />
            </Col>
          </Row>
          <Row className="px-4 pb-4">
            <Col>
              <Button className="btn btn-danger">Respond</Button>
            </Col>
            <Col>
              <Button>Approve</Button>
            </Col>
          </Row>
        </div>;
      })}
    </div>
  );
}
