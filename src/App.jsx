import { useState } from 'react'
import * as React from 'react';

import './App.css'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
import WeatherApp from './WeatherApp';



// import Alert from '@mui/material/Alert';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Button from '@mui/material/Button';

function App() {
  
  // let handleButton = () => {
  //   console.log("butoon was clicked")
  // }

  return (
    <>
     {/* <p>Material UI</p>
      <Button 
        variant="contained"
        onClick={handleButton}
        startIcon={<DeleteIcon />}
        color='error'
        >
        Click me
      </Button>
      <br /><br />
      <Button 
        variant="outlined"
        onClick={handleButton}
        endIcon={<SendIcon />}
        color='secondary'
        size='small'
        >
        send
      </Button>
      <br /><br />
      <Alert severity="error">This is an error Alert.</Alert> */}

      {/* <SearchBox/><br /><br />
      <InfoBox/> */}
      <WeatherApp/>
    </>
  )
}

export default App
