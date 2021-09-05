import React, { Component } from "react";
import Logo from "../assets/img/LOGO.png";

export default class BoxFooter extends Component {
  render() {
    return (
      <div clasName="FooterBox">
         <footer className="footer">

           <div className ="Logo">
             <img src={Logo} alt="Logo"/>
           </div>

           <div className="Text">
            <span>Hecho con 🤍 de Antonio. Copyright 2021 - Todos los derechos reservados.</span>
          </div>

          <div className="Icons">
        
          </div>
        </footer>
      </div>
    );
  }
}
