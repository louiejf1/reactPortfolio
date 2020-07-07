import React from "react";

const styles = {
  width: "250px",
};

export default function About() {
  return (
    <div className="container-fluid about-container">
      <div className="container">
        <div className="row ">
          <div className="col-sm">
            <img
              src="https://cdn4.iconfinder.com/data/icons/famous-character-vol-2-flat/48/Avatar_Famous_Characters-07-128.png"
              className="mr-3 "
              alt="..."
            />
            <div className="media about-top">
              {/* <img src="https://cdn4.iconfinder.com/data/icons/famous-character-vol-2-flat/48/Avatar_Famous_Characters-07-256.png" className="mr-3 " alt="..." /> */}
              <div className="media-body">
                <h3 className="mt-0">Ludwig Flores</h3>
                <br />
                <h5>About Me</h5>
                <br />
                <p>
                  Project Manager with Full Stack Certification in web
                  development with proven leadership skills. History of meeting
                  deadlines, creativity, and leading a team. Passionate about
                  approaching challenges from different angles and collaborating
                  with others to create meaningful results. </p>
                <br />
                <h5> Technical skills</h5>    
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <div className="card about-card">
              <img
                src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Monitor-128.png"
                className="card-img-top"
                alt="Keybord Picture"
              />
              <div className="card-body">
                <h5 className="card-title">Front End</h5>
                <p className="card-text">
                  HTML, CSS, JavaScript, JQuery, Bootstrap.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card about-card">
              <img
                src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/server_security-128.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Back End</h5>
                <p className="card-text">
                  Node.js, Express.js, MVC, ORM (Sequelize), Creating API's, Mongo, MySQL, JSON, AJAX
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card about-card">
              <img
                src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/code-128.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Dev Tools</h5>
                <p className="card-text">
                  Heroku, Git, HitHub, React 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
