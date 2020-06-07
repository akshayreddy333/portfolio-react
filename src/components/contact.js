import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import imge from "./portfolio_img.jpg";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Akshay Reddy Akkati</h2>
            <img
              // src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              src={imge}
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Around 3 years of experience with strong emphasis on Design,
              Development, Implementation, Testing and Deployment of Software
              Applications following agile methodology for continuous
              integration of development and testing.{" "}
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    +1-703-488-0605
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    akshay.akkati@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-skype" aria-hidden="true" />
                    akshaymunna95
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
