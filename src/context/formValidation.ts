import { Schema, object, z } from 'zod';

const schema = z.object({
    username: z.string(),
    password: z.string(),
});