
import React from "react";
import './About.css'

import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

const About= function(){
  const about_list=[
    {
      img:"https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_4.jpg"
      , name:'長屋 晴子',
      name_en:'Haruko Nagaya'

    },
    {
      img:"https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_1.jpg"
      , name:'小林 壱誓',
      name_en:'Issey Kobayashi'

    },
    {
      img:"https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_2.jpg"
      , name:'穴見 真吾',
      name_en:'Shingo Anami'

    },
    {
      img:"https://qjweb.jp/wp-content/uploads/2020/09/qjweb_ryokusyaka_10.jpg"
      , name:'神谷香奈',
      name_en:'Kamiya kanae'

    }


  ]
  return(
    <div  className="main_div">
         
    <div 

    className='main__div'>

   
      <div className="img_center">
         <div className="img__center">
          <p className="img_p">ABOUT</p>

          <div className="img__profile_div">
            {about_list.map((el,index)=>{
              return   <div 
              
              key={index}
              className="iner_img"> 

            
              <div className="img_div">
              <img
               className="fit_img"
              src={el.img}></img>
                 </div>
                 <p className="name">{el.name}</p>
                 <p className="name_en">{el.name_en}</p>
                 <div style={{
                  display:'flex',
                  height:'5%',
                  marginTop:'5%'
                  
                 }}> 
               
               <img 
               className='img_'
               src={twitter}></img>
                  <img 
               className='img_'
               src={instagram}></img>

                 </div>
              </div>
            })
           
            }
</div>
 
          </div>
  
     </div>
  
     </div>
     </div>
  )
}

export default About;

