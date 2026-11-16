import { envVariablesSchema } from '../schemas/env-variables.schema.js';

export const validateConfig = (
  values: Record<string, any>,
): Record<string, any> => {
  const validatedData = envVariablesSchema.parse(values);

  return validatedData;
};
