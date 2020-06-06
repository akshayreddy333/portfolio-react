import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Akshay Reddy Akkati</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I have worked with various companies in domains like Financial,
              Healthcare At present i am with American Express at Phoenix, AZ
              from 2018 I have expreience in designing and developing the
              entrprise scale applications.{" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>on Earth</p>
            <h5>Phone</h5>
            <p>+1-xxx-xxx-xxxx</p>
            <h5>Email</h5>
            <p>abcd@gmail.com</p>
            <h5>Email</h5>
            <p>abcd@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2021}
              schoolName="UMBC"
              schoolDesc="I have worked with various companies in domains like Financial, Healthcare
	At present i am with American Express at Phoenix, AZ from 2018
	I have expreience in designing and developing the entrprise scale applications"
            />

            <Education
              startYear={2012}
              endYear={2016}
              schoolName="KITS"
              schoolDesc="I have worked with various companies in domains like Financial, Healthcare
	At present i am with American Express at Phoenix, AZ from 2018
	I have expreience in designing and developing the entrprise scale applications"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2019}
              jobName="TechM"
              jobDesc="I have worked with various companies in domains like Financial, Healthcare
	At present i am with American Express at Phoenix, AZ from 2018
	I have expreience in designing and developing the entrprise scale applications"
            />

            <Experience
              startYear={2015}
              endYear={2016}
              jobName="PanTech"
              jobDesc="I have worked with various companies in domains like Financial, Healthcare
	At present i am with American Express at Phoenix, AZ from 2018
	I have expreience in designing and developing the entrprise scale applications"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="JavaScript" progress={80} />
            <Skills skill="HTML" progress={60} />
            <Skills skill="CSS" progress={52} />
            <Skills skill="Angular" progress={100} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
