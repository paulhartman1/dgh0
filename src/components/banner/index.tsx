import Link from 'next/link';
import BannerImg from '../banner-img';
import ArtsLinks from '../artsLinks';

export default function Banner() {
  return (
    //create two even columns in one row
    <div className="flex flex-col items-center w-full p-10">
      <BannerImg />

      <ArtsLinks />
    </div>
  );
}
