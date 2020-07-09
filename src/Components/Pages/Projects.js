import React from "react";

export default function Projetcs() {
  return (
    <div>
      <div className="container-fluid about-container">
        <div className="container">
          <div className="row ">
            <div className="col-sm">
              <br />
              {/* links */}
              <img
                src="https://cdn3.iconfinder.com/data/icons/seo-and-internet-marketing-11/512/30-256.png"
                className="mr-3 "
                alt="..."
              />
              {/* links */}
              <div className="media about-top">
                {/* <img src="https://cdn4.iconfinder.com/data/icons/famous-character-vol-2-flat/48/Avatar_Famous_Characters-07-256.png" className="mr-3 " alt="..." /> */}
                <div className="media-body">
                  <h3 className="mt-0">Projects</h3>
                  <br />
                  <h5>Sample project links:</h5>
                </div>
              </div>
            </div>
          </div>
          {/* media */}
          {/* 1 */}
          <div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <h5 class="card-title">Covid-19 Tracker</h5>
              <p class="card-text">
                Description: Covid-19 tracker is an application designed to
                track the progress of the pandemic, by Country, historical
                progress heat map, and latest news related the pandemic.
                <p />
                <p>
                  Technologies: Covid-19 tracker uses HTML, SCC, Bootstrap,
                  Various Public API’s to Covid-19 data and News articles, as
                  well as Covid-19 spread history in the form of a Heat map.
                </p>
              </p>
              <a
                href="https://louiejf1.github.io/Project1.github.io/"
                class="btn btn-primary projectsButton"
              >
                Project Link
              </a>
              <a
                href="https://github.com/louiejf1/Project1.github.io"
                class="btn btn-primary projectsButton"
              >
                GitHub
              </a>
            </div>
          </div>
          {/* 2 */}
          <div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <h5 class="card-title">Code Hunters</h5>
              <p class="card-text">
                Description: Code Hunters is an coding specific job search
                engine, that connect freelance or coders looking for work with
                Employer who are looking for codes based on experience, codding
                languages and location
              </p>
              <p class="card-text">
                Technologies: Node, Express, MySQL, Handlebars, MVC, HTML,
                Matarialize, CSS, and deployed on Heroku
              </p>
              <a
                href="https://calm-falls-17449.herokuapp.com/"
                class="btn btn-primary projectsButton"
              >
                Project Link
              </a>
              <a
                href="https://github.com/louiejf1/Project2"
                class="btn btn-primary projectsButton"
              >
                GitHub
              </a>
            </div>
          </div>
          {/* 3 */}
          <div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <h5 class="card-title">Weather Dashboard</h5>
              <p class="card-text">
                Description: Weather Dashboard is an app to see the weather
                outlook for multiple cities so, the user can plan their day,
                clothing, schedule accordingly.
              </p>
              <p class="card-text">
                Technologies: Use the OpenWeather API to retrieve weather data
                for cities. Build a weather dashboard that will run in the
                browser and feature dynamically updated HTML and CSS.
              </p>
              <a href="https://louiejf1.github.io/Weather-Dashboard.io/" class="btn btn-primary projectsButton">
              Project Link
              </a>
              <a href="https://github.com/louiejf1/Weather-Dashboard.io" class="btn btn-primary projectsButton">
              GitHub
              </a>
            </div>
          </div>
          {/* media */}
        </div>
      </div>
    </div>
  );
}
