import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';

const Alignment = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const biasReductionMethods = [
    {
      title: "Ethics & Bias Filter Layer",
      description: "A dedicated internal layer filters both inputs and outputs using a multilingual set of ethical rules grounded in:",
      items: [
        "The Universal Declaration of Human Rights",
        "UN Guidelines on AI and Labor",
        "The Humanistic AI Charter"
      ]
    },
    {
      title: "Synthetic Language Compression",
      description: "By converting inputs into a structured, symbolic format, CapibaraGPT minimizes cultural, racial, and gender-based linguistic ambiguity—reducing bias at the representational level."
    },
    {
      title: "Dual-Phase Validation",
      description: "Inputs are checked before processing, and outputs are re-evaluated after generation to ensure they remain within ethical bounds and do not propagate harmful content."
    },
    {
      title: "Entropy & Ambiguity Detection",
      description: "A specialized entropy module detects high-ambiguity regions in responses. In those cases, the model shifts into a reflective or questioning mode rather than making assumptions."
    },
    {
      title: "Transparent Ethical Design",
      description: "Unlike black-box AI systems, CapibaraGPT makes its ethical filters explicit, modular, and auditable—allowing users and institutions to validate the model's behavior."
    }
  ];

  const humanValues = [
    "Non-discriminatory",
    "Non-manipulative",
    "Respectful of cultural and individual differences",
    "Supportive of democratic and inclusive discourse"
  ];

  return (
    <>
      <SEO 
        title={t.alignment.title}
        description={t.alignment.subtitle}
        keywords={[
          "AI Ethics", "Bias Reduction", "Ethical AI",
          "Human Values", "AI Alignment", "Ethical Design",
          "CapibaraGPT", "AI Safety", "Responsible AI"
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
            <h1 className="mb-6 text-4xl font-light md:text-5xl">
              {t.alignment.title}
            </h1>
            <p className="max-w-3xl mb-12 text-xl text-gray-300">
              {t.alignment.subtitle}
            </p>
          </motion.div>

          {/* Bias Reduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {t.alignment.methods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="p-6 border bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl backdrop-blur-sm border-purple-500/20"
              >
                <h3 className="mb-3 text-xl font-light">{method.title}</h3>
                <p className="mb-4 text-gray-300">{method.description}</p>
                {method.items && (
                  <ul className="space-y-2 text-gray-300 list-disc list-inside">
                    {method.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Human Values Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="mb-6 text-2xl font-light">Human Values</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {t.alignment.values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                  className="p-6 border bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl backdrop-blur-sm border-purple-500/20"
                >
                  <p className="text-gray-300">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Alignment;