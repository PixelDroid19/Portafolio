import React, { Component } from 'react';
import ImgBox from '../assets/img/BoxImg.png'

export default class BoxImg extends Component {
    render(){
        return(
            <div className="BoxImg">
         
                <img class="img-responsive ..." 
                src={ImgBox} 
                alt="Box wallpaper"/>
            
            </div>
        )
    }
}