import Image from 'next/image';
import sliderImage from '@/public/images/pages/homepage/slider/baarbaar-HomeSlider-Cocktail.jpg';

export default function Home() {
    return (
        <main className='min-h-screen'>
            <Image src={sliderImage} alt='Slider Image' />
        </main>
    );
}
