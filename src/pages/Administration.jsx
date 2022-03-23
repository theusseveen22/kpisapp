import React from 'react';
import Graphs from '../components/Graphs';
import './admin.css';
import Actions from '../components/ActionsAdd';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Administration() {
  return (
    <div className='admin'>
      <h2>Bem-vindo Administrador</h2>
      <Graphs />
      <h2>Ações a serem tomadas com base nos dados</h2>
      <Actions />
      <h2><Link to="/">Início</Link></h2>
      <Footer />
    </div>
  )
}
