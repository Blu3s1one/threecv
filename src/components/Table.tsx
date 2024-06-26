/* eslint-disable */
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import WoodTexture from "../assets/wood.jpg"

function Table() {
    const [woodMap] = useLoader(TextureLoader, [
        WoodTexture
      ]);

    return (
        <>
        <mesh position={[0,-3,0]}>
            <boxGeometry args={[20,1,7]}></boxGeometry>
            <meshStandardMaterial map={woodMap}></meshStandardMaterial>
        </mesh>
        </>
    )
}

export {Table}