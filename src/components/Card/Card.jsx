import React, { Component } from 'react';


export default class CardContent extends Component {
    render() {
        const {Url, Name, description} = this.props.Content
        console.log(description)
        return(
            <div className="carsStyle">
            <h6>
                <figure class="avatar avatar-xl">
                    <img src="..." alt="..."/>
            </figure>{Name}</h6>
                <p>{description}</p>
            <button> X </button>
            </div>
            
        )
    }
}