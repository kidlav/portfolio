import { motion } from 'motion/react';
import { Mail, Linkedin, Dribbble, Github, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#0a0a0a] border-t border-gray-800">
      {/* Glowing top line */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          className="h-full bg-gradient-to-r from-transparent via-[#00FFF7] to-transparent"
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#8B00FF]/30 rounded-full bg-[#8B00FF]/5 mb-6">
              <div className="w-2 h-2 bg-[#8B00FF] rounded-full" />
              <span className="text-[#8B00FF] text-sm tracking-wide uppercase">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
              <span className="text-white">Let's build something </span>
              <span className="bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] bg-clip-text text-transparent">
                extraordinary
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              Open to new projects, collaborations, and creative opportunities. Let's create the future together.
            </p>

            <a
              href="mailto:vladislav.kovalenko@email.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] rounded-full text-black transition-transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Send className="w-5 h-5" />
                Send a Message
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="group">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-[#00FFF7]" />
                <span className="text-sm text-gray-500 uppercase tracking-wider">Email</span>
              </div>
              <a
                href="mailto:vladislav.kovalenko@email.com"
                className="text-xl text-white hover:text-[#00FFF7] transition-colors block"
              >
                vladislav.kovalenko@email.com
              </a>
              <div className="h-px bg-gradient-to-r from-gray-800 to-transparent mt-2 group-hover:from-[#00FFF7]/50 transition-colors" />
            </div>

            {/* Location */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#8B00FF] rounded-full" />
                </div>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Location</span>
              </div>
              <p className="text-xl text-white">Canada</p>
            </div>

            {/* Social */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#00FFF7] rounded-full" />
                </div>
                <span className="text-sm text-gray-500 uppercase tracking-wider">Connect</span>
              </div>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#00FFF7' },
                  { icon: Dribbble, href: '#', label: 'Dribbble', color: '#8B00FF' },
                  { icon: Github, href: '#', label: 'GitHub', color: '#00FFF7' },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative w-12 h-12 border border-gray-800 flex items-center justify-center hover:border-gray-700 transition-all"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors relative z-10" />
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                        style={{ backgroundColor: social.color }}
                      />
                      <div 
                        className="absolute top-0 left-0 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ backgroundColor: social.color }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="relative pt-8 border-t border-gray-800">
          {/* Animated glowing line */}
          <motion.div
            className="absolute top-0 left-0 h-px bg-gradient-to-r from-[#00FFF7] to-[#8B00FF]"
            animate={{
              width: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-500">© 2025 Vladislav Kovalenko</span>
              <div className="w-px h-4 bg-gray-800" />
              <span className="text-gray-600 text-sm">All rights reserved</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#privacy" className="hover:text-[#00FFF7] transition-colors">Privacy</a>
              <div className="w-px h-4 bg-gray-800" />
              <a href="#terms" className="hover:text-[#8B00FF] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00FFF7]/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B00FF]/5 blur-3xl rounded-full -z-10" />
    </footer>
  );
}
