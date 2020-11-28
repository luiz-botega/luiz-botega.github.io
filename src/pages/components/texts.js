import React, { Component } from "react"
import posts from "../../static/blog/posts.js"

class Texts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textsPosition: 0,
      totalPosts: 0,
    }
  }
  componentDidMount = () => {
    this.setState({ totalPosts: posts.length })
  }

  moveCards(int) {
    let textsPosition = this.state.textsPosition
    textsPosition = textsPosition + int
    console.log(textsPosition)
    if (textsPosition < 0) {
      textsPosition = this.state.totalPosts - (this.state.totalPosts % 3)
    } else if (textsPosition > this.state.totalPosts) {
      textsPosition = 0
    }
    console.log(textsPosition)
    this.setState({ textsPosition: textsPosition })
  }

  copyToClipboard = () => {
    let emailPopup = document.getElementById("footer-email-popup")
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
    let posts_show = []
    let i = this.state.textsPosition
    let j = i + 3
    if (j > this.state.totalPosts) {
      j = this.state.totalPosts
    }
    for (i; i < j; i++) {
      posts_show.push(
        <a
          href={posts[i]["link"]}
          key={"link" + i}
          target="_blank"
          className="col-4"
        >
          <div className="text-card" key={i}>
            <div className="text-image-div">
              <img
                className="text-image"
                key={"img" + i}
                src={posts[i]["image"]}
              />
            </div>
            <div className="text-title">{posts[i]["title"]}</div>
            <div className="text-body">{posts[i]["snippet"]}</div>
          </div>
        </a>
      )
    }

    let texts = (
      <div id="texts-div">
        <div id="texts-box" className="row">
          <div className="arrows col-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24 "
              onClick={() => this.moveCards(-3)}
            >
              <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
            </svg>
          </div>
          <div id="texts-content" className="col-12">
            {posts_show}
          </div>
          <div className="arrows col-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => this.moveCards(3)}
            >
              <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />{" "}
            </svg>
          </div>
        </div>
        <div id="footer-div" className="row">
          <div className="footer-column col-5">
            <div className="footer-body">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2a8 8 0 0 0-8 7.92c0 5.48 7.05 11.58 7.35 11.84a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 9.92A8 8 0 0 0 12 2zm0 17.65c-1.67-1.59-6-6-6-9.73a6 6 0 0 1 12 0c0 3.7-4.33 8.14-6 9.73z" />
                <path d="M12 6a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 12 6zm0 5a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 12 11z" />
              </svg>
              <div className="footer-text">Florianópolis - Brazil</div>
            </div>
            <div className="footer-body">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.4 22A15.42 15.42 0 0 1 2 6.6 4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07 3.79 3.79 0 0 1 .72.18 1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65 4.34 4.34 0 0 1 .19.73 4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22zM6.6 4A2.61 2.61 0 0 0 4 6.6 13.41 13.41 0 0 0 17.4 20a2.61 2.61 0 0 0 2.6-2.6v-.33L15.36 16l-.29.55c-.45.87-.78 1.5-1.62 1.16a11.85 11.85 0 0 1-7.18-7.21c-.36-.78.32-1.14 1.18-1.59L8 8.64 6.93 4z" />
              </svg>
              <div className="footer-text">+55 48 99971-2248</div>
            </div>
          </div>
          <div className="footer-column col-5">
            <div className="footer-body email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z" />
              </svg>
              <div
                className="footer-text"
                onClick={() => this.copyToClipboard()}
              >
                lfbotega@gmail.com
              </div>
              <div id="footer-email-popup">
                <div>e-mail copied to your clipborad :)</div>
              </div>
            </div>
            <div className="footer-body">
              <a
                href="https://www.linkedin.com/in/luiz-botega/"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 22h-1.67a2 2 0 0 1-2-2v-5.37a.92.92 0 0 0-.69-.93.84.84 0 0 0-.67.19.85.85 0 0 0-.3.65V20a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2v-5.46a6.5 6.5 0 1 1 13 0V20a2 2 0 0 1-2 2zm-4.5-10.31a3.73 3.73 0 0 1 .47 0 2.91 2.91 0 0 1 2.36 2.9V20H20v-5.46a4.5 4.5 0 1 0-9 0V20h1.67v-5.46a2.85 2.85 0 0 1 2.83-2.85z" />
                  <path d="M6 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2zM4 10v10h2V10z" />
                  <path d="M5 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                </svg>

                <div className="footer-text">in/luiz-botega</div>
              </a>
            </div>
            <div className="footer-body">
              <a href="https://medium.com/@luizbotega" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20 4H4a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V6h6v13H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2V6h6v2a1 1 0 0 0 2 0V5a1 1 0 0 0-1-1z" />
                </svg>
                <div className="footer-text">@luizbotega</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
    return texts
  }
}
export default Texts
