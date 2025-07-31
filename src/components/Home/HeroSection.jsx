import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <div className="min-h-screen pt-16 bg-light-hero dark:bg-none bg-cover bg-center">
      <motion.section
        className="text-center max-w-4xl mx-auto py-12 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      <motion.h1
      className="typewriter text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 leading-tight mb-4 drop-shadow-sm"
      variants={itemVariants}
      >
      Hi, I'm <span className="text-primary">Jalpa Sarvaliya</span>.
      </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          A passionate <strong style={{ color: '#7F557D', fontWeight: 'bold' }}>Frontend Web Developer</strong> crafting modern, responsive, and user-friendly web interfaces using HTML, CSS, JavaScript, Bootstrap, and Angular. Dedicated to building clean and performance-optimized websites with a strong focus on user experience and accessibility.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/experience">
            <Button className="bg-primary text-white dark:text-black hover:bg-primary-hover px-8 py-3 rounded-lg text-lg font-semibold shadow-soft-md transition-all duration-200 group">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 px-8 py-3 rounded-lg text-lg font-semibold shadow-soft-sm transition-all duration-200">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default HeroSection;
