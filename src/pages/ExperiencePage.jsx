// src/pages/ExperiencePage.jsx

import ExperienceSection from '../components/About/ExperienceSection';
import SkillsSection from '../components/About/SkillsSection'; // ✅ Add this line

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-text-light dark:text-text-dark">
        My Experience
      </h1>
      <div className="max-w-4xl mx-auto space-y-16">
        <ExperienceSection />
        <SkillsSection /> {/* ✅ Add this line below experience */}
      </div>
    </div>
  );
}
