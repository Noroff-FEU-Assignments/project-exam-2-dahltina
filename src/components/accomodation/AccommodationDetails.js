import { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { BASE_API } from '../../constants/api';
import Heading from '../typography/Heading';

const url = BASE_API + "wp/v2/accommodations";

export default function AccommodationDetails() {

  const [accommodation, setAccommodation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const api = url + id + "?_embed";

  useEffect(function() {
    async function getData() {

      try {
        const response = await fetch(api);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
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
    return <div>Loading..</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <Container className="mt-5">
      <Heading title={item.title.rendered} />
    </Container>
  )
}
