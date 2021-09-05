import React, { Component } from 'react';
import proyect1 from '../assets/proyect/proyect1.png';
import proyect2 from '../assets/proyect/proyect2.png';
import proyect3 from '../assets/proyect/proyect3.png';

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
                        <img className="ImgReposive" src={proyect1} alt="..."/>
                    </div>

                    <div className="BoxList">
                    <div className="BoxModelTwo">
                        <img class="img-responsive ..." src={proyect2} alt="Wallpaper"/>
                    </div>

                    <div className="BoxModelTwo">
                        <img class="img-responsive ..." src={proyect3} alt="Wallpaper"/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
} 