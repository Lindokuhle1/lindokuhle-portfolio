import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Lindokuhle Ngcongo - Full-Stack Developer & IoT Engineer',
  description: 'Get in touch with me. I respond to inquiries within 24 hours.',
  keywords: ['Contact', 'Email', 'LinkedIn', 'GitHub'],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
