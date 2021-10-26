import React, { Component } from 'react';
import ProyectsInfo from '../../utils/proyects';

class AoDesu extends Component{
    render(){
        return(
            <ProyectsInfo 
                name="AoDesu"
                img="https://i.ibb.co/9cM9RNY/Logo-Normal-Texto-Azul.png"
                pOne="AoDesu es una web que actualmente esta en desarollo, su finalidad es ofrecer Anime gratuito a la mayor calidad posible y sin anuncios a todas las personas de habla hispana (Esperamos algún dia expandirnos a mas idiomas)."
                stateTxt="En Proceso"
                state="inProgress"
                stateIcon="fas fa-spinner"
            />
        )
    }
}

export default AoDesu;