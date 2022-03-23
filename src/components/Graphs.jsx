import React, { useContext } from 'react'
import Context from '../Context/Context'
import MyResponsivePie from './MyResponsivePie';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './graphs.css'

export default function Graphs() {
    const { dataEmployer, dataNivel } = useContext(Context)
  console.log('data', dataEmployer);

  const searchId = (id) => {
    return dataEmployer.filter((e) => e.numEmployer === id).length; 
  }
    const dataGraph = [
      {
        id: '1 a 3',
        label: '1 a 3',
        value: searchId('umaatetres'),
        color: "hsl(28, 70%, 50%)"
      },
      {
        id: '4 a 6',
        label: '4 a 6',
        value: searchId('quatroateseis'),
        color: "hsl(28, 70%, 50%)"
      },
      {
        id: '7 a 9',
        label: '7 a 9',
        value: searchId('seteatenove'),
        color: "hsl(28, 70%, 50%)"
      },
      {
        id: '10 a 14',
        label: '10 a 14',
        value: searchId('dezatequatorze'),
        color: "hsl(28, 70%, 50%)"
      },
      {
        id: '15 mais',
        label: '15 mais',
        value: searchId('quinzeoumais'),
        color: "hsl(28, 70%, 50%)"
      }
    ]
    let media = 0

    dataNivel.forEach(element => {
        media += element.nivel;
        console.log('media', media);
    });

    const satisfaction = media / dataNivel.length

    return (
      <div className='graph-control'>
    <div className='graph-pi'>
    <h5>Gráfico número de funcionários</h5>
      <MyResponsivePie data={dataGraph} />
    </div>
    <div className='media'>
      <h5>Média de satisfação com a empresa</h5>
        { isNaN(satisfaction) ? <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box> : <h1>{ satisfaction }</h1> }
    </div>
    </div>
  )
}
