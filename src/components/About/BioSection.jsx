import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/images/jalpa.png'; 

function BioSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-soft-lg flex flex-col md:flex-row items-center md:items-start gap-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={imageVariants} className="flex-shrink-0">
      <img
      src={profileImg}
      alt="Jalpa Sarvaliya"
      className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary shadow-soft-md"
    />
      </motion.div>
      <div className="text-center md:text-left">
        <motion.h2
          className="text-3xl font-bold text-primary mb-4"
          variants={textVariants}
        >
          Who I Am
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          variants={textVariants}
          transition={{ delay: 0.1 }}
        >
        Hello! I’m Jalpa Sarvaliya, a passionate Frontend Developer with over a year of experience crafting responsive and user-centric web applications. My development journey began with a fascination for how web experiences are created and has grown into a professional path focused on delivering clean, functional, and intuitive interfaces.
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
          variants={textVariants}
          transition={{ delay: 0.2 }}
        >
        During my internship, I worked extensively with Angular, enhancing applications by implementing UI improvements and responsive layouts. I also contributed to a smart farming SaaS platform, where I was responsible for making the entire interface mobile-friendly and consistent across devices. My skill set includes HTML, CSS, Bootstrap, JavaScript, Angular, and WordPress with Elementor.        
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          variants={textVariants}
          transition={{ delay: 0.3 }}
        >
        I enjoy bringing static designs to life and ensuring they perform flawlessly on all screen sizes. I'm always eager to explore new technologies, follow best practices in frontend development, and collaborate on meaningful digital products.        
        </motion.p>
      </div>
    </motion.section>
  );
}

export default BioSection;