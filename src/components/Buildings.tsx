/* eslint-disable */
import * as THREE from "three";
import {  useState } from "react";

function Buildings( props:{position:THREE.Vector3}) {
    
    
    
    const height = 10
    const width = 12
    const windows = []
    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
      }
    for (let i=0; i<height-1; i++){
        for (let j=0; j<width-1; j++){
            if (getRandomInt(3) == 0){
                windows.push([i,j])
            }
        }
    }
    
    const [windows_, _] = useState(windows)

    return (
        <>
        <group position={props.position}>
        <mesh position={[0,0,0]}>
            <planeGeometry args={[height,width]}></planeGeometry>
            <meshStandardMaterial color={"black"}></meshStandardMaterial>
        </mesh>
        {windows_.map( ([i,j]) => (
            <mesh position={[height/2-i-1,width/2-j-1,0]}>
            <planeGeometry args={[0.5,0.5]}> </planeGeometry>
            <meshPhongMaterial color={"#FFC000"} side={THREE.DoubleSide} emissive={"yellow"}></meshPhongMaterial>
            </mesh>
            
            ))}

        </group>
        </>
    )
}

export {Buildings}