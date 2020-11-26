import React, { Component } from "react"
import { Link } from "gatsby"
import leafBackground from "../../static/leafbackground.png"

class Portfolio extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {}

  render() {
    let leafage = []
    for (let i = 0; i < 30; i++) {
      let style =
        "left:" +
        Math.random() * 90 +
        "vw; top:" +
        Math.random() * 90 +
        "vh; transform: rotate(" +
        Math.random() * 360 +
        "deg)"
      leafage.push(
        <img
          src={leafBackground}
          key={"leaf" + i}
          alt=""
          style={{
            left: Math.random() * 90 + "vw",
            top: Math.random() * 90 + "vh",
            transform: "rotate(" + Math.random() * 360 + "deg)",
          }}
        />
      )
    }
    let portfolio = (
      <div id="portfolio-div">
        <div id="leafage">{leafage}</div>
        <div id="portfolio-box" className="row">
          <div id="portfolio-menu" className="col-3">
            <div>Service Designer</div>
            <div>UX Designer</div>
            <div>UI Designer</div>
            <div>SCRUM Master</div>
            <div>Design Strategy Leader</div>
            <div>Data Scientist</div>
          </div>
          <div id="all-cases" className="col-9">
            <div className="case-card">
              <Link to="/portfolio/underconstruction">
                <div className="card-title">Under Construction</div>
              </Link>
            </div>
            <div className="case-card">
              <Link to="/portfolio/underconstruction">
                <div className="card-title">Under Construction</div>
              </Link>
            </div>
            <div className="case-card">
              <Link to="/portfolio/underconstruction">
                <div className="card-title">Under Construction</div>
              </Link>
            </div>
            <div className="case-card">
              <Link to="/portfolio/underconstruction">
                <div className="card-title">Under Construction</div>
              </Link>
            </div>
            <div className="case-card">
              <Link to="/portfolio/underconstruction">
                <div className="card-title">Under Construction</div>
              </Link>
            </div>
            <div className="case-card">
              <Link to="/portfolio/underconstruction">
                <div className="card-title">Under Construction</div>
              </Link>
            </div>
            <div className="case-card">
              <Link to="/portfolio/underconstruction">
                <div className="card-title">Under Construction</div>
              </Link>
            </div>
            <div className="case-card">
              <Link to="/portfolio/underconstruction">
                <div className="card-title">Under Construction</div>
              </Link>
            </div>
            <div className="case-card">
              <Link to="/portfolio/underconstruction">
                <div className="card-title">Under Construction</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
    return portfolio
  }
}
export default Portfolio
