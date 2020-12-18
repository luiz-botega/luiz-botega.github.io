import React, { Component } from "react"
import MenuPortfolio from "../components/menuportfolio"
import nameStrokeSmall from "../../static/namestrokesmall.png"
import case8_1 from "../../static/portfolio/case8_1.png"
import case8_2 from "../../static/portfolio/case8_2.png"

class Case8 extends Component {
  componentDidMount = () => {}

  render() {
    let case8 = (
      <div id="case-div" className="case8 row">
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
          <div id="case-title">Designing Design</div>
          <div id="case-subtitle">
            Thinking Design as a Process in an AI context
          </div>
        </div>
        <div id="case-body" className="case-bkgr row col-12">
          <div id="brief" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Brief</div>
            <div className="section-text">aaa</div>
          </div>
          <div id="process1" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Process</div>
            <div id="case8-1" className="case-img">
              <img src={case8_1} alt="" />
            </div>
            <div id="case8-2" className="case-img">
              <img src={case8_2} alt="" />
            </div>
            <div className="section-text">aaa</div>
          </div>

          <div id="outcomes" className="case-text col-12">
            <img src={nameStrokeSmall} className="stroke" alt="" />
            <div className="section-header">Outcomes</div>
            <div className="section-text">aaa</div>
          </div>
        </div>
      </div>
    )
    return case8
  }
}
export default Case8
