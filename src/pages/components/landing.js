import React, { Component } from "react"
import leaf from "../../static/leaf.png"
import namestroke from "../../static/namestroke.png"
import phrases from "../../static/phrases.js"

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phrasesRange: 0,
      phraseActive: 12,
    }
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.contactsManager)
    this.setState({ phrasesRange: phrases.length }, () => {
      var intervalID = setInterval(() => {
        let newNumber = Math.floor(Math.random() * this.state.phrasesRange)
        this.setState({
          phraseActive: newNumber,
          intervalID: intervalID,
        })
      }, 15000)
    })
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.contactsManager)
    clearInterval(this.state.intervalID)
  }

  contactsManager = () => {
    let contacts = document.getElementById("contact-box")
    let landingHeight = document.getElementById("landing-bkgr").offsetHeight
    let scrollFromTop = window.scrollY
    if (scrollFromTop >= landingHeight) {
      contacts.classList.add("fixed")
    } else {
      contacts.classList.remove("fixed")
    }
  }

  copyToClipboard = () => {
    let emailPopup = document.getElementById("landing-email-popup")
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
    let landing = (
      <div id="landing-bkgr">
        <div className="row">
          <div className="name-stroke col">
            <img className="bkgr-stroke" src={namestroke} alt="" />
          </div>
          <div className="name-written col-7">
            <div className="name-title">Luiz Botega</div>
            <div className="name-subtitle">designer & manager</div>

            <div className="snippet">
              <p className="striped">
                I work as an interdisciplinary{" "}
                <span>Service/UX designer & manager</span> specialized in{" "}
                <span>service management</span> for{" "}
                <span>data-driven business </span> and{" "}
                <span>digital transformation.</span>.
              </p>
            </div>
          </div>
          <div className="landing-leaf-box">
            <img className="landing-leaf" src={leaf} alt="" />
          </div>
        </div>

        <div className="row landing-bottom-box justify-content-md-center">
          <div id="contact-box" className="col-4">
            <div className="contact-button">
              <div id="landing-email-popup">
                lfbotega@gmail.com <br />
                <div>e-mail copied to your clipborad :)</div>
              </div>
              <div
                id="contact-email"
                className="contact-item"
                onClick={() => this.copyToClipboard()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>
            <div className="contact-button">
              <a
                href="https://www.linkedin.com/in/luiz-botega/"
                target="_blank"
              >
                <div className="contact-linkedin" className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z" />
                    <path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z" />
                    <path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                  </svg>
                </div>
              </a>
            </div>
            <div className="contact-button">
              <a href="https://medium.com/@luizbotega" target="_blank">
                <div id="contact-medium" className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="col-12 justify-content-md-center">
            <div className="quotation">“</div>
            <div className="phrase-box col-10">
              <div className="phrase-text">
                "{phrases[this.state.phraseActive]["text"]}"
              </div>
              <div className="phrase-author">
                {phrases[this.state.phraseActive]["author"]}
              </div>
            </div>
          </div>
        </div>
        <div className="smartphone-under-construction-div">
          <div className="smartphone-under-construction">
            <span>The mobile version is under construction</span>
            Please, access through a desktop :)
          </div>
        </div>
      </div>
    )
    return landing
  }
}
export default Landing
