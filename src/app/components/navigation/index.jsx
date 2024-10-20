"use client";
import React, { useState, useEffect } from "react";
import { BtnList } from "../../data";
import NavBtn from "./NavBtn";

const Navigation = () => {
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowsWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const angleIncrement = 360 / BtnList.length;

    return (
        <div className='w-full flex items-center justify-center fixed h-screen'>
            <div className='w-max flex items-center justify-center relative animate-spin-slow hover:pause'>
                {BtnList.map((btn, index) => {
                    const angleRad = (index * angleIncrement * Math.PI) / 180;
                    const radius =
                        windowsWidth > "1300"
                            ? "calc(20vw - 1rem)"
                            : "calc(30vw - 1rem)";
                    const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                    const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                    return (
                        <NavBtn
                            key={btn.label}
                            x={x}
                            y={y}
                            {...btn}
                            isPaused={isPaused}
                            setIsPaused={setIsPaused}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;
