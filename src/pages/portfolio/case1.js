import React, { Component } from "react"
import MenuPortfolio from "../components/menuportfolio"
import nameStrokeSmall from "../../static/namestrokesmall.png"
import case1_1 from "../../static/portfolio/case1_1.png"
import case1_2 from "../../static/portfolio/case1_2.png"
import case1_3 from "../../static/portfolio/case1_3.png"
import case1_4 from "../../static/portfolio/case1_4.png"
import case1_5 from "../../static/portfolio/case1_5.png"
import case1_6 from "../../static/portfolio/case1_6.png"

class Case1 extends Component {
  componentDidMount = () => {}

  render() {
    let case1 = (
      <div id="case-div" className="row">
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
          <div id="case-tittle">Tidying up the company</div>
          <div id="case-subtittle">
            From human resources to end-to-end sales process
          </div>
        </div>
        <div id="case-body" className="case-bkgr row">
          <div id="case1-2" className="case-img col-12">
            <img src={case1_2} alt="" />
          </div>
          <div id="brief" className="case-text col-7">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Brief</div>
            <div className="section-text">
              Driven by a need to differentiate themselves in the competitive
              market, partners from ReferênciaSC sought out to HOMA Service
              Design (where I was working at the time), looking for a 1-week
              session of Design Sprint. The furniture company based in
              Florianópolis, Brazil, wanted to strategically become a reference
              in Startup and Innovation related furniture, but were struggling
              to put their plans in action.
            </div>
          </div>
          <div id="case1-1" className="case-img col-5">
            <img src={case1_1} alt="" />
          </div>
          <div id="process1" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Process</div>
            <div className="section-text">
              Our work started one week before the Design Sprint, when I and the
              two co-founders of HOMA joined our heads to plan the whole process
              and assign roles and tasks. As main facilitator of the Sprint, I
              was responsible for the preliminary research about the business
              furniture market, including benchmark and hidden customer. We
              planned the week ahead of us adapting the original Design Sprint
              process by Jake Knapp, with a good time for knowing the
              participants and understanding the problems’ roots. Our end-goal
              was to deliver a Commercial Playbook with main solutions
              prototyped.
            </div>
          </div>
          <div id="case1-3" className="case-img col-8">
            <img src={case1_3} alt="" />
          </div>
          <div className="col-7">
            <div id="process2" className="case-text">
              <div className="section-text">
                All things set, on the first day we discovered that the problems
                had deeper roots. Their sales process and organizational
                structure were unorganized, with same-job employees performing
                different roles and managers passing on “unwanted tasks” to
                lower ranks. To reach success, we needed to pivot the whole
                process: first we had to tidy up the company.
                <br />
                <br />
                At the end of the first day, after aligning with the clients, we
                sat to re-plan the process, adapting it from a commercial
                mindset to an internal processes focus. Though the main
                structure of the Sprint stayed the same, our outcomes changed
                slightly, adding a Human Resources Plan and a validated Service
                Blueprint with whole sales-processes restructuring. In the new
                flow, we paid particular atention to the experience of the
                staff, focusing on understanding their responsibilities and
                actual tasks, and from that map a better process for all people
                involved.
                <br />
                <br />
                After that the re-planned Sprint went on smoothly, with the team
                deeply committed. Aside from the facilitation, I was responsible
                for co-conducting users interviews and shadowing sessions with
                the collaborators, and documenting the process, always in
                collaboration with at least one of HOMA’s co-founders. On friday
                we did a final validation session of the developed service
                solution with two final clients, which was a great test-run for
                the team and provided valuable insight for the actual execution
                of what we had so thoroughly envisioned.
              </div>
            </div>
          </div>
          <div id="case1-4" className="case-img col-5">
            <div className="subsection-header">Tools used</div>
            <img src={case1_4} alt="" />
          </div>
          <div id="process3" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Outcomes</div>
            <div className="section-text">
              We ended the week up with a solid and validated Service Blueprint,
              along with a Human Resources Plan and further Insights. Even
              though the scope changed, we were able to collect enough
              understanding to provide a Commercial Playbook and a Marketing
              Strategy to differentiate ReferênciaSC from other competitors in
              the Startup furniture business, remaining true to the original
              objectives.
            </div>
          </div>
          <div id="case1-5" className="case-img col-6">
            <img src={case1_5} alt="" />
          </div>
          <div id="case1-6" className="case-img col-6">
            <img src={case1_6} alt="" />
          </div>
        </div>
      </div>
    )
    return case1
  }
}
export default Case1
