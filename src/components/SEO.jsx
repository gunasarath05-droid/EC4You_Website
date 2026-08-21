import { useEffect } from 'react';

/**
 * Reusable SEO Head Manager Component
 * Dynamically injects and updates document title, meta tags, Open Graph, Twitter Cards, Canonical links & JSON-LD
 */
export default function SEO({
  title,
  description = "EC4YOU is a full-service digital marketing, web & mobile app development, branding, and SEO agency based in Chennai, India.",
  keywords = "digital marketing agency, web development, app development, SEO services, social media marketing, UI UX design, Chennai, India, EC4YOU",
  canonical = "https://www.ec4you.in",
  ogType = "website",
  ogImage = "https://www.ec4you.in/icon.png",
  robots = "index, follow",
  schema = null,
}) {
  const siteName = "EC4YOU";
  const fullTitle = title ? `${title} | ${siteName}` : `EC4YOU | Digital Marketing, Web & App Development Agency`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'title', fullTitle);
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords);
    setMetaTag('name', 'robots', robots);

    // 3. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', siteName);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:url', canonical);

    // 6. JSON-LD Structured Data
    const existingScript = document.getElementById('seo-dynamic-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'seo-dynamic-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Clean up dynamic schema tag on unmount
      const scriptToRemove = document.getElementById('seo-dynamic-json-ld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [fullTitle, description, keywords, canonical, ogType, ogImage, robots, schema]);

  return null;
}
