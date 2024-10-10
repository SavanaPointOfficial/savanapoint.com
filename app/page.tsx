import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRight, Book, Check, GraduationCap, Star } from "lucide-react";
import Image from "next/image";

export default function CourseBundlePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Impulsione suas Habilidades com Nossos Pacotes de Cursos
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Escolha entre nossos pacotes de cursos cuidadosamente selecionados ou crie seu próprio caminho de aprendizado personalizado.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Fundamentos de Desenvolvimento Web</CardTitle>
              <CardDescription>Domine o básico do desenvolvimento web</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Fundamentos de Desenvolvimento Web"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Essenciais de HTML5 & CSS3</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>JavaScript para Iniciantes</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Design Responsivo para Web</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Adicionar ao Pacote - R$199</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Essenciais de Ciência de Dados</CardTitle>
              <CardDescription>Entre no mundo da análise de dados</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Essenciais de Ciência de Dados"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Python para Ciência de Dados</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Estatística e Probabilidade</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Noções Básicas de Machine Learning</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Adicionar ao Pacote - R$249</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Domínio em Marketing Digital</CardTitle>
              <CardDescription>Aprenda a expandir sua presença online</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Domínio em Marketing Digital"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Fundamentos de SEO</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Marketing em Mídias Sociais</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Estratégias de Marketing de Conteúdo</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Adicionar ao Pacote - R$179</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Personalize Seu Caminho de Aprendizado</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox id="course1" />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="course1">JavaScript Avançado</Label>
                    <p className="text-gray-500">Domine conceitos modernos de JavaScript</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox id="course2" />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="course2">Fundamentos de React.js</Label>
                    <p className="text-gray-500">Crie interfaces de usuário dinâmicas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox id="course3" />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="course3">SQL para Análise de Dados</Label>
                    <p className="text-gray-500">Consultas e análise de bancos de dados</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox id="course4" />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="course4">Princípios de Design UX/UI</Label>
                    <p className="text-gray-500">Crie interfaces amigáveis para o usuário</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox id="course5" />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="course5">Noções Básicas de Computação em Nuvem</Label>
                    <p className="text-gray-500">Entenda a infraestrutura de nuvem</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox id="course6" />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="course6">Fundamentos de Cibersegurança</Label>
                    <p className="text-gray-500">Proteja sistemas e redes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="px-8 py-3 text-lg">
            <GraduationCap className="mr-2 h-5 w-5" />
            Crie Seu Pacote de Aprendizado
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Economize até 30% ao criar um pacote de cursos personalizado!
          </p>
        </div>

        <div className="mt-16 bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Por Que Escolher Nossos Pacotes de Cursos?
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Star className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Instrutores Especialistas</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Aprenda com profissionais da indústria com anos de experiência
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Book className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Currículo Abrangente</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Cursos aprofundados cobrindo todos os aspectos de cada tópico
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Aprendizado Flexível</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Estude no seu próprio ritmo com acesso vitalício aos materiais dos cursos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            Precisa de ajuda para escolher os cursos certos? <a href="mailto:info@waza.co.com" className="font-medium text-indigo-600 hover:text-indigo-500">Converse com um consultor de aprendizado <ArrowRight className="inline h-4 w-4" /></a>
          </p>
        </div>
      </div>
    </div>
  );
}
