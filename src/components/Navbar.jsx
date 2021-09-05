import React, { Component } from "react";
import Logo from "../assets/img/LOGO.png"
export default class Navbar extends Component {
  render() {
    return (
        <div>
      <header class="navbar">
        <section class="navbar-section">
          <a href="..." class="navbar-brand mr-2">
            <img src={Logo} alt=".."/>
          </a>
          <a href="..." class="LinkPers">
            Hola
          </a>
          <a href="..." class="LinkPers">
            proyectos
          </a>

          <a href="..." class="LinkPers">
            Testimonios
          </a>

          <a href="..." class="LinkPers">
            Contactos
          </a>
        </section>
        <section class="navbar-section">
          <div class="input-group input-inline">
            <input type="button"className="btnDwn" value="Descargar curriculum"/>
          </div>
        </section>
       </header>
      </div>
    );
  }
}
