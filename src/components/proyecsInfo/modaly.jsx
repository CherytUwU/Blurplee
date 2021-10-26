import React, { Component } from 'react';
import ProyectsInfo from '../../utils/proyects';

class Modaly extends Component{
    render(){
        return(
            <ProyectsInfo 
                name="Modaly"
                img="https://i.ibb.co/B6ZHk5d/icon-original.png"
                pOne="Modaly esta pensado para que sea un servicio de música totalmente gratuito, para que disfrutes de la música que quieras, donde quieras, sin ningún costo y sin anuncios molestos."
                stateTxt="En Planeación"
                state="inProgress"
                stateIcon="fas fa-spinner"
            />
        )
    }
}

export default Modaly;