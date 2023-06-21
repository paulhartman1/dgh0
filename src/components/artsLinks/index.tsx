/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function ArtsLinks() {
  return (
    <>
      <div className='arts-link-title-box'>
        <div className="title">The Arts</div>
        <div className="subtitle">Enjoy my arts!</div>
      </div>
      <Link className="arts-link" href="/arts">
        face painting gallery
      </Link>
      <Link className="arts-link" href="/arts">
        fine art
      </Link>
      <Link className="arts-link" href="/arts">
        nature photography
      </Link>
      <Link className="arts-link" href="/arts">
        gardening
      </Link>
      <Link className="arts-link" href="/arts">
        perfomance (where i'll be)
      </Link>
      <Link className="arts-link" href="/arts">
        entomology (bugs)
      </Link>
      <Link className="arts-link" href="/arts">
        jewlery and other arts
      </Link>
      <Link className="arts-link" href="/arts">
        my coloring book (abstract #1)
      </Link>
      <Link className="arts-link" href="/arts">
        super rocket dove of peace
      </Link>
      <Link className="arts-link" href="/arts">
        my novels
      </Link>
      <Link className="arts-link" href="/arts">
        my etsy store
      </Link>
    </>
  );
}
