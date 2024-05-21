/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import EarthTexture from "./assets/earth.jpeg";
import EarthClouds from "./assets/8k_earth_clouds.jpeg";
import EarthNormal from "./assets/8081_earthbump10k.jpg";
import EarthSpecular from "./assets/8081_earthspec10k.jpg";
import { OrbitControls, useHelper, useScroll } from "@react-three/drei";
import { MeshPhongNodeMaterial, label } from "three/examples/jsm/nodes/Nodes.js";
import { CSS2DRenderer, ThreeMFLoader } from "three/examples/jsm/Addons.js";
import { Html } from "@react-three/drei"
import { Globe } from "./components/Globe";
import { Table } from "./components/Table";
import { Wall } from "./components/Wall";
import { Stars } from "@react-three/drei";
import { Buildings } from "./components/Buildings";
import { Window } from "./components/Window";
import { CV } from "./components/CV";
import { Lights } from "./components/Lights";
import { Scroll } from "@react-three/drei";
import { DirectionalLightHelper } from "three";
import { DirectionalLight } from "three";
import { Button } from "./components/Button";
import { Box } from "./components/Box";

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
