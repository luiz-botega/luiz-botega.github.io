import React, { Component } from "react"
import leafSmall from "../../static/leafsmall.png"
import menuStroke from "../../static/menustroke.png"
import verticalLine from "../../static/verticalline.png"

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
    window.addEventListener("scroll", this.verticalLineManager)

    var timer = null
    window.addEventListener(
      "scroll",
      () => {
        if (timer !== null) {
          clearTimeout(timer)
        }
        timer = setTimeout(this.menuManager.bind(this), 50)
      },
      false
    )
  }

  verticalLineManager = () => {
    let finalHeight = document.body.offsetHeight

    let initialHeight = document.getElementById("landing-bkgr").offsetHeight

    let verticalLineDiv = document.getElementById("vertical-line-div")

    let maxLineHeight = document
      .getElementById("contact-fixed-div")
      .getBoundingClientRect().top

    verticalLineDiv.children[0].setAttribute(
      "style",
      "height:" + (maxLineHeight + 40) + "px"
    )

    if (window.scrollY >= initialHeight) {
      let porcentage =
        16 +
        ((window.scrollY - initialHeight) * maxLineHeight) /
          (finalHeight - 200 - window.screen.height - initialHeight)
      document
        .getElementById("vertical-line-div")
        .setAttribute("style", "height:" + porcentage + "px")
    } else {
      document
        .getElementById("vertical-line-div")
        .setAttribute("style", "height: 0vh")
    }
  }

  menuManager = () => {
    let scrollPosition = window.scrollY

    this.setState({ scrollPosition: scrollPosition })

    if (
      this.state.scrollPosition >
      document.getElementById("process-div").offsetTop - 150
    ) {
      this.clearStroke()
      this.paintStroke("#process-menu")
    } else if (
      this.state.scrollPosition >
      document.getElementById("about-div").offsetTop - 150
    ) {
      this.clearStroke()
      this.paintStroke("#about-menu")
    } else {
      this.clearStroke()
    }
  }

  clearStroke = () => {
    let selectedStroke = document.querySelectorAll(".menuStroke.show")[0]
    if (selectedStroke) {
      selectedStroke.classList.remove("show")
    }
    let selectedItem = document.querySelectorAll(".nav-item-box.selected")[0]
    if (selectedItem) {
      selectedItem.classList.remove("selected")
    }
  }

  paintStroke = menuItem => {
    let button = document.querySelectorAll(menuItem)[0]
    button.classList.add("selected")
    let stroke = document.querySelectorAll(menuItem + " .menuStroke")[0]
    stroke.classList.add("show")
    stroke.setAttribute("style", "height:" + (button.offsetHeight + 40) + "px")
  }

  brandScroll = () => {
    var brandDiv = document.getElementsByClassName("brand-div")[0]
    var leafBox = document.getElementsByClassName("brand-leaf-box")[0]
    var height = document.getElementById("landing-bkgr").offsetHeight
    var y = window.scrollY
    if (y <= height) {
      brandDiv.classList = "brand-div hide"
      leafBox.classList = "brand-leaf-box hide"
      document.getElementById("contact-fixed-div").classList.add("hidden")
    } else {
      brandDiv.classList = "brand-div appear"
      leafBox.classList = "brand-leaf-box appear"
      document.getElementById("contact-fixed-div").classList.remove("hidden")
    }
  }

  scrollDown = className => {
    let scrollHeight
    switch (className) {
      case "back-to-top":
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
        break
      case "about-menu":
        scrollHeight = document.getElementById("about-div").offsetTop - 130
        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        })
        break
      case "process-menu":
        scrollHeight = document.getElementById("process-div").offsetTop - 130
        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        })
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

        <div id="vertical-line-div">
          <img src={verticalLine} className="vertical-line" />
        </div>
      </nav>
    )
    return menu
  }
}

export default Menu
