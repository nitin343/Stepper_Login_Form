import React ,{useState} from 'react';
import {Button , Stepper,Step,StepLabel} from "@material-ui/core"
import {CheckCircle} from "@material-ui/icons"
import BasicTextFields from '../../model/Forms/Forms';
import './stepper.scss';
import BasicCard from '../../model/useCard/useCard';

function LaunchPage(){
   return(
      <div className='launchPage'>
       <CheckCircle className='circle-icon'/>
       <span className='congradulation'>Congratulations, Niteen!</span>
       <span className='success message'>You have completed onboarding, you can start using the Eden.</span>
      </div>
   )
}

function StepperForm(props) {
     const [activeState, setActiveState] = useState(0);

     const handleNext = () => {
        setActiveState(activeState +1);
        if(activeState == 3){
        window.open('https://master.d2lxyy74okjm45.amplifyapp.com/', '_blank') 
        return setActiveState(0)
        }
     }

     const getStepContent = (activeState) => {
        const step1 = ['FullName' , 'DisplayName']
        const step2 = ['Workspace Name' , 'Workspace URL']
        
        switch(activeState){
            case 0 : 
             return (
                < BasicTextFields placeholder={step1} activeStep={activeState}/>
             )
             break;
            case 1 : 
             return (
                < BasicTextFields placeholder={step2} activeStep={activeState}/>
             )
             break;
             case 2:
               return (
                  <BasicCard />
               )
               case 3:
                  return(
                     <LaunchPage />
                  )    
             }
            }


    return (
        <div >
           <Stepper activeStep={activeState} alternativeLabel>
                 <Step>
                    <StepLabel></StepLabel>
                 </Step>
                 <Step>
                    <StepLabel></StepLabel>
                 </Step>
                 <Step>
                    <StepLabel></StepLabel>
                 </Step>
                 <Step>
                    <StepLabel></StepLabel>
                 </Step>  
           </Stepper>
           {
             getStepContent(activeState)
           }
            
          <div className='Stepper_button_content'>
           <Button className='stepper_button' variant="contained" color="primary" onClick={handleNext}>{activeState === 3 ? 'Launch Workspace' : 'Create Workspace'}</Button>
           </div>
        </div>
    );
}

export default StepperForm;