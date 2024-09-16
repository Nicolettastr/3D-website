"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Turtle(props) {
    const { nodes, materials } = useGLTF("/models/turtle.glb");

    return (
        <group
            {...props}
            dispose={null}
            position={[0, 0.3, 1]}
            scale={[0.06, 0.06, 0.06]}
            rotation={[0.25, 3, 0]}
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_3.geometry}
                material={materials.defaultMat_1}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_5.geometry}
                material={materials.defaultMat_0}
                rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.defaultMat}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload("/models/turtle.glb");
