import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <header className="relative w-full">
      <div className="relative w-full h-[70vh] sm:h-[75vh]">
        <Spline
          scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
      </div>
      <div className="absolute inset-x-0 top-0 h-full flex items-end">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 w-full pb-10 sm:pb-14">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            லஞ்சப் பரிமாற்றங்கள்: நிலைகள், தொகைகள், வழித்தடங்கள்
          </h1>
          <p className="mt-4 text-neutral-300 max-w-2xl text-sm sm:text-base">
            வெளிப்படைத்தன்மைக்காக தொகுக்கப்பட்ட தரவு. கீழே காட்டியுள்ள பட்டியல்கள் பொதுத்தகவலை அடிப்படையாகக் கொண்ட விளக்கக்காட்சி.
          </p>
        </div>
      </div>
    </header>
  );
}
