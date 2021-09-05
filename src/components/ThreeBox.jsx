import React, { Component } from 'react';

export default class MyThreeBox extends Component {
    render(){
        return(
            <div className="BoxThree">
                <div className="TitleService">
                    <h1>Servicios</h1>
                </div>

                <div className="ListBox">
                <div className="Design">
                    <h5>Diseño</h5>
                    <p>Experiencia de usuario</p>
                    <p>Interfaz de usuario</p>
                    <p>Aplicaciónes web</p>
                    <p>Prueba de concepto</p>

                    <button className="btnServ">Ver servicios de diseño <i class="icon icon-forward"></i></button>
                </div>

                <div className="Developer">
                    <h5>Desarrolo</h5>
                    <p>Aplicaciones</p>
                    <p>Aplicaciones prgresiva</p>

                    <button className="btnServ">Ver servicios de desarrollo <i class="icon icon-forward"></i></button>
                </div>

                <div className="Marca">
                    <h5>Marca</h5>
                    <p>Identidad de la marca</p>
                    <p>Estrategia de marca</p>

                    <button className="btnServ">Ver servicios de Marca <i class="icon icon-forward"></i></button>
                </div>

                </div>

            </div>
        )
    }
}