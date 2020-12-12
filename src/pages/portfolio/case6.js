import React, { Component } from "react"
import MenuPortfolio from "../components/menuportfolio"
import nameStrokeSmall from "../../static/namestrokesmall.png"
import leaf from "../../static/leaf.png"
import case6_0 from "../../static/portfolio/case6_0.png"
import case6_1 from "../../static/portfolio/case6_1.png"
import case6_1_big from "../../static/portfolio/case6_1_big.png"
import case6_2 from "../../static/portfolio/case6_2.png"
import case6_3 from "../../static/portfolio/case6_3.png"
import case6_3_big from "../../static/portfolio/case6_3_big.png"

class Case6 extends Component {
  componentDidMount = () => {}

  render() {
    let case6 = (
      <div id="case-div" className="case6 row">
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
          <div id="case-title">luizbotega.com</div>
          <div id="case-subtitle">about me by me</div>
        </div>
        <div id="case-body" className="case-bkgr row col-12">
          <div id="brief" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Brief</div>
            <div id="case6-0" className="case-img col-4">
              <img src={case6_0} alt="" />
            </div>
            <div className="section-text">
              I started envisioning developing this website as a way to
              illustrate my skills and myself. As a client, designer, and
              developer, I established a few points to guide my process.
              <ul>
                <li>
                  Firstly, the client (in this case me) defined two main
                  requirements: the site should reflect me as a person, not only
                  my professional side, opening windows for people to talk to
                  me; and it should come with my roots, since I was born in
                  Brazil;
                </li>
                <li>
                  Secondly, the designer (also me) should go through the main
                  steps of the UI process, from lo-fi to hi-fi prototyping,
                  exploring the solution and its potentialities and going for an
                  established final concept before implementing;
                </li>
                <li>
                  Last but not least, the Front-End dev (well… me) should
                  develop it using Javascript, HTML and CSS, implementing and
                  deploying a fully responsive webpage (for desktop at first).
                </li>
              </ul>
            </div>
          </div>
          <div id="" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Process</div>
          </div>
          <div id="process1" className="case-text col-12">
            <div className="section-text">
              The requirements set, the process itself was pretty
              straightforward. I used Figma to design the lo-fi frame of the
              main page, defining 5 main sections: a landing screen; a section
              about me (including a brief description of my path so far and my
              values); another on my process (exploring the basic framework and
              tools I often use); a fourth part with my portfolio; and a last
              with my texts (linked to my Medium) and a footer with contacts.
            </div>
          </div>
          <div id="case6-1" className="case-img col-12">
            <a href={case6_1_big} target="_blank">
              <img src={case6_1} alt="" />
            </a>
          </div>
          <div id="process2" className="case-text col-12">
            <div id="case6-2" className="case-img col-4">
              <img src={case6_2} alt="" />
            </div>
            <div className="section-text">
              I opted to do a multi-page portfolio, which would imply more
              scalability, helping to organize and hierarchize the content.
              Since the client's (mine) desire is for this page to be a
              communication medium, I also decided to add contact means as fixed
              components in the lower-right corner, with passerbys having links
              to contact me at all times. Structurally, following best practices
              of UI design for responsivity, I framed the page in 12 columns
              with 8px base grid
              <br />
              <br />
              The process to evolve the lo-fi prototype to hi-fi started with a
              simple leaf. Being one of my favorite plants and a native
              South-American foliage, the whole visual concept was based on a
              "Costela de Adão" (Swiss Cheese Plant or *Monstera deliciosa*),
              leaf that stamps the page's lading screen. It helped me set the
              color pallet (using green and yellow as a very Brazilian
              combination for forests, land and gold) and adorns several places
              throughout the site.
            </div>
          </div>
          <div id="case6-3" className="case-img col-12">
            <a href={case6_3_big} target="_blank">
              <img src={case6_3} alt="" />
            </a>
          </div>
          <div id="process3" className="case-text col-12">
            <div className="section-text">
              The UI Design set, I changed my thinking-hat and started Front-End
              Development in VSCode. I implemented the whole page using
              Javascript and React, using GatsbyJS framework to allow
              multiple-page links (since React is single-page optimized). The
              need for multiple-page structure was also established to allow me
              a better monitoring of the application's user-flow by adding
              Google Analytics. For deployment I used the github.io
              infrastructure, adding a custom domain at the end.
            </div>
          </div>
          <div id="case6-leaf" className="case-img">
            <img src={leaf} alt="" />
          </div>
          <div id="outcomes" className="case-text col-9">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Outcomes</div>

            <div className="section-text">
              Since you are here, reading this line, I can assure you that the
              whole process was successful and the page is fulfilling its
              intentions. Though still only desktop friendly, the page was
              quickly put on air so that I can incrementally improve it
              overtime. New texts and cases for my portfolio are constantly
              added, and the contents of the pages also reflect my personal and
              professional development. Of course, to validate the page, I
              distributed this page for several friends to collect their
              impressions, as well as to some Human Resources experts for more
              specialized insights. After all, I am not the final user. As
              client, designer and developer, all I can do is congratulate
              myself.
            </div>
          </div>
        </div>
      </div>
    )
    return case6
  }
}
export default Case6
