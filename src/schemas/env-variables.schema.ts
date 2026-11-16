import z from 'zod';

export const envVariablesSchema = z.object({
  APP_PORT: z.coerce.number().int().min(1).max(65535),
  APP_HOST: z.string(),
});
