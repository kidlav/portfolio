import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const layer1X = useTransform(mouseX, [-1, 1], [-30, 30]);
  const layer1Y = useTransform(mouseY, [-1, 1], [-30, 30]);
  const layer2X = useTransform(mouseX, [-1, 1], [-15, 15]);
  const layer2Y = useTransform(mouseY, [-1, 1], [-15, 15]);
  const layer3X = useTransform(mouseX, [-1, 1], [-8, 8]);
  const layer3Y = useTransform(mouseY, [-1, 1], [-8, 8]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 247, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 247, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating particles/orbs with parallax */}
      <motion.div
        className="absolute top-20 left-[10%] w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #00FFF7 0%, transparent 70%)',
          x: layer1X,
          y: layer1Y,
        }}
      />
      <motion.div
        className="absolute top-40 right-[15%] w-80 h-80 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #8B00FF 0%, transparent 70%)',
          x: layer2X,
          y: layer2Y,
        }}
      />
      <motion.div
        className="absolute bottom-20 left-[20%] w-72 h-72 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, #00FFF7 0%, #8B00FF 50%, transparent 70%)',
          x: layer3X,
          y: layer3Y,
        }}
      />

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#00FFF7]/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-4 tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.03em' }}>
            <span className="block text-white">Vladislav</span>
            <span className="block relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00FFF7] via-[#8B00FF] to-[#00FFF7] bg-clip-text text-transparent">
                Kovalenko
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#00FFF7]/20 to-[#8B00FF]/20 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Designer & Creator crafting <span className="text-[#00FFF7]">digital experiences</span> that merge creativity with technology
        </motion.p>

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

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 right-[5%] w-2 h-2 rounded-full bg-[#00FFF7]"
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[8%] w-3 h-3 rounded-full bg-[#8B00FF]"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
