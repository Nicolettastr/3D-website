"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import bg from "../../public/background/background.jpg";
import mbg from "../../public/background/mobileBackground.jpeg";
import RenderModel from "./components/RenderModel";
import Turtle from "./components/models/Turtle";
import styles from "./styles/constant.module.css";

export default function Home() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <main className='flex min-h-screen flex-col items-center justify-between relative'>
            <Image
                src={windowWidth <= 800 ? mbg : bg}
                alt='background-image'
                fill
                className='w-full h-screen object-cover object-center opacity-80'
            />
            <div className={`w-full h-screen ${styles.blackBackground}`}>
                <RenderModel>
                    <Turtle />
                </RenderModel>
            </div>
        </main>
    );
}
