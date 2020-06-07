import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import imge from "./portfolio_img.jpg";

class Resume extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                // src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                src={imge}
                alt="avatar"
                style={{ height: "300px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Akshay Reddy Akkati</h2>
            <h4 style={{ color: "grey" }}>Professional Summary</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Around 3 years of experience with strong emphasis on Design,
              Development, Implementation, Testing and Deployment of Software
              Applications following agile methodology for continuous
              integration of development and testing.{" "}
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>4766 Aldgate Green, Arbutus, MD 21227</p>
            <h5>Phone</h5>
            <p>+1-703-488-0605</p>
            <h5>Email</h5>
            <p>akshay.akkati@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2021}
              schoolName="University of Maryland, Baltimore County"
              schoolDesc="Relevant Coursework: Advanced Operating Systems, Service Oriented Computing, Principles of Computer Security, Network Technologies, Introduction to Machine Learning, Advanced Computer Architecture"
            />

            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Kakatiya University"
              schoolDesc="Relevant Coursework: Operating Systems, Software Engineering, Discrete Mathematics, Data Structures, Computer Architecture and Organization, Principles of Programming Language, Theory of Computation, Language Processors."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Tech Mahindra Ltd, Bengaluru India"
              jobDesc="•	Developed RESTful APIs using Spring to migrate the data to AWS S3 from on-prem Database and schedule the job for every month and a validation tool to monitor the migration job.
              •	Developed APIs to automate the task of generating and feeding config files to Datalogger which helped our team to reduce efforts by 80%.
              •	Developed web pages using Angular with graphs to illustrate metrics of APIs.
              •	Used lambda functions in AWS to get the details and monitor S3 files and Glue service for deserialization.
              "
            />

            <Experience
              startYear={2015}
              endYear={2016}
              jobName="PanTech Pro Ed"
              jobDesc="•	Worked on an internal project where I developed an UI in Angular, using which user get to choose the means of transportation for daily commute and deployed to pivotal cloud foundry.
              •	Implemented Authentication and Authorization based on user roles.
              "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="Java" progress={80} />
            <Skills skill="JavaScript" progress={70} />
            <Skills skill="HTML/CSS" progress={90} />
            <Skills skill="SQL" progress={80} />
            <Skills skill="Angular" progress={70} />
            <Skills skill="React" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
