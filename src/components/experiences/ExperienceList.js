import { useState, useEffect} from "react";
import { BASE_API } from "../../constants/api";
import ExperienceItem from "./ExperienceItem";

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
    return <div>loading..</div>
  }

  if (error) {
    return <div>An error occured</div>
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
