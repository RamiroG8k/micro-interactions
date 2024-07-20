import { z } from 'zod';

export const serverSchema = z.object({
	NODE_ENV: z.enum(['development', 'production']).default('development')
});

export const clientSchema = z.object({
	NEXT_PUBLIC_BASE_URL: z.string().url()
});

/**
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] }}
 */
export const clientEnv = {
	NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
};
