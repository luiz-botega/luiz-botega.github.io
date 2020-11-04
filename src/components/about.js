import React, { Component } from "react"

import profilePic from "../../static/profilepic.png"

class About extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    let about = (
      <div className="row about-div">
        <div className="col-12 about-bkgr">
          <div className="about-intro">
            Hi there! My name is <span>Luiz</span> and I work as a{" "}
            <span>designer</span>. Great to see you here!
          </div>
          <div className="col-8 about-body">
            <p>
              Over the past 6 years I’ve been diving into the world of{" "}
              <span>human-centered design</span> and{" "}
              <span>digital product development</span>. Along with
              consultancies, workshops, founding a startup, masters, doctorate
              and permanent jobs, I've worked with several different dimensions
              inside design.
            </p>
            <p>
              Throughout my career, I focused on exploring the intersection
              between experience design and digital businesses, especially
              involving AI. This includes qualitative and qualitative research,
              processes mapping, modeling information architecture and
              understanding the <span>impact of AI in humans lives</span>. I
              also have a background in data science and software development,
              which allows me to understand and communicate with design,
              business and tech teams.
            </p>
            <p>
              I believe designers have a key-role in making human lives better.
              And by “humans” I mean not only users, but team-mates, other
              stakeholders, and (why not dream big) the society and the
              environment. My goal is simple: to make the world a better place,
              one experience at a time.
            </p>
            <p className="about-footer">
              Welcome to my little world and I hope you enjoy your stay :)
            </p>
          </div>
        </div>
      </div>
    )
    return about
  }
}
export default About
