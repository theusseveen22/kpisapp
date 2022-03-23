import React from 'react'
import Graphs from '../components/Graphs'
import './admin.css'
import Actions from '../components/ActionsAdd'

export default function Administration() {
  return (
    <div className='admin'>
      <h2>Bem-vindo Administrador</h2>
      <Graphs />
      <h2>Ações a serem tomadas</h2>
      <Actions />
    </div>
  )
}
