import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Alabdaley Water Delivery in Bahrain | Qudaibiya",
  description: "Reliable drinking water and ice cube delivery service based in Qudaibiya, Manama. Call +973 3947 0652 for fast delivery. Pure water and ice cubes delivered across Bahrain.",
  keywords: "water delivery Bahrain, Qudaibiya water supplier, Alabdaley water, drinking water, Bahrain water cans, ice cubes delivery, water tank filling Bahrain",
  authors: [{ name: "ALABDALEY FOR SELLING WATER W.L.L" }],
  openGraph: {
    title: "Alabdaley Water Delivery | Bahrain",
    description: "Pure, fresh water and ice cubes delivered across Bahrain. Trusted water supplier in Qudaibiya, Manama.",
    url: "https://alabdaley.shop",
    siteName: "Alabdaley Water",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alabdaley Water Delivery | Bahrain",
    description: "Pure, fresh water and ice cubes delivered across Bahrain.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://alabdaley.shop",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ALABDALEY FOR SELLING WATER W.L.L",
              "image": "https://alabdaley.shop/logo.png",
              "url": "https://alabdaley.shop",
              "telephone": "+97339470652",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Block 321, Road 358, Building 56, Qudaibiya Ave",
                "addressLocality": "Manama",
                "addressRegion": "Capital Governorate",
                "postalCode": "321",
                "addressCountry": "BH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.2290757,
                "longitude": 50.5917639
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "08:00",
                  "closes": "23:30"
                }
              ],
              "priceRange": "BHD",
              "areaServed": "Bahrain",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Water and Ice Delivery Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Drinking Water Delivery"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Ice Cubes"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.google.com/maps/place/ALABDALEY+FOR+SELLING+WATER+W.L.L/@26.2286219,50.5915272,16.79z"
              ],
              "description": "Trusted water supplier in Qudaibiya, Manama, offering pure drinking water and ice cube delivery across Bahrain."
            })
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body
        className={`${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
