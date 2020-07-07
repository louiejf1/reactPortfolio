import React, { useEffect, useState } from "react";
import Jumbotron from "../Layout/Jumbotron";
import HomeBody from "../Layout//homeBody";
import Languages from "../Data/languages.json";

export default function Home() {
  const [stateLanguages, setStateLanguages] = useState([]);

  useEffect(() => {
    setStateLanguages(Languages);
  }, []);

  return (
    <>
      <Jumbotron />
      <div className="container fluid">
        <div className="row homeBody">
          <div className="col-lg-4">
            {stateLanguages.map((stateLanguages) => {
              return (
                <HomeBody
                  key={stateLanguages.key}
                  title={stateLanguages.title}
                  languages={stateLanguages.languages}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
