import React, { useContext } from 'react';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
  english: {
    email: "Email Address",
    signIn: "Sign In",
    password: "Password",
    remember: "Remember Me"
  },

  spanish: {
    email: "Correo Electrónico",
    signIn: "Registrarse",
    password: "Contraseña",
    remember: "Recuérdame"
  }
}

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { email, signIn, password, remember } = words[language];
  return (
    <div className="Form">
        <i className="fas fa-lock"></i>
        <p style={{marginTop: "1rem", fontSize: "1.5rem"}}>{signIn}</p>
        <select onChange={changeLanguage}>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
        <form>
          <div className="form-group mt-5">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={email}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder={password}/>
          </div>
          <div className="form-check mb-3 text-left">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">{remember}</label>
          </div>
  <button type="submit" className="btn btn-primary btn-block">{signIn}</button>
        </form>
      </div>
  )
}


export default Form;
