import React, { useState, useEffect } from "react";
import { BASE_API } from "../constants/api";

const url = BASE_API + "wp/v2/accommodations";

export const DataContext = React.createContext({});

export default function DataProvider(props) {
  const [data, setData] = useState([]);

  useEffect(function() {
    async function getData() {
      try {
        const response = await fetch(url);

        if(response.ok) {
          const json = await response.json();
          setData(json);
        }
      }

      catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
}
