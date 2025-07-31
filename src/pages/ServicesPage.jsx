import React from 'react';
import ServiceCard from '../components/Services/ServiceCard';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: 'Monitor',
    title: 'Frontend Web Development',
    description:
      'Crafting modern, responsive web interfaces using Angular, React, JavaScript, and CSS frameworks with a strong focus on performance and user experience.',
    details: [
      'Responsive layout development using HTML, CSS, Bootstrap, and SCSS',
      'Component-based UI development using Angular and React',
      'CRUD operations with dynamic data binding and API integration',
      'Cross-browser compatibility and mobile-first design',
    ],
  },
  {
    icon: 'LayoutGrid',
    title: 'WordPress & Elementor Development',
    description:
      'Designing and customizing websites using WordPress and Elementor to meet client needs with a responsive and engaging UI.',
    details: [
      'Custom layout creation using Elementor',
      'Theme customization and plugin setup',
      'Popup integration for promotions and messages',
      'Performance and mobile optimization',
    ],
  },
  {
    icon: 'Map',
    title: 'Vehicle Tracker Project (Angular)',
    description:
      'Developed a smart vehicle tracking system with map integration and real-time data visualization using Angular 15.',
    details: [
      'Live tracking with Google Maps integration',
      'Geo-fencing setup for location boundaries',
      'API integration for location & status updates',
      'Dynamic UI with CRUD table and marker details',
    ],
  },
  {
    icon: 'MapPin',
    title: 'Smart Farming Dashboard (ThingsBoard)',
    description:
      'Created a responsive farming dashboard using ThingsBoard to manage and visualize IoT data for smart irrigation.',
    details: [
      'Soil moisture & weather data visualization',
      'Auto irrigation logic with responsive UI',
      'Geo-fencing and real-time tracking setup',
      'Custom widget layout with scrollable side panel',
    ],
  },
  {
    icon: 'TabletSmartphone',
    title: 'Responsive UI/UX Implementation',
    description:
      'Transforming business requirements into clean and responsive interfaces across web platforms.',
    details: [
      'Mobile-first responsive design with Bootstrap & SCSS',
      'Accessibility improvements',
      'Component structure planning',
      'UI/UX consistency across pages and screens',
    ],
  },
];

function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        My Services
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.div>
    </div>
  );
}

export default ServicesPage;
