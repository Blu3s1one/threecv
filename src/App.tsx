/* eslint-disable */
import * as THREE from "three";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Globe } from "./components/Globe";
import { Table } from "./components/Table";
import { Wall } from "./components/Wall";
import { Stars } from "@react-three/drei";
import { Buildings } from "./components/Buildings";
import { Window } from "./components/Window";
import { CV } from "./components/CV";
import { Lights } from "./components/Lights";
import { Button } from "./components/Button";

export default function App() {
  const [lightOn, click] = useState(false);

  const b1 = new THREE.Vector3(-12,-1,-5)
  const b2 = new THREE.Vector3(-5,-2,-10)
  const b3 = new THREE.Vector3(2,0,-7)
  const b4 = new THREE.Vector3(8,-4,-5)
  const buildings = [b1,b2,b3,b4]
  

  return (
    <Canvas fallback={null}>
      <Lights lightOn={lightOn}></Lights>
      <Globe ></Globe>
      <Table></Table>
      <Wall></Wall>
      <Stars radius={300} depth={60} count={20000} factor={7}  saturation={0} fade={true}></Stars>
      {
        buildings.map( (b) => 
          <Buildings position={b}></Buildings>
        )
      }
      <Window lightOn={!lightOn}></Window> 
      <CV></CV>
      <Button switchLight={click}></Button>
     
      
    </Canvas>    
  );
}
