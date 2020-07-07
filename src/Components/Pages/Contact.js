import React from 'react'

export default function Contact() {
    return (
            <div className="container-fluid about-container">
      <div className="container">
        <div className="row ">
          <div className="col-sm">
            <img
              src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/contact_card-256.png"
              className="mr-3 "
              alt="..."
            />
            <div className="media about-top">
              {/* <img src="https://cdn4.iconfinder.com/data/icons/famous-character-vol-2-flat/48/Avatar_Famous_Characters-07-256.png" className="mr-3 " alt="..." /> */}
              <div className="media-body">
                <h3 className="mt-0">Ludwig Flores</h3>
                <h5>Communication Channels</h5>    
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <div className="card about-card">
              <img
                src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/linkedin-128.png"
                className="card-img-top"
                alt="Keybord Picture"
              />
              <div className="card-body">
                <h5 className="card-title">My LinkedIN</h5>
                <a className="about-a" href="https://www.linkedin.com/in/ludwig-flores/">linkedin.com/in/ludwig-flores/</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card about-card">
              <img
                src="https://cdn2.iconfinder.com/data/icons/seo-flat-6/128/39_Email_Marketing-128.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">My Email</h5>
                <a className="about-a" href="https://www.louiejf1@gmail.com">louiejf1@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card about-card">
              <img
                src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-128.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">My GitHub</h5>
                <a className="about-a" href="https://github.com/louiejf1">https://github.com/louiejf1</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}