"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";
import { sRGBEncoding } from "three";

const RenderModel = ({ children, className }) => {
    return (
        <Canvas
            shadows
            className={clsx("w-screen h-screen relative -z-10", className)}
            gl={{ outputEncoding: sRGBEncoding }}
        >
            <Suspense fallback={null}>
                {children}
                <ambientLight intensity={1} />
                <directionalLight
                    position={[10, 10, 10]}
                    intensity={0.5}
                    castShadow
                />
            </Suspense>
            <Environment preset='dawn' />
        </Canvas>
    );
};

export default RenderModel;
