import React, { Component } from "react"
import MenuPortfolio from "../components/menuportfolio"
import nameStrokeSmall from "../../static/namestrokesmall.png"
import case7_0 from "../../static/portfolio/case7_0.png"
import case7_1 from "../../static/portfolio/case7_1.png"
import case7_2 from "../../static/portfolio/case7_2.png"
import case7_3 from "../../static/portfolio/case7_3.png"
import case7_4 from "../../static/portfolio/case7_4.png"
import case7_5 from "../../static/portfolio/case7_5.png"

class Case7 extends Component {
  componentDidMount = () => {}

  render() {
    let case7 = (
      <div id="case-div" className="case7 row">
        <MenuPortfolio />
        <div className="back-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24 "
            onClick={() => window.history.go(-1)}
          >
            <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
          </svg>
        </div>
        <div id="case-header" className="row">
          <div id="case-title">4.0 Maintenance*</div>
          <div id="case-subtitle">
            Merging design and tech for maintenance innovation
          </div>
          <div id="NDA">
            * this project was developed under NDA. The process and images were
            anonymized to protect clients' information and sensitive content.
          </div>
        </div>
        <div id="case-body" className="case-bkgr row col-12">
          <div id="brief" className="case-text col-7">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Brief</div>
            <div className="section-text">
              A traditional maintenance company, looking for providing better
              solutions to their clients, partnered up with the company I work
              for at the time to develop a state-of-the-art maintenance system.
              Allying AI and their decades of experience, the objective was to
              develop together a partnership Product using{" "}
              <span>Machine Learning models to detect failure</span> in their
              clients' equipments way before it would happen, acting
              preventively, avoiding costly manufacturing interruptions and
              lowering the need for parts replacement. As Service Designer, my
              role here was to{" "}
              <span>
                guarantee our teams and objectives were constantly aligned
              </span>{" "}
              even though we were fully virtual, focusing on real needs from
              people in the front-stage of maintenance; while as SCRUM Master I
              was{" "}
              <span>responsible for team's engagement, focus and welfare</span>{" "}
              throughout the two months of project.
            </div>
          </div>
          <div id="case7-0" className="case-img col-4">
            <img src={case7_0} alt="" />
          </div>
          <div id="process1" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Process</div>
          </div>
          <div id="case7-1" className="case-img col-9">
            <div className="subsection-header">Kick off and first Sprint</div>
            <img src={case7_1} alt="" />
          </div>
          <div className="col-8">
            <div id="process2" className="case-text">
              <div className="section-text">
                It all started a few days before the project’s kick-off, when I
                (as SCRUM Master), the Product Owner and the Head of Operations
                joined efforts in planning the first days. It was a particular
                challenge to plan the <span>virtual kick-off</span>, being this
                the first full-online project we worked at the company. Our
                plans involved a <span>power-through “week and a half”</span>{" "}
                with two lines of action:
                <ul>
                  <li>
                    <span>User-centered</span>, guided by me, to promote
                    interviews, knowledge extraction, journey mapping, clients
                    expectations’ management, and overall envisioning of the
                    final solution
                  </li>
                  <li>
                    <span>Tech-centered</span>, led by the PO, to focus on
                    architecture representation and data understanding.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div id="case7-2" className="case-img col-3">
            <div className="subsection-header">User Flow Map</div>
            <img src={case7_2} alt="" />
          </div>
          <div className="col-12">
            <div id="process2" className="case-text">
              <div className="section-text">
                All went according to plan and we ended the first Sprint with a{" "}
                <span>
                  clear understanding of technical aspects, opportunities,
                  expectations and a great relationship with the client’s team
                </span>
                . From this point on a part of our team started planning the
                data extraction while another (including myself) focused on
                knowledge extraction. It was important for us to acquire as much
                expertise in their maintenance process as possible to translate
                it into models and digital solutions. This included{" "}
                <span>mapping their maintenance journey</span> to perceive
                critical points (also resulting in other parallel opportunities
                of improvements).
              </div>
            </div>
          </div>
          <div id="case7-4" className="case-img col-12">
            <div className="subsection-header">User Journey Map</div>
            <img src={case7_4} alt="" />
          </div>
          <div className="col-12">
            <div id="process3" className="case-text">
              <div className="section-text">
                After this we needed to merge the design and tech developments,
                so I facilitated the construction of an{" "}
                <span>adapted Service Blueprint</span>, process which was then
                validated with all participants. From the Blueprint forward the
                project became very evident, the tasks clear and
                responsibilities were easily divided among the team members.
                Naturally the Service Blueprint required adjustments along the
                way, but it stayed mainly unchanged until the end of
                development. In fact, we used this framework as a guide for
                evaluating the progress of the project, painting in different
                colors the boxes that were “to do”, “in progress” or “done”.
                <br />
                <br />
                At this point my role in the project took a tech-shift, and I
                started meditating on the construction of{" "}
                <span>Data Flows, Architectures</span> (with even a little bit
                of <span>Data Science</span>), solution validation and overall{" "}
                <span>documentation of the project</span>, while still managing
                the team as SM alongside the PO.
              </div>
            </div>
          </div>
          <div id="process4" className="case-text col-8">
            <div className="section-text">
              <div id="case7-5" className="case-img">
                <div className="subsection-header">Service Blueprint</div>
                <img src={case7_5} alt="" />
              </div>
              <br />A very critical point throughout the project was{" "}
              <span>balancing the client team expectations</span>. AI is complex
              and full of possibilities, and models don’t make themselves ready.
              While the client wished for models able to detect everything for
              many different equipments, the PO and I were constantly reminding
              them that we had a clear scope, that the co-creation of the
              solution demanded as much effort from us as it did from them, and
              that we would incrementally improve the final product one step at
              a time.
            </div>
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Outcomes</div>
            <div className="section-text">
              The team ended up the 2 months project not only{" "}
              <span>on schedule and on time</span>, but we also delivered more
              than just a fully functional and scalable Machine Learning model.
              To keep up technologically, we also provided an{" "}
              <span>
                improvement plan for the client’s information architecture
              </span>
              , since they are responsible for instrumenting the IoT hardware
              and collecting the raw data. In the previous structure they would
              soon suffer from data overload, be vulnerable to security breaches
              and connection instabilities. Our models are currently able to
              cover a whole family of equipment,{" "}
              <span>
                monitoring their health and predicting potential failures in
                real time
              </span>
              . The whole team is up to speed implementing the solution among
              thousands of companies that are already clients of the partner
              company.
            </div>
          </div>
          <div id="case7-3" className="case-img col-4">
            <div className="subsection-header">Data flow diagrams</div>
            <img src={case7_3} alt="" />
          </div>
        </div>
      </div>
    )
    return case7
  }
}
export default Case7
