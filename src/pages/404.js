import React, { Component } from "react"

class Error extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {}

  render() {
    let error = (
      <div id="error404-div" className="row">
        <div className="back-arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24 "
            onClick={() => window.history.go(-1)}
          >
            <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z" />
          </svg>
        </div>
        <div className="error404-bkgr col-8">
          <div id="error404-text" className="">
            <span>404</span>
            This page does not exist :(
          </div>
        </div>
      </div>
    )
    return error
  }
}
export default Error
