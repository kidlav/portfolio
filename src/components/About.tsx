import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Code2, Palette, Sparkles, Zap } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const highlights = [
    {
      icon: Code2,
      label: 'Interactive Design',
      color: '#00FFF7'
    },
    {
      icon: Palette,
      label: 'Visual Identity',
      color: '#8B00FF'
    },
    {
      icon: Zap,
      label: 'Motion Graphics',
      color: '#00FFF7'
    },
    {
      icon: Sparkles,
      label: 'Creative Direction',
      color: '#8B00FF'
    }
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-px h-96 bg-gradient-to-b from-transparent via-[#00FFF7]/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-px h-64 bg-gradient-to-b from-transparent via-[#8B00FF]/20 to-transparent" />

      <motion.div style={{ opacity }} className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div style={{ y }} className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-[#00FFF7]/20 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-[#8B00FF]/20 rounded-2xl rotate-12" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FFF7]/10 to-[#8B00FF]/10 z-10" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1709803312782-0c3b175875ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRlc2lnbmVyfGVufDF8fHx8MTc2MjkxNjI1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Vladislav Kovalenko"
                  className="w-full aspect-square object-cover"
                />
                
                {/* Glowing corners */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#00FFF7] rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#8B00FF] rounded-br-3xl" />
              </div>

              {/* Floating status card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-xl border border-gray-800 rounded-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-[#00FFF7] rounded-full" />
                    <div className="absolute inset-0 w-3 h-3 bg-[#00FFF7] rounded-full animate-ping" />
                  </div>
                  <span className="text-gray-300 text-sm">Available for projects</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div className="flex items-center gap-2 px-4 py-2 border border-[#8B00FF]/30 rounded-full bg-[#8B00FF]/5">
                  <div className="w-2 h-2 bg-[#8B00FF] rounded-full" />
                  <span className="text-[#8B00FF] text-sm tracking-wide uppercase">About</span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
                <span className="text-white">Creative designer based in </span>
                <span className="bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] bg-clip-text text-transparent">
                  Canada
                </span>
              </h2>

              <div className="space-y-4 text-gray-400 text-lg mb-8">
                <p>
                  I'm a UI/UX and motion designer studying in Canada, passionate about pushing the boundaries of digital design. My work lives at the intersection of technology and creativity.
                </p>
                <p>
                  From dynamic brand identities like <span className="text-[#00FFF7]">Raisovka Aqua</span> to innovative web experiences for <span className="text-[#8B00FF]">Team Not Found</span>, I craft digital experiences that are both visually striking and functionally seamless.
                </p>
                <p className="text-white">
                  Every project is an opportunity to experiment, innovate, and create something that resonates.
                </p>
              </div>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="group p-4 border border-gray-800 rounded-xl hover:border-gray-700 transition-all relative overflow-hidden"
                    >
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
                        style={{ background: `linear-gradient(135deg, ${item.color}, transparent)` }}
                      />
                      <Icon className="w-6 h-6 mb-2" style={{ color: item.color }} />
                      <p className="text-sm text-gray-300">{item.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
