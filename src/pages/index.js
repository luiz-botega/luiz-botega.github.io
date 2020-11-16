import React, { Component } from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"
import Landing from "../components/landing"
import About from "../components/about"
import Process from "../components/process"

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Menu />
        <Landing />
        <About />
        <Process />
      </div>
    )
  }
}
export default App
