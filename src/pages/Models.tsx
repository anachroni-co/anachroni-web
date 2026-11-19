import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import CapibaraPlaceholder from '../components/CapibaraPlaceholder';

interface Model {
  name: string;
  description: string;
  variant: '1b' | '3b' | '9b';
  link: string;
  fallbackText: string;
  capibaraImage: string;
}

interface ModelCardProps {
  model: Model;
  index: number;
  t: any;
  language: string;
}

const ModelCard = React.memo(({ model, index, t, language }: ModelCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="relative group h-[600px]"
  >
    <Link to={model.link} className="block h-full">
              <div className="flex flex-col h-full overflow-hidden relative card-neumorphic rounded-3xl">
        {/* Contenido principal */}
        <div className="relative z-10 p-8 flex flex-col h-full">
          <h3 className="mb-4 text-2xl font-light">{model.name}</h3>
          <p className="mb-4 text-base leading-relaxed text-gray-300">{model.description}</p>
          
          {/* Características específicas de cada modelo */}
          <div className="mb-6 space-y-3 text-sm">
            {model.variant === '1b' && (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 font-medium">💻 {t.models.model1B.specs.optimization}:</span>
                  <span className="text-gray-300">{t.models.model1B.specs.optimizationDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 font-medium">⚡ {t.models.model1B.specs.latency}:</span>
                  <span className="text-gray-300">{t.models.model1B.specs.latencyDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 font-medium">🔋 {t.models.model1B.specs.efficiency}:</span>
                  <span className="text-gray-300">{t.models.model1B.specs.efficiencyDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 font-medium">📱 {t.models.model1B.specs.useCasesLabel}:</span>
                  <span className="text-gray-300">{t.models.model1B.specs.useCasesDesc}</span>
                </div>
              </>
            )}
            {model.variant === '3b' && (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-medium">⚖️ {t.models.model3B.specs.balance}:</span>
                  <span className="text-gray-300">{t.models.model3B.specs.balanceDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-medium">🎯 {t.models.model3B.specs.precision}:</span>
                  <span className="text-gray-300">{t.models.model3B.specs.precisionDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-medium">🔄 {t.models.model3B.specs.adaptability}:</span>
                  <span className="text-gray-300">{t.models.model3B.specs.adaptabilityDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-medium">💼 {t.models.model3B.specs.useCasesLabel}:</span>
                  <span className="text-gray-300">{t.models.model3B.specs.useCasesDesc}</span>
                </div>
              </>
            )}
            {model.variant === '9b' && (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 font-medium">🚀 {t.models.model9B.specs.power}:</span>
                  <span className="text-gray-300">{t.models.model9B.specs.powerDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 font-medium">🧠 {t.models.model9B.specs.reasoning}:</span>
                  <span className="text-gray-300">{t.models.model9B.specs.reasoningDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 font-medium">🎨 {t.models.model9B.specs.creativity}:</span>
                  <span className="text-gray-300">{t.models.model9B.specs.creativityDesc}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400 font-medium">🏢 {t.models.model9B.specs.useCasesLabel}:</span>
                  <span className="text-gray-300">{t.models.model9B.specs.useCasesDesc}</span>
                </div>
              </>
            )}
          </div>
          
          {/* Imagen de capibara real integrada */}
          <div className="relative mb-6 neumorphic-dark-inset rounded-2xl">
            <div className="w-full h-56 flex items-center justify-center p-4">
              <img
                src={model.capibaraImage}
                alt={`${language === 'en' ? 'Real Capybara' : 'Capibara real'} ${model.variant.toUpperCase()}`}
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-lg"
                onError={(e) => {
                  console.error('Error loading image:', e.currentTarget.src);
                  e.currentTarget.style.backgroundColor = '#374151';
                  e.currentTarget.style.display = 'flex';
                  e.currentTarget.style.alignItems = 'center';
                  e.currentTarget.style.justifyContent = 'center';
                  e.currentTarget.innerHTML = `<div style="color: white; text-align: center; font-size: 14px;">${model.fallbackText}<br/>Error cargando imagen</div>`;
                }}
                onLoad={() => console.log('✅ Image loaded successfully:', model.capibaraImage)}
              />
            </div>
            <div className="absolute bottom-3 left-3 text-white">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-slate-900/80 backdrop-blur-sm">
                {model.variant.toUpperCase()} Model
              </span>
            </div>
          </div>

          {/* Placeholder artístico como elemento decorativo */}
          <div className="relative mt-auto">
            <div className="absolute -top-4 -right-4 w-20 h-20 opacity-30 transition-opacity duration-300 group-hover:opacity-50">
              <CapibaraPlaceholder 
                variant={model.variant}
                className="w-full h-full"
              />
            </div>
            <div className="text-sm font-medium text-purple-400">
              → {t.models.exploreDetails}
            </div>
          </div>
        </div>
      </div>
      
    </Link>
  </motion.div>
));

const Models = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const models: Model[] = [
    {
      name: t.models.model1B.title,
      description: t.models.model1B.subtitle,
      variant: '1b',
      link: '/models/1b',
      fallbackText: '1B',
      capibaraImage: '/images/Capibara1Bb.webp'
    },
    {
      name: t.models.model3B.title,
      description: t.models.model3B.subtitle,
      variant: '3b',
      link: '/models/3b',
      fallbackText: '3B',
      capibaraImage: '/images/Capibara3Bn.webp'
    },
    {
      name: t.models.model9B.title,
      description: t.models.model9B.subtitle,
      variant: '9b',
      link: '/models/9b',
      fallbackText: '9B',
      capibaraImage: '/images/Capibara9Bn.webp'
    }
  ];



  return (
    <div className="relative px-8 pt-24 pb-32 min-h-screen">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-8 text-5xl font-light md:text-6xl">
            {t.models.title}
          </h1>
          <p className="mb-16 max-w-4xl text-2xl leading-relaxed text-gray-300">
            {t.models.subtitle}
          </p>
        </motion.div>



        {/* Grid de modelos mejorado */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={
            <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 rounded-full border-b-2 border-purple-500 animate-spin"></div>
            </div>
          }>
            {models.map((model, index) => (
              <ModelCard key={model.name} model={model} index={index} t={t} language={language} />
            ))}
          </Suspense>
        </div>


      </div>
    </div>
  );
};

export default Models;