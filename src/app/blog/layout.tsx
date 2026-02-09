import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Lindokuhle Ngcongo - Articles on Web Development & IoT',
  description: 'Read articles about full-stack development, IoT, cloud architecture, and best practices.',
  keywords: ['Blog', 'Articles', 'Development', 'IoT', 'Technology'],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
