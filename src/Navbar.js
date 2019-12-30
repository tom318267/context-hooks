import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import './styles.css';

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧"
  },
  
  spanish: {
    search: "Buscar",
    flag: "🇪🇸"
  }
}

function Navbar(props) {
    const { toggleTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { search, flag } = content[language];
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div onChange={toggleTheme} className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
    <label className="custom-control-label" htmlFor="customSwitch1">{flag}App Title</label>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder={`${search}...`} aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
          </nav>
        </div>
    )
}

export default Navbar;
