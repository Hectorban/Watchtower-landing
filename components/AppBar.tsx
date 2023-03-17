import React from 'react';
import Link from 'next/link';

const AppBar = () => {
  return (
    <header className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" passHref>
          <img src="/path/to/your/logo.png" alt="Watchtower Esports" className="h-12 cursor-pointer" />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref>
                <a className="text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <a className="text-white">Contact</a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <a className="text-white">About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/dev-blog" passHref>
                <a className="text-white">Dev Blog</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
