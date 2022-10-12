import React from 'react';
import {Box,TextField } from '@material-ui/core';
import './Form.scss'

export default function BasicTextFields(props) {

    const headerContent = (activeStep) => {
        switch (activeStep) {
            case 0:
                return(
                <div className='header_content'>
                <span className='header_h3'>Welcome! First Thing First...</span>
                <span className='header_span'>You can always change them later.</span>
                </div>
                )         
                break;       
            case 1:
                return(
                    <div className='header_content'>
                    <span className='header_h3'>Let's set up home for all your Work</span>
                    <span className='header_span'>You can always create another Workspace  later.</span>
                    </div>
                
                )         
                break; 
        }
    }
   
  return (
    <>
      {headerContent(props.activeStep)} 
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {
        props.placeholder.map((data , index) => {
            return (
              <div className='textField'>
                <TextField className='form_field'  id="standard-basic" key={index} label={data} variant="outlined" />
                </div>
            )
        })
      }
     
    </Box>
    </>
  );
}
