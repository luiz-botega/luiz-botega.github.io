import React, { Component } from "react"
import { Helmet } from "react-helmet"
import Menu from "./components/menu"
import Landing from "./components/landing"
import About from "./components/about"
import Process from "./components/process"
import Portfolio from "./components/portfolio"
import Texts from "./components/texts"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="outer-div">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Luiz Botega</title>
        </Helmet>
        <Menu />
        <Landing />
        <About />
        <Process />
        <Portfolio />
        <Texts />
      </div>
    )
  }
}
export default App
