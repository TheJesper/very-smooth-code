import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Very Smooth Code',
  description: 'Developer tools hub - CSS helpers, snippets, cheatsheets, and more',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-base3 text-base01 min-h-screen">{children}</body>
    </html>
  );
}
