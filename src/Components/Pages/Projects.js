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

          <div className="row">
            <div className="col-sm">
              <div className="card about-card">
                {/* links */}
                <img
                  src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/html5-32.png"
                  className="mr-3 "
                  alt="..."
                />
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-32.png"
                  className="mr-3 "
                  alt="..."
                />
                <img
                  src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-32.png"
                  className="mr-3 "
                  alt="..."
                />
                {/* links */}
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
                {/* links */}
                <img
                  src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/html5-32.png"
                  className="mr-3 "
                  alt="..."
                />
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-32.png"
                  className="mr-3 "
                  alt="..."
                />
                <img
                  src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-32.png"
                  className="mr-3 "
                  alt="..."
                />
                {/* links */}
                <div className="card-body">
                  <h5 className="card-title">Back End</h5>
                  <p className="card-text">
                    Node.js, Express.js, MVC, ORM (Sequelize), Creating API's,
                    Mongo, MySQL, JSON, AJAX
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card about-card">
                {/* links */}
                <img
                  src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/html5-32.png"
                  className="mr-3 "
                  alt="..."
                />
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-32.png"
                  className="mr-3 "
                  alt="..."
                />
                <img
                  src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-32.png"
                  className="mr-3 "
                  alt="..."
                />
                {/* links */}
                <div className="card-body">
                  <h5 className="card-title">Dev Tools</h5>
                  <p className="card-text">Heroku, Git, HitHub, React</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
