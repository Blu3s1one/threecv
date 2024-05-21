/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import CvTextureHD from "../assets/CVPGFR.png"
import { ScrollControls, useScroll } from "@react-three/drei";
import { Scroll } from "@react-three/drei";

function CV() {
    const [clicked, click] = useState(true);   
    return (
        !clicked?
        <mesh onPointerMissed={(event) => click(!clicked)}>
            <CVZoom></CVZoom>
        </mesh>
        
        :
        <mesh onClick={(event) => click(!clicked)}>
            <CVTable></CVTable>
        </mesh>
        
            
)}


function CVTable(){
    const [cvHdMap] = useLoader(TextureLoader, [CvTextureHD])
    const group = useRef<THREE.Group>(null)
    const [hovered, hover] = useState(false);
    return (
        <group ref={group}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
            <mesh position = {[0,-2.5,0]}>
                <boxGeometry args={[1.4,0.01,2]}></boxGeometry>
                <meshStandardMaterial map={cvHdMap} ></meshStandardMaterial>
            </mesh>
            <mesh position = {[0,-2.5,0]}>
                <boxGeometry args={[1.41,0.02,2.01]}></boxGeometry>
                <meshPhongMaterial color={"white"} emissive={"white"} transparent={true} opacity={hovered?0.1:0} ></meshPhongMaterial>
            </mesh>
        </group>
    )
}


function CVZoom(){
    const [cvHdMap] = useLoader(TextureLoader, [CvTextureHD])

    const mesh = useRef<THREE.Mesh>(null!)

    var scrollAmount= 0
    document.addEventListener('wheel', (event) => {
        const DIVIDE_AMOUNT = 100;
        scrollAmount += event.deltaY / DIVIDE_AMOUNT;
        if (scrollAmount>1){
            scrollAmount=1
        } 
        if (scrollAmount<-1){
            scrollAmount = -1
        }
    });

    useFrame((state, delta) => (mesh.current.position.y = 0 + scrollAmount))
    
    return (
    <mesh ref = {mesh} position={[0,0,4.2]}>
            <planeGeometry args={[1.4,2]}></planeGeometry>
            <meshStandardMaterial map={cvHdMap}></meshStandardMaterial>
    </mesh>
        )
}

export {CV}