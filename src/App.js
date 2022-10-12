import React from 'react';
import './App.scss';
import StepperForm from './component/stepper/stepper';
import {CssBaseline , Container , Paper , Box} from "@material-ui/core";

function App() {
  return (
    <>
     <div className='Container' component={Box} p={4}>
      <div className='paper' component={Box} p={3} >
       <StepperForm />
       </div>
     </div>
    </>
  );
}

export default App;
