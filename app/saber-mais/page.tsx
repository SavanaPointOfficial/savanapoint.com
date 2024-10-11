'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from 'sonner' // Importação do Sonner
import { Loader2, ArrowLeft } from "lucide-react" // Importando a seta de voltar
import { useRouter } from 'next/navigation'


export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simula o envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsLoading(false)

    // Sonner toast
    toast.success('Formulário enviado! Obrigado por entrar em contato. Responderemos em breve.')
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 relative">
      {/* Seta de Voltar */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 flex items-center text-violet-600 hover:text-violet-800"
      >
        <ArrowLeft className="h-6 w-6 mr-2" />
        Voltar
      </button>
      
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Entre em Contato</CardTitle>
            <CardDescription>Preencha o formulário abaixo para nos enviar uma mensagem.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome completo" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Seu endereço de email" required type="email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="area">Área de Interesse</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione uma área" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saude">Saúde Digital</SelectItem>
                      <SelectItem value="agricultura">Agricultura Inteligente</SelectItem>
                      <SelectItem value="mobilidade">Mobilidade Urbana</SelectItem>
                      <SelectItem value="seguranca">Segurança Digital</SelectItem>
                      <SelectItem value="financas">Inclusão Financeira</SelectItem>
                      <SelectItem value="inovacao">Inovação Social</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Sua mensagem" required />
                </div>
              </div>
              <CardFooter className="px-0 pt-6">
                <Button className="w-full bg-violet-600 hover:bg-violet-700" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Enviar Mensagem'
                  )}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
