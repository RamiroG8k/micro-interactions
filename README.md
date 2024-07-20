# NEXT-GO ![Next-Go](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/64px-Nextjs-logo.svg.png)

🚀 A cutting-edge Next.js template powered by Bun and Zod for environment variable validation.

## 📝 Overview

Welcome to **Next-Go**! This project template is designed to kickstart your Next.js application with powerful features and best practices out of the box.

- **Environment Variable Validation**: Utilizing `zod` for robust type-safe environment variable handling.
- **Bun Integration**: Built-in support for the Bun runtime.
- **Optimized Configurations**: Fine-tuned `next.config.mjs` for exportable builds and unoptimized images.
- **Modern Tooling**: Equipped with TypeScript, TailwindCSS, ESLint, and more.

## ⚙️ Environment Variable Validation

We leverage the power of `zod` to ensure your environment variables are correctly defined and validated. Check out our schema definitions below:

```js
import { z } from 'zod';

export const serverSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development')
});

export const clientSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url()
});

...

// Usage example with type annotations
const baseUrl = clientEnv.NEXT_PUBLIC_BASE_URL;

```