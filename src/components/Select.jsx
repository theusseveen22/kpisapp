import React, { useContext } from 'react'
import Context from '../Context/Context';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './select.css'

export default function SelectComponent() {

    const { setQuantEmployer } = useContext(Context)
    
    const handleChange = async ({ target }) => {
      const { value } = target;
      setQuantEmployer(value)
    };
    return (
      <div className='control-select'>
      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Número de pessoas na sua equipe</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value='1 a 3' onChange={handleChange} 
        control={<Radio />} label="1 até 3" />
        <FormControlLabel value='quatroateseis' onChange={handleChange}
        control={<Radio />} label="4 a 5" />
        <FormControlLabel value='seteatenove' onChange={handleChange}
        control={<Radio />} label="7 a 9" />
        <FormControlLabel value='dezatequatorze' onChange={handleChange}
        control={<Radio />} label="10 a 14" />
        <FormControlLabel value='quinzeoumais' onChange={handleChange}
        control={<Radio />} label="15 mais" />
      </RadioGroup>
    </FormControl>
    </div>
    )
}