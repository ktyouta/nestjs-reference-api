import { z } from 'zod';

export const envSchema = z.object({
    PORT: z.string().transform(Number).refine(n => !isNaN(n), "PORT must be a number"),
    CORS_PROTOCOL: z.enum(["http://", "https://"]).optional(),
    CORS_DOMAIN: z.string().nonempty().optional(),
    CORS_PORT: z.string().transform(Number).refine(n => !isNaN(n), "CORS_PORT must be a number").optional(),
}).superRefine((val, ctx) => {

    const anyCorsDefined =
        val.CORS_PROTOCOL !== undefined ||
        val.CORS_DOMAIN !== undefined ||
        val.CORS_PORT !== undefined;

    const allCorsDefined =
        val.CORS_PROTOCOL !== undefined &&
        val.CORS_DOMAIN !== undefined &&
        val.CORS_PORT !== undefined;

    if (anyCorsDefined && !allCorsDefined) {

        ctx.addIssue({
            code: "custom",
            message:
                "If any of CORS_PROTOCOL, CORS_DOMAIN, or CORS_PORT is defined, all must be defined.",
        });
    }
});;