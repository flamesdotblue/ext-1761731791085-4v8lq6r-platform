import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} தகவல் காட்சி. பொதுத்தகவலை அடிப்படையாகக் கொண்ட விளக்கக்காட்சி.
        </p>
        <div className="text-xs text-neutral-500">
          தீம்: துல்லியமான அமைப்பு, இருண்ட பின்னணி, fintech அசைவு
        </div>
      </div>
    </footer>
  );
}
