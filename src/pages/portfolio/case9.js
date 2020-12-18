import React, { Component } from "react"
import MenuPortfolio from "../components/menuportfolio"
import nameStrokeSmall from "../../static/namestrokesmall.png"
import case9_0 from "../../static/portfolio/case9_0.png"
import case9_1 from "../../static/portfolio/case9_1.png"
import case9_2 from "../../static/portfolio/case9_2.png"
import case9_3 from "../../static/portfolio/case9_3.png"
import case9_4 from "../../static/portfolio/case9_4.png"

class Case9 extends Component {
  componentDidMount = () => {}

  render() {
    let case9 = (
      <div id="case-div" className="case9 row">
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
          <div id="case-title">Cocreation Lab</div>
          <div id="case-subtitle">
            Giving back to the community with creative economy entrepreneurship
          </div>
        </div>
        <div id="case-body" className="case-bkgr row col-12">
          <div id="brief" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Brief</div>
            <div id="case9-0" className="case-img">
              <img src={case9_0} alt="" />
            </div>
            <div className="section-text">
              <a
                href="https://cocreationlab.com.br/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Cocreation Lab</span>
              </a>{" "}
              is a creative economy incubator located in a partially abandoned
              area in downtown’s eastern-center neighborhood in Florianópolis,
              Brazil. The initiative focuses on promoting social
              entrepreneurship and, in the process, developing the region into a
              Creative District. All selected projects for incubation had to
              promote a “Social Give Back” to, well… give back to the community
              around and promote social change.
              <br />
              <br />
              While there, I started facilitating creativity and design
              workshops as part of my own Social Give Back. The results were
              great and I was invited to promote this workshop every semester.
              Our rendezvous focused on going through the main stages of the
              Double Diamond focusing on what are the biggest problems in the
              region, helping incubated projects to define individual or grupal
              give back opportunities. The workshop I narrate here occurred in
              the first semester of 2018.
            </div>
          </div>
          <div id="process1" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Process</div>
            <div id="case9-4" className="case-img">
              <img src={case9_4} alt="" />
            </div>
            <div className="section-text">
              <div>
                I organized the workshop in two 4 hours encounters, with a week
                in-between. My main outcome with the workshop was to provide
                prioritized options of give back possibilities, from which the
                teams could choose to work on. The team’s choices could take
                into consideration highests impact, feasibility in the 6-month
                period, and even closeness to their own businesses.
              </div>
              <div>
                The first day began by explaining the whole idea for the
                participants, getting to know each other, how the process would
                work, and establishing the first stepping stones for our
                endeavour. I explained that the main target there was to uncover
                latent needs to people that dwelt, permeated or even crossed
                through there, focusing on improving life quality there.
              </div>
              <div>
                As people that frequently experienced the estern-center
                themselves, the participants gave some starting perspectives on
                the pains they felt and blocked the development of the region.
                Main concerns were around safety (burglary, bad illumination,
                and low number of passer-bys at night), no sense of community
                among residents or shopkeepers, being a connection region
                without reasons for people to stay, lack of events, lots of
                trash in the streets, bad smell and vandalism.
              </div>
              <div id="case9-1" className="case-img col-3">
                <div className="subsection-header">Stakeholders Map</div>
                <img src={case9_1} alt="" />
              </div>
              <div>
                So we decided on two focuses of research: evolving the region as
                a Bohemian Route for nightlife, and providing life-style
                improvements for the daytime. This definition was basic for us
                to map the stakeholders involved (residents, shopkeepers, city
                hall and public authorities, and the Cocreation Lab itself),
                understanding each groups’ expectations.
              </div>
              <div>
                With that in hand, at the end of day one I proposed a homework
                to all participants: perform at least 3 interviews with people
                that were inside the eastern-center region and observe the
                behavior of the passer-bys. This task provided awesome returns:
                the participants returned a week later full of ideas and
                new-understandings of the region. I channeled this into
                constructing two Personas and an Empathy Map, but ideas were
                popping from left to right, so I asked the participants to start
                writing How Might We post-its (while I took note of everything
                to not let nothing go to waste).
              </div>
              <div id="case9-2" className="case-img col-12">
                <div className="subsection-header">Personas</div>
                <img src={case9_2} alt="" />
              </div>
              <div>
                We then gathered all this info into an affinity diagram, drawing
                relationships among them and turning all into a Mind Map with
                three main themes: comfort, events options plus gastronomy, and
                culture. From that we started dreaming of ways to accomplish
                improvements, with the team generating over 30 ideas which were
                filtered and placed in a Impact-Effort Matrix.
              </div>
            </div>
          </div>

          <div id="outcomes" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Outcomes</div>
            <div id="case9-3" className="case-img">
              <div className="subsection-header">Impact-Effort Matrix</div>
              <img src={case9_3} alt="" />
            </div>
            <div className="section-text">
              Aligned with Cocreation Lab managers, the teams scoped through the
              prioritized ideas and most ended up focusing on Mapping the
              shopkeepers of the region. This intended to promote a more
              cohesive community, with shopkeepers discussing and helping to
              shape the future of the eastern-center region. So the group
              tackled the challenge by going door-to-door presenting Cocreation
              Lab to everyone, listening to their needs, and promoting
              encounters to discuss entrepreneurship, legal advice and
              partnerships among owners. This also resulted in the definition of
              a Gastro-Bohemian Route and Antiquities Route, both businesses
              very common in the region full of street pubs, tallows and antique
              shops.
              <br />
              <br />
              Parallely other teams embraced the challenge of mapping bike racks
              and proposing improvements in bike mobility and reviving a
              long-gone Pub Crawl tour through the bars in the region. Along the
              years other initiatives were also implemented as day-time events
              to the community, outdoor markets, and music shows. Today the
              region is perceived as an upcoming creative district, with diverse
              and inclusive nightlife, and even public investment for
              restoration of historic buildings.
            </div>
          </div>
        </div>
      </div>
    )
    return case9
  }
}
export default Case9
