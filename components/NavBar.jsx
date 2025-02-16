"use client";

import { NavLinks1, NavLinks2 } from "@/data/nav.data";
import Image from "next/image";
import Logo from "@/public/images/logo/logo.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined") {
                setIsScrolled(window.scrollY > 90);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-300 ${isScrolled ? "bg-black opacity-90" : "bg-black opacity-70"} p-3 flex justify-center items-center gap-10`}>
            <NavLinkGenerator navLink={NavLinks1} />
            <Image
                src={Logo}
                alt="Logo"
                className="max-w-28 cursor-pointer"
                onClick={() => router.push("/")}
            />
            <NavLinkGenerator navLink={NavLinks2} />
            <button className="absolute right-5 top-1/2 -translate-y-1/2 text-white border-2 border-accent px-3 py-0.5 rounded-sm hover:bg-accent transition-colors duration-200 ease-in">
                RESERVATIONS
            </button>
        </nav>
    );
};

export default NavBar;

const NavLinkGenerator = ({ navLink }) => {
    return (
        <ul className="flex gap-10 text-white">
            {navLink.map((link) => (
                <li key={link.path} className="hover:text-accent transition-colors duration-200">
                    <Link href={link.path}>{link.name.toUpperCase()}</Link>
                </li>
            ))}
        </ul>
    );
};