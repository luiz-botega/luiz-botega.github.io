import React, { Component } from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"
import Landing from "../components/landing"
import About from "../components/about"
import Process from "../components/process"
import Portfolio from "../components/portfolio"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="outer-div">
        <Menu />
        <Landing />
        <About />
        <Process />
        <Portfolio />
      </div>
    )
  }
}
export default App
