export interface Layer {
  name: string;
  description: string;
}

export interface Submodel {
  name: string;
  description: string;
}

export interface ExperimentalLayersTranslations {
  title: string;
  subtitle: string;
  layers: {
    title: string;
    items: Layer[];
  };
  submodels: {
    title: string;
    items: Submodel[];
  };
  footer: string;
}

export interface SustainabilityTranslations {
  title: string;
  subtitle: string;
  metrics: {
    water: MetricItem;
    electricity: MetricItem;
    inference: MetricItem;
    training: MetricItem;
  };
  optimizations: {
    training: OptimizationSection;
    inference: OptimizationSection;
    impact: OptimizationSection;
  };
  scenarios: {
    ideal: ScenarioSection;
    limitations: ScenarioSection;
    savings: ScenarioSection;
  };
}

export interface MetricItem {
  title: string;
  standard: string;
  optimized: string;
  savings: string;
  description: string;
}

export interface OptimizationSection {
  title: string;
  items: string[];
}

export interface ScenarioSection {
  title: string;
  items: string[];
}

export interface ContactPoint {
  title: string;
  description: string;
  icon: string;
}

export interface TaxBenefits {
  title: string;
  description: string;
  maxDeduction: string;
  foreignInvestors: string;
}

export interface ContactForm {
  title: string;
  name: string;
  email: string;
  company: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  error: string;
}

export interface Investment {
  title: string;
  whyInvest: string;
  reasons: string[];
  getInTouch: string;
  contactText: string;
  taxBenefits: TaxBenefits;
  form: ContactForm;
}

export interface AlignmentMethod {
  title: string;
  description: string;
  items: string[];
}

export interface TeamAchievement {
  title: string;
  description: string;
  icon: string;
}

export interface ModelInfo {
  title: string;
  subtitle: string;
  keyFeatures: string;
  useCases: string;
  features: string[];
  cases: string[];
}

export interface Translations {
  navigation: {
    models: string;
    architecture: string;
    experimentalLayers: string;
    alignment: string;
    sustainability: string;
    team: string;
    contact: string;
    investNow: string;
  };
  home: {
    title: string;
    subtitle: string;
    exploreModels: string;
    getAccess: string;
  };
  models: {
    title: string;
    subtitle: string;
    model1B: ModelInfo;
    model3B: ModelInfo;
    model9B: ModelInfo;
  };
  architecture: {
    title: string;
    subtitle: string;
  };
  alignment: {
    title: string;
    subtitle: string;
    methods: AlignmentMethod[];
    values: string[];
  };
  sustainability: SustainabilityTranslations;
  team: {
    title: string;
    subtitle: string;
    achievements: TeamAchievement[];
    mission: string;
  };
  contact: {
    title: string;
    subtitle: string;
    investment: Investment;
    strategicFocus: {
      title: string;
      points: ContactPoint[];
    };
    businessModel: {
      title: string;
      points: ContactPoint[];
    };
    industryAlliances: {
      title: string;
      points: ContactPoint[];
    };
    mission: string;
  };
  experimentalLayers: ExperimentalLayersTranslations;
  footer: {
    copyright: string;
    legalNotice: string;
    privacyPolicy: string;
    investmentInfo: string;
  };
}

// Re-export types for backward compatibility
export type { ContactPoint as Point };
export type { ContactForm as FormData };