import z from 'zod';
import { clientSchema, serverSchema } from '@/env/schema.mjs';

declare module '*.svg' {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
};

type EnvSchemaType = z.infer<typeof clientSchema> & z.infer<typeof serverSchema>;

declare global {
    namespace NodeJS {
        interface ProcessEnv extends EnvSchemaType {}
    }
};
