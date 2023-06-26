import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  //a black rectangle with 5 links
  //fetch('/api/users').then((res) => console.log(res.json()));
 
  return (
    <header className="flex items-center justify-between">
      <nav>
        BOOK ME FOR
        <Link href="/" className="">
          {' '}
          FACE PAINTING{' '}
        </Link>
        <Link href="/about" className="">
          {' '}
          BUG SHOWS{' '}
        </Link>
        <Link href="/contact" className="">
          {' '}
          GUITAR LESSONS{' '}
        </Link>
        <Link href="/contact" className="">
          {' '}
          ART PROJECTS{' '}
        </Link>
        <Link href="/contact" className="">
          {' '}
          MUSIC PERFORMANCE{' '}
        </Link>
      </nav>
    </header>
  );
}
