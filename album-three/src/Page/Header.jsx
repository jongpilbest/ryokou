
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import apple from '../assets/apple.svg'
import React from 'react'
const Header= function(){
  return(
     <div 
 className='main__div'>
          
            <div className='main_header'>
             <div className='name'>
              <p className='name_title'>ryokuoushokushakai</p>
             </div>
             <div className='header_main'>
               {
                ['About','Live','Discography','Video','News'].map((El,index)=>{
                  return <p 
                  key={index}
                  className='inner'>{El}</p> 
                })
               }
             </div>
             <div className='canvas_div'>
              <div style={{
                width:'30%',
                height:'80%'
                ,display:'flex',
                backgroundColor:'#90A3E2',
                borderRadius:'60px',
                alignItems:'center',
                
             
              }}>

            
                {
                  [twitter,instagram,apple,youtube].map((el,index)=>{
                    return <div
                    
                    key={index}
                    className='circle'>
                      <img 
                      className='img_'
                      src={el}></img>
                    </div>
                  })
                }
              </div>
              </div>
               
            </div>
            </div>
  )
}

export default Header
