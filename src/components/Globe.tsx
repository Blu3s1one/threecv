/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { City } from "./City.tsx"
import { Earth } from "./Earth.tsx";
import * as data from "../data/cities.json"
import { useGesture} from "@use-gesture/react";
import { useSpring, a } from "@react-spring/three";


enum Tag{
  Studies,
  Tourism,
  Job
}

interface City {
    name:string;
    lat: number;
    long: number;
    tag:Tag;
    description:Array<Description>;
    cartesian?: Array<number>;
    }

interface Description {
  title: string;
  text:string;
}


const cities = data.cities;

const radius = 1

function sphericalToCartesian(lat: number, long: number) {
    let phi = ((90 - lat) * Math.PI) / 180;
    let teta = ((180 + long) * Math.PI) / 180;
    let x =  - radius * Math.sin(phi) * Math.cos(teta);
    let z =  radius * Math.sin(phi) * Math.sin(teta);
    let y =  radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

function Globe() {
    // This reference will give us direct access to the THREE.Mesh object
    const ref = useRef<THREE.Group>(null!);
    const [clicked, click] = useState(false);
    const [small, view] = useState(true)
    const [hovered, hover] = useState(false);
    const speed = (hovered||clicked||!small) ? 0 : 0.01;

    const [scrollPosition, setScrollPosition] = useState(3)


    const [
      mousePosition,
      setMousePosition
    ] = React.useState({ x: -1, y: -1 });


  function rotate(event:any){
      if (clicked&&!small){
          if (mousePosition.x==-1 || mousePosition.y == -1){
              setMousePosition({ x: event.clientX, y: event.clientY })
          }
          else{
              let x_diff: number = (mousePosition.x - event.clientX)/1000
              let y_diff: number = (mousePosition.y - event.clientY)/1000
              ref.current.rotation.x = (ref.current.rotation.x - y_diff)
              ref.current.rotation.y = (ref.current.rotation.y - x_diff)
              setMousePosition( { x: event.clientX, y: event.clientY })
              
          }
          }
  }

  function leave(){
      if (clicked&&!small){
          click(!clicked)
      }
  }

  function rotationController(event:any){
    setMousePosition({ x: event.clientX, y: event.clientY } )
    if (!small){
      click(!clicked)
    }
  }

  document.addEventListener('wheel', (event) => {
    const DIVIDE_AMOUNT = 1000;
    let newScrollAmount = scrollPosition -  event.deltaY / DIVIDE_AMOUNT;
    if (newScrollAmount<3.7 && newScrollAmount>2.8){
        setScrollPosition(newScrollAmount)
    }});

  useFrame((state, delta) => 
    {ref.current.rotation.y += speed})
      
  return (
    <group 
    position={small? [-4,-1,0]:[0,0,scrollPosition]}
    ref={ref}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}
    onClick={ (event) => {
        if (small){
          view(!small)
        }
    }}
    onPointerMissed={ (event) => {
      if (!small){
        view(!small)
      }
      }}
    onPointerDown={(event) => rotationController(event)}
    onPointerUp={(event) => rotationController(event)}
    onPointerMove={(event) => rotate(event)}
    onPointerLeave={(event) => leave()}>
      <Earth clicked={small} />
      {cities.map((city) => (
        !small && <City position={sphericalToCartesian(city.lat, city.long)} name={city.name} tag={city.tag} description={city.description} selectedEarth={clicked} />
      ))}
    </group>
      

        
      
    );
  }

export {Globe}
export type {Description, Tag}