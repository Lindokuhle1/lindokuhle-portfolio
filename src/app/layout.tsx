import type { Metadata, Viewport } from 'next';
import { ClientLayout } from './ClientLayout';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
};

export const metadata: Metadata = {
  title: 'Lindokuhle Ngcongo | Full-Stack Developer & IoT Engineer',
  description:
    'Full-stack developer and IoT engineer specializing in building scalable applications, real-time systems, and cloud solutions. Expertise in .NET, React, Node.js, and AWS.',
  authors: [{ name: 'Lindokuhle Ngcongo', url: 'https://lindokuhle.dev' }],
  keywords: [
    'Developer',
    'Full-Stack',
    'IoT',
    'Engineer',
    'Web Development',
    'Cloud Architecture',
    'Next.js',
    'React',
    '.NET',
  ],
  openGraph: {
    type: 'website',
    // url: 'https://lindokuhle.dev',
    title: 'Lindokuhle Ngcongo | Full-Stack Developer & IoT Engineer',
    description:
      'Full-stack developer and IoT engineer specializing in building scalable applications, real-time systems, and cloud solutions.',
    images: [
      {
        url: 'https://lindokuhle.dev/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   creator: '@lindokuhle',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" scroll-behavior="smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://lindokuhle.dev" />
      </head>
      <body className="bg-dark-900 text-dark-100">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
