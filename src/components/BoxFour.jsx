import Data from '../assets/Data/Data.json';
import img1 from '../assets/img/photo1.png';
import img2 from '../assets/img/Photo2.png';
import img3 from '../assets/img/Photo3.png';
import img4 from '../assets/img/Photo4.png';
import img5 from '../assets/img/Photo5.png';
import img6 from '../assets/img/Photo6.png';
import React, {Component} from 'react';

export default class MyFourBox extends Component {

    //Estados en React
    state = {
        Data //Esto es igual a Data: Data
    }

    render(){
        
        return(
            <div className="BoxFour">
                <h3>Testimonios</h3>
                <div className="CardContent">
               <div className="Card">
                   <h6><img src={img1} alt="...."/> Juan Antonio</h6>                    <p>Tengo algunos años trabajando
                       con Javascript y aún así aprendí
                       varias cosas importantes de Antonio 
                       y como utiliza Javascript en el día a día.
                    </p>
               </div>

               <div className="Card">
                   <h6><img src={img2} alt="...."/> Albert Flores</h6>                    <p>Tengo algunos años trabajando
                   Me gusto ver el porqué de las cosas del core de React,
                    saber la magia que ocurre por detrás, 
                    excelente profesor Antonio gran vocación.
                    </p>
               </div>


               <div className="Card">
                   <h6><img src={img3} alt="...."/> Darlene Robertson</h6>                    <p>Tengo algunos años trabajando
                   Ayuda a entender el porqué de las cosas,
                    lo cual nos da el poder de aprovechar mejor
                     el lenguaje y las herramientas que tenemos.
                    </p>
               </div>

               <div className="Card">
                   <p>
                   <h6><img src={img4} alt="...."/> Jane Cooper</h6>       
                   La forma como explica y trabaja los 
                   temas Antonio, me ha ayudado a comprender
                    y sacarle el mayor provecho a HTML y CSS. 
                    </p>
               </div>

               <div className="Card">
                   <p>
                   <h6><img src={img5} alt="...."/> Eleanor Pena</h6>       
                   Antonio ha sido de gran ayuda 
                   para acelerar ciertos esfuerzos de desarrollo.
                    Lo que nos hubiera llevado 6 meses solo les llevó 1,5 meses. 
                    </p>
               </div>

               <div className="Card">
                   <p>
                   <h6><img src={img6} alt="...."/> Guy Hawkins</h6>       
                   Antonio ha superado mis expectativas 
                   desde el diseño hasta el desarrollo.
                    </p>
               </div>
               </div>
            </div>
        )
    }
}