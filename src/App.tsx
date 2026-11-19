import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import Models from './pages/Models';
import Model1B from './pages/models/Model1B';
import Model3B from './pages/models/Model3B';
import Model9B from './pages/models/Model9B';
import ExperimentalLayers from './pages/ExperimentalLayers';
import Architecture from './pages/Architecture';
import Alignment from './pages/Alignment';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import Sustainability from './pages/Sustainability';
import SEO from './components/SEO';
import SchemaMarkup from './components/SchemaMarkup';
import { multimodal, safe, embedded, google } from './assets';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { translations } from './translations';
import NotFound from './pages/NotFound';

// Inicializar EmailJS con la Public Key
emailjs.init('zJ7nDvt98s4zz0HYu');

const organizationSchema = {
  name: "Anachroni",
  url: "https://anachroni.co",
  logo: "https://anachroni.ai/LogoGuayT.png",
  sameAs: [
    "https://linkedin.com/company/anachroni"
  ]
};

const tooltipContent = {
  multimodal: {
    title: "CapibaraMultimodal",
    description: "Advanced model that processes text, images, and audio simultaneously. Perfect for applications requiring multimodal understanding and rich content generation."
  },
  safe: {
    title: "CapibaraSafe",
    description: "Version optimized for safety and ethical alignment. Includes robust filters and control mechanisms to ensure safe and responsible responses."
  },
  embedded: {
    title: "CapibaraEmbedded",
    description: "Specifically designed for edge devices and embedded systems. Optimized for low resource consumption while maintaining high performance."
  }
};

const AppContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen overflow-hidden text-white bg-gradient-to-br from-purple-900 via-black to-black">
      {/* Imagen de fondo solo en desktop/tablet */}
      <div 
        className="fixed right-0 z-0 hidden w-1/4 pointer-events-none opacity-10 h-1/2 sm:block"
        style={{
          backgroundImage: 'url(/CapibaraGPT.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'top right',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(1px)',
          top: '140px'
        }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b bg-black/50 backdrop-blur-sm border-purple-500/20">
        <div className="flex items-center justify-between w-full pl-0 pr-4 mx-auto max-w-7xl sm:pr-8 md:pr-12">
          <Link to="/" className="flex items-center justify-start h-10 sm:h-12 pl-0 pr-8 sm:pr-20 pt-2 sm:pt-6 relative z-[60]">
            <img 
              src="/logoAnachroni.png" 
              alt="Anachroni" 
              className="max-w-[480px] h-40 sm:max-w-[960px] sm:h-80"
              loading="eager"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="items-center justify-end flex-1 hidden py-3 space-x-4 text-sm font-light sm:space-x-6 sm:text-base md:flex sm:py-4">
            <Link to="/models" className="transition-opacity hover:opacity-70">{t.navigation.models}</Link>
            <Link to="/architecture" className="transition-opacity hover:opacity-70">{t.navigation.architecture}</Link>
            <Link to="/experimental-layers" className="transition-opacity hover:opacity-70">{t.navigation.experimentalLayers}</Link>
            <Link to="/alignment" className="transition-opacity hover:opacity-70">{t.navigation.alignment}</Link>
            <Link to="/sustainability" className="transition-opacity hover:opacity-70">{t.navigation.sustainability}</Link>
            <Link to="/team" className="transition-opacity hover:opacity-70">{t.navigation.team}</Link>
            <Link to="/contact" className="transition-opacity hover:opacity-70">{t.navigation.contact}</Link>
            <Link 
              to="/contact" 
              className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 ml-2 sm:ml-4 transition-all rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:scale-105 shadow-lg shadow-purple-500/20"
            >
              <span className="text-base sm:text-lg">🚀</span>
              <span className="font-medium">{t.navigation.investNow}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="ml-auto mr-2 text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          <motion.div 
            className={`fixed inset-0 w-full h-screen min-h-screen z-40 md:hidden ${isMenuOpen ? 'flex' : 'hidden'} bg-white text-gray-900 flex items-center justify-center`}
            style={{ backgroundColor: '#fff' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center justify-center w-full h-screen min-h-screen space-y-10 text-2xl font-semibold">
              <Link to="/models" onClick={() => setIsMenuOpen(false)} className="transition-colors hover:text-purple-600">{t.navigation.models}</Link>
              <Link to="/architecture" onClick={() => setIsMenuOpen(false)} className="transition-colors hover:text-purple-600">{t.navigation.architecture}</Link>
              <Link to="/experimental-layers" onClick={() => setIsMenuOpen(false)} className="transition-colors hover:text-purple-600">{t.navigation.experimentalLayers}</Link>
              <Link to="/alignment" onClick={() => setIsMenuOpen(false)} className="transition-colors hover:text-purple-600">{t.navigation.alignment}</Link>
              <Link to="/sustainability" onClick={() => setIsMenuOpen(false)} className="transition-colors hover:text-purple-600">{t.navigation.sustainability}</Link>
              <Link to="/team" onClick={() => setIsMenuOpen(false)} className="transition-colors hover:text-purple-600">{t.navigation.team}</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="transition-colors hover:text-purple-600">{t.navigation.contact}</Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-8 py-3 text-white transition-all rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:scale-105 shadow-purple-500/20"
              >
                <span className="text-xl">🚀</span>
                <span className="font-medium">{t.navigation.investNow}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </nav>

      <div className="pt-32">
        <Routes>
          <Route path="/models" element={<Models />} />
          <Route path="/models/1b" element={<Model1B />} />
          <Route path="/models/3b" element={<Model3B />} />
          <Route path="/models/9b" element={<Model9B />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/experimental-layers" element={<ExperimentalLayers />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/alignment" element={<Alignment />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/:section" element={<Legal />} />
          <Route path="/" element={
            <main className="relative min-h-screen">
              {/* Purple Particle Background */}
              <div className="absolute inset-0 bg-[url('/particles-bg.jpg')] bg-cover bg-center opacity-50" />

              {/* Hero Section */}
              <div className="relative z-10 px-6 pt-24 pb-32">
                <div className="w-full max-w-6xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                  >
                    <h1 className="mb-8 text-4xl font-light leading-tight md:text-6xl">
                      {t.home.title}
                    </h1>
                    <p className="max-w-3xl mx-auto mb-12 text-lg font-light text-gray-300 md:text-xl">
                      {t.home.subtitle}
                    </p>

                    <motion.div
                      className="flex flex-col gap-4 justify-center sm:flex-row"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link
                        to="/models"
                        className="px-8 py-4 text-center text-lg transition-all rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:scale-105 shadow-lg shadow-purple-500/20"
                      >
                        {t.home.exploreModels}
                      </Link>
                      <Link
                        to="/contact"
                        className="px-8 py-4 text-center text-lg transition-all border-2 border-purple-600 rounded-lg hover:bg-purple-900/30 hover:scale-105"
                      >
                        {t.home.getAccess}
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Services Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-32"
                  >
                    <h2 className="mb-16 text-3xl font-light text-center md:text-5xl">
                      {t.home.services.title}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                      {t.home.services.items.map((service: any, index: number) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                          className="p-8 transition-all border rounded-2xl bg-gradient-to-br from-purple-900/30 to-purple-800/10 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40 hover:scale-105"
                        >
                          <div className="mb-4 text-4xl">{service.icon}</div>
                          <h3 className="mb-4 text-xl font-light">{service.title}</h3>
                          <p className="text-gray-300">{service.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Why Anachroni Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-32"
                  >
                    <h2 className="mb-16 text-3xl font-light text-center md:text-5xl">
                      {t.home.whyAnachroni.title}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                      {t.home.whyAnachroni.items.map((item: any, index: number) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                          className="flex gap-6 p-8 transition-all border rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-800/5 backdrop-blur-sm border-purple-500/20 hover:border-purple-500/40"
                        >
                          <div className="text-5xl flex-shrink-0">{item.icon}</div>
                          <div>
                            <h3 className="mb-3 text-2xl font-light">{item.title}</h3>
                            <p className="text-lg text-gray-300">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Models Preview */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="mt-32"
                  >
                    <h2 className="mb-8 text-3xl font-light text-center md:text-5xl">
                      {t.home.ourModels}
                    </h2>
                    <p className="max-w-3xl mx-auto mb-16 text-lg text-center text-gray-300">
                      {t.home.modelsPreview}
                    </p>
                    <div className="flex justify-center gap-4">
                      <div className="relative group w-[25%]">
                        <img
                          src={multimodal}
                          alt="CapibaraMultimodal AI Visualization"
                          className="w-full rounded-2xl shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="relative group w-[25%]">
                        <img
                          src={safe}
                          alt="CapibaraSafe AI Visualization"
                          className="w-full rounded-2xl shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="relative group w-[25%]">
                        <img
                          src={embedded}
                          alt="CapibaraEmbedded AI Visualization"
                          className="w-full rounded-2xl shadow-[0_8px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="flex justify-center mt-12">
                      <Link
                        to="/models"
                        className="px-8 py-4 text-lg transition-all border-2 border-purple-600 rounded-lg hover:bg-purple-900/30 hover:scale-105"
                      >
                        {t.home.viewAllModels}
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </main>
          } />
        </Routes>
      </div>

      {/* Footer */}
      <footer className="py-4 mt-auto text-xs text-gray-400 border-t border-purple-500/20">
        <div className="flex flex-col items-center justify-between max-w-6xl gap-4 px-6 mx-auto md:flex-row">
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <span>{t.footer.copyright}</span>
            <div className="flex items-center gap-3">
              <a 
                href="https://creativecommons.org/licenses/by-sa/4.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition-colors hover:text-white"
              >
                <span>CC BY-SA 4.0</span>
              </a>
              <Link to="/legal/notice" className="transition-colors hover:text-white">{t.footer.legalNotice}</Link>
              <Link to="/legal/privacy" className="transition-colors hover:text-white">{t.footer.privacyPolicy}</Link>
              <Link to="/legal/investment" className="transition-colors hover:text-white">{t.footer.investmentInfo}</Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:info@anachroni.co" className="transition-colors hover:text-white">
              info@anachroni.co
            </a>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/anachroni-co/capibara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                <img 
                  src="https://img.shields.io/github/stars/anachroni-co/capibara?style=social" 
                  alt="GitHub"
                  className="h-5"
                />
              </a>
              <a 
                href="https://pypi.org/project/capibara/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                <img 
                  src="https://badge.fury.io/py/capibara.svg" 
                  alt="PyPI version"
                  className="h-5"
                />
              </a>
              <a 
                href="https://capibara.readthedocs.io/en/latest/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                <img 
                  src="https://readthedocs.org/projects/capibara/badge/?version=latest" 
                  alt="Documentation Status"
                  className="h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
          <SchemaMarkup type="Organization" data={organizationSchema} />
          <SEO
            title="Home"
            description="Anachroni designs and trains custom AI models optimized for specific tasks. We use the best curated datasets and the most optimized open-source models for maximum efficiency."
            keywords={[
              "AI", "Artificial Intelligence", "Custom AI Models", "LLM", "Large Language Model",
              "AI Training", "Curated Datasets", "Open Source AI", "Model Optimization",
              "Task-Specific AI", "Embedded AI", "Edge Computing", "Machine Learning", "Deep Learning",
              "CapibaraGPT", "SSM", "State Space Model", "Mamba", "Sustainable AI"
            ]}
          />
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;