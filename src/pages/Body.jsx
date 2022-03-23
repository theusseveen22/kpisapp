import React from 'react'
import '../pages/body.css'
import { Link } from 'react-router-dom'

export default function body() {
  return (
      <div className='body-css'>
    <div className='left-content'>
      <h3>
        Bem-vindo(a) a pesquisa de qualidade da KPIS, queremos ouvir você!
      </h3>
      <h4>
        Acesso o menu ao lado e responda a pesquisa, estamos trabalhando para 
        cada vez mais melhorar as relações entre colaborador e empresa. ;)
      </h4>
    </div>
    <div className='right-content'>
    <div className='icon-test'><Link to="search">Iniciar pequisa</Link></div>
    <div className='icon-admin'><Link to="login">Administrador</Link></div>
    <div className='icon-abaut'>Sobre</div>
    </div>
    </div>
  )
}
