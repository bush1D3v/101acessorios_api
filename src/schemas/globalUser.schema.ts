import { z } from "nestjs-zod/z";

export const GlobalUserSchema = z.object({
  name: z.string({
    required_error: "O campo 'nome' é requirido.",
    invalid_type_error: "O campo 'nome' deve ser textual.",
  })
    .min(15, "O campo 'nome' deve ter pelo menos 15 caracteres.")
    .max(75, "O campo 'nome' deve ter no máximo 75 caracteres."),
  email: z.string({
    required_error: "O campo 'email' é requirido.",
    invalid_type_error: "O campo 'email' deve ser textual.",
  })
    .email({
      message: "O campo 'email' deve ser um email válido.",
    })
    .min(15, "O campo 'email' deve ter pelo menos 15 caracteres.")
    .max(75, "O campo 'email' deve ter no máximo 75 caracteres."),
  password: z.string({
    required_error: "O campo 'senha' é requirido.",
    invalid_type_error: "O campo 'senha' deve ser textual.",
  })
    .min(8, "O campo 'senha' deve ter pelo menos 8 caracteres.")
    .max(16, "O campo 'senha' deve ter no máximo 16 caracteres.")
});

export type GlobalUser = z.infer<typeof GlobalUserSchema>;
