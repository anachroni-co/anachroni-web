import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import SEO from '../components/SEO';

const Architecture = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const specifications = [
    {
      title: language === 'en' ? "Architecture Type" : "Tipo de Arquitectura",
      details: language === 'en' 
        ? "Selective State Space Model (SSSM), optimized variant of Mamba"
        : "Modelo de Espacio de Estados Selectivo (SSSM), variante optimizada de Mamba"
    },
    {
      title: language === 'en' ? "Model Sizes" : "Tamaños de Modelo",
      details: language === 'en' ? [
        "0.5B: For IoT & embedded devices",
        "3B: For smartphones and tablets",
        "5B: For laptops and mid-range AI servers"
      ] : [
        "0.5B: Para dispositivos IoT y embebidos",
        "3B: Para smartphones y tablets",
        "5B: Para portátiles y servidores de IA de gama media"
      ]
    },
    {
      title: language === 'en' ? "Training Backend" : "Backend de Entrenamiento",
      details: language === 'en' ? [
        "Google Cloud TPUs (v4-32)",
        "Fully JAX/XLA optimized pipelines",
        "Quantization-ready (INT8, TFLite export)"
      ] : [
        "Google Cloud TPUs (v4-32)",
        "Pipelines completamente optimizados con JAX/XLA",
        "Listo para cuantización (INT8, exportación TFLite)"
      ]
    },
    {
      title: language === 'en' ? "Input Format" : "Formato de Entrada",
      details: language === 'en' ? [
        "Byte-level (token-free) input processing",
        "Optional hex-compressed synthetic language representation"
      ] : [
        "Procesamiento de entrada a nivel de bytes (sin tokens)",
        "Representación de lenguaje sintético opcional comprimida en hexadecimal"
      ]
    },
    {
      title: language === 'en' ? "Sequence Handling" : "Manejo de Secuencias",
      details: language === 'en' ? [
        "Long-context ready with linear memory scaling",
        "Efficient state caching with low-latency transitions",
        "No need for KV cache in inference"
      ] : [
        "Preparado para contexto largo con escalado lineal de memoria",
        "Caché de estado eficiente con transiciones de baja latencia",
        "No requiere caché KV en inferencia"
      ]
    },
    {
      title: language === 'en' ? "Deployment Targets" : "Objetivos de Despliegue",
      details: language === 'en' ? [
        "ARM Axion CPUs (Google Cloud)",
        "Edge TPUs",
        "Android & Linux-based devices",
        "TensorFlow Lite & ONNX compatible"
      ] : [
        "CPUs ARM Axion (Google Cloud)",
        "Edge TPUs",
        "Dispositivos basados en Android y Linux",
        "Compatible con TensorFlow Lite y ONNX"
      ]
    },
    {
      title: language === 'en' ? "Core Modules" : "Módulos Principales",
      details: language === 'en' ? [
        "Synthetic Compression Layer (HexLZEmbed)",
        "Byte-Aware SSM Layer (MambaByte)",
        "Elastic Module Adapter",
        "Multi-Threaded Parallel Inference Engine",
        "Built-in Entropy Monitoring & Scoring Engine"
      ] : [
        "Capa de Compresión Sintética (HexLZEmbed)",
        "Capa SSM Consciente de Bytes (MambaByte)",
        "Adaptador de Módulo Elástico",
        "Motor de Inferencia Paralela Multi-Hilo",
        "Motor Integrado de Monitoreo y Puntuación de Entropía"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title={t.architecture.title}
        description={t.architecture.subtitle}
        keywords={[
          "AI Architecture", "Neural Networks", "State Space Models",
          "Edge Computing", "Cloud Computing", "Model Optimization",
          "CapibaraGPT", "SSM", "AI Infrastructure"
        ]}
        lang={language}
      />
      <div className="px-6 pt-24 pb-32 min-h-screen">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-light md:text-5xl">
              {t.architecture.title}
            </h1>
            <p className="mb-12 max-w-3xl text-xl text-gray-300">
              {t.architecture.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-8 md:grid-cols-2"
          >
            <div className="space-y-8">
              {specifications.slice(0, Math.ceil(specifications.length / 2)).map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="p-6 bg-gradient-to-br rounded-xl border backdrop-blur-sm from-purple-900/30 to-purple-800/10 border-purple-500/20"
                >
                  <h3 className="flex gap-2 items-center mb-4 text-xl font-light">
                    <span className="text-purple-400">⚙️</span> {spec.title}
                  </h3>
                  {Array.isArray(spec.details) ? (
                    <ul className="space-y-2 text-gray-300">
                      {spec.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="mt-1 text-purple-400">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300">{spec.details}</p>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="space-y-8">
              {specifications.slice(Math.ceil(specifications.length / 2)).map((spec, index) => (
                <motion.div
                  key={spec.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  className="p-6 bg-gradient-to-br rounded-xl border backdrop-blur-sm from-purple-900/30 to-purple-800/10 border-purple-500/20"
                >
                  <h3 className="flex gap-2 items-center mb-4 text-xl font-light">
                    <span className="text-purple-400">⚙️</span> {spec.title}
                  </h3>
                  {Array.isArray(spec.details) ? (
                    <ul className="space-y-2 text-gray-300">
                      {spec.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="mt-1 text-purple-400">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300">{spec.details}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-12 italic text-center text-gray-300"
          >
            {language === 'en' 
              ? "This powerful yet efficient foundation allows CapibaraGPT to operate on-device or in distributed systems, maintaining performance and interpretability across a wide range of AI applications."
              : "Esta base potente pero eficiente permite que CapibaraGPT opere en el dispositivo o en sistemas distribuidos, manteniendo el rendimiento y la interpretabilidad en una amplia gama de aplicaciones de IA."
            }
          </motion.p>

          {/* Documentación Técnica Completa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16"
          >
            <h2 className="mb-8 text-3xl font-light text-center">
              {language === 'en' ? 'Complete Technical Documentation' : 'Documentación Técnica Completa'}
            </h2>
            
            {/* Estado del Proyecto */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="p-4 mb-8 text-center bg-gradient-to-r rounded-xl border backdrop-blur-sm from-green-900/20 to-emerald-900/20 border-green-500/20"
            >
              <div className="flex gap-2 justify-center items-center mb-2">
                <span className="text-2xl">🏆</span>
                <h3 className="text-lg font-light text-green-200">
                  {language === 'en' ? 'Project Status: 100% FUNCTIONAL' : 'Estado del Proyecto: 100% FUNCIONAL'}
                </h3>
              </div>
              <p className="text-sm text-green-300">
                {language === 'en' 
                  ? "CapibaraGPT-v2 is completely operational with 0 import errors, native JAX integrated, and TPU v4-32 optimizations active"
                  : "CapibaraGPT-v2 está completamente operativo con 0 errores de importación, JAX nativo integrado y optimizaciones TPU v4-32 activas"
                }
              </p>
            </motion.div>

            {/* Logros Técnicos Recientes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="mb-12"
            >
              <h3 className="mb-6 text-xl font-light text-center text-purple-200">
                {language === 'en' ? 'Recent Technical Achievements' : 'Logros Técnicos Recientes'}
              </h3>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: "⚡", title: language === 'en' ? "Native JAX" : "JAX Nativo", desc: language === 'en' ? "Fully integrated autonomous system" : "Sistema autónomo completamente integrado" },
                  { icon: "🎯", title: language === 'en' ? "VQ System" : "Sistema VQ", desc: language === 'en' ? "64/128 VQ codes operational" : "64/128 códigos VQ operativos" },
                  { icon: "🔧", title: language === 'en' ? "Import Fixes" : "Corrección Imports", desc: language === 'en' ? "98+ files with resolved imports" : "98+ archivos con imports resueltos" },
                  { icon: "🧠", title: language === 'en' ? "Modular Architecture" : "Arquitectura Modular", desc: language === 'en' ? "15/15 main modules operational" : "15/15 módulos principales operativos" }
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 2.0 + index * 0.1 }}
                    className="p-4 text-center bg-gradient-to-br rounded-lg border backdrop-blur-sm from-purple-900/20 to-purple-800/10 border-purple-500/20"
                  >
                    <div className="mb-2 text-2xl">{achievement.icon}</div>
                    <h4 className="mb-1 font-light text-purple-200">{achievement.title}</h4>
                    <p className="text-xs text-gray-400">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Secciones de Documentación */}
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
              
              {/* Quick Start */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="p-6 bg-gradient-to-br rounded-xl border backdrop-blur-sm from-blue-900/30 to-blue-800/10 border-blue-500/20"
              >
                <h3 className="flex gap-2 items-center mb-4 text-xl font-light">
                  <span className="text-blue-400">🚀</span> 
                  {language === 'en' ? 'Quick Start' : 'Inicio Rápido'}
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="p-3 font-mono rounded-lg bg-blue-900/20">
                    <div className="mb-1 text-blue-300">import capibara</div>
                    <div className="text-green-300">from capibara.core import ModularCapibaraModel</div>
                  </div>
                  <p className="text-xs">{language === 'en' ? 'Zero import errors, fully functional system' : 'Cero errores de importación, sistema completamente funcional'}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs text-blue-300 rounded bg-blue-500/20">{language === 'en' ? 'Installation' : 'Instalación'}</span>
                    <span className="px-2 py-1 text-xs text-blue-300 rounded bg-blue-500/20">{language === 'en' ? 'Configuration' : 'Configuración'}</span>
                    <span className="px-2 py-1 text-xs text-blue-300 rounded bg-blue-500/20">{language === 'en' ? 'Examples' : 'Ejemplos'}</span>
                  </div>
                </div>
              </motion.div>

              {/* TPU v4 Optimizations */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.4 }}
                className="p-6 bg-gradient-to-br rounded-xl border backdrop-blur-sm from-orange-900/30 to-orange-800/10 border-orange-500/20"
              >
                <h3 className="flex gap-2 items-center mb-4 text-xl font-light">
                  <span className="text-orange-400">⚡</span> 
                  {language === 'en' ? 'TPU v4-32 Optimizations' : 'Optimizaciones TPU v4-32'}
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between items-center p-2 rounded bg-orange-900/20">
                    <span>{language === 'en' ? 'Performance' : 'Rendimiento'}</span>
                    <span className="font-mono text-orange-300">275+ TFLOPS</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-orange-900/20">
                    <span>{language === 'en' ? 'Memory' : 'Memoria'}</span>
                    <span className="font-mono text-orange-300">32GB HBM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-orange-900/20">
                    <span>{language === 'en' ? 'Kernels' : 'Kernels'}</span>
                    <span className="font-mono text-orange-300">8 Categories</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs text-orange-300 rounded bg-orange-500/20">{language === 'en' ? 'Mesh Config' : 'Config Mesh'}</span>
                    <span className="px-2 py-1 text-xs text-orange-300 rounded bg-orange-500/20">Flash Attention</span>
                    <span className="px-2 py-1 text-xs text-orange-300 rounded bg-orange-500/20">{language === 'en' ? 'Parallel Scan' : 'Scan Paralelo'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Vector Quantization */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.6 }}
                className="p-6 bg-gradient-to-br rounded-xl border backdrop-blur-sm from-teal-900/30 to-teal-800/10 border-teal-500/20"
              >
                <h3 className="flex gap-2 items-center mb-4 text-xl font-light">
                  <span className="text-teal-400">🎯</span> 
                  {language === 'en' ? 'Vector Quantization (VQ)' : 'Vector Quantization (VQ)'}
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="p-3 font-mono rounded-lg bg-teal-900/20">
                    <div className="mb-1 text-teal-300">vq_codes=64  # TPU v4</div>
                    <div className="text-teal-300">vq_codes=128 # TPU v6</div>
                  </div>
                  <p className="text-xs">{language === 'en' ? 'VQbit Layer with adaptive quantization' : 'VQbit Layer con cuantización adaptativa'}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs text-teal-300 rounded bg-teal-500/20">VQbit Layer</span>
                    <span className="px-2 py-1 text-xs text-teal-300 rounded bg-teal-500/20">{language === 'en' ? 'Codebook' : 'Libro de Códigos'}</span>
                    <span className="px-2 py-1 text-xs text-teal-300 rounded bg-teal-500/20">{language === 'en' ? 'Adaptive ML' : 'ML Adaptativo'}</span>
                  </div>
                </div>
              </motion.div>

              {/* JAX Native */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.8 }}
                className="p-6 bg-gradient-to-br rounded-xl border backdrop-blur-sm from-purple-900/30 to-purple-800/10 border-purple-500/20"
              >
                <h3 className="flex gap-2 items-center mb-4 text-xl font-light">
                  <span className="text-purple-400">🔧</span> 
                  {language === 'en' ? 'Native JAX Implementation' : 'Implementación JAX Nativa'}
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>{language === 'en' ? 'Autonomous JAX system' : 'Sistema JAX autónomo'}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>{language === 'en' ? 'Robust fallbacks' : 'Fallbacks robustos'}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span>{language === 'en' ? 'No vendor lock-in' : 'Sin vendor lock-in'}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs text-purple-300 rounded bg-purple-500/20">{language === 'en' ? 'JIT Compilation' : 'Compilación JIT'}</span>
                    <span className="px-2 py-1 text-xs text-purple-300 rounded bg-purple-500/20">Auto-grad</span>
                    <span className="px-2 py-1 text-xs text-purple-300 rounded bg-purple-500/20">XLA</span>
                  </div>
                </div>
              </motion.div>

              {/* Intelligent Agents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 3.0 }}
                className="p-6 bg-gradient-to-br rounded-xl border backdrop-blur-sm from-pink-900/30 to-pink-800/10 border-pink-500/20"
              >
                <h3 className="flex gap-2 items-center mb-4 text-xl font-light">
                  <span className="text-pink-400">🤖</span> 
                  {language === 'en' ? 'Intelligent Agents' : 'Agentes Inteligentes'}
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="p-3 font-mono rounded-lg bg-pink-900/20">
                    <div className="text-pink-300">CapibaraAgentFactory</div>
                    <div className="text-gray-400">.create_agent()</div>
                  </div>
                  <p className="text-xs">{language === 'en' ? '5 specialized agent types with factory patterns' : '5 tipos de agentes especializados con factory patterns'}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs text-pink-300 rounded bg-pink-500/20">{language === 'en' ? 'Research' : 'Investigación'}</span>
                    <span className="px-2 py-1 text-xs text-pink-300 rounded bg-pink-500/20">{language === 'en' ? 'Analysis' : 'Análisis'}</span>
                    <span className="px-2 py-1 text-xs text-pink-300 rounded bg-pink-500/20">{language === 'en' ? 'Creative' : 'Creatividad'}</span>
                  </div>
                </div>
              </motion.div>

              {/* Sparsity & Monitoring */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 3.2 }}
                className="p-6 bg-gradient-to-br rounded-xl border backdrop-blur-sm from-green-900/30 to-green-800/10 border-green-500/20"
              >
                <h3 className="flex gap-2 items-center mb-4 text-xl font-light">
                  <span className="text-green-400">📊</span> 
                  {language === 'en' ? 'Sparsity & Monitoring' : 'Sparsity y Monitoreo'}
                </h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex justify-between items-center p-2 rounded bg-green-900/20">
                    <span>{language === 'en' ? 'Memory Reduction' : 'Reducción Memoria'}</span>
                    <span className="font-mono text-green-300">65%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded bg-green-900/20">
                    <span>{language === 'en' ? 'Real-time Metrics' : 'Métricas Tiempo Real'}</span>
                    <span className="font-mono text-green-300">✓</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs text-green-300 rounded bg-green-500/20">MoR</span>
                    <span className="px-2 py-1 text-xs text-green-300 rounded bg-green-500/20">{language === 'en' ? 'Cost Tracking' : 'Seguimiento Costos'}</span>
                    <span className="px-2 py-1 text-xs text-green-300 rounded bg-green-500/20">{language === 'en' ? 'Health' : 'Estado'}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Información de Versión */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3.4 }}
              className="p-6 mt-8 text-center bg-gradient-to-r rounded-xl border backdrop-blur-sm from-indigo-900/20 to-purple-900/20 border-indigo-500/20"
            >
              <div className="flex gap-4 justify-center items-center mb-4">
                <span className="text-3xl">📚</span>
                <div>
                  <h3 className="text-lg font-light text-indigo-200">
                    {language === 'en' ? 'CapibaraGPT-v2 Documentation v3.0.0' : 'Documentación CapibaraGPT-v2 v3.0.0'}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {language === 'en' ? 'Complete technical documentation available' : 'Documentación técnica completa disponible'}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 justify-center">
                <span className="inline-flex items-center px-3 py-1 text-xs text-green-300 rounded-full bg-green-500/20">
                  {language === 'en' ? '100% Functional' : '100% Funcional'}
                </span>
                <span className="inline-flex items-center px-3 py-1 text-xs text-blue-300 rounded-full bg-blue-500/20">
                  {language === 'en' ? 'JAX Native' : 'JAX Nativo'}
                </span>
                <span className="inline-flex items-center px-3 py-1 text-xs text-purple-300 rounded-full bg-purple-500/20">
                  {language === 'en' ? 'TPU v4 Ready' : 'TPU v4 Listo'}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Architecture;