import { MetadataRoute } from 'next';
import { clientEnv } from '@/env/schema.mjs';

const baseUrl = clientEnv.NEXT_PUBLIC_BASE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routesMap = [''].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString()
    }));

    return [...routesMap];
}
