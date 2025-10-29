import React from 'react';

export default function BribeTable() {
  return (
    <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/40">
      <div className="px-5 sm:px-6 py-4 border-b border-neutral-800/80">
        <h2 className="text-xl sm:text-2xl font-semibold">பதவி நிலை vs. லஞ்சத் தொகை</h2>
        <p className="mt-1 text-sm text-neutral-300">
          கீழே உள்ள மதிப்புகள் விளக்கத்திற்காக: ₹ லட்சங்களில் காட்டப்படுகிறது.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead className="bg-neutral-900/60">
            <tr>
              <th className="px-5 sm:px-6 py-3 text-neutral-300 font-medium">பதவி நிலை</th>
              <th className="px-5 sm:px-6 py-3 text-neutral-300 font-medium">லஞ்ச தொகை</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-neutral-800/80 hover:bg-neutral-900/30">
              <td className="px-5 sm:px-6 py-4">இளநிலை ஊழியர்</td>
              <td className="px-5 sm:px-6 py-4">₹5–10 லட்சம்</td>
            </tr>
            <tr className="border-t border-neutral-800/80 hover:bg-neutral-900/30">
              <td className="px-5 sm:px-6 py-4">நடுத்தர நிலை</td>
              <td className="px-5 sm:px-6 py-4">₹10–15 லட்சம்</td>
            </tr>
            <tr className="border-t border-neutral-800/80 hover:bg-neutral-900/30">
              <td className="px-5 sm:px-6 py-4">மூத்த அதிகாரி</td>
              <td className="px-5 sm:px-6 py-4">₹15–25 லட்சம்</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
