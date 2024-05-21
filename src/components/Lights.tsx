/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { City } from "./City.tsx"
import { Earth } from "./Earth.tsx";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper, PointLightHelper } from "three";

function Lights(props:{lightOn:boolean}){
    const directionalLightRef = useRef<THREE.DirectionalLight>(null!)
    useHelper(directionalLightRef, DirectionalLightHelper, 1, 'red')
    
    const pointLightRef = useRef<THREE.PointLight>(null!)
    useHelper(pointLightRef, PointLightHelper, 1, 'green')
    
    return (
        <>
        {!props.lightOn && <pointLight ref={pointLightRef} intensity={300} position={[0,5,6]} ></pointLight>}
        {props.lightOn && <directionalLight ref={directionalLightRef} intensity={0.5} position={[0,2,-3]} target-position={[0,-1,0]} ></directionalLight>}
        </>
    )

}


export {Lights}