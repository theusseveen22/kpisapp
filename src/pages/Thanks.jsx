import React from 'react'
import coffee from '../images/coffee.gif'
import './thanks.css'

export default function Thanks() {
  return (
    <div className='thanks-control'>
        <h1>Obrigado por participar de nossa pesquisa!</h1>
        <h4>Sua participação ajudará a entendermos melhor o que nossos colaboradores
            pensam sobre a empresa e assim poderemos ajustar estratégias para melhorar
            ainda mais nosso ambiente de trabalho.
        </h4>
        <h5>Relaxa e toma um cafezin ;)</h5>
        <img src={coffee} width="300px" height="300px" alt="Coffee" />
    </div>
  )
}
