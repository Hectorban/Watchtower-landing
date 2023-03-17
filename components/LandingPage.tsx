import React from 'react';
import Link from 'next/link';
import AppBar from './AppBar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AppBar />
      <main className="container mx-auto flex flex-col items-center justify-center h-full">
        <img src="/path/to/your/center/image.png" alt="Watchtower Esports" className="w-1/2 mb-8" />
        <h1 className="text-4xl font-bold mb-4">Watchtower Esports</h1>
        <p className="text-xl text-center mb-8">
          We are a competitive esports organization focused on providing the best experience for our players and fans.
        </p>
        <Link href="/contact">
          <a className="bg-secondary text-white px-6 py-2 rounded">Contact Us</a>
        </Link>
      </main>
    </div>
  );
};

export default LandingPage;
