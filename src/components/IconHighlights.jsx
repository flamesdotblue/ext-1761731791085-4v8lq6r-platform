import React from 'react';
import { Landmark, Banknote, ArrowRightLeft } from 'lucide-react';

const items = [
  {
    icon: Landmark,
    title: 'அரசியல்வாதி நிழல்',
    desc: 'அதிகாரத்தின் பின்னணி தாக்கம் மற்றும் மறைமுக உறவுகள்.',
  },
  {
    icon: Banknote,
    title: 'பணம் பை',
    desc: 'கட்டணங்கள் மற்றும் நிதி பரிமாற்றங்களின் அழுத்தம்.',
  },
  {
    icon: ArrowRightLeft,
    title: 'ஹவாலா அம்பு',
    desc: 'மறைமுகமாக நகரும் நிதி வழித்தடங்களின் குறியீடு.',
  },
];

export default function IconHighlights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      {items.map((it, idx) => (
        <div
          key={idx}
          className="group rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm p-5 sm:p-6 hover:border-neutral-700 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-neutral-800 text-neutral-200">
              <it.icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-medium">{it.title}</h3>
          </div>
          <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
            {it.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
