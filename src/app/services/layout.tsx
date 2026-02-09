import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Lindokuhle Ngcongo - Full-Stack Developer & IoT Engineer',
  description: 'Professional services including web development, API design, IoT solutions, cloud architecture, and more.',
  keywords: ['Services', 'Freelance', 'Web Development', 'API', 'IoT'],
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
