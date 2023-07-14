import Banner from '@/components/banner';
import GallaryComponent from '@/components/gallary';
import Header from '@/components/header';
import Schedule from '@/components/schedule';

export default function Home() {
  const images = [
    { src: '/indian.jpg', alt: 'Indian', title: 'Indian' },
    { src: '/sisters.webp', alt: 'Sisters', title: 'Sisters' },
    { src: '/rose.webp', alt: 'Rose', title: 'Rose' },
    { src: '/mushroom.webp', alt: 'Indian', title: 'Mushroom' },
    { src: '/eagle.webp', alt: 'Indian', title: 'Eagle' },
   
  ];
 
  return (
    <main className="flex flex-col items-center justify-between p-5">
      <Header />
      <Banner />
      <Schedule />
      {/* <GallaryComponent images={...images} title='Fine Arts' /> */}
      
    </main>
  );
}
