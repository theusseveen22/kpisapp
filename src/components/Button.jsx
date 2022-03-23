import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../Context/Context';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { db } from '../services/firebaseConection'
import { addDoc, collection } from '@firebase/firestore';


export default function ButtonChange() {
    const referenceCollectionNumber = collection(db, "numeroempregados")
    const referenceCollectionNivel = collection(db, "satisfaction")
    const { nivelValue, quantEmployer } = useContext(Context)
    console.log(nivelValue)

    const btnAtiv = () => {
        if (nivelValue && quantEmployer.length > 0 ) return false
        return true
      }

    const navigate = useNavigate()
    const handleClick = async () => {
        await addDoc(referenceCollectionNumber, { numEmployer: quantEmployer })
        await addDoc(referenceCollectionNivel, { nivel: nivelValue })
        return navigate('/thanks');
    }

  return (
    <div>
    <Stack spacing={2} direction="row">
      <Button variant="contained"
      onClick={handleClick}
      disabled={btnAtiv()}>Enviar Pesquisa</Button>
    </Stack>
    </div>
  )
}
