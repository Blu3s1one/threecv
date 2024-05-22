import * as THREE from "three";
import * as React from "react";
import { useRef, useState } from "react";

type Props = {
    switchLight: React.Dispatch<React.SetStateAction<boolean>> ;
  };

function Button( {switchLight}:Props){
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(true);
    const group = useRef<THREE.Group>(null!);

    function rotate(clicked:boolean){
        if (!clicked){
            group.current.rotation.x=-0.1
        }
        if (clicked){
            group.current.rotation.x=0.1
        }
        click(!clicked)
        switchLight(clicked)
    }

    return (
        <group ref={group} position={[12,4,-3.5]}
        onClick={(_) => rotate(clicked)}
        onPointerOver={(_) => hover(true)}
        onPointerOut={(_) => hover(false)}
        rotation-x={-0.1}
        >
            <mesh>
                <boxGeometry args={[0.5,1,0.2]}></boxGeometry>
                <meshStandardMaterial color={"gray"}></meshStandardMaterial>
            </mesh>
            <mesh>
                <boxGeometry args={[0.51,1.01,0.21]}></boxGeometry>
                <meshPhongMaterial color={"white"} transparent={true} opacity={(hovered || !clicked)? 0.1 : 0} emissive={"white"}></meshPhongMaterial>
            </mesh>
        </group>
        
    )
}

export {Button}