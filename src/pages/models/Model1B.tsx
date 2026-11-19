import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { capibara1b } from '@/assets';
import BenchmarkChart from '../../components/BenchmarkChart';
import ModelNavigation from '../../components/ModelNavigation';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

const Model1B = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const performanceData = [
    { label: "Latency", value: 0.8, color: "bg-blue-500" },
    { label: "Energy Efficiency", value: 0.9, color: "bg-green-500" },
    { label: "Accuracy", value: 0.7, color: "bg-purple-500" },
    { label: "Model Size", value: 0.3, color: "bg-yellow-500" }
  ];

  const comparisonData = [
    { label: "vs GPT-2 Small", value: 1.2, color: "bg-blue-500" },
    { label: "vs BERT Base", value: 1.1, color: "bg-green-500" },
    { label: "vs DistilBERT", value: 0.9, color: "bg-purple-500" }
  ];

  const modelSchema = {
    name: "CapibaraGPT 1B",
    description: t.models.model1B.subtitle,
    applicationCategory: "AI Model",
    operatingSystem: "Cross-platform",
    offers: {
      price: "Contact for pricing",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "150"
    },
    featureList: [
      "1 billion parameters optimized for efficiency",
      "Perfect for mobile and embedded devices",
      "Ultra-low latency responses",
      "Minimal power consumption"
    ],
    screenshot: capibara1b,
    softwareVersion: "1.0.0",
    releaseNotes: "Initial release with optimized performance for edge devices"
  };

  return (
    <>
      <SchemaMarkup type="Product" data={modelSchema} />
      <SEO 
        title={t.models.model1B.title}
        description={t.models.model1B.subtitle}
        keywords={[
          "AI", "Artificial Intelligence", "LLM", "1B Parameters",
          "Text Processing", "Edge Computing", "Embedded Systems",
          "Low Latency", "Efficient AI", "CapibaraGPT",
          "State Space Model", "SSM"
        ]}
        lang={language}
      />
      <div className="px-6 pt-24 pb-32 min-h-screen">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-12 md:grid-cols-2"
          >
            <div>
              <h1 className="mb-6 text-4xl font-light md:text-5xl">
                {t.models.model1B.title}
              </h1>
              <p className="mb-8 text-xl text-gray-300">
                {t.models.model1B.subtitle}
              </p>
              <div className="space-y-6">
                <div>
                  <h2 className="mb-4 text-2xl font-light">{t.models.model1B.keyFeatures}</h2>
                  <ul className="space-y-3">
                    {t.models.model1B.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="mr-2">⚡</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="mb-4 text-2xl font-light">{t.models.model1B.useCases}</h2>
                  <ul className="space-y-3">
                    {t.models.model1B.cases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <img 
                  src={capibara1b} 
                  alt={t.models.model1B.title} 
                  className="object-contain w-64 h-64 rounded-3xl shadow-[0_8px_30px_rgba(0,255,0,0.2)] group-hover:shadow-[0_8px_30px_rgba(0,255,0,0.4)] transition-all duration-300"
                  loading="eager"
                  width="256"
                  height="256"
                />
                <div className="absolute inset-0 bg-gradient-to-br rounded-3xl blur-3xl from-purple-600/20 to-purple-800/20 -z-10 group-hover:animate-pulse" />
                <div className="overflow-hidden absolute inset-0 rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 -translate-x-full via-purple-500/20 group-hover:translate-x-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent transition-transform duration-1000 delay-300 translate-x-full via-purple-500/20 group-hover:-translate-x-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Benchmarks Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-8 mt-16 md:grid-cols-2"
          >
            <BenchmarkChart 
              title="Performance Metrics" 
              data={performanceData} 
              maxValue={1} 
            />
            <BenchmarkChart 
              title="Model Comparison" 
              data={comparisonData} 
              maxValue={1.5} 
            />
          </motion.div>

          {/* Navigation */}
          <ModelNavigation
            currentModel="1B"
            nextModel={{
              name: "CapibaraGPT 3B",
              path: "/models/3b"
            }}
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(Model1B); 