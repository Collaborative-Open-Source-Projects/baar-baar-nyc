import React from 'react';
import Image from 'next/image';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
    return (

        <footer className='bg-cover bg-center bg-no-repeat flex flex-col md:flex-row justify-center text-left gap-16 p-16 font-poppins' style={{ backgroundImage: 'url("/images/footerTexture.jpg")' }}>

            <div className='w-36'>
                <Image src='/images/FooterLogo.png' alt='Logo' width={144} height={144} />
                <p className='text-sm text-gray-300 mt-2'>&copy; 2025 Baar Baar Site by PSD</p>
            </div>

            <div>
                <h3 className='text-lg text-white font-semibold'>Dining Hours</h3>
                <h1 className='text-base text-gray-300'>Dinner</h1>
                <p className='text-sm text-gray-400'>Tuesday to Thursday: 5:00pm to 11:00pm</p>
                <p className='text-sm text-gray-400'>Friday: 5:00pm to 12:00am</p>
                <p className='text-sm text-gray-400'>Saturday: 5:30pm to 12:00am</p>
                <p className='text-sm text-gray-400'>Sunday: 5:00pm to 10:30pm</p>
                <h2 className='text-lg text-white mt-2'>Brunch</h2>
                <p className='text-sm text-gray-400'>Saturday & Sunday: 11:30am to 4:00pm</p>
                <p className='text-sm text-gray-400'>(Kitchen closes ONE hour before closing time)</p>

                <div className='mt-4'>
                    <h3 className='text-lg text-white font-semibold'>Takeout & Delivery</h3>
                    <h1 className='text-base text-gray-300'>Dinner</h1>
                    <p className='text-sm text-gray-400'>Tuesday to Sunday: 5:00pm - 9:30pm</p>
                </div>
            </div>

            <div>
                <h2 className='text-lg text-white'>Location</h2>
                <p className='text-sm text-gray-400'>13 East 1st Street</p>
                <p className='text-sm text-gray-400'>New York, NY 10003</p>
                <h2 className='text-lg text-white mt-4'>Contact</h2>
                <p className='text-sm text-gray-400'><a href='mailto:info@baarbaarnyc.com' className='hover:underline'>info@baarbaarnyc.com</a></p>
                <p className='text-sm text-gray-400'><a href='tel:2122281200' className='hover:underline'>212.228.1200</a></p>
            </div>

            <div>
                <h3 className='text-lg text-white'>Follow Us</h3>
                <p className='text-sm text-gray-400'><a href='#' className='flex items-center space-x-2 hover:underline'><i className='fab fa-facebook-f'></i> <span>Facebook</span></a></p>
                <p className='text-sm text-gray-400'><a href='#' className='flex items-center space-x-2 hover:underline'><i className='fab fa-instagram'></i> <span>Instagram</span></a></p>
                <p className='text-sm text-gray-400'><a href='#' className='flex items-center space-x-2 hover:underline'><i className='fab fa-twitter'></i> <span>Twitter</span></a></p>
                <h1 className='text-base text-gray-300 mt-4'><a href='#' className='hover:underline'>Newsletter</a></h1>
            </div>
        </footer>
    );
}
