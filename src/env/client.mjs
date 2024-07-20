import { formatErrors } from './format.mjs';
import { clientEnv, clientSchema } from './schema.mjs';

const _clientEnv = clientSchema.safeParse(clientEnv);

if (_clientEnv.success === false) {
  console.error('❌ Invalid environment variables:\n', ...formatErrors(_clientEnv.error.format()));
  throw new Error('Invalid environment variables');
}

// Validate client-side env are exposed to the client
for (const key of Object.keys(_clientEnv.data)) {
  if (!key.startsWith('NEXT_PUBLIC_')) {
    console.warn('❌ Invalid public environment variable name:\n', key);
    throw new Error('Invalid public environment variable name');
  }
}

export const env = _clientEnv.data;
