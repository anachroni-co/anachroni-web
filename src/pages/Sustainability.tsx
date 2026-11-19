import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { 
  WaterIcon,
  EnergyIcon,
  CostIcon,
  TrainingIcon,
  TpuIcon,
  AxionIcon,
  ImpactIcon,
  ModelIcon,
  ResourceIcon,
  TotalIcon
} from '@/assets';

const Sustainability = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const metrics = [
    {
      title: "Water Usage",
      standard: "~1,200L (300M)",
      optimized: "~50L (300M)",
      savings: "96% ↓",
      description: "Per model size (AWS GPU vs TPU v6 liquid cooling)",
      Icon: WaterIcon
    },
    {
      title: "Electricity",
      standard: "0.1 W/token",
      optimized: "0.018 W/token",
      savings: "82% ↓",
      description: "Consumption per token (GPU vs Axion ARM)",
      Icon: EnergyIcon
    },
    {
      title: "Inference Cost",
      standard: "$0.10",
      optimized: "$0.015",
      savings: "85% ↓",
      description: "Per 1M tokens (GPU vs Axion + FP8)",
      Icon: CostIcon
    },
    {
      title: "Training Cost",
      standard: "$2.50",
      optimized: "$1.00",
      savings: "60% ↓",
      description: "Per chip/hour (estimated reference values)",
      Icon: TrainingIcon
    }
  ];

  const optimizations = [
    {
      title: "Training on TPU v6",
      items: [
        "Liquid cooling: 50% less water than AWS/Azure",
        "Example 10T: $49.1M → $2.4M/year (estimated)",
        "100% renewable energy in europe-west4",
        "Native BF16/TF32 support"
      ],
      Icon: TpuIcon
    },
    {
      title: "Inference on Axion ARM",
      items: [
        "82% less energy: 0.018W vs 0.1W per token",
        "Native auto-scaling in GKE",
        "FP8 + BitNet 1.58: 65% less consumption",
        "Scale to zero when no traffic"
      ],
      Icon: AxionIcon
    },
    {
      title: "Environmental Impact",
      items: [
        "1B model: 0.7t vs 3.5t CO₂ (80% reduction)",
        "10T model: 5,400t vs 27,000t CO₂",
        "Liquid cooling efficiency",
        "Strategic cold region placement"
      ],
      Icon: ImpactIcon
    }
  ];

  const scenarios = [
    {
      title: "Model Costs",
      items: [
        "300M: $140 training, $0.015/M tokens",
        "1B: $440 training, $0.022/M tokens",
        "50B: $9,600 training, $0.050/M tokens",
        "10T: $2.4M training, $0.480/M tokens"
      ],
      Icon: ModelIcon
    },
    {
      title: "Resource Usage",
      items: [
        "300M: 0.5 MWh, 1,200L water",
        "1B: 1.4 MWh, 3,600L water",
        "50B: 54 MWh, 135,000L water",
        "10T: 10,800 MWh, 27M water"
      ],
      Icon: ResourceIcon
    },
    {
      title: "Total Impact",
      items: [
        "300M: 0.25t CO₂, $140 training",
        "1B: 0.70t CO₂, $440 training",
        "50B: 27t CO₂, $9,600 training",
        "10T: 5,400t CO₂, $2.4M training"
      ],
      Icon: TotalIcon
    }
  ];

  return (
    <div className="min-h-screen px-6 pt-24 pb-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl font-light md:text-5xl">
            {t.sustainability.title}
          </h1>
          <p className="max-w-3xl mb-12 text-xl text-gray-300">
            {t.sustainability.subtitle}
          </p>
          <p className="max-w-3xl mb-12 text-sm italic text-gray-400">
            {language === 'en' 
              ? "* Google Cloud Q4 2024 - Estimated costs and times are approximate reference values"
              : "* Google Cloud Q4 2024 - Los costes y tiempos son valores de referencia aproximados"
            }
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid gap-8 mb-16 md:grid-cols-2">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 border rounded-3xl bg-gradient-to-br from-purple-900/30 to-purple-800/10 backdrop-blur-sm border-purple-500/20"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 text-gray-400">
                  <metric.Icon />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-light">
                    {language === 'en' ? metric.title : {
                      "Water Usage": "Uso de Agua",
                      "Electricity": "Electricidad",
                      "Inference Cost": "Coste de Inferencia",
                      "Training Cost": "Coste de Entrenamiento"
                    }[metric.title]}
                  </h3>
                  <div className="grid grid-cols-3 gap-4 mb-2">
                    <div className="text-sm text-gray-400">
                      {language === 'en' ? "Standard" : "Estándar"}
                    </div>
                    <div className="text-sm text-gray-400">
                      {language === 'en' ? "Optimized" : "Optimizado"}
                    </div>
                    <div className="text-sm text-gray-400">
                      {language === 'en' ? "Savings" : "Ahorro"}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-2">
                    <div>{metric.standard}</div>
                    <div>{metric.optimized}</div>
                    <div className="text-green-400">{metric.savings}</div>
                  </div>
                  <p className="text-sm text-gray-400">
                    {language === 'en' ? metric.description : {
                      "Per model size (AWS GPU vs TPU v6 liquid cooling)": "Por tamaño de modelo (AWS GPU vs TPU v6 enfriamiento líquido)",
                      "Consumption per token (GPU vs Axion ARM)": "Consumo por token (GPU vs Axion ARM)",
                      "Per 1M tokens (GPU vs Axion + FP8)": "Por 1M tokens (GPU vs Axion + FP8)",
                      "Per chip/hour (estimated reference values)": "Por chip/hora (valores de referencia estimados)"
                    }[metric.description]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optimizations */}
        <div className="grid gap-8 mb-16 md:grid-cols-3">
          {optimizations.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 border rounded-3xl bg-gradient-to-br from-purple-900/30 to-purple-800/10 backdrop-blur-sm border-purple-500/20"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 text-gray-400">
                  <section.Icon />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-xl font-light">
                    {language === 'en' ? section.title : {
                      "Training on TPU v6": "Entrenamiento en TPU v6",
                      "Inference on Axion ARM": "Inferencia en Axion ARM",
                      "Environmental Impact": "Impacto Ambiental"
                    }[section.title]}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-300">
                        • {language === 'en' ? item : {
                          "Liquid cooling: 50% less water than AWS/Azure": "Enfriamiento líquido: 50% menos agua que AWS/Azure",
                          "Example 10T: $49.1M → $2.4M/year (estimated)": "Ejemplo 10T: $49.1M → $2.4M/año (estimado)",
                          "100% renewable energy in europe-west4": "Energía 100% renovable en europe-west4",
                          "Native BF16/TF32 support": "Soporte nativo BF16/TF32",
                          "82% less energy: 0.018W vs 0.1W per token": "82% menos energía: 0.018W vs 0.1W por token",
                          "Native auto-scaling in GKE": "Auto-escalado nativo en GKE",
                          "FP8 + BitNet 1.58: 65% less consumption": "FP8 + BitNet 1.58: 65% menos consumo",
                          "Scale to zero when no traffic": "Escala a cero sin tráfico",
                          "1B model: 0.7t vs 3.5t CO₂ (80% reduction)": "Modelo 1B: 0.7t vs 3.5t CO₂ (80% reducción)",
                          "10T model: 5,400t vs 27,000t CO₂": "Modelo 10T: 5,400t vs 27,000t CO₂",
                          "Liquid cooling efficiency": "Eficiencia de enfriamiento líquido",
                          "Strategic cold region placement": "Ubicación estratégica en regiones frías"
                        }[item]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scenarios */}
        <div className="grid gap-8 md:grid-cols-3">
          {scenarios.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-8 border rounded-3xl bg-gradient-to-br from-purple-900/30 to-purple-800/10 backdrop-blur-sm border-purple-500/20"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 text-gray-400">
                  <section.Icon />
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-xl font-light">
                    {language === 'en' ? section.title : {
                      "Model Costs": "Costes de Modelos",
                      "Resource Usage": "Uso de Recursos",
                      "Total Impact": "Impacto Total"
                    }[section.title]}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-300">
                        • {language === 'en' ? item : {
                          "300M: $140 training, $0.015/M tokens": "300M: $140 entrenamiento, $0.015/M tokens",
                          "1B: $440 training, $0.022/M tokens": "1B: $440 entrenamiento, $0.022/M tokens",
                          "50B: $9,600 training, $0.050/M tokens": "50B: $9,600 entrenamiento, $0.050/M tokens",
                          "10T: $2.4M training, $0.480/M tokens": "10T: $2.4M entrenamiento, $0.480/M tokens",
                          "300M: 0.5 MWh, 1,200L water": "300M: 0.5 MWh, 1,200L agua",
                          "1B: 1.4 MWh, 3,600L water": "1B: 1.4 MWh, 3,600L agua",
                          "50B: 54 MWh, 135,000L water": "50B: 54 MWh, 135,000L agua",
                          "10T: 10,800 MWh, 27M water": "10T: 10,800 MWh, 27M agua",
                          "300M: 0.25t CO₂, $140 training": "300M: 0.25t CO₂, $140 entrenamiento",
                          "1B: 0.70t CO₂, $440 training": "1B: 0.70t CO₂, $440 entrenamiento",
                          "50B: 27t CO₂, $9,600 training": "50B: 27t CO₂, $9,600 entrenamiento",
                          "10T: 5,400t CO₂, $2.4M training": "10T: 5,400t CO₂, $2.4M entrenamiento"
                        }[item]}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sustainability; 