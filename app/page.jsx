import HomeSlider from '@/components/HomeSlider';
import Image from 'next/image';

import baarImg from '@/public/images/pages/homepage/baarbaar-home-food.jpg';
import baarDrinksImg from '@/public/images/pages/homepage/baarbaar-home-drinks.jpg';
import baarChefImg from '@/public/images/pages/homepage/BaarBaar-chef-2.jpg';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <HomeSlider />

            <section className='bg-accent h-full flex flex-col md:flex-row md:justify-center items-center px-5 py-7 gap-4'>
                <div className='text-white text-sm flex flex-col gap-4 w-3/4'>
                    <h1 className='text-xl font-semibold text-center md:text-left'>
                        Baar Baar Delivery and Pick Up
                    </h1>
                    <p className='text-center md:text-left'>
                        Baar Baar&apos;s Take Out menu is now available for
                        delivery through ChowNow and other Delivery platforms.
                    </p>
                    <p className='text-center md:text-left'>
                        Tuesday to Sunday - Dinner: 4:30pm to 10pm.
                    </p>
                    <p className='text-center md:text-left'>
                        For Pick up: email: delivery@baarbaarnyc.com or call
                        212.228.1200
                    </p>
                </div>

                <div className='flex justify-center'>
                    <button className='text-md font-semibold text-white border-2 border-white px-3 py-0.5 w-fit rounded-sm hover:bg-accent transition-colors duration-200 ease-in'>
                        Order Online
                    </button>
                </div>
            </section>

            <section className='grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full md:min-h-[80vh] bg-[url("/images/pages/homepage/baarBg.jpg")] bg-cover bg-center'>
                <div className='px-5 py-7 flex flex-col gap-5 justify-center items-center md:w-2/3 mx-auto text-center'>
                    <h1 className='text-2xl font-semibold text-teal-500'>
                        OUR CUISINE
                    </h1>
                    <p>
                        A celebration of regional Indian flavors brought to life
                        using fresh local produce, our progressive menu gives a
                        nod to the past while looking straight into the future.
                    </p>
                    <button className='text-md font-semibold text-accent border-2 border-accent px-3 py-0.5 rounded-sm hover:bg-accent hover:text-white transition-colors duration-200 ease-in w-fit'>
                        View Our Food
                    </button>
                </div>
                <div className='h-full w-full min-h-[80vh] flex'>
                    <Image
                        src={baarImg}
                        alt='Cuisine Img'
                        className='h-full w-full object-cover'
                    />
                </div>
            </section>

            <section className='grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full md:min-h-[80vh] bg-[url("/images/pages/homepage/baarBg.jpg")] bg-cover bg-center'>
                <div className='px-5 py-7 flex flex-col gap-5 justify-center items-center md:w-2/3 mx-auto text-center md:order-2'>
                    <h1 className='text-2xl font-semibold text-teal-500'>
                        OUR COCKTAILS
                    </h1>
                    <p>
                        An ancient elixir, a forgotten ingredient, a curious
                        spirit — the bar at Baar Baar turns convention upside
                        down by giving every drink its own stage.
                    </p>
                    <button className='text-md font-semibold text-accent border-2 border-accent px-3 py-0.5 rounded-sm hover:bg-accent hover:text-white transition-colors duration-200 ease-in w-fit'>
                        View Our Drinks
                    </button>
                </div>
                <div className='h-full w-full min-h-[80vh] flex'>
                    <Image
                        src={baarDrinksImg}
                        alt='Cocktails Img'
                        className='h-full w-full object-cover'
                    />
                </div>
            </section>

            <section className='grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full md:min-h-[80vh] bg-[url("/images/pages/homepage/baarBg.jpg")] bg-cover bg-center'>
                <div className='px-5 py-7 flex flex-col gap-5 justify-center items-center md:w-2/3 mx-auto text-center'>
                    <h1 className='text-2xl font-semibold text-teal-500'>
                        ABOUT BAAR BAAR
                    </h1>
                    <p>
                        Sarkar’s contemporary approach to authentic Indian
                        dishes in a vibrant, colorful setting inspired by the
                        culture, art, and spirit of his home country.
                    </p>
                    <button className='text-md font-semibold text-accent border-2 border-accent px-3 py-0.5 rounded-sm hover:bg-accent hover:text-white transition-colors duration-200 ease-in w-fit'>
                        Learn More
                    </button>
                </div>
                <div className='h-full w-full min-h-[80vh] flex'>
                    <Image
                        src={baarChefImg}
                        alt='Chef Img'
                        className='h-full w-full object-cover'
                    />
                </div>
            </section>
        </main>
    );
}
