import React from 'react'
import { Helmet } from 'react-helmet-async'

const HelmetMeta = ({ 
  title = 'Samuel Ngugi | Full-Stack Developer',
  description = 'Full-Stack Developer building responsive, secure web applications with React, Next.js, Django, and Flask. Based in Nairobi, Kenya.',
  keywords = 'Full-Stack Developer, React, Next.js, Django, Flask, JavaScript, TypeScript, Python, Web Developer, Nairobi, Kenya',
  image = 'https://samuel-pi-three.vercel.app//og-image.jpg',
  url = 'https://samuel-pi-three.vercel.app/',
  type = 'website',
  publishedTime = '2024-06-01',
  modifiedTime = '2024-12-01',
  author = 'Samuel Ngugi'
}) => {
  const siteTitle = 'Samuel Ngugi | Full-Stack Developer'
  const fullTitle = title === siteTitle ? title : `${title} | Samuel Ngugi`

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Samuel Ngugi" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Technology" />
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ngugilovesyou" />
      <meta name="twitter:creator" content="@ngugilovesyou" />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="https://res.cloudinary.com/dxwzdftzm/image/upload/c_thumb,g_face,r_max,w_32,h_32/v1784570856/IMG_20260720_210543_x5shnl.jpg" sizes="32x32" />
      <link rel="icon" type="image/png" href="https://res.cloudinary.com/dxwzdftzm/image/upload/c_thumb,g_face,r_max,w_16,h_16/v1784570856/IMG_20260720_210543_x5shnl.jpg" sizes="16x16" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://res.cloudinary.com/dxwzdftzm/image/upload/c_thumb,g_face,r_max,w_180,h_180/v1784570856/IMG_20260720_210543_x5shnl.jpg" />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data - Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Samuel Ngugi",
          "givenName": "Samuel",
          "familyName": "Ngugi",
          "jobTitle": "Full-Stack Developer",
          "url": "https://samuel-pi-three.vercel.app/",
          "email": "amsamgittau@gmail.com",
          "telephone": "+254758750963",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nairobi",
            "addressCountry": "Kenya"
          },
          "sameAs": [
            "https://github.com/ngugilovesyou",
            "https://www.linkedin.com/in/samuel-gitau-361350261/",
            "https://x.com/k_ntycoon",
            "https://www.instagram.com/ngugilovesyou_/"
          ],
          "knowsAbout": [
            "React", "Next.js", "TypeScript", "JavaScript",
            "Django", "Flask", "Python", "PostgreSQL",
            "Tailwind CSS", "REST APIs", "Authentication",
            "Payment Integration", "M-Pesa", "PayPal"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Moringa School"
          }
        })}
      </script>

      {/* Structured Data - Website */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Samuel Ngugi - Full-Stack Developer Portfolio",
          "url": "https://samuel-pi-three.vercel.app/",
          "description": description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://samuel-pi-three.vercel.app//search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  )
}

export default HelmetMeta