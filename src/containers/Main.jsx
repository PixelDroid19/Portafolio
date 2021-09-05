import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import OneBox from '../components/OneBox';
import TwoBox from '../components/TwoBox';
import ThreeBox from '../components/ThreeBox';
import BoxFour from '../components/BoxFour';
import BoxFive from '../components/BoxFive';
import BoxImg from '../components/BoxImg';
import BoxFooter from '../components/BoxFooter';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class BoxMain extends Component {
    render(){
        return(
       <div className="box_main">
           <NavBar/>
            <OneBox/>
            <TwoBox/>
            <ThreeBox/>
            <BoxFour/>
            <BoxImg/>
            <BoxFive />
            <BoxFooter/>
        </div> 
        )
    }
}