"use client";
import React from "react";
import { BtnList } from "../../data";

const Navigation = () => {
    console.log(BtnList);

    const angleIncrement = 360 / BtnList.length;

    return (
        <div className='w-full flex items-center justify-center fixed h-screen'>
            <div className='w-max flex items-center justify-between relative'>
                {BtnList.map((btn, index) => {
                    const angleRad = (index * angleIncrement * Math.PI) / 180;
                    const radius = "calc(30vw - 1rem)";
                    const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                    const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                    return (
                        <button
                            className='button absolute'
                            style={{
                                transform: `translate(${x}, ${y})`,
                            }}
                            key={btn.label}
                        >
                            {btn.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;
