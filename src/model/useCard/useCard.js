import  React , {useState} from 'react';
import {Box,Card,CardActions,CardContent,Button,Typography} from '@material-ui/core';
import {Person , People} from '@material-ui/icons';
import './useCard.scss'


export default function BasicCard() {


    const data=[{id:1 , icon : <Person/> , header: 'For Myself' , description : ' Write Better. Think more clearly.Stay organised'},
                {id:2 , icon : <People/> , header: 'For Team' , description : 'Wikis, docs, tasks & projects, all in one place'}
               ]

     const [selectedId, setSelectedId] = useState(10)

  return (
    <>
    <div className='header_content'>
        <span className='header_h3'>How are you planning to use Eden?</span>
        <span className='header_span'>we'll stream your setup accordingly</span>
    </div>
    <div className='card_content'>
        {data.map((card) => {
            return (
                <Card key={card.id} onClick={() => setSelectedId(card.id)} className={selectedId && selectedId !== card.id ? null : 'bg-change'} style={{margin: '0 20px', height: '160px', width:'160px'}}>
                <CardContent>
                  <Typography  color="text.secondary" gutterBottom>
                   {card.icon}
                  </Typography>
                  <Typography style={{fontSize: '15px', fontWeight: '600'}} color="text.secondary" >
                    {card.header}
                  </Typography>
                  <Typography style={{fontSize: '12px', fontWeight: '400' ,color:'rgb(176, 180, 170)'}} color="text.secondary" >
                    {card.description}
                  </Typography>  
                </CardContent>
              </Card> 
            )
        })}

    </div>
    </>
  );
}
