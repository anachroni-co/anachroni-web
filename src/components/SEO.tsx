import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords: string[];
  lang?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  lang = 'en',
  image = 'https://anachroni.co/LogoGuayT.png',
  url = 'https://anachroni.co',
  type = 'website',
  noindex = false
}) => {
  const siteTitle = 'Anachroni';
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={fullTitle}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: keywords.join(', '),
        },
        {
          name: 'robots',
          content: noindex ? 'noindex, nofollow' : 'index, follow',
        },
        {
          name: 'googlebot',
          content: noindex ? 'noindex, nofollow' : 'index, follow',
        },
        // Open Graph
        {
          property: 'og:title',
          content: fullTitle,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:site_name',
          content: 'Anachroni',
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: fullTitle,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'twitter:title',
          content: fullTitle,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ]}
    />
  );
};

export default SEO; 