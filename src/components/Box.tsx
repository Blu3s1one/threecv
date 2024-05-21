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
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import { useDrag } from "@use-gesture/react";
import { instance, range, rotate } from "three/examples/jsm/nodes/Nodes.js";

  

function Box(){
    const mesh = useRef<THREE.Mesh>(null!);
    const [clicked, click] = useState(false);
    const [
        mousePosition,
        setMousePosition
      ] = React.useState({ x: -1, y: -1 });


    function rotate(event:any){
        if (clicked){
            if (mousePosition.x==-1 || mousePosition.y == -1){
                setMousePosition({ x: event.clientX, y: event.clientY })
            }
            else{
                let x_diff: number = (mousePosition.x - event.clientX)/100
                let y_diff: number = (mousePosition.y - event.clientY)/100
                mesh.current.position.x = (mesh.current.position.x - x_diff)
                mesh.current.position.y = (mesh.current.position.y + y_diff)
                setMousePosition( { x: event.clientX, y: event.clientY })
                
            }
            }
    }

    function leave(){
        if (clicked){
            click(clicked)
        }
    }
    

    




    return(
        <mesh 
        position={[-1.1981211999999999,0,-5]}
        ref={mesh}
        onPointerDown={(event) => click(!clicked)}
        onPointerUp={(event) => click(!clicked)}
        onPointerMove={(event) => rotate(event)}
        onPointerLeave={(event) => leave()}>
            <boxGeometry args={[1,2,3]}></boxGeometry>
            <meshStandardMaterial color={"blue"}></meshStandardMaterial>
        </mesh>
        )    
}

export {Box}