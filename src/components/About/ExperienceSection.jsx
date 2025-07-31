import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react'; 

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Upsqure Technologies',
    duration: 'July 2024 – July 2025',
    description:
      'Created and updated websites using WordPress with Elementor. Designed modern, responsive layouts and enhanced user experience through effective CSS and JavaScript implementation.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'WordPress', 'Elementor'],
  },
  {
    title: 'Angular Developer Intern',
    company: 'Addon Web Solution',
    duration: 'March 2024 – July 2024',
    description:
      'Worked on Angular-based themes and implemented UI changes. Gained hands-on experience in component-based development and advanced SCSS styling.',
    skills: ['Angular 15', 'TypeScript', 'SCSS'],
  },
  {
    title: 'Full Stack Web Developer Intern',
    company: 'Remote Internship',
    duration: 'September 2022 – February 2023',
    description:
      'Built eCommerce websites from scratch using a full-stack approach. Worked on both frontend and backend, including responsive UI and data management.',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'MongoDB', 'React.js'],
  },
  {
    title: 'Software Developer Intern',
    company: 'Milople – Bhavnagar',
    duration: 'January 2022 – May 2022',
    description:
      'Worked on various web technologies including backend logic and CMS development using PHP and Magento 2 during college internship.',
    skills: ['HTML', 'CSS', 'PHP', 'Magento 2'],
  },
];

function ExperienceSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft-lg"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-semibold text-text-light dark:text-text-dark mb-1">
              {exp.title}
            </h3>
            <p className="text-primary text-lg mb-2">
              {exp.company}
              <span className="text-gray-500 dark:text-gray-400 text-base ml-2">• {exp.duration}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default ExperienceSection;
