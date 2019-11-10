import './Home.css'
import React from 'react'
import Main from '../template/Main'



export default props =>
    <Main icon="home" title="Inicio"
        subtitle="Controle de Estoque">
        <div className='display-4' color= '#145214'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema de CRUD cadastro desenvolvido em React JS (TEMPORARIO)</p>
        
    </Main>   