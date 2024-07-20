import { clientEnv } from '@/env/schema.mjs';
import { bellota } from '@/fonts';

import type { LayoutProps } from '@/types';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
	title: {
		default: 'G8k | Micro Interactions',
		template: 'G8k | %s'
	},
	description: 'Developed by G8k',
	keywords: ['G8k', 'xyz'],
	metadataBase: new URL(clientEnv.NEXT_PUBLIC_BASE_URL),
	openGraph: {
		type: 'website'
	}
};

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={bellota.className}>{children}</body>
		</html>
	);
}
