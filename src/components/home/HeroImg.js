import { useState, useEffect} from "react";
import { BASE_API } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";

const url = BASE_API + "wp/v2/image";

export default function HeroImg() {

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
    return <div>An error occured</div>
  }

  return (
    <>
      {image.map(function (item) {
        return <>
          <img src={item.acf.hero_img} className="hero-img"/>
        </>;})}
    </>
   );
}
