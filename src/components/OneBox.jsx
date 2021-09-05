import React, { Component } from 'react';
import img from "../assets/img/foto.png";

export default class MyfirstBox extends Component {
    render(){
        return(
        <div className="BoxOne">
            <div className="center">

            <div className="TextOne">
                <h1>¡Hola a todos!<br/>Soy Antonio Pereira</h1>
                <span>Developer que le encanta implementar diseños que<br/>inspiran y atraen a las personas.</span>
            </div>

            <div className="TextTwo">
                <div>
                    <img src={img} className="reposive" alt="..."/>
                </div>
            </div>
            
            </div>

        </div>   
        )
    }
}