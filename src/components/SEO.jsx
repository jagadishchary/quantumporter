
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogType = 'website',
  twitterHandle = '@quantumporter' 
}) {
  const siteName = 'Quantumporter';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = 'Stay informed with the latest quantum computing, physics, and technology news from Quantumporter.';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || description || defaultDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      <meta name="twitter:site" content={twitterHandle} />
    </Helmet>
  );
}
