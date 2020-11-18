import React, { Component } from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"
import Landing from "../components/landing"
import About from "../components/about"
import Process from "../components/process"
import verticalLine from "../../static/verticalline.png"

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.verticalLineManager)
  }

  verticalLineManager = () => {
    var body = document.body,
      html = document.documentElement
    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight
    )

    let verticalLineDiv = document.getElementById("vertical-line-div")

    let initHeight = document.getElementById("landing-bkgr").offsetHeight

    let maxHeight = document
      .getElementById("contact-fixed-div")
      .getBoundingClientRect().top

    verticalLineDiv.children[0].setAttribute(
      "style",
      "height:" + (maxHeight + 40) + "px"
    )

    if (window.scrollY >= initHeight) {
      let porcentage =
        1 -
        (window.scrollY - initHeight) /
          (height - window.screen.height - initHeight)
      document
        .getElementById("vertical-line-cover")
        .setAttribute("style", "transform: scaleY(" + porcentage + ")")
    }
  }
  render() {
    return (
      <div>
        <Menu />
        <div id="vertical-line-div">
          <img src={verticalLine} className="vertical-line" />
          <div id="vertical-line-cover"></div>
        </div>
        <Landing />
        <About />
        <Process />
      </div>
    )
  }
}
export default App
