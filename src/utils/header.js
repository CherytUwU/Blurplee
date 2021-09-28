import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import CookiesSettings from './cookies';
import { FormattedMessage } from 'react-intl';
import {langContext} from '../context/langContext'

// Desplamiento hasta el borde superior de la página
function onClickUp(){
    scroll.scrollToTop();
 }

function ToggleMenu(){
    const btnMenu = document.querySelector('#MenuBtn');
    const Menu = document.querySelector('#MenuHeader');
    const PopUp = document.querySelector('#HeaderPopUp');

    const MenuOptions = document.querySelector('.Options');
    const BtnMenu = document.querySelector('#ButtonOptions');

    const MenuNoti = document.querySelector('.Noti');
    const BtnMenuNoti = document.querySelector('#ButtonNoti');

    btnMenu.classList.toggle('Show');
    Menu.classList.toggle('Show');

    MenuOptions.classList.remove('Show');
    BtnMenu.classList.remove('Active');

    MenuNoti.classList.remove('Show');
    BtnMenuNoti.classList.remove('Active');

    if(Menu.classList.contains('Show')){
        PopUp.classList.add('Show');
    }else{
        PopUp.classList.remove('Show');
    }
}

function CloseMenu(){
    const btnMenu = document.querySelector('#MenuBtn');
    const Menu = document.querySelector('#MenuHeader');

    //const MenuOptions = document.querySelector('.Options');
    //const BtnMenu = document.querySelector('#ButtonOptions');

    btnMenu.classList.remove('Show');
    Menu.classList.remove('Show');
}

function ShowOptions(){
    const MenuOptions = document.querySelector('.Options');
    const BtnMenu = document.querySelector('#ButtonOptions');
    
    const LangOptions = document.querySelector('.LangOptions');
    const LangSelector = document.querySelector('.LangSelector');
    const LangBtn = document.querySelector('#LangBtn');

    LangBtn.classList.remove('Active')
    LangSelector.classList.remove('Show')
    LangOptions.classList.remove('Show');

    MenuOptions.classList.toggle('Show');
    BtnMenu.classList.toggle('Active');
}

function ShowNoti(){
    const MenuNoti = document.querySelector('.Noti');
    const BtnMenu = document.querySelector('#ButtonNoti');

    MenuNoti.classList.toggle('Show');
    BtnMenu.classList.toggle('Active');
}

function ShowProyects(){
    const ExtraProyects = document.querySelector('.NavExtraLinks');
    const ProyectsContainer = document.querySelector('#ProyectsContainer');

    ExtraProyects.classList.toggle('Show');
    ProyectsContainer.classList.toggle('Show')
}

function ToggleTheme(){
    const body = document.getElementById('Body');
    const TxtInfo = document.querySelector('.ThemeDefault');
    const Transition = document.querySelector('.Transition');

    body.classList.toggle('Dark');
    TxtInfo.classList.toggle('Dark');

    Transition.classList.add('Animated');

    if(Transition.classList.contains('AnimatedReverse')){
        
        Transition.classList.remove('AnimatedReverse');
        Transition.classList.add('Animated'); 
    }else{
        Transition.classList.remove('Animated');
        Transition.classList.add('AnimatedReverse');
    }

    if(body.classList.contains('Dark')){
        localStorage.setItem('Theme', 'true');
    }else{
        localStorage.setItem('Theme', 'false');
    }

    //console.log('FuncionaTheme')
}

function ToggleAnimations(){
    const body = document.getElementById('Body');
    const TxtInfo = document.querySelector('.AnimatedDefault');

    body.classList.toggle('NoAnimated');
    TxtInfo.classList.toggle('NoAnimated');

    if(body.classList.contains('NoAnimated')){
        localStorage.setItem('Animated', 'true');
    }else{
        localStorage.setItem('Animated', 'false');
    }
}

