import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'Raisovka Aqua',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2MjgwMTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    accent: '#00FFF7',
    size: 'large',
  },
  {
    title: 'Team Not Found',
    category: 'Gaming UI',
    image: 'https://images.unsplash.com/photo-1738168504546-7d9a4b6c358f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlJTIwbmVvbnxlbnwxfHx8fDE3NjI5MTYyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    accent: '#8B00FF',
    size: 'medium',
  },
  {
    title: 'Motion Reel',
    category: 'Animation',
    image: 'https://images.unsplash.com/photo-1643159099335-43798cb69829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBjaXR5JTIwbGlnaHRzfGVufDF8fHx8MTc2MjgyMDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    accent: '#00FFF7',
    size: 'medium',
  },
  {
    title: 'Digital Interface',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1555631545-9dc21031669b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZGVzaWduJTIwbW9kZXJufGVufDF8fHx8MTc2MjkxNjI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    accent: '#8B00FF',
    size: 'small',
  },
  {
    title: 'Holographic',
    category: 'Visual Design',
    image: 'https://images.unsplash.com/photo-1648663773038-60839a2fe026?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMGdyYWRpZW50fGVufDF8fHx8MTc2MjkxNjI1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    accent: '#00FFF7',
    size: 'small',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const sizeClasses = {
    large: 'lg:col-span-2 lg:row-span-2',
    medium: 'lg:col-span-1 lg:row-span-2',
    small: 'lg:col-span-1 lg:row-span-1',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative ${sizeClasses[project.size]}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative h-full rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors"
      >
        {/* Image */}
        <div className="relative w-full h-full min-h-[300px]">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity"
            style={{
              background: `linear-gradient(135deg, rgba(10,10,10,0.9) 0%, transparent 100%)`
            }}
          />

          {/* Accent glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${project.accent}, transparent 70%)`
            }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="mb-2 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: project.accent }} />
            <span className="text-sm text-gray-400 uppercase tracking-wider">{project.category}</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl text-white mb-4">{project.title}</h3>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10 
            }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-4"
          >
            <button 
              className="flex items-center gap-2 px-4 py-2 border rounded-full text-sm transition-all"
              style={{ 
                borderColor: `${project.accent}40`,
                color: project.accent
              }}
            >
              <Eye className="w-4 h-4" />
              View Project
            </button>
            <ArrowUpRight className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>

        {/* Corner accents */}
        <div 
          className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${project.accent}20 50%)`
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"
          style={{ backgroundColor: `${project.accent}40` }}
        />
      </motion.div>
    </motion.div>
  );
}

export function ProjectsGallery() {
  return (
    <section id="projects" className="relative py-32 bg-[#0a0a0a]">
      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent opacity-30" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent opacity-30" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-[#00FFF7] rounded-full" />
            <span className="text-[#00FFF7] text-sm tracking-wide uppercase">Portfolio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="text-white">Selected </span>
            <span className="bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl">
            A showcase of interactive experiences, visual identities, and motion design work
          </p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
