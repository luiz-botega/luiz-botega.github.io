import React, { Component } from "react"
import leafSmall from "../../static/leafsmall.png"
import menuStroke from "../../static/menustroke.png"
import { Link } from "gatsby"

class MenuPortfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactsFixed: false,
      scrollPosition: 0,
    }
    this.timer = null
  }
  componentDidMount = () => {
    let button = document.querySelectorAll("#portfolio-menu")[0]
    button.classList.add("selected")
    let stroke = document.querySelectorAll("#portfolio-menu .menuStroke")[0]
    stroke.classList.add("show")
    stroke.setAttribute("style", "height:" + (button.offsetHeight + 20) + "px")
  }

  copyToClipboard = () => {
    let emailPopup = document.getElementById("fixed-email-popup")
    emailPopup.classList.remove("show")

    var textarea = document.createElement("textarea")
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(textarea)
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    textarea.value = "lfbotega@gmail.com"
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)

    emailPopup.classList.add("show")
  }

  render() {
    let contacts = (
      <div id="contact-fixed-box">
        <div className="contact-fixed">
          <div id="fixed-email-popup">
            lfbotega@gmail.com <br />
            <div>e-mail copied to your clipborad :)</div>
          </div>
          <div
            className="contact-mail fixed-button"
            onClick={() => this.copyToClipboard()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
            </svg>
          </div>
        </div>
        <div className="contact-fixed">
          <a href="https://www.linkedin.com/in/luiz-botega/" target="_blank">
            <div className="contact-linkedin fixed-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z" />
                <path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z" />
                <path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
              </svg>
            </div>
          </a>
        </div>
        <div className="contact-fixed">
          <a href="https://medium.com/@luizbotega" target="_blank">
            <div className="contact-medium fixed-button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    )

    let menuportfolio = (
      <nav className="nav flex-column">
        <div className="brand-div">
          <Link to="/">
            <div className="brand-box">
              <div className="brand-title">Luiz Botega</div>
              <div className="brand-subtitle">designer & manager</div>
            </div>
          </Link>
          <div className="brand-leaf-box appear">
            <img className="brand-leaf" src={leafSmall}></img>
          </div>
        </div>
        <Link to="/#about-div">
          <div id="about-menu" className="nav-item-box">
            <img src={menuStroke} className="menuStroke" />
            <div className="nav-link">who am i</div>
          </div>
        </Link>
        <Link to="/#process-div">
          <div id="process-menu" className="nav-item-box">
            <img src={menuStroke} className="menuStroke" />
            <div className="process-menu nav-link">my process</div>
          </div>
        </Link>
        <Link to="/#portfolio-div">
          <div id="portfolio-menu" className="nav-item-box">
            <img src={menuStroke} className="menuStroke show" />
            <div className="portfolio-menu nav-link">my works</div>
          </div>
        </Link>
        <div id="blog-menu" className="nav-item-box">
          <img src={menuStroke} className="menuStroke" />
          <div className="blog-menu nav-link">my texts</div>
        </div>
        <div id="contact-portfolio-div">{contacts}</div>
      </nav>
    )
    return menuportfolio
  }
}

export default MenuPortfolio
