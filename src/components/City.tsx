/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei"
import { Description, Tag} from "./Globe";


function City(props: {position:THREE.Vector3, name:string, tag:Tag, description:Array<Description>, selectedEarth:boolean}) {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Mesh>(null!);
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    function getClass(tag:Tag){
      if (tag==0){
        return "studies"
      }
      if (tag==1){
        return "tourism"
      }
      if (tag==2){
        return "job"
      }
    }

    function close(){
      if (clicked){
        click(!clicked)
      }
    }

    
 

    return (
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1 : 0.5}
        onClick={(event) => click(!clicked)}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
        onPointerMissed={ (event) => close()}
      >
        <sphereGeometry args={[0.01, 32, 32]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        { (clicked) && 
        <Html>
        
         <div className={getClass(props.tag)}>
            <h1 className="title">{props.name}</h1>
          {props.description.map( (description:Description) => (
            <div>
            <h2>{description.title}</h2>
            <p>{description.text}</p>
            </div>
           ) )}
         </div>
        </Html>
        }
      </mesh>
    );
  }

export {City}