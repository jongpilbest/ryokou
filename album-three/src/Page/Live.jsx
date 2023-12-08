
import React from "react";
import './About.css'
import Header from "./Header";
import profile from '../assets/profile.png'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'
import youtube from '../assets/youtube.svg'
import apple from '../assets/apple.svg'
const Live= function(){
  const live_list= [
 {
  img:'https://velog.velcdn.com/images/daum091409/post/886c65ee-0504-4014-ab31-3b461ea2d336/image.png',
  catergori:'TOUR',
  main_p:'Ryokushaka LIVE TOUR',
  main_p_2:' KEIKAKU 2023-2024',
  sub_date:'2023年12月15日 - 2024年1月14日'
 },
 {
  img:'https://velog.velcdn.com/images/daum091409/post/1821d870-28f6-43b5-b500-1d3e15a319db/image.png',
  catergori:'LIVE',
  main_p:'皿祭 -sarafes-',
  main_p_2:' TOKYO GARDEB THEATER',
  sub_date:'2023年11月12日'
 },
 {
  img:'https://velog.velcdn.com/images/daum091409/post/22621cae-0a25-4a6a-b7ec-04fb6fcb0c89/image.png',
  catergori:'LIVE',
  main_p:'Creepy Nuts',
  main_p_2:'  TWO MAN TOUR 「生業」 2023',
  sub_date:'2023年11月8日'
 }


  ]


  return(
    <div  className="main_div">
    <div 
  
    className='main__div'>
  
      <div className="img_center">
         <div className="img__center">
          <p className="img_p">LIVE</p>

          <div className="Live">
            {live_list.map((el,index)=>{
              return <div className=" Live_list">
              <div className="img_live">
                <div className="img">
                  <img 
                   className="fit_img"
                  src={el.img}>

                  </img>
                </div>
                <div className="img__div">
                  <div className="categori_div"> <p className="categori_p">{el.catergori}</p></div>
                 <div className="categori_under">
                      <p className="main_name">{el.main_p} </p>
                  <p className="main_name"> {el.main_p_2}</p>
                  <p className="date_p">{el.sub_date}</p>
                
                 </div>
                 
              
                </div>
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

export default Live;

