import React, { useState, useContext } from 'react'
import Context from '../Context/Context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './action.css'
import { db } from '../services/firebaseConection'
import { addDoc, collection } from '@firebase/firestore';
import { doc, deleteDoc } from "firebase/firestore";

export default function ActionsAdd() {
  const { dataActions, setDataActions} = useContext(Context)

  const referenceCollectionAdd = collection(db, "actions")

  const [actionForm, setActionForm ] = useState({
    nameActions: ''
  })

  const handleClick = async () => {
    const { nameActions } = actionForm;
    await addDoc(referenceCollectionAdd, { nameActions: nameActions })
    setDataActions([...dataActions, actionForm])
}

const deleteClick = async (id) => {
  const deteled = doc(db, "actions", id)
  await deleteDoc(deteled)
  const newData = dataActions.filter((item) => item.id !== id)
  setDataActions(newData)
}

  console.log('dataActions', dataActions)

  return (
    <>
    <div className='action'>  
        <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth 
      label="Add actions" 
      id="fullWidth"
      onChange={ ({target}) => setActionForm({ nameActions: target.value }) }
      />
    </Box>
    <Stack spacing={2} direction="row">
      <Button variant="contained"
      onClick={ handleClick }
      >+</Button>
    </Stack>
    </div>
    <div className='ul-control'>
      { dataActions.map((itens) =>
        <ul key={ itens.id }>
          <li>{ itens.nameActions }<span className='button'><Button 
      variant="contained"
      onClick={ () => deleteClick(itens.id) }
      >Concluir</Button></span>
          
          </li>
        </ul>
      )  
    }
    </div>
    </>
  )
}
