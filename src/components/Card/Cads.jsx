import React, { Component } from 'react';
import CardCont from './Card'
export default class Cards extends Component{
    render(){
        return(
            this.props.CardContent.map(e => <CardCont Content={e} key={e.id}/>)
        )
    }
}