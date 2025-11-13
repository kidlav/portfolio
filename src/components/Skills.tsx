import { motion } from 'motion/react';
import { Figma, Code, Layers, Image, Film, Palette } from 'lucide-react';

const skills = [
  { name: 'Figma', icon: Figma, color: '#00FFF7' },
  { name: 'React', icon: Code, color: '#8B00FF' },
  { name: 'Tailwind', icon: Layers, color: '#00FFF7' },
  { name: 'WordPress', icon: Palette, color: '#8B00FF' },
  { name: 'After Effects', icon: Film, color: '#00FFF7' },
  { name: 'Photoshop', icon: Image, color: '#8B00FF' },
];

export function Skills() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00FFF7]/30 rounded-full bg-[#00FFF7]/5 mb-6">
            <div className="w-2 h-2 bg-[#00FFF7] rounded-full" />
            <span className="text-[#00FFF7] text-sm tracking-wide uppercase">Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="text-white">Tools & </span>
            <span className="bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 mb-20">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative aspect-square"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-all">
                  {/* Hover glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                    style={{ backgroundColor: skill.color }}
                  />
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <Icon 
                      className="w-8 h-8 md:w-10 md:h-10 mb-4 transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    />
                    <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                  </div>

                  {/* Corner accent */}
                  <div 
                    className="absolute top-0 left-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}40 0%, transparent 100%)`
                    }}
                  />
                </div>

                {/* Glowing line dividers */}
                {index % 6 !== 5 && (
                  <div className="absolute top-1/2 right-0 w-px h-12 -translate-y-1/2 bg-gradient-to-b from-transparent via-gray-700 to-transparent hidden lg:block" />
                )}
                {index < skills.length - 3 && (
                  <div className="absolute bottom-0 left-1/2 w-12 h-px -translate-x-1/2 bg-gradient-to-r from-transparent via-gray-700 to-transparent hidden md:block" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-[#0a0a0a]">
              <span className="text-sm text-gray-500 uppercase tracking-wider">Also Working With</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {['Illustrator', 'Premiere Pro', 'Blender', 'Cinema 4D', 'Webflow', 'Framer'].map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group px-6 py-3 border border-gray-800 hover:border-gray-700 bg-black/50 text-gray-400 hover:text-white transition-all cursor-default relative overflow-hidden"
              >
                <span className="relative z-10">{tool}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/5 to-[#8B00FF]/5 translate-y-full group-hover:translate-y-0 transition-transform" />
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-[#00FFF7]/10 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 border border-[#8B00FF]/10"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
}
