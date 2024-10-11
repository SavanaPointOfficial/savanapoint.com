import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Building2, Shield, Smartphone, Tractor, Train, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-48 overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/6508841/pexels-photo-6508841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Innovation for a better future"
            width={1920}
            height={1080}
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                  SavanaPoint: Inovação que Transforma Vidas
                </h1>
                <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto">
                  Liderando a Revolução Tecnológica em Moçambique com Funcionalidade, Beleza e Inclusão Social
                </p>
              </div>
            <Link href="/saber-mais">
            <Button className="bg-white text-violet-800 hover:bg-violet-100 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Saiba Mais
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-16 text-violet-800">
              Nossas Áreas de Atuação
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600 max-w-3xl mx-auto">
              A SavanaPoint atua em áreas essenciais, levando tecnologia acessível e sustentável para todos, com foco na inclusão social e no impacto positivo. Exploramos os cinco pilares essenciais que nos definem: Funcionalidade, Utilidade, Beleza, Ergonomia e o Cliente no Centro de Tudo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Saúde Digital */}
              <Card className="bg-violet-50 border-violet-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-violet-800">
                    <Smartphone className="mr-2 h-6 w-6" />
                    Saúde Digital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Plataformas de telemedicina e monitoramento de pacientes para garantir que todos, mesmo em áreas remotas, tenham acesso a serviços de saúde de qualidade.
                  </p>
                </CardContent>
              </Card>
              
              {/* Card 2: Agricultura Inteligente */}
              <Card className="bg-violet-50 border-violet-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-violet-800">
                    <Tractor className="mr-2 h-6 w-6" />
                    Agricultura Inteligente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Soluções de agricultura de precisão, conectividade rural e inovação tecnológica para pequenos e grandes produtores, promovendo sustentabilidade e maior produtividade.
                  </p>
                </CardContent>
              </Card>
              
              {/* Card 3: Mobilidade Urbana Inteligente */}
              <Card className="bg-violet-50 border-violet-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-violet-800">
                    <Train className="mr-2 h-6 w-6" />
                    Mobilidade Urbana Inteligente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Desenvolvimento de aplicativos que melhoram o transporte público, promovem caronas compartilhadas e incentivam o uso de transportes sustentáveis.
                  </p>
                </CardContent>
              </Card>
              
              {/* Card 4: Segurança Digital */}
              <Card className="bg-violet-50 border-violet-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-violet-800">
                    <Shield className="mr-2 h-6 w-6" />
                    Segurança Digital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Soluções robustas de criptografia e autenticação para proteger dados pessoais e financeiros, promovendo privacidade e segurança nas plataformas digitais.
                  </p>
                </CardContent>
              </Card>
              
              {/* Card 5: Inclusão Financeira */}
              <Card className="bg-violet-50 border-violet-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-violet-800">
                    <Users className="mr-2 h-6 w-6" />
                    Inclusão Financeira
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Aplicativos financeiros acessíveis que promovem a inclusão de comunidades de baixa renda no sistema financeiro, com taxas justas e microcréditos.
                  </p>
                </CardContent>
              </Card>
              
              {/* Card 6: Inovação com Inclusão Social */}
              <Card className="bg-violet-50 border-violet-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-violet-800">
                    <Building2 className="mr-2 h-6 w-6" />
                    Inovação com Inclusão Social
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Investimos em capacitação tecnológica, educação digital e parcerias com ONGs para garantir que ninguém seja deixado para trás na era digital.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Porque Escolher a SavanaPoint */}
        <section className="py-20 md:py-32 bg-violet-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-16 text-violet-800">
              Porque Escolher a SavanaPoint?
            </h2>
            <p className="text-lg text-center mb-8 text-gray-600 max-w-3xl mx-auto">
              Nossas soluções são construídas sobre cinco pilares essenciais que garantem qualidade, acessibilidade e impacto social duradouro.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-violet-800">Funcionalidade</h3>
                <p className="text-gray-600">
                  Cada solução é projetada para ser altamente funcional, atendendo às necessidades reais dos nossos clientes, com foco em eficiência e usabilidade.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-violet-800">Utilidade</h3>
                <p className="text-gray-600">
                  Criamos soluções inovadoras que são indispensáveis para o dia a dia, garantindo impacto positivo em diferentes setores, como saúde e agricultura.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-violet-800">Beleza</h3>
                <p className="text-gray-600">
                  Nossas soluções não são apenas funcionais, mas também atraentes, oferecendo uma experiência visual agradável e moderna.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-violet-800">Ergonomia</h3>
                <p className="text-gray-600">
                  Priorizamos a usabilidade e conforto, garantindo que nossas soluções sejam fáceis de usar, promovendo uma experiência agradável.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chamada para Ação */}
        <section className="py-20 md:py-32 bg-violet-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-2xl">
                Junte-se à Revolução Digital de Moçambique
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                Seja você um agricultor, empreendedor, ou profissional da saúde, a SavanaPoint oferece as ferramentas certas para transformar sua realidade e construir um futuro melhor.
              </p>
              <Link href="/saber-mais">
              <Button className="bg-white text-violet-800 hover:bg-violet-100 text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Faça Parte
              </Button>
              </Link>
              
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-violet-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm">
                © 2024 SavanaPoint. Todos os direitos reservados.
              </p>
              <nav className="flex gap-6">
                <Link className="text-sm hover:underline underline-offset-4 transition-colors" href="#">
                  Termos de Serviço
                </Link>
                <Link className="text-sm hover:underline underline-offset-4 transition-colors" href="#">
                  Política de Privacidade
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
