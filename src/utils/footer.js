import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="Footer">
            <div className="ContainerFooter">
                <h3>Enlaces rápidos</h3>
                <ul>
                    <li><Link to="/">FAQ</Link></li>
                    <li><Link to="/">Terminos y Condiciones</Link></li>
                    <li><Link to="/">Politicas de Privacidad</Link></li>
                    <li><Link to="/">Ayuda</Link></li>
                </ul>
            </div>
            <div className="ContainerFooter">
                <h3>Contáctanos</h3>
                <ul className="info">
                    <li>
                        <span><i className="fas fa-envelope"></i></span>
                        <p><a href="mailto:Blurplee@gmail.com">Blurplee@gmail.com</a></p>
                    </li>
                    <li>
                        <span><i className="fas fa-phone-alt"></i></span>
                        <p><a href="tel:+573213009207">+57 321 3213213</a></p>
                    </li>
                </ul>
            </div>
            <div className="CopyContainer">
                <i className="far fa-copyright"></i> Copyright 2021 Blurplee.
            </div>
        </div>
    )
}

export default Footer;
