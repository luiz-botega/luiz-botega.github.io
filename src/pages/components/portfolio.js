import React, { Component } from "react"
import { Link } from "gatsby"
import leafBackground from "../../static/leafbackground.png"
import case1_0 from "../../static/portfolio/case1_0.png"
import case2_0 from "../../static/portfolio/case2_0.png"
import case3_0 from "../../static/portfolio/case3_0.png"
import case4_0 from "../../static/portfolio/case4_0.png"
import case5_0 from "../../static/portfolio/case5_0.png"
import case6_0 from "../../static/portfolio/case6_0.png"
import case7_0 from "../../static/portfolio/case7_0.png"
import case8_0 from "../../static/portfolio/case8_0.png"
import case9_0 from "../../static/portfolio/case9_0.png"

class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCard: null,
    }
  }
  componentDidMount = () => {
    let leafage = []
    for (let i = 0; i < 30; i++) {
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
    this.setState({ leafage: leafage })
  }

  manageCards = job => {
    if (job == this.state.selectedCard) {
      this.setState({ selectedCard: null })
      let selectedCards = document.querySelectorAll(".case-card")
      selectedCards.forEach(elem => {
        elem.classList.remove("hide")
      })
      let selectedButton = document.getElementById(job + "-button")
      selectedButton.classList.remove("selected")
    } else {
      this.setState({ selectedCard: job })

      let selectedCards = document.querySelectorAll(".case-card." + job)
      selectedCards.forEach(elem => {
        elem.classList.remove("hide")
      })

      let unselectedButtons = document.querySelectorAll(".portfolio-menu-item")
      console.log(unselectedButtons)
      unselectedButtons.forEach(elem => {
        elem.classList.remove("selected")
      })

      let unselectedCards = document.querySelectorAll(".case-card:not(." + job)
      unselectedCards.forEach(elem => {
        elem.classList.add("hide")
      })

      let selectedButton = document.getElementById(job + "-button")
      selectedButton.classList.add("selected")
    }
  }

  render() {
    let portfolio = (
      <div id="portfolio-div">
        <div id="leafage">{this.state.leafage}</div>
        <div id="portfolio-box" className="row">
          <div id="portfolio-menu" className="col-3">
            <div
              id="design-strategy-button"
              className="portfolio-menu-item"
              onClick={() => {
                this.manageCards("design-strategy")
              }}
            >
              Design Strategy Leader
            </div>
            <div
              id="service-designer-button"
              className="portfolio-menu-item"
              onClick={() => {
                this.manageCards("service-designer")
              }}
            >
              Service Designer
            </div>
            <div
              id="ux-designer-button"
              className="portfolio-menu-item"
              onClick={() => {
                this.manageCards("ux-designer")
              }}
            >
              UX Designer
            </div>
            <div
              id="ui-designer-button"
              className="portfolio-menu-item"
              onClick={() => {
                this.manageCards("ui-designer")
              }}
            >
              UI Designer
            </div>
            <div
              id="scrum-master-button"
              className="portfolio-menu-item"
              onClick={() => {
                this.manageCards("scrum-master")
              }}
            >
              SCRUM Master
            </div>
            <div
              id="data-scientist-button"
              className="portfolio-menu-item"
              onClick={() => {
                this.manageCards("data-scientist")
              }}
            >
              Data Scientist
            </div>
          </div>
          <div id="all-cases" className="col-9">
            <div className="case-card col-4 service-designer">
              <Link to="/portfolio/case1">
                <img src={case1_0} alt="" />
                <div className="card-title ">
                  <div>ReferenciaSC</div>
                  <p>Service Designer</p>
                </div>
              </Link>
            </div>
            <div className="case-card col-4 ux-designer ui-designer design-strategy">
              <Link to="/portfolio/underconstruction">
                <img src={case2_0} alt="" />
                <div className="card-title ">
                  <div>Under Construction</div>
                  <p>Design Strategy Leader</p>
                  <p>UX Designer</p>
                  <p>UI Designer</p>
                </div>
              </Link>
            </div>
            <div className="case-card col-4 ux-designer ui-designer design-strategy data-scientist">
              <Link to="/portfolio/underconstruction">
                <img src={case3_0} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                  <p>Design Strategy Leader</p>
                  <p>UX Designer</p>
                  <p>UI Designer</p>
                  <p>Data Scientist</p>
                </div>
              </Link>
            </div>
            <div className="case-card col-4 scrum-master ux-designer ui-designer data-scientist">
              <Link to="/portfolio/underconstruction">
                <img src={case4_0} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                  <p>UX Designer</p>
                  <p>UI Designer</p>
                  <p>SCRUM Master</p>
                  <p>Data Scientist</p>
                </div>
              </Link>
            </div>
            <div className="case-card col-4 scrum-master ux-designer design-strategy service-designer">
              <Link to="/portfolio/underconstruction">
                <img src={case5_0} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                  <p>Design Strategy Leader</p>
                  <p>Service Designer</p>
                  <p>UX Designer</p>
                  <p>SCRUM Master</p>
                </div>
              </Link>
            </div>
            <div className="case-card col-4 ui-designer">
              <Link to="/portfolio/case6">
                <img src={case6_0} alt="" />
                <div className="card-title">
                  <div>luizbotega.com</div>
                  <p>UI Designer</p>
                </div>
              </Link>
            </div>
            <div className="case-card col-4 service-designer scrum-master">
              <Link to="/portfolio/case7">
                <img src={case7_0} alt="" />
                <div className="card-title">
                  <div>4.0 Maintenance</div>
                  <p>Service Designer</p>
                  <p>SCRUM Master</p>
                </div>
              </Link>
            </div>
            <div className="case-card col-4 design-strategy service-designer">
              <Link to="/portfolio/underconstruction">
                <img src={case8_0} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                  <p>Design Strategy Leader</p>
                  <p>Service Designer</p>
                </div>
              </Link>
            </div>
            <div className="case-card col-4 service-designer">
              <Link to="/portfolio/underconstruction">
                <img src={case9_0} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                  <p>Service Designer</p>
                </div>
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
