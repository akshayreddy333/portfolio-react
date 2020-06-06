import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
  Icon,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  state = {};

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              React (also known as React.js or ReactJS) is an open-source
              JavaScript library for building user interfaces. It is maintained
              by Facebook and a community of individual developers and companies
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              React (also known as React.js or ReactJS) is an open-source
              JavaScript library for building user interfaces. It is maintained
              by Facebook and a community of individual developers and companies
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.auth0.com/blog/blog/React-logo.png) center / cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>
              React (also known as React.js or ReactJS) is an open-source
              JavaScript library for building user interfaces. It is maintained
              by Facebook and a community of individual developers and companies
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Spring</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Cloud</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Spring</Tab>
          <Tab>Java</Tab>
          <Tab>Angular</Tab>
        </Tabs>
        {/* <section className="projects-grid"> */}
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
        {/* </section> */}
      </div>
    );
  }
}

export default Projects;
