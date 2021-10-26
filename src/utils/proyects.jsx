import React from "react";
import './proyects.css';

function ProyectsInfo(props){
    return(
        <div>
            <div className="banner-proyects">
                <div className="img-banner"></div>
                <div className="logo">
                    <img src={props.img} alt={props.name} />
                </div>
            </div>
            <div className="content-proyects">
                <div className="name-proyects">
                    <h2>{props.name}</h2>
                </div>
                <div className="info-proyects">
                    <div className="what-proyects">
                        <div className="title-what-proyects">
                            ¿Qué es {props.name}?
                        </div>
                        <div>
                            {props.pOne}
                        </div>
                    </div>
                </div>
                <div className="proyects-state">
                    <div className="state-title">Estado del servicio</div>
                    <div className={"state " + props.state}>
                        <span>{props.stateTxt}</span>
                        <i className={props.stateIcon + " " + props.animation}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProyectsInfo;
