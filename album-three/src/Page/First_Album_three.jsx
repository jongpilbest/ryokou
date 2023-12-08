import * as THREE from 'three'
import { useFrame } from '@react-three/fiber';
import { useLoader,useThree } from '@react-three/fiber'
import { useState } from 'react';
//import { useFrame } from '@react-three/fiber';
import { OrbitControls, useScroll ,Bounds, Plane} from '@react-three/drei';
//import { PerspectiveCamera } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { change_name,change_visible } from '../storeSlice';
import React from 'react'
import { OrthographicCamera } from '@react-three/drei';
const Model= function({model,scale,position,index}){

const dispatch = useDispatch()
const ref=useRef(null)
  const [hovered, setHover] = useState(false);


  useFrame((state, delta) => {

     if(hovered){
      model.nodes.Circle.rotation.y+=0.05

     }
  }
  )
  return (<>

<primitive
ref={ref}
     onClick={()=> {
    dispatch(change_name(index+1))
    dispatch(change_visible())
    }}
    onPointerOver={(e) => setHover(true)}
    onPointerOut={(e) => setHover(false)}

 rotation-y={Math.PI}
  object={ model.scene } 
  scale={scale}
 position={position} >
 </primitive>
 </>
  )
  
}


const First_Album_three= function(){


  const scroll = useScroll()
const [hovered, setHovered] = useState(false);

const ref= useRef(null);

useFrame((state, delta) => {

 const r1= scroll.range(0,2/3);

 const r2= scroll.range(1/2,1/2);
   //console.log(r1)
   ref.current.position.x= -r1*60
   
   if(r1>0.5){
   // ref.current.position.x=0;
   }
}
)

const { width: w, height: h } = useThree((state) => state.viewport)

const model1=useLoader(GLTFLoader, '/new_3.glb')
const model7=useLoader(GLTFLoader, '/new_1.glb')
const model2=useLoader(GLTFLoader, '/cover4.glb')
const model3=useLoader(GLTFLoader, '/new_2.glb')

const model4=useLoader(GLTFLoader, '/new_6.glb')
const model5=useLoader(GLTFLoader, '/new_7.glb')
const model6=useLoader(GLTFLoader, '/new_5.glb')

  const total_model_array=[
    model1,model2,model3,model4,model5,model6,model7
  ]

  return(
     <>


<ambientLight
 intensity={3}
></ambientLight>

<group ref={ref}>
   

{ 
total_model_array.map((model_name,i)=>{
   
  return <Model
   
  key={i}
  index={i}
  scale={[w/17, h/8, 1]}
  model={model_name}
  position={[ (i-1)* w/2.7,-h/2.8, 0]}
/>
})

}



 
    </group>


</>
  )
}

export default First_Album_three;
