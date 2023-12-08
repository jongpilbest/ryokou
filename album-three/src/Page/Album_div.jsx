import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import apple from '../assets/apple.svg'
import { change_name,change_visible } from '../storeSlice';
import React from 'react';
import right from '../assets/right.svg'
import { useSelector, useDispatch } from 'react-redux'
const Album_div= function({list_name}){
  const dispatch = useDispatch()
  const img_click=function(key){
    if(key==0){
      return window.open ('https://open.spotify.com/artist/4SJ7qRgJYNXB9Yttzs4aSa?si=UTvjsZKMSy2sDvll6ve_ig&nd=1&dlsi=05dfb716b5de476e')
    }
   if(key==1){
  
    return window.open( list_name.youtube)
   }
  }


  return(

    <div className='inner__color'>
    <div  >
    

   
         <img 
         onClick={()=>   dispatch(change_visible())}
           style={{
            width:'2vw',
            position:'absolute',
            top:'10%'
    
           }}
          src={right}></img>
      
      </div>
      <div style={{
       width:'50vw'
      }}>          
         <p className='inner_name'>
      {
        list_name.name
      }
      </p>
     
      <p className='inner_date'>
      {
        list_name.date+' release'
      }
       
      </p>
  <div style={{
    position:'absolute',
    bottom:'4%',
    width:'15%',
    right:'40%'

  }}>
  <div style={{
    width:'50%',
    height:'4vh'
    ,display:'flex',
    backgroundColor:'#90A3E2',
    borderRadius:'60px',
    alignItems:'center'
 
  }}>


    {
      [apple,youtube].map((el,index)=>{
        return <div
        onClick={

          ()=> img_click(index)
        }
        key={index}
        className='circle'>
          <img 
          
          style={{
          
            height:'60%'
          }}
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

export default Album_div