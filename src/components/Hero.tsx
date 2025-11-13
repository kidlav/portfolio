import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

// 1️⃣ — подключаем твой Aurora компонент
// import Aurora from './Aurora';
import DotGrid from './DotGrid';


export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/40">

<div style={{ width: '100%', height: '95%',top:'5%', position: 'absolute', opacity: '0.5'}}>
  <DotGrid
    dotSize={10}
    gap={15}
    baseColor="#5227FF"
    activeColor="#00FFF7"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>

      {/* 3️⃣ CONTENT — оставляем всё как есть */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* Title Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FFF7]/30 bg-[#00FFF7]/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#00FFF7]" />
            <span className="text-[#00FFF7] text-sm tracking-wide">UI/UX & MOTION DESIGNER</span>
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4 tracking-tight">
            <span className="block text-white">Vladislav</span>
            <span className="block relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00FFF7] via-[#8B00FF] to-[#00FFF7] bg-clip-text text-transparent">
                Kovalenko
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Designer & Creator crafting <span className="text-[#00FFF7]">digital experiences</span>
          that merge creativity with technology
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 overflow-hidden rounded-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] opacity-0 blur-xl group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 text-black">
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 border border-[#00FFF7]/30 text-white rounded-full hover:border-[#00FFF7] hover:bg-[#00FFF7]/5 transition-all relative overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-[#00FFF7]/10 translate-y-full group-hover:translate-y-0 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}