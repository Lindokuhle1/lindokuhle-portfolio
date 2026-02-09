import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Lindokuhle Ngcongo - Full-Stack Developer & IoT Engineer',
  description: 'Learn about my background, skills, experience, and expertise in full-stack development and IoT engineering.',
  keywords: ['About', 'Experience', 'Skills', 'Education', 'Full-Stack'],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
