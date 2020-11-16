import React, { Component } from "react"
import leafSmall from "../../static/leafsmall.png"
import menuStroke from "../../static/menustroke.png"

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactsFixed: false,
      scrollPosition: 0,
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.brandScroll)
    window.addEventListener("scroll", this.menuManager)
    this.setState({
      aboutPosition: document.getElementsByClassName("about-div")[0]
        .offsetHeight,
    })
  }

  menuManager = () => {
    let scrollPosition = window.scrollY
    let landingHeight = document.getElementById("landing-bkgr").offsetHeight

    this.setState({ scrollPosition: scrollPosition })

    if (scrollPosition > landingHeight) {
      document.getElementById("contact-fixed-div").classList.remove("hidden")
    } else {
      document.getElementById("contact-fixed-div").classList.add("hidden")
    }

    if (this.state.scrollPosition > this.state.aboutPosition) {
      let button = document.querySelectorAll("#about-menu")[0]
      button.classList.add("selected")
      let stroke = document.querySelectorAll("#about-menu .menuStroke")[0]
      stroke.classList.add("show")
      stroke.setAttribute(
        "style",
        "height:" + (button.offsetHeight + 40) + "px"
      )
    } else {
      document
        .querySelectorAll("#about-menu .menuStroke")[0]
        .classList.remove("show")
      document.querySelectorAll("#about-menu")[0].classList.remove("selected")
    }
  }

  brandScroll = () => {
    var brandDiv = document.getElementsByClassName("brand-div")[0]
    var leafBox = document.getElementsByClassName("brand-leaf-box")[0]
    var height = document.getElementById("landing-bkgr").offsetHeight
    var y = window.scrollY
    if (y <= height) {
      brandDiv.classList = "brand-div hide"
      leafBox.classList = "brand-leaf-box hide"
    } else {
      brandDiv.classList = "brand-div appear"
      leafBox.classList = "brand-leaf-box appear"
    }
  }

  scrollDown = className => {
    switch (className) {
      case "back-to-top":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        break
      case "about-menu":
        let scrollHeight = document.querySelectorAll(".about-div")[0]
          .offsetHeight
        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        })
        break
      case "process-menu":
        break
      case "portfolio-menu":
        break
      case "blog-menu":
        break
    }
  }

  render() {
    let contacts = (
      <div id="contact-fixed-box">
        <div className="contact-fixed">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
        <div className="contact-fixed">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z" />
              <path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z" />
              <path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
            </svg>
          </div>
        </div>
        <div className="contact-fixed">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z" />
            </svg>
          </div>
        </div>
      </div>
    )

    let menu = (
      <nav className="nav flex-column">
        <div
          className="brand-div hide"
          onClick={() => this.scrollDown("back-to-top")}
        >
          <div className="brand-box">
            <div className="brand-title">Luiz Botega</div>
            <div className="brand-subtitle">service designer</div>
          </div>
          <div className="brand-leaf-box hide">
            <img className="brand-leaf" src={leafSmall}></img>
          </div>
        </div>
        <div
          id="about-menu"
          className="nav-item-box"
          onClick={() => this.scrollDown("about-menu")}
        >
          <img src={menuStroke} className="menuStroke" />
          <a className="nav-link">who am i</a>
        </div>
        <div
          id="process-menu"
          className="nav-item-box"
          onClick={() => this.scrollDown("process-menu")}
        >
          <img src={menuStroke} className="menuStroke" />
          <a className="process-menu nav-link">my process</a>
        </div>
        <div
          id="portfolio-menu"
          className="nav-item-box"
          onClick={() => this.scrollDown("portfolio-menu")}
        >
          <img src={menuStroke} className="menuStroke" />
          <a className="portfolio-menu nav-link">my works</a>
        </div>
        <div
          id="blog-menu"
          className="nav-item-box"
          onClick={() => this.scrollDown("blog-menu")}
        >
          <img src={menuStroke} className="menuStroke" />
          <a className="blog-menu nav-link">my texts</a>
        </div>
        <div id="contact-fixed-div" className="hidden">
          {contacts}
        </div>
      </nav>
    )
    return menu
  }
}

export default Menu
