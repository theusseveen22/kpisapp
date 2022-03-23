import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../components/login.css'

export default function Login() {
  const mockLogin = {
    verifyName: "admin",
    verifyPassword: "12345"
  }

  
  const btnAtiv = () => {
    const { name, password } = form;
    if (name.length > 3 && password.length > 4 ) return false
    return true
  }
  
  const [ form, setForm ] = useState({
    name: '',
    password: ''
  })

  const [alertStatus, setAlertStatus] = useState({
    message: 'Login: admin, Senha: 12345',
    status: false
  })

  let navigate = useNavigate();
  
  const loginVerifyRedirect = () => {
    const { verifyName, verifyPassword } = mockLogin;
    const { name, password } = form;
   
    if (verifyName === name && verifyPassword === password) {
      setAlertStatus({ status: true});
      return navigate('/admin');
    }
    setAlertStatus({ message: "Login ou senha inválido"})
  }

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setForm({...form,
        [name]: value,
    });
}

  return (
    <div className='login-page'>
      <h3>Login</h3>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic"
     label="Login" variant="outlined"
     name="name"
     onChange={ handleChange } />
    <TextField
          name="password"
          onChange={ handleChange }
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
  </Box>
    <Stack spacing={2} direction="row">
    <Button variant="contained"
    disabled={btnAtiv()}
    onClick={ loginVerifyRedirect }
    >Logar</Button>
  </Stack>
  { alertStatus.status ? alertStatus.message :
  <h6>{ alertStatus.message }</h6>
  }
  </div>
  )
}
