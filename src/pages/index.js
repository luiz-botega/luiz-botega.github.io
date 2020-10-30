import React, { Component } from "react"
import { Link } from "gatsby"
import Menu from "../components/menu"
import Landing from "../components/landing"
import About from "../components/about"

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
      </div>
    )
  }
}
export default App
