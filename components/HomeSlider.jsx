"use client";

import { SliderImages } from "@/data/slider.data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HomeSlider = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const sliderPerPage = 1;

    const totalPages = Math.ceil(SliderImages.length / sliderPerPage);

    const nextSlide = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    useEffect(() => {
        const autoSlideTimer = setTimeout(() => {
            nextSlide();
        }, 5000);

        return () => clearTimeout(autoSlideTimer);
    }, [currentPage]);

    return (
        <main>
            <div className="relative">
                <AnimatePresence>
                    {SliderImages.slice(currentPage, currentPage + sliderPerPage).map((img, index) => (
                        <motion.div
                            key={img.image + currentPage}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 1, x: -100 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                            <Image src={img.image} alt={img.name} />
                        </motion.div>
                    ))}
                </AnimatePresence>

                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white"
                >
                    <ArrowLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white"
                >
                    <ArrowRight />
                </button>
            </div>
        </main>
    );
};

export default HomeSlider;