import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Phone } from 'lucide-react'; // or from 'react-icons/fa' or similar


function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-background-light dark:bg-background-dark py-8 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="container mx-auto text-center px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/jalpa-sarvaliya-1487b8235/" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:jalpa92000@gmail.com" // Replace with your email
            className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="Email Me"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+919510877177"
            className="flex items-center gap-2 text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary transition-colors"
            aria-label="Call Me"
          >
          <Phone size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;