import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Lindokuhle Ngcongo - Full-Stack Developer & IoT Engineer',
  description: 'Welcome to my portfolio. I build scalable web applications and IoT solutions.',
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
