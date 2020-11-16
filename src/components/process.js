import React, { Component } from "react"
import processCycle from "../../static/processcycle.png"

class Process extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {}

  render() {
    let process = (
      <div id="process-div" className="row">
        <div id="process-bkgr" className="col-9">
          <div id="img-div">
            <img src={processCycle} id="process-img" />
          </div>
        </div>
      </div>
    )
    return process
  }
}
export default Process
