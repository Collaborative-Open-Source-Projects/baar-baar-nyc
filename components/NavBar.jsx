'use client';

import { NavLinks1, NavLinks2 } from '@/data/nav.data';
import Image from 'next/image';
import Logo from '@/public/images/logo/logo.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const router = useRouter();
    const MobMenuItems = [...NavLinks1, ...NavLinks2];

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                setIsScrolled(window.scrollY > 90);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-black/90' : 'bg-black/30'} px-5 py-2 flex justify-between items-center transition-all duration-200 ease-in`}
        >
            <div className='hidden md:flex justify-center items-center gap-10 w-full'>
                <ul className='flex flex-col md:flex-row gap-5 md:gap-10 text-white text-sm'>
                    {NavLinks1.map((link) => (
                        <li
                            key={link.path}
                            className='hover:text-accent transition-colors duration-200'
                        >
                            <Link href={link.path}>
                                {link.name.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Image
                    src={Logo}
                    alt='Logo'
                    className='max-w-28 cursor-pointer'
                    onClick={() => router.push('/')}
                />
                <ul className='flex flex-col md:flex-row gap-5 md:gap-10 text-white text-sm'>
                    {NavLinks2.map((link) => (
                        <li
                            key={link.path}
                            className='hover:text-accent transition-colors duration-200'
                        >
                            <Link href={link.path}>
                                {link.name.toUpperCase()}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button className='absolute text-sm font-semibold right-10 top-1/2 -translate-y-1/2 text-white border-2 border-accent px-3 py-0.5 rounded-sm hover:bg-accent transition-colors duration-200 ease-in'>
                    RESERVATIONS
                </button>
            </div>
            <div className='md:hidden flex justify-between items-center w-full'>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='text-white p-2 z-30'
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <Image
                    src={Logo}
                    alt='Logo'
                    className='max-w-28 cursor-pointer'
                    onClick={() => router.push('/')}
                />
            </div>
            {isMenuOpen && (
                <div className='fixed inset-0 w-full bg-black/90 p-5 flex flex-col justify-center items-center text-white md:hidden gap-5'>
                    <ul className='flex flex-col md:flex-row gap-5 text-white text-center text-lg'>
                        {MobMenuItems.map((link) => (
                            <li
                                key={link.path}
                                className='hover:text-accent transition-colors duration-200'
                            >
                                <Link href={link.path}>
                                    {link.name.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className='text-lg font-semibold text-white border-2 border-accent px-3 py-0.5 rounded-sm hover:bg-accent transition-colors duration-200 ease-in'>
                        RESERVATIONS
                    </button>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
