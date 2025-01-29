import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Login() {
  return (
    <div style={{textAlign: 'center'}}>
        <h1 style={{textDecoration:'underline'}}>Login</h1>
        <br />
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <br /> <br />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <br /> <br />
        <Button variant="contained">Login</Button>

    </div>

  )
}

export default Login