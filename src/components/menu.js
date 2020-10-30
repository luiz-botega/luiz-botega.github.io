import React from "react"

export default function Menu(props) {
  let menu = (
    <nav className="nav flex-column">
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
