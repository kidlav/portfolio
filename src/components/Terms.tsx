import { motion } from 'motion/react';
import { FileText, CheckCircle, AlertTriangle, Scale, Mail } from 'lucide-react';

export function Terms() {
  const sections = [
    {
      icon: CheckCircle,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using this portfolio website, you accept and agree to be bound by these Terms of Service.',
        'If you do not agree to these terms, please do not use this website.',
        'Your continued use of the site constitutes acceptance of any updates or modifications to these terms.',
        'These terms apply to all visitors, users, and others who access the service.',
      ],
    },
    {
      icon: FileText,
      title: 'Use License',
      content: [
        'Permission is granted to temporarily view the materials on this website for personal, non-commercial use only.',
        'This is a grant of license, not a transfer of title, and under this license you may not:',
        '• Modify or copy the materials',
        '• Use the materials for any commercial purpose',
        '• Attempt to decompile or reverse engineer any software contained on the website',
        '• Remove any copyright or proprietary notations from the materials',
      ],
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: [
        'All content on this website, including designs, code, text, graphics, logos, and images, is the intellectual property of Vladislav Kovalenko.',
        'Unauthorized use of any materials may violate copyright, trademark, and other laws.',
        'Project work displayed may be subject to client confidentiality and proprietary rights.',
        'You may not reproduce, distribute, or create derivative works without explicit written permission.',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Disclaimer',
      content: [
        'The materials on this website are provided on an "as is" basis without warranties of any kind.',
        'We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.',
        'All project work shown is for portfolio purposes and may not reflect final client implementations.',
        'We make no guarantees about the accuracy, reliability, or completeness of any information provided.',
      ],
    },
    {
      icon: Mail,
      title: 'Contact & Inquiries',
      content: [
        'Any inquiries, project requests, or collaborations submitted through this website do not create a binding agreement.',
        'All professional engagements require separate written contracts.',
        'Response time to inquiries may vary based on availability.',
        'Contact information provided is for professional communication only.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-32">
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(139, 0, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 0, 255, 0.03) 1px, transparent 1px)
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
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#8B00FF]/30 rounded-full bg-[#8B00FF]/5 mb-6">
            <Scale className="w-4 h-4 text-[#8B00FF]" />
            <span className="text-[#8B00FF] text-sm tracking-wide uppercase">Legal</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
            <span className="text-white">Terms of </span>
            <span className="bg-gradient-to-r from-[#8B00FF] to-[#00FFF7] bg-clip-text text-transparent">
              Service
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
            These Terms of Service govern your use of this portfolio website. Please read these terms carefully before using the site. By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these terms.
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
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B00FF]/5 to-[#00FFF7]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                  <div className="relative">
                    {/* Icon and title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B00FF]/20 to-[#00FFF7]/20 flex items-center justify-center border border-gray-800">
                        <Icon className="w-6 h-6 text-[#8B00FF]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl text-white mb-2">{section.title}</h2>
                        <div className="h-px bg-gradient-to-r from-[#8B00FF]/50 to-transparent w-24" />
                      </div>
                    </div>

                    {/* Content */}
                    <ul className="space-y-4">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-400">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00FFF7] flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-[#8B00FF]/0 group-hover:border-[#8B00FF]/50 rounded-bl-2xl transition-all" />
              </motion.div>
            );
          })}
        </div>

        {/* Additional Terms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 space-y-8"
        >
          {/* Limitations */}
          <div className="p-8 border border-gray-800 rounded-2xl bg-black/30">
            <h3 className="text-xl text-white mb-4 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-[#00FFF7]" />
              Limitations of Liability
            </h3>
            <p className="text-gray-400 leading-relaxed mb-3">
              In no event shall Vladislav Kovalenko or its affiliates be liable for any damages arising out of the use or inability to use the materials on this website.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This includes damages for loss of data, profit, or business interruption, even if we have been notified of the possibility of such damages.
            </p>
          </div>

          {/* Revisions */}
          <div className="p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-[#8B00FF]/5 to-[#00FFF7]/5">
            <h3 className="text-xl text-white mb-4">Revisions and Updates</h3>
            <p className="text-gray-400 leading-relaxed mb-3">
              We reserve the right to revise these terms of service at any time without notice. By using this website, you agree to be bound by the current version of these terms.
            </p>
            <p className="text-gray-400 leading-relaxed">
              It is your responsibility to check this page periodically for changes. Your continued use of the website following the posting of changes constitutes acceptance of those changes.
            </p>
          </div>

          {/* Governing Law */}
          <div className="p-8 border border-gray-800 rounded-2xl bg-black/30">
            <h3 className="text-xl text-white mb-4">Governing Law</h3>
            <p className="text-gray-400 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Canada. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Canada.
            </p>
          </div>
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-[#00FFF7]/5 to-[#8B00FF]/5"
        >
          <h3 className="text-xl text-white mb-4">Questions About These Terms?</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <a 
            href="mailto:vladislav.kovalenko@email.com"
            className="text-[#00FFF7] hover:text-[#8B00FF] transition-colors"
          >
            vladislav.kovalenko@email.com
          </a>
        </motion.div>

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gray-800 hover:border-gray-700 text-gray-400 hover:text-white rounded-full transition-all group relative"
          >
            <span className="relative z-10">← Back to Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B00FF]/5 to-[#00FFF7]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
