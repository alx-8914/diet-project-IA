export interface DietData {
  nome: string;
  idade: number;
  altura_cm: number;
  peso_kg: number;
  genero: "masculino" | "feminino";
  nivel_atividade: "sendentario" | "2x_semana" | "4x_semana";
  objetivo: "perda_de_peso" | "hipertrofia" | "manter_massa_muscular";
}