import React, { Component } from "react"
import { Link } from "gatsby"
import leafBackground from "../../static/leafbackground.png"
import photo1 from "../../static/portfolio/insights.png"
import photo2 from "../../static/portfolio/workshop.png"

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
              id="design-strategy-button"
              className="portfolio-menu-item"
              onClick={() => {
                this.manageCards("design-strategy")
              }}
            >
              Design Strategy Manager
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
            <div className="case-card service-designer">
              <Link to="/portfolio/underconstruction">
                <img src={photo1} alt="" />
                <div className="card-title ">
                  <div>Under Construction</div>
                </div>
              </Link>
            </div>
            <div className="case-card ux-designer ui-designer design-strategy">
              <Link to="/portfolio/underconstruction">
                <img src={photo1} alt="" />
                <div className="card-title ">
                  <div>Under Construction</div>
                </div>
              </Link>
            </div>
            <div className="case-card service-designer scrum-master">
              <Link to="/portfolio/underconstruction">
                <img src={photo1} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                </div>
              </Link>
            </div>
            <div className="case-card scrum-master ux-designer ui-designer data-scientist">
              <Link to="/portfolio/underconstruction">
                <img src={photo1} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                </div>
              </Link>
            </div>
            <div className="case-card scrum-master ux-designer design-strategy service-designer">
              <Link to="/portfolio/underconstruction">
                <img src={photo1} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                </div>
              </Link>
            </div>
            <div className="case-card ui-designer">
              <Link to="/portfolio/underconstruction">
                <img src={photo1} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                </div>
              </Link>
            </div>
            <div className="case-card ux-designer ui-designer design-strategy data-scientist">
              <Link to="/portfolio/underconstruction">
                <img src={photo1} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                </div>
              </Link>
            </div>
            <div className="case-card design-strategy design-strategy">
              <Link to="/portfolio/underconstruction">
                <img src={photo1} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
                </div>
              </Link>
            </div>
            <div className="case-card service-designer">
              <Link to="/portfolio/underconstruction">
                <img src={photo1} alt="" />
                <div className="card-title">
                  <div>Under Construction</div>
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
