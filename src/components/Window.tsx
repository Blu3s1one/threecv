/* eslint-disable */


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