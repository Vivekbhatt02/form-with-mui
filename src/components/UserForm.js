import React,{useState} from 'react';

import {ThemeProvider} from '@emotion/react';
import {customTheme} from './themes/customTheme';

import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Select,
  MenuItem
} from '@mui/material';
import {ThemeProvider} from '@emotion/react';

import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

const pagestyle = {
  backgroundColor: 'rgb(239, 239, 239)',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const containerStyle = {
  backgroundColor: 'white',
  width: '20rem',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '2rem',
  borderRadius: '1rem',
  boxShadow: [
  "0.1875rem 0.1875rem 0.3125rem rgba(0, 0, 0, 0.2)",
  " -0.1875rem -0.1875rem 0.3125rem rgba(0, 0, 0, 0.2)"
  ].join(',')
};

export default function Userform() {
  const[name,setName] = useState('')
  const[gender,setGender] = useState('')
  const [dob, setDOB] = useState(null);
  const[submittedDetails,setSubmittedDetails]= useState({name:'',gender:'',dob: '',})

  function handleFormSubmit(event){
    event.preventDefault()
    setSubmittedDetails({name,gender,dob})
    setName('')
    setGender('')
    setDOB(null)
  }
  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={pagestyle}>
        <Container sx={containerStyle}>
          <FormControl defaultValue="" required sx={{width:'100%'}}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input id="name-input"
              placeholder="Write your name here"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </FormControl>
          <FormControl sx={{width:'100%'}}>
            <InputLabel>Gender</InputLabel>
            <Select 
              label='Gender'
              onChange={(event)=>setGender(event.target.value)}
              value={gender}
            >
              <MenuItem value="Male" >Male</MenuItem>
              <MenuItem value="Female" >Female</MenuItem>
              <MenuItem value="Others" >Others</MenuItem>
            </Select>
          </FormControl>
          <FormControl  sx={{width:'100%'}} >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={'DOB'}
                  views={['year', 'month', 'day']}
                  sx={{ minWidth: 250 }}
                  onChange={(event)=>setDOB(event)}
                  value={dob}
                />
            </LocalizationProvider>
          </FormControl>
          <Button onClick={handleFormSubmit} variant='contained' sx={{width:'100%'}}>
            Submit
          </Button>
          <Box  sx={{ justifyContent: 'flex-start' }} >
            <Typography>
              Submitted Name:{submittedDetails.name}
            </Typography>
            <Typography>
              Gender:{submittedDetails.gender}
            </Typography>
            <Typography>
              Age:{submittedDetails.dob && submittedDetails.dob.format('DD-MM-YYYY')}
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}