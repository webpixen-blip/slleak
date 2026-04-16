/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Play, Download, MessageSquare, Eye, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

const DIRECT_LINK = "https://omg10.com/4/9531366"; // Replace with your actual link

export default function App() {
  const handleAction = () => {
    window.open(DIRECT_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary font-sans selection:bg-accent selection:text-white">
      {/* Header */}
      <header className="border-b border-border-dark bg-linear-to-b from-[#111] to-bg sticky top-0 z-50 px-4 md:px-10 py-5">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl md:text-2xl font-extrabold text-accent tracking-tight text-center sm:text-left uppercase">
            ශ්‍රී ලංකා රහස් වීඩියෝ එකතුව
          </h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-accent/10 border border-accent/30 px-3.5 py-1.5 rounded-[4px]">
              <div className="relative flex h-2 w-2">
                <div className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 shadow-[0_0_10px_var(--color-accent)]"></div>
                <div className="relative inline-flex rounded-full h-2 w-2 bg-accent"></div>
              </div>
              <span className="text-sm font-semibold text-text-primary">LIVE &bull; 4.5K නරඹමින් සිටී</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-10 py-8 md:py-16 flex flex-col items-center justify-center gap-6">
        {/* Warning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent font-bold text-lg md:text-xl tracking-widest text-center uppercase mb-2"
        >
          අතිශයින්ම රහසිගතයි - වයස 18+ අයට පමණයි
        </motion.div>

        {/* Video Player Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative aspect-video w-full max-w-[640px] rounded-lg overflow-hidden border-2 border-border-dark bg-[#111] cursor-pointer group"
          onClick={handleAction}
        >
          {/* Blurred Background Image */}
          <div className="absolute inset-0 opacity-40 filter blur-lg bg-[linear-gradient(45deg,#1a1a1a_25%,#0a0a0a_25%,#0a0a0a_50%,#1a1a1a_50%,#1a1a1a_75%,#0a0a0a_75%,#0a0a0a_100%)] bg-[length:40px_40px]"></div>
          <img
            src="https://i.ibb.co/9mykXfG3/m-ea-Saa-Tba-Aaaaa-mh-g-W9-ZEQ2-DJl7dl-Zyg-9.jpg"
            alt="Video Preview"
            className="w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-accent/90 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110 active:scale-95">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[25px] border-l-white ml-2"></div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-5 w-full max-w-[640px]">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAction}
            className="flex-1 bg-accent hover:bg-red-700 text-white py-4.5 px-8 rounded-md font-bold text-base shadow-[0_4px_15px_rgba(255,0,0,0.3)] transition-all"
          >
            සම්පූර්ණ වීඩියෝව නරඹන්න (HD)
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAction}
            className="flex-1 bg-transparent hover:bg-white/5 text-text-primary py-4.5 px-8 rounded-md font-bold text-base border border-[#444] transition-all"
          >
            වීඩියෝව Download කරගන්න
          </motion.button>
        </div>

        {/* Comments Section */}
        <section className="w-full max-w-[640px] mt-12 pt-8 border-t border-border-dark">
          <h2 className="text-xs font-bold uppercase tracking-[1px] text-text-secondary mb-6">ප්‍රතිචාර (Recent Comments)</h2>

          <div className="space-y-4">
            {[
              { name: "Kasun Perera", text: "අම්මෝ මරු වීඩියෝ එක, අන්තිම ටික තමයි සුපිරි!", color: "#333" },
              { name: "Nimal_SL", text: "ලින්ක් එක වැඩ කරනවා, ඉක්මනින් බලන්න කට්ටිය.", color: "#444" },
              { name: "Samantha99", text: "තෑන්ක්ස් මචං ශෙයා කරාට.", color: "#222" }
            ].map((comment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div
                  className="w-8 h-8 rounded-full shrink-0"
                  style={{ backgroundColor: comment.color }}
                ></div>
                <div className="bg-comment-bg px-4 py-2.5 rounded-xl rounded-tl-[2px] border-t border-white/5 max-w-[85%]">
                  <span className="font-bold text-xs text-accent block mb-1">{comment.name}</span>
                  <p className="text-text-primary text-sm leading-relaxed">
                    {comment.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-text-secondary text-xs border-t border-border-dark bg-[#0a0a0a] mt-12">
        <p>© 2024 Sri Lanka Secret Collection. All Rights Reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <button onClick={handleAction} className="hover:text-text-primary transition-colors">DMCA</button>
          <button onClick={handleAction} className="hover:text-text-primary transition-colors">Privacy Policy</button>
          <button onClick={handleAction} className="hover:text-text-primary transition-colors">Contact</button>
        </div>
      </footer>
    </div>
  );
}
