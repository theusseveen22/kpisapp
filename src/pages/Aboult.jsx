import React from 'react'
import './aboult.css'
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Aboult() {
  return (
    <div className='aboult'>
        <div className='conteiner'>
            <div className='left'>
            <h1>Sobre o projeto</h1>
<p>- <strong>Estruturação</strong>: Pensando que o projeto é uma maneira de a empresa avaliar seu desempenho junto aos funcionários resolvi dividir o projeto em dois, com o funcionário tendo acesso  
apenas a parque da pesquisa e posteriormente direcionando para um tela de agradecimento. Do lado do administrador o usuário admin poderá logar e ter acesso aos dados, discutindo com os outros administradores
ou gerentes novas ideias de motivação das equipes, incluí nessa área para lista de ideis.</p>

<p>- <strong>Desafios</strong>: O grande desafio que me deparei nesse projeto foi a questão do Nivo.rocks, nunca tinha criado nada em gráficos e demorei um pouco pra pegar o jeito porém gostei muito do resultado final e da beleza e facilidade (Depois que se entende) em crar belos gráficos</p>

<p>O segundo ponto foi o Firebase, porém esse tive uma facilidade maior pois se parece muito com o Mongodb, database pelo qual sou um grande entusiata.</p>

<p>- <strong>O que poderia melhorar</strong>: Creio que alguns componentes poderiam ser melhor pensados para otimizar e criar menos códigos, caso houvesse um tempo maior, porém nada que um projeto 2.0 resolva, não é mesmo? Além deste ponto, a responsividade poderia também ser melhorada.</p>

            </div>
            <div className='right'>
            <h1>Agradecimentos</h1>

<p>Gostaria de agradecer a todo o pessoal da Kpis pela oportunidade de fazer esse projeto e poder aprender um pouco mais inclusive tecnologias que nunca tinha codado.</p>

<p>Agradecer ao Marcel Hwa pela entrevista e por ter me escolhido para essa segunda etapa, mesmo que não seja o escolhido para a vaga já valeu a pena o aprendizado.</p>
            </div>
            <h2><Link to="/">Início</Link></h2>
        </div>
        <Footer />
    </div>
  )
}
