import {
    Folder,
    Github,
    Home,
    Linkedin,
    BookUser,
    Phone,
    User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const getIcon = (icon) => {
    switch (icon) {
        case "home":
            return <Home className='w-full h-auto' strokeWidth={1.5} />;

        case "about":
            return <User className='w-full h-auto' strokeWidth={1.5} />;

        case "projects":
            return <Folder className='w-full h-auto' strokeWidth={1.5} />;

        case "contact":
            return <Phone className='w-full h-auto' strokeWidth={1.5} />;

        case "github":
            return <Github className='w-full h-auto' strokeWidth={1.5} />;

        case "linkedin":
            return <Linkedin className='w-full h-auto' strokeWidth={1.5} />;

        case "resume":
            return <BookUser className='w-full h-auto' strokeWidth={1.5} />;

        default:
            return <Home className='w-full h-auto' strokeWidth={1.5} />;
    }
};

const NavBtn = ({ x, y, label, link, icon, newTab, isPaused, setIsPaused }) => {
    return (
        <div
            style={{ transform: `translate(${x}, ${y})` }}
            className='absolute cursor-pointer z-50 button'
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <Link
                className='text-foreground group rounded-full items-center 
                flex justify-center bg-background/20 border border-accent/30 
                border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm'
                href={link}
                target={newTab ? "_blank" : "_self"}
                aria-label={label}
                name={label}
            >
                <span
                    className={`relative peer w-14 h-14 p-4 animate-spin-slow-reverse hover:text-accent ${
                        isPaused ? "pause" : ""
                    }`}
                >
                    {getIcon(icon)}
                </span>

                <span className='absolute hidden '>{label}</span>
            </Link>
        </div>
    );
};

export default NavBtn;
