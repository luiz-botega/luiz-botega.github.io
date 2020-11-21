import React, { Component } from "react"
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
      console.log(style)
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
    console.log(leafage)
    let portfolio = (
      <div id="portfolio-bkgr">
        <div id="leafage">{leafage}</div>
        <div id="portfolio-div" className="row">
          portfolio
        </div>
      </div>
    )
    return portfolio
  }
}
export default Portfolio
