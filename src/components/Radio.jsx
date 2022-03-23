import React, { useContext } from 'react';
import Context from '../Context/Context';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './radio.css'

export default function RadioComponent() {

  const { setNivelValue } = useContext(Context)

    const handleChangeNumber = async ({ target }) => {
      const { value } = target;
      setNivelValue(Number.parseInt(value));
    };

  return (
      <div className='radio-control'>
     <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Indique seu nivel de satisfação com a empresa (sendo 1 muito ruim e 10 muito bom)</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value={1} onChange={handleChangeNumber} 
        control={<Radio />} label="1" />
        <FormControlLabel value={2} onChange={handleChangeNumber}
        control={<Radio />} label="2" />
        <FormControlLabel value={3} onChange={handleChangeNumber}
        control={<Radio />} label="3" />
        <FormControlLabel value={4} onChange={handleChangeNumber}
        control={<Radio />} label="4" />
        <FormControlLabel value={5} onChange={handleChangeNumber}
        control={<Radio />} label="5" />
        <FormControlLabel value={6} onChange={handleChangeNumber}
        control={<Radio />} label="6" />
        <FormControlLabel value={7} onChange={handleChangeNumber}
        control={<Radio />} label="7" />
        <FormControlLabel value={8} onChange={handleChangeNumber}
        control={<Radio />} label="8" />
        <FormControlLabel value={9} onChange={handleChangeNumber}
        control={<Radio />} label="9" />
        <FormControlLabel value={10} onChange={handleChangeNumber}
        control={<Radio />} label="10" />
      </RadioGroup>
    </FormControl>
      </div>
  )
}
