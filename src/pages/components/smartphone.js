import React, { Component } from "react"
import leaf from "../../static/leaf.png"
import namestroke from "../../static/namestroke.png"

class Smartphone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phrasesRange: 0,
      phraseActive: 12,
    }
  }

  componentDidMount = () => {}

  componentWillUnmount = () => {}

  render() {
    let smartphone = (
      <div id="smartphone-bkgr">
        <div className="row">
          <div className="smartphone-name-stroke col">
            <img className="smartphone-bkgr-stroke" src={namestroke} alt="" />
          </div>
          <div className="smartphone-name-written col-7">
            <div className="smartphone-name-title">Luiz Botega</div>
            <div className="smartphone-name-subtitle">designer & manager</div>

            <div className="smartphone-snippet">
              <p className="smartphone-striped">
                I work as an interdisciplinary{" "}
                <span>Service/UX designer & manager</span> specialized in{" "}
                <span>service management</span> for{" "}
                <span>data-driven business </span> and{" "}
                <span>digital transformation.</span>.
              </p>
            </div>
          </div>
          <div className="smartphone-landing-leaf-box">
            <img className="smartphone-landing-leaf" src={leaf} alt="" />
          </div>
        </div>
        <div className="smartphone-under-construction-div">
          <div className="smartphone-under-construction">
            <span>The mobile version is under construction</span>
            Please, access the web version
          </div>
        </div>
      </div>
    )
    return smartphone
  }
}
export default Smartphone
