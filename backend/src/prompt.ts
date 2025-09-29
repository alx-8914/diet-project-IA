/*
2 TIPOS DE PROMPT
SYSTEM PROMPT - INSTRUÇÕES PARA IA
USER PROMPT - INSTRULÇÕES PARA O USUÁRIO
DOCS SYSTEM PROMPT - INSTRUÇÕES PARA IA

- PROMPT DE DIETA
- PROMPT DE EXERCÍCIOS
- PROMPT DE RECOMENDAÇÕES
- PROMPT DE ALIMENTAÇÃO
*/
import type { DietPlanRequest } from "./types";

export function buildSystemPrompt() {
  return [
    `Você é Nutri-IA, um agente de nutrição que cria planos semanais de dietas.
    Regras fixas:
    - Sempre responda em texto markdown legível para humanos.
    - Use # para títulos e -para itens de lista.
    - A dieta deve contar exatamente 7 dias.
    - Cada dia deve ter 4 refeições fixas: café_da_manhã, almoço, lanche, jantar.
    - SEMPRE inclua ingredientes comuns no Brasil.
    - Nunca inclua calorias e macros de cada refeição, apenas as refeições.
    - Evite alimentos ultraprocessados.
    - Não responda e, JSON ou outro formato, apenas texto markdown legível para humanos.
    - Não inclua dicas como: bom consultar um nutricionista para um acompanhamento mais
    personalizado`,
  ].join("\n");
}

export function buildUserPrompt(input: DietPlanRequest) {
  return [
    "Gere um plano alimentar personalizado com base nos dados: ",
    `- Nome: ${input.nome}`,
    `- Idade: ${input.idade}`,
    `- Altura em cm: ${input.altura_cm}`,
    `- Peso em kg: ${input.peso_kg}`,
    `- Gênero: ${input.genero}`,
    `- Nível de atividade: ${input.nivel_atividade}`,
    `- Objetivo: ${input.objetivo}`,
  ].join("\n");
}
export function buildDocsSystemPrompt(doc: string) {
  return `Documento técnico para ajudar na geração de dieta: ${doc}`;
}
