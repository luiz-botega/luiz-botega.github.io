import React, { Component } from "react"
import leafSmall from "../../static/leafsmall.png"
import menuStroke from "../../static/menustroke.png"

class Menu extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.brandScroll)
    window.addEventListener("scroll", this.menuManager)
  }

  menuManager = () => {
    let scrollPosition = window.scrollY
    console.log(scrollPosition)
    console.log(document.querySelectorAll(".about-div")[0].offsetHeight)

    if (
      scrollPosition >
      document.querySelectorAll(".about-div")[0].offsetHeight - 45
    ) {
      let div = document.getElementById("about-menu")
      if (div.getElementsByTagName("img").length == 0) {
        let img = document.createElement("img")
        img.src = menuStroke
        img.setAttribute("height", div.offsetHeight + 20 + "px")
        div.appendChild(img)
        setTimeout(
          () => img.classList.add("transition"),
          div.classList.add("selected"),
          20
        )
      }
    } else {
      let imgToRemove = document.querySelectorAll(".selected > img")[0]
      if (imgToRemove) {
        imgToRemove.parentNode.classList.remove("selected")
        imgToRemove.parentNode.removeChild(imgToRemove)
      }
    }
  }

  brandScroll = () => {
    var brandDiv = document.getElementsByClassName("brand-div")[0]
    var leafBox = document.getElementsByClassName("brand-leaf-box")[0]
    var height = document.getElementsByClassName("landing-bkgr")[0].offsetHeight
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
        let imgToRemove = document.querySelectorAll(".selected > img")[0]
        imgToRemove.parentNode.classList.remove("selected")
        imgToRemove.parentNode.removeChild(imgToRemove)

        break
      case "about-menu":
        let scrollHeight =
          document.querySelectorAll(".about-div")[0].offsetHeight - 45
        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        })
        let div = document.getElementById("about-menu")
        if (div.getElementsByTagName("img").length == 0) {
          let img = document.createElement("img")
          img.src = menuStroke
          img.setAttribute("height", div.offsetHeight + 20 + "px")
          div.appendChild(img)
          setTimeout(
            () => img.classList.add("transition"),
            div.classList.add("selected"),
            20
          )
        }
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
          <a className="nav-link">who am i</a>
        </div>
        <div
          id="process-menu"
          className="nav-item-box"
          onClick={() => this.scrollDown("process-menu")}
        >
          <a className="process-menu nav-link">my process</a>
        </div>
        <div
          id="portfolio-menu"
          className="nav-item-box"
          onClick={() => this.scrollDown("portfolio-menu")}
        >
          <a className="portfolio-menu nav-link">my works</a>
        </div>
        <div
          id="blog-menu"
          className="nav-item-box"
          onClick={() => this.scrollDown("blog-menu")}
        >
          <a className="blog-menu nav-link">my texts</a>
        </div>
      </nav>
    )
    return menu
  }
}

export default Menu
