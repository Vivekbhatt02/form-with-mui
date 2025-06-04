import React,{useState} from 'react';
import {ThemeProvider} from '@emotion/react';
import {CustomTheme} from './CustomTheme';
import {Button, Container, FormControl, InputLabel, Input, Typography} from '@mui/material';

const containerStyle = {
  backgroundColor:'white',
  height: '40vh',
  width: '20rem',
  marginTop: '25vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',
  borderRadius:'1rem',
  boxShadow: 
   ' 0.1875rem 0.1875rem 0.3125rem rgba(0, 0, 0, 0.2), -0.1875rem -0.1875rem 0.3125rem rgba(0, 0, 0, 0.2)'

};

export default function App() {
  const[name,setName] = useState('')
  const[submittedName,setSubmittedName]= useState('')

  function handleFormSubmit(event){
    event.preventDefault()
    setSubmittedName(name)
    setName('')
  }
  return (
    <ThemeProvider theme={CustomTheme}>
      <Container sx={containerStyle}>
        <FormControl defaultValue="" required>
          <InputLabel htmlFor="name-input">Name</InputLabel>
          <Input id="name-input"
            placeholder="Write your name here"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </FormControl>
        <Button onClick={handleFormSubmit} variant='contained' sx={{width:'10rem'}}>
          Submit
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          Submitted Name:{submittedName}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}