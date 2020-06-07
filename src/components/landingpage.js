import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import imge from "./portfolio_img.jpg";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              //   src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
              src={imge}
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Java Full Stack Developer</h1>
              <hr />
              <p>
                {" "}
                Java | Angular | React | JavaScript | Cloud | Spring |
                Microservices
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/akshay-reddy-akkati/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/akshayreddy333"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/akshaymunna95"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
