import React, { Component } from "react"
import leafSmall from "../../static/leaf-small.png"
import { doc } from "prettier"

class Menu extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.brandScroll)
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

  render() {
    let menu = (
      <nav className="nav flex-column">
        <div className="brand-div hide">
          <div className="brand-box">
            <div className="brand-title">Luiz Botega</div>
            <div className="brand-subtitle">service designer</div>
          </div>
          <div className="brand-leaf-box hide">
            <img className="brand-leaf" src={leafSmall}></img>
          </div>
        </div>
        <div className="nav-item-box">
          <a className="nav-link" href="#">
            who am i
          </a>
        </div>
        <div className="nav-item-box">
          <a className="nav-link" href="#2">
            my process
          </a>
        </div>
        <div className="nav-item-box">
          <a className="nav-link" href="#3">
            my works
          </a>
        </div>
        <div className="nav-item-box">
          <a className="nav-link" href="#4">
            my texts
          </a>
        </div>
      </nav>
    )
    return menu
  }
}

export default Menu
