import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
export default function Navbar(props) {
  return (
    <>

      <nav className={`navbar-expand-lg px-5 navbar navbar-${props.mode} bg-${props.mode} `}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>

            <li className="nav-item">
              <a className="nav-link " href="/">About</a>
            </li>
          </ul>
      
         
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.tooglemode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
          </div>
      </nav>

    </>
  )
}
Navbar.propsTypes = {
  title: propTypes.string
};
Navbar.defaultProps = {
  title: 'set title here '
};