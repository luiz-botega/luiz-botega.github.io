import React, { Component } from "react"
import profilePic from "../../static/profilepic.png"
import { doc } from "prettier"

class About extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    let about = (
      <div id="about-div">
        <div className="row about-bkgr">
          <div id="about-text" className="col-8">
            <div className="about-intro">
              Hi there! My name is <span>Luiz</span> and I work as a{" "}
              <span>designer</span>. Great to see you here!
            </div>
            <div className="about-body">
              <p>
                Over the past 6 years I’ve been diving into the world of{" "}
                <span>human-centered design</span> and{" "}
                <span>digital product development</span>. Along with
                consultancies, workshops, founding a startup, masters, doctorate
                and permanent jobs, I've worked with several different
                dimensions inside design.
              </p>
              <p>
                Throughout my career, I focused on exploring the intersection
                between experience design and digital businesses, especially
                involving AI. This includes qualitative and qualitative
                research, processes mapping, modeling information architecture
                and understanding the <span>impact of AI in humans lives</span>.
                I also have a background in data science and software
                development, which allows me to understand and communicate with
                design, business and tech teams.
              </p>
              <p>
                I believe designers have a key-role in making human lives
                better. And by “humans” I mean not only users, but team-mates,
                other stakeholders, and (why not dream big) the society and the
                environment. My goal is simple: to make the world a better
                place, one experience at a time.
              </p>
              <p className="about-footer">
                Welcome to my little world <br />
                and I hope you enjoy your stay :)
              </p>
            </div>
            <div className="values-box">
              <div className="values-header">Personal values</div>
              <div className="values-body">
                <div>human-centered culture</div>
                <div>diversity of body and mind</div>
                <div>fairness of judgement</div>
                <div>transparency</div>
                <div>organized processes</div>
                <div>planning before execution</div>
                <div>respect for people</div>
                <div>ownership and trust</div>
                <div>coherence between speech and action</div>
              </div>
            </div>
            <div className="languages-box">
              <div className="languages-header">Languages</div>
              <div className="languages-body">
                <div className="languages-div">
                  <div className="languages-title">Portuguese</div>
                  <div className="languages-gouge-100"></div>
                </div>

                <div className="languages-div">
                  <div className="languages-title">German</div>
                  <div className="languages-gouge-75"></div>
                  <div className="languages-gouge-25-off"></div>
                </div>

                <div className="languages-div">
                  <div className="languages-title">English</div>
                  <div className="languages-gouge-100"></div>
                </div>

                <div className="languages-div">
                  <div className="languages-title">Spanish</div>
                  <div className="languages-gouge-50"></div>
                  <div className="languages-gouge-50-off"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="profile-pic-box">
              <img className="profile-pic" src={profilePic} alt=""></img>
            </div>
            <div className="experiences-box">
              <div className="experiences-header">Experiences</div>
              <div className="experiences-body">
                <div>
                  <div className="experiences-title">
                    Design Strategy Leader
                  </div>
                  <div className="experiences-loc">
                    @ Aquarela Advances Analytics
                  </div>
                  <div className="experiences-time">Jul 2020 - present</div>
                </div>
                <div>
                  <div className="experiences-title">
                    Service Designer & Data Scientist
                  </div>
                  <div className="experiences-loc">
                    @ Aquarela Advances Analytics
                  </div>
                  <div className="experiences-time">Sep 2019 - present</div>
                </div>

                <div>
                  <div className="experiences-title">
                    Engineering Design Researcher
                  </div>
                  <div className="experiences-loc">
                    @ Federal University of Santa Catarina
                  </div>
                  <div className="experiences-time">
                    Doctorate Abr 2017 - present <br />
                    Masters Mar 2014 - Feb 2016
                  </div>
                </div>

                <div>
                  <div className="experiences-title">
                    Service Design Consultant
                  </div>
                  <div className="experiences-loc">@ HOMA Service Design</div>
                  <div className="experiences-time">Sep 2018 - Feb 2019</div>
                </div>

                <div>
                  <div className="experiences-title">
                    Co-Founder / Entrepreneur
                  </div>
                  <div className="experiences-loc">@ CRIB for design</div>
                  <div className="experiences-time">Abr 2016 - Dec 2018</div>
                </div>

                <div>
                  <div className="experiences-title">
                    Specialization User-Centered Design
                  </div>
                  <div className="experiences-loc">
                    420h @ Positivo University
                  </div>
                  <div className="experiences-time">Mar 2014 - Sep 2015</div>
                </div>

                <div>
                  <div className="experiences-title">Volunteer </div>
                  <div className="experiences-loc">
                    @ Integrar Educational Project
                  </div>
                  <div className="experiences-time">
                    Physics Teacher Mar 2016 - Jul 2019 <br />
                    Coordinator Feb 2018 - Feb 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    return about
  }
}
export default About
