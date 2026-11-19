import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'Organization' | 'Product' | 'Article' | 'WebSite';
  data: Record<string, any>;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    // Agregar schemas específicos según el tipo
    switch (type) {
      case 'Organization':
        return {
          ...baseSchema,
          '@type': 'Organization',
          foundingDate: '2024',
          industry: 'Artificial Intelligence',
          numberOfEmployees: '1-10',
          areaServed: 'Worldwide',
          knowsAbout: [
            'Artificial Intelligence',
            'Machine Learning',
            'Edge Computing',
            'Embedded Systems',
            'Deep Learning'
          ]
        };
      
      case 'Product':
        return {
          ...baseSchema,
          '@type': 'SoftwareApplication',
          applicationCategory: 'AI/ML Framework',
          operatingSystem: 'Cross-platform',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          }
        };
      
      case 'WebSite':
        return {
          ...baseSchema,
          '@type': 'WebSite',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://anachroni.co/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        };
      
      default:
        return baseSchema;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema(), null, 2)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;