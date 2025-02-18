import HomeSlider from '@/components/HomeSlider';
import Image from 'next/image';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <HomeSlider />
            <div className='bg-accent h-full flex flex-col justify-between items-center p-5 gap-4'>
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
            </div>
        </main>
    );
}
