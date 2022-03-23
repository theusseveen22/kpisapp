import React from 'react'
import Select from './Select';
import Radio from './Radio';
import ButtonChange from './Button';
import './usersearch.css';

export default function UserSearch() {
    return (
    <div className='search'>
      <h2>Nos campos abaixos indique as respostas corretas e depois clique em ENVIAR RESPOSTA</h2>
      <Select />
      <Radio />
      <ButtonChange />
    </div>
  )
}
