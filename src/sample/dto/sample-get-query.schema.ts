import { z } from 'zod';

export const SampleGetQuerySchema = z.object({
    id: z.string().transform((val) => (parseInt(val))),
});

export type SampleGetQueryType = z.infer<typeof SampleGetQuerySchema>;