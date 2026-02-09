import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Lindokuhle Ngcongo - Full-Stack Developer & IoT Engineer',
  description: 'View my portfolio of projects including IoT dashboards, APIs, e-commerce platforms, and cloud solutions.',
  keywords: ['Portfolio', 'Projects', 'Full-Stack', 'IoT', 'Web Development'],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
