import { motion } from 'motion/react';
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react';

export function Privacy() {
  const sections = [
    {
      icon: Database,
      title: 'Information Collection',
      content: [
        'We collect minimal information necessary to provide our services and improve user experience.',
        'Personal information may include your name, email address, and any details you voluntarily provide through contact forms.',
        'We use cookies and similar technologies to enhance site functionality and analyze usage patterns.',
        'All data collection is done transparently and with your consent.',
      ],
    },
    {
      icon: Lock,
      title: 'Data Protection',
      content: [
        'Your personal information is stored securely using industry-standard encryption methods.',
        'We implement appropriate technical and organizational measures to protect against unauthorized access, alteration, or destruction of data.',
        'Access to personal information is restricted to authorized personnel only.',
        'Regular security audits are conducted to ensure data integrity.',
      ],
    },
    {
      icon: Eye,
      title: 'Information Usage',
      content: [
        'We use collected information solely to respond to inquiries and provide requested services.',
        'Your data will never be sold, rented, or shared with third parties for marketing purposes.',
        'Analytics data is used in aggregate form to improve website performance and user experience.',
        'We may use your email to send project updates or respond to your messages.',
      ],
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'You have the right to access, correct, or delete your personal information at any time.',
        'You can opt-out of any communications by contacting us directly.',
        'You may request a copy of all data we hold about you.',
        'You have the right to lodge a complaint with relevant data protection authorities.',
      ],
    },
    {
      icon: Mail,
      title: 'Contact Information',
      content: [
        'For privacy-related questions or concerns, please contact us at vladislav.kovalenko@email.com',
        'We will respond to all privacy inquiries within 48 hours.',
        'You can request data deletion or modification at any time.',
        'We are committed to transparency and protecting your privacy.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32">
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 247, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 247, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#00FFF7]/30 rounded-full bg-[#00FFF7]/5 mb-6">
            <Shield className="w-4 h-4 text-[#00FFF7]" />
            <span className="text-[#00FFF7] text-sm tracking-wide uppercase">Legal</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
            <span className="text-white">Privacy </span>
            <span className="bg-gradient-to-r from-[#00FFF7] to-[#8B00FF] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="text-xl text-gray-400">
            Last updated: November 13, 2025
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 p-6 border border-gray-800 rounded-2xl bg-black/30"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or interact with this portfolio website. By using this site, you agree to the practices described in this policy.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative"
              >
                <div className="p-8 border border-gray-800 rounded-2xl bg-black/20 hover:border-gray-700 transition-all">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FFF7]/5 to-[#8B00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                  <div className="relative">
                    {/* Icon and title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FFF7]/20 to-[#8B00FF]/20 flex items-center justify-center border border-gray-800">
                        <Icon className="w-6 h-6 text-[#00FFF7]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl text-white mb-2">{section.title}</h2>
                        <div className="h-px bg-gradient-to-r from-[#00FFF7]/50 to-transparent w-24" />
                      </div>
                    </div>

                    {/* Content */}
                    <ul className="space-y-4">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-400">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#8B00FF] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-[#00FFF7]/0 group-hover:border-[#00FFF7]/50 rounded-tr-2xl transition-all" />
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-[#00FFF7]/5 to-[#8B00FF]/5"
        >
          <h3 className="text-xl text-white mb-4">Updates to This Policy</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page with an updated revision date.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
        </motion.div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white rounded-full transition-all group relative"
          >
            <span className="relative z-10">← Back to Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFF7]/5 to-[#8B00FF]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
