/* eslint-disable */
import * as THREE from "three";
import { useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import EarthTexture from "../assets/earth.jpeg";
import EarthClouds from "../assets/8k_earth_clouds.jpeg";

const radius = 1

function Earth(props: {clicked:boolean}) {

    const [hovered, hover] = useState(true);   
    const mesh = useRef<THREE.Mesh>(null)

    const [earthMap, cloudsMap] = useLoader(TextureLoader, [
      EarthTexture,
      EarthClouds
    ]);
    return (
      <group>
        <mesh>
          <sphereGeometry args={[radius, 32, 32]} />
          <meshStandardMaterial map={earthMap}  />

        </mesh>
        <mesh >
          <sphereGeometry args={[radius + 0.005, 32, 32]} />
          <meshPhongMaterial
            map={cloudsMap}
            opacity={0.4}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh ref={mesh}
        onPointerOver={(_) => hover(true)}
        onPointerOut={(_) => hover(false)}>
          <sphereGeometry args={[radius + 0.015, 32, 32]} />
          <meshPhongMaterial
            color={"white"}
            transparent={true}
            opacity={(hovered && !props.clicked)? 0.1 : 0 }
            emissive={"white"}
            />
        </mesh>
      </group>
    );
  }

export {Earth}