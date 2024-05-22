/* eslint-disable */
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import WallTexture from "../assets/white-wall-textures.jpg"

function Wall() {
    const [wallMap] = useLoader(TextureLoader, [WallTexture])
    return (
        <>
        <mesh position={[-20,-9,-4]}>
            <boxGeometry args={[20,18,1]}></boxGeometry>
            <meshStandardMaterial map={wallMap}>
            </meshStandardMaterial>
        </mesh>
        <mesh position={[-20,9,-4]}>
            <boxGeometry args={[20,18,1]}></boxGeometry>
            <meshStandardMaterial map={wallMap}>
            </meshStandardMaterial>
        </mesh>
        <mesh position={[0,-10,-4]}>
            <boxGeometry args={[20,18,1]}></boxGeometry>
            <meshStandardMaterial map={wallMap}>
            </meshStandardMaterial>
        </mesh>
        <mesh position={[0,20,-4]}>
            <boxGeometry args={[20,18,1]}></boxGeometry>
            <meshStandardMaterial map={wallMap}>
            </meshStandardMaterial>
        </mesh>
        <mesh position={[20,-9,-4]}>
            <boxGeometry args={[20,18,1]}></boxGeometry>
            <meshStandardMaterial map={wallMap}>
            </meshStandardMaterial>
        </mesh>
        <mesh position={[20,9,-4]}>
            <boxGeometry args={[20,18,1]}></boxGeometry>
            <meshStandardMaterial map={wallMap}>
            </meshStandardMaterial>
        </mesh>
        </>
    )
}

export {Wall}