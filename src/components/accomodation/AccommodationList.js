import { useState, useEffect} from "react";
import { BASE_API } from "../../constants/api";
import AccommodationItem from "./AccommodationItem";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const url = BASE_API + "wp/v2/accommodations?per_page=10&page=1&_embed";

export default function AccomodationList() {

  const [accommodation, setAccommodation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function() {
    async function getData() {
      try {
        const response = await fetch(url);

        if(response.ok) {
          const json = await response.json();
          console.log(json);
          setAccommodation(json);
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
              An error occured while trying to fetch accommodations
            </Alert>
  }

  return (
    <div className="featured-container">
      {accommodation.map(function (accommodation) {
        const { id, acf } = accommodation;
        return <AccommodationItem
          key={id}
          id={id}
          acf={acf}
        />;
      })}
    </div>
  );
}
