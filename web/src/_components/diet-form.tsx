'use client'

import { z } from 'zod'
import { Card } from '@/components/ui/card'
import { Utensils } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';


const dietSchema = z.object({
  nome: z.string().min(2, "O nome é obrigatório"),
  idade: z.number().int().positive(),
  altura_cm: z.number("A altura deve ser um número").positive(),
  peso_kg: z.number().positive(),
  genero: z.enum(["masculino", "feminino"], { error: "O gênero é obrigatório" }),
  nivel_atividade: z.enum(["sendentario", "2x_semana", "4x_semana"], { error: "O nível de atividade é obrigatório" }),
  objetivo: z.enum(["perda_de_peso", "hipertrofia", "manter_massa_muscular"], { error: "Selecione o objetivo" })
})

type DieatSchemaFormData = z.infer<typeof dietSchema>;

interface DieietFormProps {
  onSubmit: (data: DieatSchemaFormData) => void;
}

export function DietForm({ onSubmit }: DieietFormProps) {
  const form = useForm<DieatSchemaFormData>({
    resolver: zodResolver(dietSchema),
    defaultValues: {
      nome: "",
      idade: undefined,
      altura_cm: undefined,
      peso_kg: undefined,
      genero: undefined,
      nivel_atividade: undefined,
      objetivo: undefined
    },
  })


  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <Card className='w-full max-w-2xl border-0'>
        <div className='p-8'>
          <div className='text-center mb-8'>
            <div className='flex items-center justify-center mb-4 mx-auto'>
              <Utensils className='w-12 h-14 text-green-500' />
            </div>
            <h1 className='text-3xl font-bold text-green-500 mb-2'>Calcule sua dieta</h1>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='space-y-6'
            >
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-gray-900 flex items-center'>Dados Pessoais</h3>
              </div>
                {/**CAMPOS NOME E IDADE */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <FormField
                  control={form.control}
                  name='nome'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder='Digite seu nome...'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='idade'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Idade</FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          step='any'
                          {...form.register('idade', {
                            setValueAs: (v) => v === "" ? undefined : Number(v)
                          })}
                          placeholder='Exp: 30'
                        />
                      </FormControl>
                    </FormItem>
                  )}


                />
              </div>
                 {/**CAMPOS PESO, GENERO E ALTURA */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <FormField
                  control={form.control}
                  name='peso_kg'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Peso em Kg</FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          step='any'
                          {...form.register('peso_kg', {
                            setValueAs: (v) => v === "" ? undefined : parseFloat(v)
                          })}
                          placeholder='Exp: 70.5'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='altura_cm'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Altura em cm</FormLabel>
                      <FormControl>
                        <Input
                          type='number'
                          step='any'
                          {...form.register('altura_cm', {
                            setValueAs: (v) => v === "" ? undefined : parseFloat(v)
                          })}
                          placeholder='Exp: 1.65'
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='genero'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Genero</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='Selecione um gênero'/>
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='masculino'>Masculino</SelectItem>
                            <SelectItem value='feminino'>Feminino</SelectItem>
                          </SelectContent>
                        </Select>
                    </FormItem>
                  )}
                />
              </div>

                 {/**CAMMPOS ATIVIDADE, NÍVEL E OBJETIVO */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                <FormField
                  control={form.control}
                  name='nivel_atividade'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nível de Atividade</FormLabel>
                        <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='Selecione seu nível de atividade'/>
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='sendentario'>Sendentário</SelectItem>
                            <SelectItem value='2x_semana'>2x semana</SelectItem>
                            <SelectItem value='4x_semana'>4x semana</SelectItem>
                          </SelectContent>
                        </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='objetivo'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Objetivo</FormLabel>
                        <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className='w-full'>
                              <SelectValue placeholder='Selecione o seu objetivo'/>
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='perda_de_peso'>Perda de Peso</SelectItem>
                            <SelectItem value='hipertrofia'>Hipertrofia</SelectItem>
                            <SelectItem value='manter_massa_muscular'>Manter Massa Muscular</SelectItem>
                          </SelectContent>
                        </Select>
                    </FormItem>
                  )}
                />
              </div>

              <Button className='w-full mt-4 hover:opacity-90 cursor-pointer'>
                Gerar minha dieta
              </Button>

            </form>
          </Form>

        </div>
      </Card>
    </div>
  )
}