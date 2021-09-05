import React, { Component } from 'react';
import img from '../assets/img/bg.png';

export default class MysecondBox extends Component {
    render(){
        return(
            <div className="TwoBox">
                <div className="BoxText">

                    <div>
                        <h2>Parece magia, funciona con código.</h2>
                    </div>

                    <div>
                        <p>
                            A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en 
                            proyectos retadores e increible.
                        </p>
                    </div>

                </div>

                <div className="MiniBoxProyects">
                    <div className="BoxModelOne">
                        <img className="ImgReposive" src={img} alt="..."/>
                    </div>

                    <div className="BoxModelOne">

                    </div>
                </div>
            </div>
        )
    }
} 