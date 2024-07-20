import { env as client } from './client.mjs';
import { env as server } from './server.mjs';

const env = { ...client, ...server };

export default env;
