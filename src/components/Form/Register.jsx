import React, { Component } from "react";
import axios from "axios";
import md5 from "md5";
import uuid from "react-uuid";
import "spectre.css";

const url = "http://class-components-geek.herokuapp.com/usuario";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      form: {
        id: "",
        nombre: "",
        username: "",
        description: "",
      },
    };
  }

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.form); //imprimir todo el estado
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  RegistroUsuarios = async () => {
    console.log("wwww");
    await axios
      .post(url, {
        id: uuid,
        nombre: this.state.form.nombre,
        username: this.state.form.username,
        description: md5(this.state.form.description),
      })
      .then((res) => {
        alert("Usuario Registrado");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="form-group">
        <form className="form-signin" onSubmit={this.handleSutmit}>
          <div className="fadeIn first ">
            <h3>Contacto</h3>
            <span>
                si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.
            </span>
          </div>
            <br/>
          <input
            type="text"
            name="nombre"
            className="form-input"
            placeholder="nombre"
            required=""
            onChange={this.handleChange}
          />

          <input
            type="email"
            name="username"
            className="form-input"
            placeholder="Email"
            required=""
            onChange={this.handleChange}
          />

          <input
            type="Password"
            name="password"
            className="form-input"
            placeholder="Password"
            required=""
            onChange={this.handleChange}
          />
          <textarea
            class="form-input"
            id="input-example-20"
            placeholder="Textarea"
            rows="3"
            name="description"
            onChange={this.handleChange}
          ></textarea>

          <br />

          <input
            type="button"
            value="Enviar mensaje"
            className="btn btn-error btn-block"
            onClick={() => this.RegistroUsuarios()}
          />
        </form>
      </div>
    );
  }
}
