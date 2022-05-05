import { useState, useEffect} from "react";
import { BASE_API } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Paragraph from "../typography/Paragraph";

const url = BASE_API + "wp/v2/message";

export default function GetMessages() {

  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function() {
    async function getData() {
      try {
        const response = await fetch(url);

        if(response.ok) {
          const json = await response.json();
          console.log(json);
          setMessage(json);
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
    <div className="admin-messages-container my-4">
      {message.map(function (message) {
        const { id, acf, date } = message;
        const newDate = new Date(date).toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
      });
        return <div className="admin-message mx-4 my-4" key={id} acf={acf} date={date}>
          <Row className="p-4">
            <Col className="col-3">
              <Paragraph Tag="b" content="Recieved" />
              <Paragraph Tag="b" content="Name" />
              <Paragraph Tag="b" content="E-mail:" />
              <Paragraph Tag="b" content="Subject:" />
              <Paragraph Tag="b" content="Message:" />
            </Col>
            <Col className="col-9">
              <Paragraph Tag="p" content={`${newDate}`} />
              <Paragraph Tag="p" content={`${acf.name}`} />
              <Paragraph Tag="p" content={`${acf.email}`} />
              <Paragraph Tag="p" content={`${acf.subject}`} />
              <Paragraph Tag="p" content={`${acf.message}`} />
              <Button>Respond</Button>
            </Col>
          </Row>
        </div>;
      })}
    </div>
  );
}
