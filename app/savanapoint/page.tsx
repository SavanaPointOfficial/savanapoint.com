import { Button } from "@/components/ui/button"
import { ArrowRight, Bus, Car, Bike, Zap } from "lucide-react"
import Image from "next/image"

export default function UrbanMobilityBlog() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
    
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-invert lg:prose-xl">
          <h1 className="text-3xl font-bold text-gray-100 mb-6">
            Mobilidade Urbana Inteligente: O Papel da SavanaPoint no Futuro das Cidades Moçambicanas
          </h1>
          
          <Image
            src="https://images.pexels.com/photos/6280948/pexels-photo-6280948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Mobilidade urbana em Moçambique"
            width={800}
            height={400}
            className="rounded-lg shadow-md mb-8"
          />

          <p className="text-gray-300 mb-8">
            A mobilidade urbana é um dos maiores desafios enfrentados pelas cidades em rápido crescimento, e Moçambique não é exceção. Com o aumento populacional e a falta de infraestrutura adequada, problemas como congestionamento, poluição e transporte público ineficiente afetam diariamente a vida dos cidadãos. Nesse cenário, a SavanaPoint está utilizando a tecnologia para transformar o futuro da mobilidade nas cidades moçambicanas, promovendo soluções inteligentes que visam melhorar o transporte público, incentivar caronas compartilhadas e apoiar o uso de meios de transporte sustentáveis.
          </p>

          <h2 className="text-2xl font-semibold text-gray-100 mt-12 mb-4">
            Os Problemas Atuais de Mobilidade Urbana
          </h2>
          <p className="text-gray-300 mb-4">
            As cidades moçambicanas enfrentam vários problemas no que diz respeito à mobilidade urbana. Alguns dos principais desafios incluem:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-300">
            <li>
              <strong className="text-gray-100">Congestionamento de Trânsito:</strong> O número crescente de veículos nas cidades, combinado com a falta de planejamento urbano adequado, resulta em congestionamentos frequentes, especialmente nas áreas centrais. Esse problema leva a longos tempos de deslocamento e uma maior emissão de gases poluentes.
            </li>
            <li>
              <strong className="text-gray-100">Transporte Público Ineficiente:</strong> O transporte público em muitas áreas é insuficiente para atender à demanda crescente. A frota de ônibus é limitada, e os horários são irregulares, forçando muitos cidadãos a dependerem de táxis ou de transportes informais, que nem sempre são seguros ou acessíveis.
            </li>
            <li>
              <strong className="text-gray-100">Falta de Infraestrutura para Transportes Sustentáveis:</strong> Embora o uso de bicicletas ou transporte elétrico possa ajudar a reduzir o impacto ambiental, a infraestrutura para esses meios de transporte é praticamente inexistente nas cidades moçambicanas. As ciclovias são poucas, e a falta de segurança nas estradas desencoraja o uso de alternativas sustentáveis.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-100 mt-12 mb-4">
            Soluções Inteligentes para Transporte Público e Privado
          </h2>
          <p className="text-gray-300 mb-6">
            A SavanaPoint está à frente da revolução da mobilidade urbana inteligente em Moçambique, desenvolvendo uma série de soluções tecnológicas que visam melhorar tanto o transporte público quanto o privado.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <Bus className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Aplicativos de Gestão de Transporte Público</h3>
              <p className="text-gray-300">A SavanaPoint está desenvolvendo aplicativos que ajudam a otimizar o transporte público, permitindo que os usuários vejam em tempo real a localização dos ônibus, os horários e rotas disponíveis.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <Car className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Caronas Compartilhadas</h3>
              <p className="text-gray-300">Através de plataformas digitais, os cidadãos podem se conectar com outras pessoas que fazem trajetos similares, reduzindo o número de carros nas ruas e, consequentemente, os congestionamentos.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <Bike className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Transporte Sustentável</h3>
              <p className="text-gray-300">A SavanaPoint está desenvolvendo soluções de compartilhamento de bicicletas, com estações em áreas estratégicas das cidades, permitindo que os usuários façam pequenos trajetos sem a necessidade de carros ou motos.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-md">
              <Zap className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-100">Veículos Elétricos</h3>
              <p className="text-gray-300">A SavanaPoint está trabalhando para promover o uso de veículos elétricos, integrando essa opção nos aplicativos de transporte.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-100 mt-12 mb-4">
            A Importância de Cidades Mais Conectadas e Sustentáveis
          </h2>
          <p className="text-gray-300 mb-6">
            Cidades mais conectadas e sustentáveis não apenas melhoram a mobilidade urbana, mas também oferecem uma melhor qualidade de vida para seus cidadãos. A SavanaPoint acredita que a tecnologia desempenha um papel crucial em tornar as cidades moçambicanas mais inteligentes, conectando pessoas, veículos e infraestruturas de maneira eficiente e segura.
          </p>

          <h2 className="text-2xl font-semibold text-gray-100 mt-12 mb-4">
            Impactos da Tecnologia na Qualidade de Vida Urbana
          </h2>
          <p className="text-gray-300 mb-6">
            A mobilidade urbana inteligente pode ter um impacto profundo na qualidade de vida das pessoas. As iniciativas da SavanaPoint visam transformar as cidades moçambicanas em locais mais eficientes, sustentáveis e agradáveis para viver.
          </p>

          <h2 className="text-2xl font-semibold text-gray-100 mt-12 mb-4">
            Conclusão
          </h2>
          <p className="text-gray-300 mb-6">
            A SavanaPoint está desempenhando um papel fundamental na transformação da mobilidade urbana em Moçambique, utilizando a tecnologia para enfrentar os desafios do trânsito, da poluição e do transporte público ineficiente. Com soluções inteligentes e sustentáveis, a startup está ajudando a construir cidades mais conectadas, acessíveis e seguras, garantindo uma melhor qualidade de vida para todos os cidadãos.
          </p>
          <p className="text-gray-300 mb-6">
            À medida que a SavanaPoint continua a expandir suas iniciativas e promover a inovação no setor de mobilidade, Moçambique estará cada vez mais preparado para enfrentar os desafios de urbanização, crescimento populacional e mudanças climáticas. O futuro das cidades moçambicanas, com o apoio da tecnologia, será mais sustentável, eficiente e centrado nas necessidades das pessoas.
          </p>

          <div className="mt-12 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Saiba mais sobre as soluções de mobilidade da SavanaPoint</h3>
            <p className="text-gray-300 mb-4">Quer conhecer mais sobre como a SavanaPoint está revolucionando a mobilidade urbana em Moçambique? Entre em contato conosco para descobrir como podemos ajudar a transformar sua cidade.</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              Entre em contato
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </article>
      </main>

    </div>
  )
}