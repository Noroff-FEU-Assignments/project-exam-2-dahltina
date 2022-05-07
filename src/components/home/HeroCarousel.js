import { useState, useEffect} from "react";
import { BASE_API } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import Carousel from "react-bootstrap/Carousel";

const url = BASE_API + "wp/v2/image";

export default function HeroCarousel() {

  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function() {
    async function getData() {
      try {
        const response = await fetch(url);

        if(response.ok) {
          const json = await response.json();
          console.log(json);
          setImage(json);
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
    return <Alert className="alert-danger text-center">
              An error occured while trying to fetch header image
            </Alert>
  }

  return (
    <div>
      <Carousel>
        {image.map(image => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100 hero-img"
              src={image.acf.hero_img}
              alt={image.title.rendered}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
   );
}
