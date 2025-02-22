'use client';

import { SliderImages } from '@/data/slider.data';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';

const HomeSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const sliderPerPage = 1;

    const totalPages = Math.ceil(SliderImages.length / sliderPerPage);

    const nextSlide = useCallback(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    }, [totalPages]);

    const prevSlide = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    useEffect(() => {
        const autoSlideTimer = setTimeout(() => {
            nextSlide();
        }, 5000);

        return () => clearTimeout(autoSlideTimer);
    }, [currentPage, nextSlide]);

    return (
        <div className='relative min-h-screen'>
            {SliderImages.slice(currentPage, currentPage + sliderPerPage).map(
                (img, index) => (
                    <Image
                        src={img.image}
                        alt={img.name}
                        key={index}
                        className='w-full h-full absolute inset-0 object-cover'
                    />
                ),
            )}
            <button
                onClick={prevSlide}
                className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white'
            >
                <ArrowLeft />
            </button>
            <button
                onClick={nextSlide}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white'
            >
                <ArrowRight />
            </button>
        </div>
    );
};

export default HomeSlider;
