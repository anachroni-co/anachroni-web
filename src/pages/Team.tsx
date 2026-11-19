import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';

const Team = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const achievementIcons: Record<string, string> = {
    'google-logo.png': '🚀',
    'enisa-logo.png': '💡',
    'xunta-logo.png': '🏛️',
    'spanish-government-logo.png': '🇪🇸'
  };

  return (
    <>
      <SEO 
        title={t.team.title}
        description={t.team.subtitle}
        keywords={[
          "AI Team", "Deep Tech", "Spanish Startup",
          "Machine Learning", "Neuroscience", "Philosophy",
          "Embedded Systems", "AI Research", "Innovation"
        ]}
        lang={language}
      />
      <div className="min-h-screen px-6 pt-24 pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="flex items-center gap-3 mb-6 text-4xl font-light md:text-5xl">
              <span>👥</span> {t.team.title}
            </h1>
            <p className="max-w-3xl mb-12 text-xl text-gray-300">
              {t.team.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="mb-8 text-2xl font-light">
              {t.team.title} is currently:
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {t.team.achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="p-6 border bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl backdrop-blur-sm border-purple-500/20"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-12 h-12 text-2xl rounded-lg bg-purple-900/30">
                      {achievementIcons[achievement.icon]}
                    </span>
                    <div>
                      <h3 className="mb-2 text-xl font-light">{achievement.title}</h3>
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-xl italic text-gray-300">
              {t.team.mission}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Team;