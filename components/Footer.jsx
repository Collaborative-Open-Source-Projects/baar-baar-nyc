import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer
        className='bg-center bg-no-repeat flex flex-col md:flex-row justify-center text-left gap-16 p-16 font-poppins'
        style={{
            backgroundImage: 'url("/images/footerTexture.jpg")',
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100% 20%' // Makes the background repeat exactly twice
        }}
    >
            <div className='w-36'>
                <Image
                    src='/images/FooterLogo.png'
                    alt='Logo'
                    width={144}
                    height={144}
                />
                <p className='text-sm text-[#DDDDDD] mt-2'>&copy; 2025 Baar Baar Site by PSD</p>
            </div>

            <div>
                <h3 className='text-lg text-white font-semibold'>Dining Hours</h3>
                <h1 className='text-base text-[#DDDDDD]'>Dinner</h1>
                <p className='text-sm text-[#DDDDDD]'>Tuesday to Thursday: 5:00pm to 11:00pm</p>
                <p className='text-sm text-[#DDDDDD]'>Friday: 5:00pm to 12:00am</p>
                <p className='text-sm text-[#DDDDDD]'>Saturday: 5:30pm to 12:00am</p>
                <p className='text-sm text-[#DDDDDD]'>Sunday: 5:00pm to 10:30pm</p>

                <h2 className='text-lg text-white mt-2'>Brunch</h2>
                <p className='text-sm text-[#DDDDDD]'>Saturday & Sunday: 11:30am to 4:00pm</p>
                <p className='text-sm text-[#DDDDDD]'>(Kitchen closes ONE hour before closing time)</p>

                <div className='mt-4'>
                    <h3 className='text-lg text-white font-semibold'>Takeout & Delivery</h3>
                    <h1 className='text-base text-[#DDDDDD]'>Dinner</h1>
                    <p className='text-sm text-[#DDDDDD]'>Tuesday to Sunday: 5:00pm - 9:30pm</p>
                </div>
            </div>

            <div>
                <h2 className='text-lg text-white'>Location</h2>
                <p className='text-sm text-[#DDDDDD]'>13 East 1st Street</p>
                <p className='text-sm text-[#DDDDDD]'>New York, NY 10003</p>

                <h2 className='text-lg text-white mt-4'>Contact</h2>
                <p className='text-sm text-[#DDDDDD]'>
                    <a
                        href='mailto:info@baarbaarnyc.com'
                        className='hover:underline hover:text-white'
                    >
                        info@baarbaarnyc.com
                    </a>
                </p>
                <p className='text-sm text-[#DDDDDD]'>
                    <a href='tel:2122281200' className='hover:underline hover:text-white'>
                        212.228.1200
                    </a>
                </p>
            </div>

            <div>
                <h3 className='text-lg text-white'>Follow Us</h3>
                <div className='flex flex-col gap-4 mt-2'>
                    <a href='#' className='flex items-center gap-4 hover:underline hover:text-white'>
                        <FontAwesomeIcon icon={faFacebookF} className='w-5 h-5 text-white' />
                        <span className='text-white'>Facebook</span>
                    </a>
                    <a href='#' className='flex items-center gap-4 hover:underline hover:text-white'>
                        <FontAwesomeIcon icon={faInstagram} className='w-5 h-5 text-white' />
                        <span className='text-white'>Instagram</span>
                    </a>
                    <a href='#' className='flex items-center gap-4 hover:underline hover:text-white'>
                        <FontAwesomeIcon icon={faTwitter} className='w-5 h-5 text-white' />
                        <span className='text-white'>Twitter</span>
                    </a>
                </div>
                <h1 className='text-base text-[#DDDDDD] mt-4'>
                    <a href='#' className='hover:underline hover:text-white'>Newsletter</a>
                </h1>
            </div>
        </footer>
    );
}
