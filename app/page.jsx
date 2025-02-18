import HomeSlider from '@/components/HomeSlider';
import Image from 'next/image';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <HomeSlider />
            <div className='bg-accent h-48 flex justify-between items-center'>
                <div className=''>
                    <h1>Baar Baar Delivery and Pick Up</h1>
                    <p>
                        Baar Baar's Take Out menu is now available for delivery
                        through ChowNow and other Delivery platforms.
                        Tuesday to Sunday - Dinner: 4:30pm to 10pm.
                        For Pick up: email: delivery@baarbaarnyc.com or call 212.228.1200
                    </p>
                </div>
                <button>Order Online</button>
            </div>
        </main>
    );
}
