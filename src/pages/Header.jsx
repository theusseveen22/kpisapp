import React from 'react'
import icon from '../images/icon.png'
import '../pages/header.css'

export default function Header() {
  return (
      <div className='header'>
    <div className='icon-area'><img src={icon} alt="logo icon" />
    <h5>Key People Insights</h5>
    </div>
    <div className='text-header-area'>
        <h5>Teste de qualidade Kpis</h5>
    </div>
    </div>
  )
}
