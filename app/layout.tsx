import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Display, Source_Code_Pro } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

const noto = Noto_Sans_Display({
    weight: ["500"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-noto",
});

const source = Source_Code_Pro({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-source",
});

export const metadata: Metadata = {
    title: "Productize Landing",
    description: "Productize Landing",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Description no longer than 155 characters */}
                <meta name="description" content="Productized" />
                {/* Product Name */}
                <meta name="product-name" content="Productized" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta name="twitter:title" content="Productized" />
                <meta
                    name="twitter:description"
                    content="Launch your design by subscription service in minutes"
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.png"
                />

                {/* Open Graph data for Facebook */}
                <meta property="og:title" content="Productized" />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/productized"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Launch your design by subscription service in minutes"
                />
                <meta property="og:site_name" content="Productized" />
                <meta property="fb:admins" content="132951670226590" />

                {/* Open Graph data for LinkedIn */}
                <meta property="og:title" content="Productized" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/productized"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Launch your design by subscription service in minutes"
                />

                {/* Open Graph data for Pinterest */}
                <meta property="og:title" content="Productized" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/productized"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Launch your design by subscription service in minutes"
                />
            </head>
            <body
                className={`${inter.variable} ${noto.variable} ${source.variable} bg-palette-9 font-sans text-caption-2 text-palette-7 antialiased`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
