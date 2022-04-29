import { useState, useEffect} from "react";
import { BASE_API } from "../../constants/api";
import ExperienceItem from "./ExperienceItem";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const url = BASE_API + "wp/v2/experiences";

export default function ExperienceList() {

  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function() {
    async function getData() {
      try {
        const response = await fetch(url);

        if(response.ok) {
          const json = await response.json();
          console.log(json);
          setExperience(json);
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
    <div className="experience-container">
      {experience.map(function (item) {
        const { id, image, title, acf } = item;
        return <ExperienceItem
          key={id}
          title={title}
          image={image}
          acf={acf}
        />;
      })}
    </div>
  );
}
