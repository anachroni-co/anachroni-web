import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';
import { Layer, Submodel, ExperimentalLayersTranslations } from '../types/translations';

const ExperimentalLayers = () => {
  const { language } = useLanguage();
  const t = translations[language].experimentalLayers as ExperimentalLayersTranslations;

  const experimentalLayers = [
    {
      name: "Platonic Layer",
      description: "Captures abstract reasoning and idealized forms for higher-order conceptualization."
    },
    {
      name: "Ockham Layer",
      description: "Selects the simplest, most probable hypotheses to reduce cognitive load and improve efficiency."
    },
    {
      name: "Ethics & Bias Filter",
      description: "Filters prompts and responses based on universal ethical principles and humanist alignment."
    },
    {
      name: "Synthetic Consciousness Layer",
      description: "Adds structured perception, simulated introspection, and coherence management across tasks."
    },
    {
      name: "MoaI Layer",
      description: "Enables deep integration of multimodal inputs (text, image, audio) using interaction matrices."
    },
    {
      name: "PxByEmbed Layer",
      description: "Fuses pixel and byte-level inputs into unified embeddings for robust multimodal reasoning."
    },
    {
      name: "State-Space Fusion Layer",
      description: "Leverages state-space dynamics (e.g. Mamba) for low-memory, long-context processing."
    },
    {
      name: "Uncertainty Layer",
      description: "Estimates confidence using Bayesian Dropout, Monte Carlo inference and ensemble techniques."
    },
    {
      name: "Goal Decomposer (PlaneadorTareas)",
      description: "Translates complex objectives into actionable subgoals, dynamically adapting to the environment."
    },
    {
      name: "RAG Selector Core",
      description: "Retrieves relevant information on-the-fly to boost factual grounding via vector memory."
    },
    {
      name: "OckhamEthicsSynth Layer",
      description: "Merges simplicity, self-checks, and ethical filters into a unified reasoning layer."
    }
  ];

  const specializedSubmodels = [
    {
      name: "AlephTILDESubmodel",
      description: "Combines logic rule learning (Aleph) and decision trees (TILDE) with attention-based selection."
    },
    {
      name: "DeepProbLog Submodel",
      description: "Merges neural and symbolic reasoning through probabilistic logic programming."
    },
    {
      name: "Dna_Capibara",
      description: "Optimized for genomics, integrating Kalman Filters, EM algorithms, and hierarchical Bayes."
    },
    {
      name: "CapibaraByte",
      description: "Token-free submodel operating directly on byte sequences for universal compression and speed."
    },
    {
      name: "CapibaraQuantum (Training Only)",
      description: "Uses passive quantum optimization for pruning, sparsity, and expert routing during training."
    },
    {
      name: "MetaBAMDP Layer",
      description: "Supports adaptive decision-making under uncertainty using Bayesian Adaptive MDPs."
    },
    {
      name: "Mixture-of-Rookies",
      description: "A lightweight Mixture-of-Experts (MoE) system optimized for sparse activation and quantization."
    }
  ];

  return (
    <>
      <SEO 
        title={t.title}
        description={t.subtitle}
        keywords={[
          "AI Architecture", "Experimental Layers", "CapibaraGPT",
          "Neural Networks", "AI Components", "Machine Learning",
          "Deep Learning", "AI Research", "Innovation"
        ]}
        lang={language}
      />
      <div className="min-h-screen pt-24 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Experimental Layers Section */}
          <div className="mb-16">
            <motion.h2 
              className="text-3xl font-light mb-8 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.layers.title}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.layers.items.map((layer: Layer, index: number) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                >
                  <h3 className="text-xl font-light mb-3">{layer.name}</h3>
                  <p className="text-gray-300 text-sm">{layer.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specialized Submodels Section */}
          <div>
            <motion.h2 
              className="text-3xl font-light mb-8 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.submodels.title}
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.submodels.items.map((model: Submodel, index: number) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                  className="bg-gradient-to-br from-indigo-900/30 to-indigo-800/10 rounded-xl p-6 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-500/40 transition-colors"
                >
                  <h3 className="text-xl font-light mb-3">{model.name}</h3>
                  <p className="text-gray-300 text-sm">{model.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 text-gray-300 text-center"
          >
            <p className="italic">
              {t.footer}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ExperimentalLayers;