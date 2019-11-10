import './Nav.css'
import React from 'react'


export default props =>
        <aside className="menu-area">
                <nav className="menu">
                        {/* TO DO : TERMMINAR NAVEGACAO COM ICONES */}
                        <a href="#/">
                                <i className="fa fa-home"></i> Inicio
                        </a>
                        <a href="#/users">
                                <i className="fa fa-users"></i> Usuarios
                        </a>
                        <a href="#/">
                                <i className="fa fa-download"></i> Download
                        </a>
                </nav>
        </aside>