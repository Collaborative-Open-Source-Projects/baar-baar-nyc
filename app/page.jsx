import HomeSlider from '@/components/HomeSlider';
import Image from 'next/image';

import baarBg from '@/public/images/pages/homepage/baarBg.jpg';
import baarImg from '@/public/images/pages/homepage/baarbaar-home-food.jpg';
import baarDrinksImg from '@/public/images/pages/homepage/baarbaar-home-drinks.jpg';
import baarChefImg from '@/public/images/pages/homepage/BaarBaar-chef-2.jpg';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <HomeSlider />

            <section className='bg-accent h-full flex flex-col justify-between items-center px-5 py-7 gap-4'>
                <div className='text-white flex flex-col gap-4'>
                    <h1 className='text-xl font-semibold text-center'>Baar Baar Delivery and Pick Up</h1>
                    <p className='text-center'>
                        Baar Baar's Take Out menu is now available for delivery
                        through ChowNow and other Delivery platforms.
                    </p>
                    <p className='text-center'>Tuesday to Sunday - Dinner: 4:30pm to 10pm.</p>
                    <p className='text-center'>For Pick up: email: delivery@baarbaarnyc.com or call 212.228.1200</p>
                </div>
                <button className='text-md font-semibold text-white border-2 border-white px-3 py-0.5 rounded-sm hover:bg-accent transition-colors duration-200 ease-in'>Order Online</button>
            </section>

            <section className='block items-center justify-center w-full bg-[url("/images/pages/homepage/baarBg.jpg")] bg-cover bg-center'>
                <div className="px-5 py-7 flex flex-col gap-5 items-center">
                    <h1 className="text-2xl font-semibold text-center text-teal-500">OUR CUISINE</h1>
                    <p className="text-center">
                        A celebration of regional Indian flavors brought to life using fresh local produce, our progressive
                        menu gives a nod to the past while looking straight into the future.
                    </p>
                    <button className='text-md font-semibold text-accent border-2 border-accent px-3 py-0.5 rounded-sm hover:bg-accent hover:text-white transition-colors duration-200 ease-in w-1/2'>View Our Food</button>
                </div>
                <Image src={baarImg} alt="Cuisine Img" className="" />
            </section>

            <section className='block items-center justify-center w-full bg-[url("/images/pages/homepage/baarBg.jpg")] bg-cover bg-center'>
                <div className="px-5 py-7 flex flex-col gap-5 items-center">
                    <h1 className="text-2xl font-semibold text-center text-teal-500">OUR COCKTAILS</h1>
                    <p className="text-center">
                        An ancient elixir, a forgotten ingredient, a curious spirit — the bar at Baar Baar
                        turns convention upside down by giving every drink its own stage.
                    </p>
                    <button className='text-md font-semibold text-accent border-2 border-accent px-3 py-0.5 rounded-sm hover:bg-accent hover:text-white transition-colors duration-200 ease-in w-1/2'>View Our Drinks</button>
                </div>
                <Image src={baarDrinksImg} alt="Cocktails Img" className="" />
            </section>

            <section className='block items-center justify-center w-full bg-[url("/images/pages/homepage/baarBg.jpg")] bg-cover bg-center'>
                <div className="px-5 py-7 flex flex-col gap-5 items-center">
                    <h1 className="text-2xl font-semibold text-center text-teal-500">ABOUT BAAR BAAR</h1>
                    <p className="text-center">
                        Sarkar’s contemporary approach to authentic Indian dishes in a vibrant, colorful setting inspired
                        by the culture, art, and spirit of his home country.
                    </p>
                    <button className='text-md font-semibold text-accent border-2 border-accent px-3 py-0.5 rounded-sm hover:bg-accent hover:text-white transition-colors duration-200 ease-in w-1/2'>Learn More</button>
                </div>
                <Image src={baarChefImg} alt="Cocktails Img" className="" />
            </section>
        </main>
    );
}