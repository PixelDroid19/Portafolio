import React, { Component } from 'react';
import OneBox from '../components/OneBox';
import TwoBox from '../components/TwoBox';
import ThreeBox from '../components/ThreeBox';
import BoxFour from '../components/BoxFour';
import BoxFive from '../components/BoxFive';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class BoxMain extends Component {
    render(){
        return(
       <div className="box_main">
            <OneBox/>
            <TwoBox/>
            <ThreeBox/>
            <BoxFour/>
            <BoxFive />
        </div> 
        )
    }
}