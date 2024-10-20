"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Turtle(props) {
    const { nodes, materials } = useGLTF("/models/turtle.glb");

    const modelRef = useRef();

    useFrame((state, delta, xrFrame) => {
        modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
    });

    return (
        <group
            {...props}
            dispose={null}
            ref={modelRef}
            position={[0.1, 0.1, 1]}
            scale={[0.05, 0.05, 0.05]}
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
