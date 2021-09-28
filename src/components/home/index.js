import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Home = () => {

        return (
                <div className="HomeContent">
                    <div className="Background">
                        <div className="drops"></div>
                        <div className="drops"></div>
                        <div className="drops"></div>
                        <div className="drops"></div>
                    </div>

                    <div className="HomeContainers">
                        <div className="LogoHome">
                            <div className="LogoSVG">
                                <svg className="LogoHeader" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0"version="1.0" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                        <path d="M3731 8714 l-734 -1225 -61 -36 c-299 -179 -628 -446 -859 -698 -604 -657 -956 -1432 -1053 -2318 -35 -314 -20 -758 37 -1084 202 -1176 922 -2202 1963 -2798 482 -276 1031 -448 1611 -506 155 -16 575 -16 730 0 1108 111 2080 638 2771 1502 90 112 260 366 339 503 271 474 439 1002 501 1569 23 205 23 609 0 814 -95 872 -435 1631 -1023 2286 -236 263 -578 544 -889 730 l-61 36 -734 1225 -734 1225 -535 0 -535 0 -734 -1225z"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="LogoName">
                                Blurplee
                            </div>
                        </div>
                        <div className="ContentPrincipalContainer">
                            <div className="TxtHomeContainer">
                                <h1>
                                    <FormattedMessage 
                                        id="app.welcome" 
                                        defaultMessage="Bienvenidos a " 
                                    />
                                    <span className="EspecialTxt">Blurplee</span> 
                                        <br/> 
                                    Nos dedicamos tanto al desarrollo como apoyo de <span className="EspecialTxt">Proyectos Digitales</span> y <span className="EspecialTxt">Proyectos de Entretenimiento</span>.
                                </h1>
                                    <br/>
                                <h1>Blurplee esta pensado para un trabajo con acabado limpio, moderno y fresco.</h1>
                            </div>
                            <div className="BtnHomeContainer">
                                <a href="https://www.patreon.com/AoDesu" target="_blank" rel="noopener noreferrer" className="btnGeneral">
                                    <span>
                                        <FormattedMessage 
                                            id="text.helpUs"
                                            defaultMessage="Ayudanos"
                                        />
                                    </span> 
                                    <i className="fas fa-hands-helping"></i>
                                </a>
                                <Link to="/" className="btnGeneral"><i className="fab fa-discord"></i> 
                                    <span>
                                        <FormattedMessage 
                                        id="text.discord"
                                        defaultMessage="Discord"
                                        />
                                    </span> 
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="HomeContainers">
                        <div className="GeneralHomeContainers">
                            <div className="HomeTitle">
                                <h3>Contenido</h3>
                            </div>
                            <div className="HomeContent">
                                <div className="AlignContainer">
                                    <div className="ContenetorsContent">
                                        <div className="hoverEffectContainer"></div>
                                        <div className="PictureContent">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="TxtContainer noNow">
                                            <h4>Entretenimiento</h4>
                                            <p>Distruta de una enorme variedad de contenidos y temas.</p>
                                            <Link to="" className="btnGeneral">Ver</Link>
                                            <Link to="/" className="btnGeneral">
                                                <FormattedMessage
                                                    id="text.comingSoon"
                                                    defaultMessage="Muy Pronto" 
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ContenetorsContent">
                                        <div className="hoverEffectContainer"></div>
                                        <div className="PictureContent">
                                            <i className="fas fa-newspaper"></i>
                                        </div>
                                        <div className="TxtContainer noNow">
                                            <h4>Noticias</h4>
                                            <p>Descubre el ultimo contenido y noticias del momento.</p>
                                            <Link to="" className="btnGeneral">Leer</Link>
                                            <Link to="/" className="btnGeneral">
                                                <FormattedMessage
                                                    id="text.comingSoon"
                                                    defaultMessage="Muy Pronto" 
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ContenetorsContent">
                                        <div className="hoverEffectContainer"></div>
                                        <div className="PictureContent">
                                            <i className="fas fa-calendar-alt"></i>
                                        </div>
                                        <div className="TxtContainer noNow">
                                            <h4>Calendario</h4>
                                            <p>Enterate de la fecha de nuestros eventos, para divertirte y pasar un buen rato.</p>
                                            <Link to="" className="btnGeneral">Informarme</Link>
                                            <Link to="/" className="btnGeneral">
                                                <FormattedMessage
                                                    id="text.comingSoon"
                                                    defaultMessage="Muy Pronto" 
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ContenetorsContent">
                                        <div className="hoverEffectContainer"></div>
                                        <div className="PictureContent">
                                            <i className="fas fa-graduation-cap"></i>
                                        </div>
                                        <div className="TxtContainer noNow">
                                            <h4>Cursos</h4>
                                            <p>Tenemos y vamos a tener cada vez más y más cursos con el tiempo, donde podras aprender todo lo que nosotros sabemos.</p>
                                            <Link to="" className="btnGeneral">Aprender</Link>
                                            <Link to="/" className="btnGeneral">
                                                <FormattedMessage
                                                    id="text.comingSoon"
                                                    defaultMessage="Muy Pronto" 
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ContenetorsContent">
                                        <div className="hoverEffectContainer"></div>
                                        <div className="PictureContent">
                                            <i className="fas fa-users"></i>
                                        </div>
                                        <div className="TxtContainer noNow">
                                            <h4>Comunidad</h4>
                                            <p>Crea tu propia comunidad o une la que ya poseas a nuestra organización para ser participe de los beneficios e incluso recibir el <span className="EspecialTxt">Verificado</span>.</p>
                                            <Link to="" className="btnGeneral">Aprender</Link>
                                            <Link to="/" className="btnGeneral">
                                                <FormattedMessage
                                                    id="text.comingSoon"
                                                    defaultMessage="Muy Pronto" 
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="HomeContainers">
                        <div className="GeneralHomeContainers">
                            <div className="HomeTitle">
                                <h3>Proyectos</h3>
                            </div>
                            <div className="HomeContent">
                                <div className="AlignContainer Proyects">
                                <div className="ProyectsContent">
                                    <div className="hoverEffectContainer"></div>
                                    <div className="ProyecsPicture">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 2000.000000 2000.000000" preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)" fill="#4d5bf9" stroke="none">
                                                <path d="M10035 18099 c-218 -28 -403 -119 -567 -277 -171 -166 -268 -362 -298 -602 -6 -52 -10 -408 -10 -930 0 -778 -2 -859 -20 -1020 -70 -613 -176 -963 -474 -1558 l-85 -170 144 -7 c169 -8 447 0 665 21 283 27 462 60 648 119 l107 35 3520 0 c2366 0 3548 3 3605 10 233 29 414 115 582 278 171 166 268 362 298 602 14 116 14 2504 0 2620 -30 240 -127 436 -298 602 -168 163 -349 249 -582 278 -107 13 -7132 12 -7235 -1z m545 -1400 c341 -31 603 -134 779 -307 160 -158 238 -355 248 -627 12 -310 -69 -530 -266 -725 -167 -166 -366 -256 -673 -306 -81 -13 -201 -17 -570 -21 l-468 -5 0 1001 0 1001 418 0 c229 0 469 -5 532 -11z m2385 -459 c334 -48 577 -215 699 -482 49 -106 68 -196 70 -323 l1 -110 -708 -3 -707 -2 19 -38 c30 -59 108 -129 186 -168 113 -56 200 -75 371 -81 173 -6 289 8 457 58 55 17 101 28 103 26 7 -6 124 -275 124 -284 0 -5 -31 -21 -70 -36 -212 -82 -400 -112 -655 -103 -93 3 -204 12 -245 21 -389 79 -640 295 -704 607 -45 219 12 442 158 620 124 150 344 264 571 297 84 12 247 12 330 1z m2099 -5 c142 -17 317 -53 439 -91 42 -14 77 -26 77 -27 0 -1 -27 -67 -60 -147 -35 -87 -64 -144 -72 -144 -7 1 -69 18 -137 38 -165 48 -280 66 -431 66 -244 0 -380 -63 -380 -174 0 -54 28 -92 78 -106 54 -15 200 -12 359 6 189 22 380 22 463 0 134 -35 225 -91 282 -174 88 -128 90 -329 5 -475 -37 -63 -142 -157 -222 -199 -334 -174 -920 -154 -1359 46 -42 19 -76 38 -76 41 0 7 149 267 159 278 4 4 50 -13 102 -37 176 -85 377 -126 612 -126 274 0 425 59 444 173 3 21 -1 46 -11 65 -40 77 -112 89 -370 62 -331 -35 -502 -24 -643 40 -168 77 -257 251 -224 439 19 105 59 177 144 257 177 169 453 232 821 189z m1396 -382 c0 -495 11 -576 90 -680 42 -56 152 -117 239 -133 193 -35 417 17 561 131 l50 39 0 505 0 505 190 0 190 0 0 -750 0 -750 -190 0 -190 0 0 59 0 60 -95 -45 c-183 -87 -402 -121 -611 -94 -325 40 -507 189 -586 475 -21 76 -22 103 -26 563 l-3 482 190 0 191 0 0 -367z"/>
                                                <path d="M10040 15711 l0 -641 233 0 c128 0 271 5 317 10 325 39 526 212 575 494 55 317 -57 574 -300 691 -145 70 -196 78 -532 83 l-293 4 0 -641z"/>
                                                <path d="M12670 15894 c-140 -30 -279 -124 -329 -223 l-21 -41 505 0 506 0 -27 50 c-57 104 -176 185 -320 215 -86 18 -228 18 -314 -1z"/>
                                                <path d="M3916 10693 c-1265 -2694 -2310 -4919 -2323 -4946 l-23 -47 1060 2 1061 3 381 828 381 827 1933 0 1934 0 0 23 c0 12 -5 107 -11 211 -16 291 6 622 62 906 36 184 99 436 126 506 4 12 -251 14 -1634 16 l-1639 3 1035 2233 c569 1227 1037 2232 1041 2232 3 0 382 -789 841 -1754 l836 -1754 80 112 c45 61 118 155 164 210 46 54 88 104 93 111 7 9 -13 62 -61 166 -136 295 -158 361 -217 649 -103 508 -120 821 -58 1062 25 98 38 128 77 182 63 89 120 127 227 154 105 26 120 27 206 5 71 -17 120 -49 326 -209 54 -43 97 -72 95 -66 -2 6 -100 210 -218 454 l-215 443 -65 -7 c-36 -4 -231 -10 -432 -14 -330 -6 -374 -5 -440 11 -137 32 -213 104 -245 229 -24 97 -10 152 98 369 174 351 274 596 334 814 l26 96 -203 418 -202 419 -1066 0 -1066 0 -2299 -4897z"/>
                                                <path d="M9336 12310 c-44 -39 -63 -89 -78 -205 -20 -163 15 -490 92 -860 39 -185 84 -302 242 -627 l121 -247 -100 -108 c-202 -219 -338 -395 -467 -605 -272 -445 -432 -899 -503 -1428 -25 -189 -25 -706 0 -895 102 -757 403 -1404 923 -1980 334 -370 713 -651 1209 -895 592 -291 1170 -449 1895 -517 260 -24 909 -24 1170 0 735 69 1327 232 1925 529 725 361 1303 896 1677 1553 230 404 375 852 434 1345 25 200 25 628 1 830 -95 786 -407 1449 -968 2052 -54 58 -99 111 -99 117 0 6 44 99 98 208 210 427 238 514 307 952 53 333 55 586 6 696 -20 46 -73 95 -102 95 -17 0 -201 -136 -355 -264 -205 -169 -471 -370 -628 -475 -176 -116 -275 -171 -408 -225 -115 -46 -289 -89 -336 -83 -21 2 -100 28 -177 57 -1127 422 -2768 423 -3909 4 -143 -53 -189 -55 -335 -18 -201 50 -354 124 -601 289 -177 118 -325 228 -528 393 -254 207 -433 342 -452 342 -11 0 -35 -14 -54 -30z m12 -149 c7 -4 30 -55 52 -112 34 -94 39 -101 45 -74 9 44 20 60 42 63 28 4 37 -10 77 -121 97 -267 258 -602 365 -762 35 -52 182 -193 263 -253 43 -31 78 -62 78 -68 0 -6 -26 -28 -57 -49 -100 -66 -286 -214 -427 -339 -37 -33 -50 -33 -74 2 -22 31 -121 241 -177 375 -150 363 -222 710 -241 1157 -6 139 -5 157 10 173 20 19 25 20 44 8z m7858 -28 c15 -16 16 -34 10 -173 -19 -447 -91 -794 -241 -1157 -56 -134 -155 -344 -177 -375 l-19 -28 -82 73 c-105 93 -259 216 -364 290 -46 32 -83 61 -82 65 0 4 33 31 73 60 76 55 222 196 257 247 107 160 268 495 365 762 40 111 49 125 77 121 22 -3 33 -19 42 -63 6 -27 11 -20 45 74 45 122 61 139 96 104z m-3524 -2138 c735 -80 1392 -411 1787 -900 204 -252 352 -560 416 -865 65 -307 59 -666 -16 -957 -194 -758 -783 -1328 -1639 -1586 -129 -39 -319 -79 -490 -103 -158 -21 -628 -30 -813 -15 -982 83 -1781 571 -2137 1306 -341 703 -261 1539 207 2163 136 181 351 379 558 514 405 266 882 418 1435 458 166 12 513 4 692 -15z"/>
                                                <path d="M11376 9018 c-161 -172 -268 -335 -359 -548 -102 -240 -131 -392 -131 -685 0 -319 40 -498 171 -767 89 -183 174 -307 305 -443 191 -199 332 -303 574 -426 237 -120 474 -203 684 -238 121 -21 430 -54 430 -46 0 13 -1569 3240 -1577 3242 -6 2 -50 -38 -97 -89z"/>
                                            </g>
                                        </svg>
                                        </div>
                                        <div className="ProyecsTxt">
                                            <h4>AoDesu <i className="far fa-registered"></i></h4>
                                            <p>AoDesu es un servicio de <span className="EspecialTxt">Anime Gratuito</span> pensado para mejorar la experiencia del usuario en un 110%!</p>
                                            <div className="ProyecsOptions">
                                                <Link to="/" className="btnGeneral"><i className="fas fa-info-circle"></i> Info</Link>
                                                <a href="https://cherytuwu.github.io/InstallAoDesu/" target="_blank" rel="noopener noreferrer" className="btnGeneral"><i className="fas fa-external-link-alt"></i> Ir</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ProyectsContent">
                                        <div className="hoverEffectContainer"></div>
                                        <div className="ProyecsPicture">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 2000.000000 2000.000000" preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)" fill="#4d5bf9" stroke="none">
                                            <path d="M134 18193 c23 -65 72 -167 115 -242 83 -141 333 -456 512 -644 l74 -78 230 -15 c127 -9 361 -18 520 -22 l290 -7 3 -597 2 -598 983 -2 982 -3 0 -845 0 -845 -687 -3 -688 -2 0 -610 0 -610 690 0 690 0 -2 -4012 -3 -4013 -97 -3 -98 -3 0 -1629 c0 -897 0 -1633 0 -1637 0 -5 535 -9 1190 -11 l1190 -2 0 1640 0 1639 -77 3 -78 3 -3 4013 -2 4012 4130 0 4130 0 -2 -4012 -3 -4013 -77 -3 -78 -3 0 -1629 c0 -897 -1 -1633 -2 -1637 -2 -5 534 -9 1190 -11 l1192 -2 0 1640 0 1639 -97 3 -98 3 -3 4013 -2 4012 690 0 690 0 0 610 0 610 -688 2 -687 3 0 845 0 845 983 3 982 2 0 598 0 599 303 6 c166 4 401 13 522 21 l220 15 73 77 c193 202 442 520 525 667 45 80 120 248 113 254 -1 2 -70 -4 -152 -12 -1567 -155 -4016 -349 -5564 -440 -1313 -77 -1487 -80 -4160 -80 -2673 0 -2847 3 -4160 80 -1548 91 -3997 285 -5564 440 -82 8 -150 15 -152 15 -2 0 3 -17 10 -37z m9104 -3050 l-3 -848 -1680 0 -1680 0 -3 835 c-1 459 0 841 3 848 3 9 350 12 1685 12 l1680 0 -2 -847z m4887 -3 l0 -845 -1680 0 -1680 0 -3 848 -2 847 1682 -2 1683 -3 0 -845z"/>
                                            </g>
                                        </svg>
                                        </div>
                                        <div className="ProyecsTxt">
                                            <h4>Sanctuary <i className="far fa-registered"></i></h4>
                                            <p>Si disfrutas del anime, pero odias cuando este acaba, Sanctuary sera tu refugio en el cual podras disfrutar del origen de tus animes favoritos a travez del <span className="EspecialTxt">Manga</span>.</p>
                                            <div className="ProyecsOptions">
                                            <Link to="/" style={{width: '100%'}} className="btnGeneral"><i className="fas fa-info-circle"></i> Info</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ProyectsContent">
                                        <div className="hoverEffectContainer"></div>
                                        <div className="ProyecsPicture">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 2000.000000 2000.000000" preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)" fill="#4d5bf9" stroke="none">
                                            <path d="M6250 17001 l-3745 -1998 0 -5003 0 -5003 3748 -1998 3747 -1999 3748 1999 3747 1998 0 5003 0 5003 -3740 1994 c-2057 1098 -3744 1997 -3750 1999 -5 1 -1695 -896 -3755 -1995z m1259 -4663 c1361 -727 2482 -1322 2491 -1322 9 0 1130 595 2491 1322 1362 727 2483 1324 2492 1328 16 6 17 -240 17 -3669 l0 -3674 -1243 -662 c-684 -363 -1247 -661 -1250 -661 -4 0 -8 1105 -9 2455 l-3 2455 -1240 -660 c-682 -363 -1247 -660 -1255 -660 -8 0 -573 297 -1255 660 l-1240 660 -3 -2455 c-1 -1350 -5 -2455 -9 -2455 -3 0 -566 298 -1250 661 l-1243 662 0 3674 c0 3429 1 3675 17 3669 9 -4 1130 -601 2492 -1328z"/>
                                            </g>
                                        </svg>
                                        </div>
                                        <div className="ProyecsTxt">
                                            <h4>CherytMusic <i className="far fa-registered"></i></h4>
                                            <p>Disfruta de tu musica favorita <span className="EspecialTxt">Gratis y sin Anuncios</span> a la mejor calidad auditiva posible</p>
                                            <div className="ProyecsOptions">
                                            <Link to="/" style={{width: '100%'}} className="btnGeneral"><i className="fas fa-info-circle"></i> Info</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ProyectsContent">
                                        <div className="hoverEffectContainer"></div>
                                        <div className="ProyecsPicture">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 2000.000000 2000.000000" preserveAspectRatio="xMidYMid meet">
                                            <g transform="translate(0.000000,2000.000000) scale(0.100000,-0.100000)" fill="#4d5bf9" stroke="none">
                                            <path d="M10206 19772 c-3 -5 -26 -93 -51 -197 -203 -840 -490 -1715 -706 -2156 -121 -245 -323 -571 -518 -834 -44 -60 -81 -115 -81 -121 0 -7 15 -23 33 -35 245 -170 454 -451 552 -743 88 -262 106 -586 50 -862 -61 -296 -255 -520 -542 -624 -180 -65 -257 -74 -578 -74 -396 2 -535 28 -770 144 -378 187 -631 528 -759 1021 -69 267 -81 361 -81 674 1 298 6 351 61 567 92 368 295 717 564 970 l99 94 11 217 c14 277 14 892 0 1067 -14 181 -36 357 -66 517 -13 73 -24 135 -24 138 0 3 -8 5 -18 5 -13 0 -33 -24 -62 -72 -198 -334 -494 -724 -688 -909 -136 -129 -255 -218 -626 -469 -658 -444 -879 -621 -1276 -1019 -323 -323 -549 -597 -814 -988 -415 -612 -705 -1198 -931 -1881 -41 -126 -57 -157 -123 -255 -201 -298 -412 -539 -612 -698 -102 -81 -255 -189 -332 -233 -27 -16 -48 -35 -48 -44 0 -8 118 -135 263 -281 429 -435 475 -499 607 -849 372 -988 1061 -2190 1613 -2817 344 -390 988 -986 1747 -1619 301 -251 577 -517 751 -726 106 -126 289 -386 363 -513 17 -28 35 -47 46 -47 20 0 22 8 45 265 33 373 37 471 42 1031 l5 581 -40 109 c-96 261 -202 632 -256 894 -82 401 -91 688 -36 1071 27 186 50 269 109 395 217 458 566 852 907 1022 105 52 133 60 244 71 296 28 613 -92 860 -326 39 -36 70 -69 70 -74 0 -5 -120 -201 -266 -435 -146 -234 -268 -433 -271 -443 -3 -12 16 -34 64 -73 247 -199 453 -479 583 -792 47 -114 128 -346 170 -491 73 -250 174 -700 210 -935 8 -56 10 -647 8 -2280 -4 -2390 -2 -2272 -59 -2655 -57 -383 -159 -752 -265 -953 -92 -175 -260 -378 -533 -644 -99 -97 -181 -183 -181 -190 0 -11 1448 -1221 1496 -1251 8 -4 22 -2 34 5 16 10 24 10 40 0 12 -7 26 -9 34 -5 48 30 1496 1240 1496 1251 0 7 -82 93 -181 190 -273 266 -441 469 -533 644 -106 201 -208 570 -265 953 -57 383 -55 265 -59 2655 -2 1633 0 2224 8 2280 36 235 137 685 210 935 42 145 123 377 170 491 130 313 336 593 583 792 49 40 67 60 64 73 -3 10 -124 208 -270 441 -145 233 -272 438 -281 456 l-17 33 57 79 c144 201 252 300 408 375 207 99 479 127 790 80 338 -52 663 -305 796 -622 131 -313 35 -694 -264 -1043 -31 -36 -56 -72 -56 -81 0 -38 258 -29 427 16 327 87 564 311 686 650 47 132 61 227 61 400 -1 182 -20 294 -81 477 -33 102 -128 306 -190 410 -15 26 -25 49 -23 51 3 2 665 243 1473 537 1234 448 1467 536 1467 551 0 11 -2 19 -5 19 -13 0 -2920 622 -2924 626 -2 2 8 59 23 126 40 185 56 315 63 509 15 436 -76 735 -332 1094 -144 201 -364 435 -554 588 -71 57 -86 66 -98 54 -11 -11 -10 -22 10 -68 39 -86 85 -238 113 -371 35 -169 44 -434 19 -593 -65 -419 -316 -767 -658 -912 -143 -61 -253 -84 -422 -90 -177 -6 -283 9 -444 63 -379 126 -620 368 -698 701 -25 109 -25 369 1 508 66 354 255 705 543 1006 71 75 101 113 96 122 -4 7 -51 78 -104 158 -237 355 -431 733 -574 1118 -169 456 -361 1122 -511 1771 -31 135 -58 248 -61 253 -6 9 -21 9 -27 -1z"/>
                                            <path d="M2045 9355 c-315 -52 -592 -198 -828 -439 -128 -130 -283 -349 -270 -382 4 -10 24 -14 77 -14 147 0 398 -40 621 -100 490 -130 942 -358 1675 -846 135 -90 259 -176 277 -191 23 -20 48 -67 89 -163 58 -139 171 -367 246 -500 l42 -74 -40 24 c-324 196 -599 280 -914 280 -299 0 -612 -90 -850 -245 -161 -105 -397 -382 -358 -421 13 -13 18 -12 41 6 63 50 131 61 222 36 78 -20 117 -42 305 -168 175 -117 252 -175 566 -429 192 -155 312 -238 432 -298 120 -60 190 -75 362 -75 170 0 297 19 523 76 87 22 160 38 161 36 8 -10 346 -646 346 -651 0 -4 -35 -7 -79 -7 -294 0 -619 -146 -856 -384 -115 -116 -182 -221 -244 -380 -55 -143 -98 -315 -82 -326 8 -5 53 11 115 40 161 77 313 120 424 120 52 0 192 -46 477 -158 263 -102 355 -126 490 -126 166 0 326 39 533 131 l104 46 46 -45 c26 -24 141 -131 255 -238 l208 -193 -73 -41 c-226 -129 -397 -286 -523 -481 -116 -177 -185 -408 -220 -732 -9 -76 -27 -180 -41 -232 -34 -121 -26 -129 63 -66 163 114 331 220 401 252 103 48 229 78 476 114 360 52 466 81 609 166 118 69 284 238 355 359 l54 91 169 -78 c406 -189 669 -260 909 -245 135 8 339 57 348 84 1 5 -103 64 -232 131 -683 350 -1217 687 -1606 1012 -217 181 -654 633 -742 767 -20 31 -69 226 -99 397 -27 154 -37 430 -19 558 30 225 140 488 289 692 80 110 82 109 -116 102 -173 -5 -246 -18 -374 -66 -129 -49 -257 -152 -330 -264 -88 -135 -132 -382 -112 -614 5 -51 6 -93 3 -93 -6 0 -172 243 -286 420 -270 418 -546 931 -683 1272 -108 270 -235 670 -336 1061 -72 276 -120 408 -209 568 -97 173 -180 284 -321 424 -263 264 -566 420 -950 490 -126 23 -405 28 -520 10z"/>
                                            <path d="M18055 9363 c-448 -55 -787 -214 -1080 -508 -141 -140 -224 -251 -321 -424 -89 -160 -137 -292 -209 -568 -101 -391 -228 -791 -336 -1061 -137 -341 -413 -854 -683 -1272 -114 -177 -280 -420 -286 -420 -3 0 -2 42 3 93 20 232 -24 479 -112 614 -73 112 -201 215 -330 264 -128 48 -201 61 -373 66 -199 7 -197 8 -117 -102 149 -204 259 -467 289 -692 18 -128 8 -404 -19 -558 -30 -171 -79 -366 -99 -397 -88 -134 -525 -586 -742 -767 -389 -325 -923 -662 -1606 -1012 -129 -67 -233 -126 -232 -131 9 -27 213 -76 348 -84 240 -15 503 56 909 245 l169 78 54 -91 c71 -121 237 -290 355 -359 143 -85 249 -114 609 -166 247 -36 373 -66 476 -114 70 -32 238 -138 401 -252 89 -63 97 -55 63 66 -14 52 -32 156 -41 232 -35 324 -104 555 -220 732 -126 195 -297 352 -523 481 l-73 41 208 193 c114 107 229 214 255 238 l46 45 104 -46 c207 -92 367 -131 533 -131 135 0 227 24 490 126 285 112 425 158 477 158 111 0 263 -43 424 -120 62 -29 107 -45 115 -40 16 11 -27 183 -82 326 -62 159 -129 264 -244 380 -237 238 -562 384 -856 384 -44 0 -79 3 -79 7 0 5 338 641 346 651 1 2 74 -14 161 -36 226 -57 353 -76 523 -76 172 0 242 15 362 75 120 60 240 143 432 298 314 254 391 312 566 429 188 126 227 148 305 168 91 25 159 14 222 -36 23 -18 28 -19 41 -6 39 39 -197 316 -358 421 -238 155 -551 245 -850 245 -315 0 -590 -84 -914 -280 l-40 -24 42 74 c75 133 188 361 246 500 41 96 66 143 89 163 18 15 142 101 277 191 733 488 1185 716 1675 846 223 60 474 100 621 100 53 0 73 4 77 14 13 33 -142 252 -270 382 -297 303 -659 457 -1063 452 -69 0 -138 -3 -155 -5z"/>
                                            </g>
                                        </svg>
                                        </div>
                                        <div className="ProyecsTxt">
                                            <h4>Conqueror <i className="far fa-registered"></i></h4>
                                            <p>Encuentra información, runas y/o usuarios en <span className="EspecialTxt">Conqueror</span>!</p>
                                            <div className="ProyecsOptions">
                                                <Link to="/" style={{width: '100%'}} className="btnGeneral"><i className="fas fa-info-circle"></i> Info</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="HomeContainers">
                        <div className="GeneralHomeContainers">
                            <div className="HomeTitle">
                                <h3>Sobre Nosotros</h3>
                            </div>
                            <div className="HomeContent">
                                <div className="AlignContainer">
                                    <div className="ContenetorsContent">
                                    <div className="hoverEffectContainer"></div>
                                        <div className="PictureContent">
                                            <i className="fas fa-money-bill-alt"></i>
                                        </div>
                                        <div className="TxtContainer">
                                            <h4>Donación</h4>
                                            <p>Apoyanos monetariamente para seguir trabajando más y más!</p>
                                            <a href="https://www.patreon.com/AoDesu" target="_blank" rel="noopener noreferrer" className="btnGeneral">
                                                <FormattedMessage 
                                                    id="text.helpUs"
                                                    defaultMessage="Ayudanos"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ContenetorsContent">
                                    <div className="hoverEffectContainer"></div>
                                        <div className="PictureContent">
                                            <i className="fab fa-discord"></i>
                                        </div>
                                        <div className="TxtContainer">
                                            <h4>Discord</h4>
                                            <p>Unete a nuestro servidor de Discord para interactuar con toda la comunidad y ayudarnos a mejorar <span className="EspecialTxt">más</span>!</p>
                                            <Link to="" className="btnGeneral">Aprender</Link>
                                            <Link to="/" className="btnGeneral">Unirme</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default Home