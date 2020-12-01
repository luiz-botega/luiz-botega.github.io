import React, { Component } from "react"
import MenuPortfolio from "../components/menuportfolio"

class UnderConstruction extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {}

  render() {
    let underconstruction = (
      <div id="underconst-div" className="row">
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
        <div className="underconst-bkgr col-8">
          <div id="underconst-text" className="">
            <span>This page is under construction</span>
            Please, come back soon :)
          </div>
        </div>
      </div>
    )
    return underconstruction
  }
}
export default UnderConstruction
