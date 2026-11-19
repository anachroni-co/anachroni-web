export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

export const defaultSEO: SEOConfig = {
  title: 'Anachroni - Custom AI Models & Training',
  description: 'Anachroni designs and trains custom AI models optimized for specific tasks. We use the best curated datasets and the most optimized open-source models.',
  image: 'https://anachroni.co/LogoGuayT.png',
  url: 'https://anachroni.co',
  type: 'website'
};