function ToggleTransitions(){
    const body = document.getElementById('Body');
    const TxtInfo = document.querySelector('.TransitionDefault');

    body.classList.toggle('TransitionAllow');
    TxtInfo.classList.toggle('TransitionAllow');

    if(body.classList.contains('TransitionAllow')){
        localStorage.setItem('Transition', 'true');
    }else{
        localStorage.setItem('Transition', 'false');
    }
}

function OpenLangSelector(){
    const LangOptions = document.querySelector('.LangOptions');
    const LangSelector = document.querySelector('.LangSelector');
    const LangBtn = document.querySelector('#LangBtn');

    LangBtn.classList.toggle('Active')
    LangSelector.classList.toggle('Show')
    LangOptions.classList.toggle('Show');
}

const Header = () => {
    const lang = useContext(langContext);

    return(
        <div>
            <CookiesSettings />
            <div className="Transition"></div>
            <div className="HeaderPopUp" id="HeaderPopUp" onClick={ToggleMenu}></div>
            <div className="Header">
                <div className="LogoHeaderContainer">
                    <div className="LogoSVG">
                        <svg className="LogoHeader" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0" version="1.0" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M3731 8714 l-734 -1225 -61 -36 c-299 -179 -628 -446 -859 -698 -604 -657 -956 -1432 -1053 -2318 -35 -314 -20 -758 37 -1084 202 -1176 922 -2202 1963 -2798 482 -276 1031 -448 1611 -506 155 -16 575 -16 730 0 1108 111 2080 638 2771 1502 90 112 260 366 339 503 271 474 439 1002 501 1569 23 205 23 609 0 814 -95 872 -435 1631 -1023 2286 -236 263 -578 544 -889 730 l-61 36 -734 1225 -734 1225 -535 0 -535 0 -734 -1225z"/>
                            </g>
                        </svg>
                    </div>
                    <Link to="/"></Link>
                    <div className="LogoName">
                        Blurplee
                    </div>
                </div>
                <button className="btnToggleMenu" id="MenuBtn" onClick={ToggleMenu}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className="NavHeader" id="MenuHeader">
                    <nav>
                        <div className="NavHeaderLinks" onClick={ToggleMenu}>
                            <Link to="/" className="up" onClick={onClickUp()}>
                                <FormattedMessage 
                                    id="header.home"
                                    defaultMessage="Inicio"
                                />
                            </Link>
                        </div>
                        <div className="NavHeaderLinks" onClick={ShowProyects} id="ProyectsContainer">
                            <Link to="/proyects">
                                <FormattedMessage 
                                    id="header.proyects"
                                    defaultMessage="Proyectos"
                                />
                                <i className="fas fa-caret-down"></i>
                            </Link>
                            <div className="NavExtraLinks" onClick={ToggleMenu}>
                                <Link to="/">AoDesu</Link>
                                <Link to="/">CherytMusic</Link>
                                <Link to="/">Sanctuary</Link>
                                <Link to="/">Conqueror</Link>
                                <Link to="/" style={{borderBottom: 'none'}}>More Soon...</Link>
                            </div>
                        </div>
                        <div className="NavHeaderLinks" onClick={ToggleMenu}>
                            <Link to="/">
                                <FormattedMessage 
                                    id="text.helpUs"
                                    defaultMessage="Ayudanos"
                                />
                            </Link>
                        </div>
                        <div className="NavHeaderLinks" onClick={ToggleMenu}>
                            <Link to="/">
                                <FormattedMessage 
                                    id="text.discord"
                                    defaultMessage="Discord"
                                />
                            </Link>
                        </div>
                        <div className="NavHeaderLinks btnContainer" onClick={CloseMenu}>
                            <button id="ButtonOptions" onClick={ShowOptions}>
                                <i className="fas fa-cog"></i> 
                            </button>
                            <button id="ButtonNoti" onClick={ShowNoti}>
                                <i className="fas fa-bell Bell"></i> 
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="Options">
                <ul>
                    <li className="LangSelector">
                        <button onClick={OpenLangSelector} id="LangBtn"><i class="fas fa-language"></i>
                            <FormattedMessage 
                                id="header.langTxt"
                                defaultMessage="Idioma" 
                            />
                        </button>
                    </li>
                    <ul className="LangOptions">
                            <li>
                                <button onClick={() => lang.LanguageSelector('es-MX')}>
                                    <FormattedMessage 
                                        id="lang.name.spanish" 
                                        defaultMessage="Español"
                                    />
                                </button>
                            </li>
                            <li>
                                <button onClick={() => lang.LanguageSelector('en-US')}>
                                    <FormattedMessage 
                                        id="lang.name.english" 
                                        defaultMessage="Ingles"
                                    />
                                </button>
                            </li>
                            <li>
                                <button onClick={() => lang.LanguageSelector('ja-JP')}>
                                    <FormattedMessage 
                                        id="lang.name.japanese" 
                                        defaultMessage="Japones"
                                    />
                                </button>
                            </li>
                    </ul>
                    <li>
                        <button id="ThemeBtn" onClick={ToggleTheme}>
                            <i className="fas fa-adjust"></i>
                                <FormattedMessage
                                    id="header.themeTxt"
                                    defaultMessage="Tema"
                                />: 
                            <span className="ThemeDefault"></span>
                        </button>
                    </li>
                    <li><button id="AnimationBtn" onClick={ToggleAnimations}><i className="fas fa-eye"></i> 
                        <FormattedMessage 
                            id="header.animationsTxt"
                            defaultMessage="Animaciones"
                        />: 
                    <span className="AnimatedDefault"></span></button></li>
                    <li><button id="TransitionBtn" onClick={ToggleTransitions}><i className="fas fa-window-restore"></i> 
                    <FormattedMessage 
                        id="header.transitionsTxt" 
                        defaultMessage="Transiciones" 
                    />: 
                    <span className="TransitionDefault"></span></button></li>
                </ul>
            </div>
            
            <div className="Noti">
                <div className="Notification">
                    <div className="NotiImg">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 2000.000000 2000.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)" fill="#4d5bf9" stroke="none">
                        <path d="M134 18193 c23 -65 72 -167 115 -242 83 -141 333 -456 512 -644 l74 -78 230 -15 c127 -9 361 -18 520 -22 l290 -7 3 -597 2 -598 983 -2 982 -3 0 -845 0 -845 -687 -3 -688 -2 0 -610 0 -610 690 0 690 0 -2 -4012 -3 -4013 -97 -3 -98 -3 0 -1629 c0 -897 0 -1633 0 -1637 0 -5 535 -9 1190 -11 l1190 -2 0 1640 0 1639 -77 3 -78 3 -3 4013 -2 4012 4130 0 4130 0 -2 -4012 -3 -4013 -77 -3 -78 -3 0 -1629 c0 -897 -1 -1633 -2 -1637 -2 -5 534 -9 1190 -11 l1192 -2 0 1640 0 1639 -97 3 -98 3 -3 4013 -2 4012 690 0 690 0 0 610 0 610 -688 2 -687 3 0 845 0 845 983 3 982 2 0 598 0 599 303 6 c166 4 401 13 522 21 l220 15 73 77 c193 202 442 520 525 667 45 80 120 248 113 254 -1 2 -70 -4 -152 -12 -1567 -155 -4016 -349 -5564 -440 -1313 -77 -1487 -80 -4160 -80 -2673 0 -2847 3 -4160 80 -1548 91 -3997 285 -5564 440 -82 8 -150 15 -152 15 -2 0 3 -17 10 -37z m9104 -3050 l-3 -848 -1680 0 -1680 0 -3 835 c-1 459 0 841 3 848 3 9 350 12 1685 12 l1680 0 -2 -847z m4887 -3 l0 -845 -1680 0 -1680 0 -3 848 -2 847 1682 -2 1683 -3 0 -845z"/>
                        </g>
                    </svg>
                    </div>
                    <div className="NotiTxt">
                        <div className="NotiTxtInfo">¡Bienvenido a la familia <span className="EspecialTxt">Sanctuary</span>!</div>
                        <span className="NotiDate">26 / 09 / 2021</span>
                        <span className="NotiMoreInfo"><Link>Saber Más</Link></span>
                    </div>
                </div>

                <div className="Notification">
                    <div className="NotiImg">
                        <i className="fas fa-wrench"></i>
                    </div>
                    <div className="NotiTxt">
                        <div className="NotiTxtInfo">¡La <span className="EspecialTxt">Zona de los Proyectos</span> ya esta disponible!, Trabajando actualmente en las paginas individuales de cada proyecto.</div>
                        <span className="NotiDate">11 / 09 / 2021</span>
                        <span className="NotiMoreInfo"><Link>Saber Más</Link></span>
                    </div>
                </div>

                <div className="Notification">
                    <div className="NotiImg">
                        <i className="fas fa-language"></i>
                    </div>
                    <div className="NotiTxt">
                        <div className="NotiTxtInfo">¡Hemos añadido más <span className="EspecialTxt">Idiomas</span>!</div>
                        <span className="NotiDate">11 / 09 / 2021</span>
                        <span className="NotiMoreInfo"><Link>Saber Más</Link></span>
                    </div>
                </div>

                <div className="Notification">
                    <div className="NotiImg">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 2000.000000 2000.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)" fill="#4d5bf9" stroke="none">
                            <path d="M10206 19772 c-3 -5 -26 -93 -51 -197 -203 -840 -490 -1715 -706 -2156 -121 -245 -323 -571 -518 -834 -44 -60 -81 -115 -81 -121 0 -7 15 -23 33 -35 245 -170 454 -451 552 -743 88 -262 106 -586 50 -862 -61 -296 -255 -520 -542 -624 -180 -65 -257 -74 -578 -74 -396 2 -535 28 -770 144 -378 187 -631 528 -759 1021 -69 267 -81 361 -81 674 1 298 6 351 61 567 92 368 295 717 564 970 l99 94 11 217 c14 277 14 892 0 1067 -14 181 -36 357 -66 517 -13 73 -24 135 -24 138 0 3 -8 5 -18 5 -13 0 -33 -24 -62 -72 -198 -334 -494 -724 -688 -909 -136 -129 -255 -218 -626 -469 -658 -444 -879 -621 -1276 -1019 -323 -323 -549 -597 -814 -988 -415 -612 -705 -1198 -931 -1881 -41 -126 -57 -157 -123 -255 -201 -298 -412 -539 -612 -698 -102 -81 -255 -189 -332 -233 -27 -16 -48 -35 -48 -44 0 -8 118 -135 263 -281 429 -435 475 -499 607 -849 372 -988 1061 -2190 1613 -2817 344 -390 988 -986 1747 -1619 301 -251 577 -517 751 -726 106 -126 289 -386 363 -513 17 -28 35 -47 46 -47 20 0 22 8 45 265 33 373 37 471 42 1031 l5 581 -40 109 c-96 261 -202 632 -256 894 -82 401 -91 688 -36 1071 27 186 50 269 109 395 217 458 566 852 907 1022 105 52 133 60 244 71 296 28 613 -92 860 -326 39 -36 70 -69 70 -74 0 -5 -120 -201 -266 -435 -146 -234 -268 -433 -271 -443 -3 -12 16 -34 64 -73 247 -199 453 -479 583 -792 47 -114 128 -346 170 -491 73 -250 174 -700 210 -935 8 -56 10 -647 8 -2280 -4 -2390 -2 -2272 -59 -2655 -57 -383 -159 -752 -265 -953 -92 -175 -260 -378 -533 -644 -99 -97 -181 -183 -181 -190 0 -11 1448 -1221 1496 -1251 8 -4 22 -2 34 5 16 10 24 10 40 0 12 -7 26 -9 34 -5 48 30 1496 1240 1496 1251 0 7 -82 93 -181 190 -273 266 -441 469 -533 644 -106 201 -208 570 -265 953 -57 383 -55 265 -59 2655 -2 1633 0 2224 8 2280 36 235 137 685 210 935 42 145 123 377 170 491 130 313 336 593 583 792 49 40 67 60 64 73 -3 10 -124 208 -270 441 -145 233 -272 438 -281 456 l-17 33 57 79 c144 201 252 300 408 375 207 99 479 127 790 80 338 -52 663 -305 796 -622 131 -313 35 -694 -264 -1043 -31 -36 -56 -72 -56 -81 0 -38 258 -29 427 16 327 87 564 311 686 650 47 132 61 227 61 400 -1 182 -20 294 -81 477 -33 102 -128 306 -190 410 -15 26 -25 49 -23 51 3 2 665 243 1473 537 1234 448 1467 536 1467 551 0 11 -2 19 -5 19 -13 0 -2920 622 -2924 626 -2 2 8 59 23 126 40 185 56 315 63 509 15 436 -76 735 -332 1094 -144 201 -364 435 -554 588 -71 57 -86 66 -98 54 -11 -11 -10 -22 10 -68 39 -86 85 -238 113 -371 35 -169 44 -434 19 -593 -65 -419 -316 -767 -658 -912 -143 -61 -253 -84 -422 -90 -177 -6 -283 9 -444 63 -379 126 -620 368 -698 701 -25 109 -25 369 1 508 66 354 255 705 543 1006 71 75 101 113 96 122 -4 7 -51 78 -104 158 -237 355 -431 733 -574 1118 -169 456 -361 1122 -511 1771 -31 135 -58 248 -61 253 -6 9 -21 9 -27 -1z"/>
                            <path d="M2045 9355 c-315 -52 -592 -198 -828 -439 -128 -130 -283 -349 -270 -382 4 -10 24 -14 77 -14 147 0 398 -40 621 -100 490 -130 942 -358 1675 -846 135 -90 259 -176 277 -191 23 -20 48 -67 89 -163 58 -139 171 -367 246 -500 l42 -74 -40 24 c-324 196 -599 280 -914 280 -299 0 -612 -90 -850 -245 -161 -105 -397 -382 -358 -421 13 -13 18 -12 41 6 63 50 131 61 222 36 78 -20 117 -42 305 -168 175 -117 252 -175 566 -429 192 -155 312 -238 432 -298 120 -60 190 -75 362 -75 170 0 297 19 523 76 87 22 160 38 161 36 8 -10 346 -646 346 -651 0 -4 -35 -7 -79 -7 -294 0 -619 -146 -856 -384 -115 -116 -182 -221 -244 -380 -55 -143 -98 -315 -82 -326 8 -5 53 11 115 40 161 77 313 120 424 120 52 0 192 -46 477 -158 263 -102 355 -126 490 -126 166 0 326 39 533 131 l104 46 46 -45 c26 -24 141 -131 255 -238 l208 -193 -73 -41 c-226 -129 -397 -286 -523 -481 -116 -177 -185 -408 -220 -732 -9 -76 -27 -180 -41 -232 -34 -121 -26 -129 63 -66 163 114 331 220 401 252 103 48 229 78 476 114 360 52 466 81 609 166 118 69 284 238 355 359 l54 91 169 -78 c406 -189 669 -260 909 -245 135 8 339 57 348 84 1 5 -103 64 -232 131 -683 350 -1217 687 -1606 1012 -217 181 -654 633 -742 767 -20 31 -69 226 -99 397 -27 154 -37 430 -19 558 30 225 140 488 289 692 80 110 82 109 -116 102 -173 -5 -246 -18 -374 -66 -129 -49 -257 -152 -330 -264 -88 -135 -132 -382 -112 -614 5 -51 6 -93 3 -93 -6 0 -172 243 -286 420 -270 418 -546 931 -683 1272 -108 270 -235 670 -336 1061 -72 276 -120 408 -209 568 -97 173 -180 284 -321 424 -263 264 -566 420 -950 490 -126 23 -405 28 -520 10z"/>
                            <path d="M18055 9363 c-448 -55 -787 -214 -1080 -508 -141 -140 -224 -251 -321 -424 -89 -160 -137 -292 -209 -568 -101 -391 -228 -791 -336 -1061 -137 -341 -413 -854 -683 -1272 -114 -177 -280 -420 -286 -420 -3 0 -2 42 3 93 20 232 -24 479 -112 614 -73 112 -201 215 -330 264 -128 48 -201 61 -373 66 -199 7 -197 8 -117 -102 149 -204 259 -467 289 -692 18 -128 8 -404 -19 -558 -30 -171 -79 -366 -99 -397 -88 -134 -525 -586 -742 -767 -389 -325 -923 -662 -1606 -1012 -129 -67 -233 -126 -232 -131 9 -27 213 -76 348 -84 240 -15 503 56 909 245 l169 78 54 -91 c71 -121 237 -290 355 -359 143 -85 249 -114 609 -166 247 -36 373 -66 476 -114 70 -32 238 -138 401 -252 89 -63 97 -55 63 66 -14 52 -32 156 -41 232 -35 324 -104 555 -220 732 -126 195 -297 352 -523 481 l-73 41 208 193 c114 107 229 214 255 238 l46 45 104 -46 c207 -92 367 -131 533 -131 135 0 227 24 490 126 285 112 425 158 477 158 111 0 263 -43 424 -120 62 -29 107 -45 115 -40 16 11 -27 183 -82 326 -62 159 -129 264 -244 380 -237 238 -562 384 -856 384 -44 0 -79 3 -79 7 0 5 338 641 346 651 1 2 74 -14 161 -36 226 -57 353 -76 523 -76 172 0 242 15 362 75 120 60 240 143 432 298 314 254 391 312 566 429 188 126 227 148 305 168 91 25 159 14 222 -36 23 -18 28 -19 41 -6 39 39 -197 316 -358 421 -238 155 -551 245 -850 245 -315 0 -590 -84 -914 -280 l-40 -24 42 74 c75 133 188 361 246 500 41 96 66 143 89 163 18 15 142 101 277 191 733 488 1185 716 1675 846 223 60 474 100 621 100 53 0 73 4 77 14 13 33 -142 252 -270 382 -297 303 -659 457 -1063 452 -69 0 -138 -3 -155 -5z"/>
                            </g>
                        </svg>
                    </div>
                    <div className="NotiTxt">
                        <div className="NotiTxtInfo">¡Bienvenido a la familia <span className="EspecialTxt">Conqueror</span>!</div>
                        <span className="NotiDate">10 / 09 / 2021</span>
                        <span className="NotiMoreInfo"><Link>Saber Más</Link></span>
                    </div>
                </div>

                <div className="Notification">
                    <div className="NotiImg">
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0" version="1.0" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M3731 8714 l-734 -1225 -61 -36 c-299 -179 -628 -446 -859 -698 -604 -657 -956 -1432 -1053 -2318 -35 -314 -20 -758 37 -1084 202 -1176 922 -2202 1963 -2798 482 -276 1031 -448 1611 -506 155 -16 575 -16 730 0 1108 111 2080 638 2771 1502 90 112 260 366 339 503 271 474 439 1002 501 1569 23 205 23 609 0 814 -95 872 -435 1631 -1023 2286 -236 263 -578 544 -889 730 l-61 36 -734 1225 -734 1225 -535 0 -535 0 -734 -1225z"/>
                            </g>
                        </svg>
                    </div>
                    <div className="NotiTxt">
                        <div className="NotiTxtInfo">¡Hemos actualizado nuestro nombre!</div>
                        <span className="NotiDate">09 / 09 / 2021</span>
                        <span className="NotiMoreInfo"><Link>Saber Más</Link></span>
                    </div>
                </div>

                <div className="Notification">
                    <div className="NotiImg">
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className="NotiTxt">
                        <div className="NotiTxtInfo">¡Hemos añadido <span className="EspecialTxt">Notificaciones</span>!</div>
                        <span className="NotiDate">08 / sep / 2021</span>
                        <span className="NotiMoreInfo"><Link>Saber Más</Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;