
import React from "react"
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import apple from '../assets/apple.svg'
import menu from '../assets/menu.svg'
import { forwardRef } from "react"
const Nav= forwardRef((props,ref)=>{
  //main_header_change ,header_hidden
   return <div 

   className="nav">
   <div 
   ref={ref} 
   className='main_header'>
    <div className='name'>

     <img 
     style={{
      height:'50%',
      width:'5%'
     }}
     src={menu}></img>


     </div>
 <div className='header_main'>
      <img className='name_title'
        src="https://i.namu.wiki/i/T8BMkCDkZaQsAH8nOfVfLySA-Bd_VtAoLgU6qSc1usmR9HzT1__oRTrRTQKhJOBFmlObcMkTUFSgoHoiTjhIMA.svg"
     >

         </img>
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
            onClick={()=>{
             if(index==0){
               window.open('https://twitter.com/ryokushaka')
             }
             else if( index==1){
               window.open('https://www.instagram.com/ryokushaka_official/')
             }
             else if (index==2){
              window.open('https://www.tiktok.com/@ryokushaka')
             }
             else{
              window.open('https://www.youtube.com/channel/UC_1GPhYlXI2ka2ji5gnqWFQ')

             }
             
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
  
})

export default Nav