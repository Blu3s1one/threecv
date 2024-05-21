/* eslint-disable */
import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";


function Window( props:{lightOn:boolean}){
    return (
        props.lightOn?
        <mesh position={[0,5,-4]}>
            <planeGeometry args={[20,12]} ></planeGeometry>
            <meshStandardMaterial color={"white"} transparent={true} opacity={0.2} ></meshStandardMaterial>
        </mesh>
        :
        <></>
    )
}

export {Window}