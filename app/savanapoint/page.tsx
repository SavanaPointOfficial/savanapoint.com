import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
     

      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Como a SavanaPoint Está Transformando o Acesso à Saúde em Moçambique
          </h1>
          
          <Image
            src="https://images.pexels.com/photos/5726838/pexels-photo-5726838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Healthcare in Mozambique"
            width={800}
            height={400}
            className="rounded-lg shadow-md mb-8"
          />

          <p className="text-lg text-gray-700 mb-8">
            A saúde é um direito fundamental, mas em muitos países, incluindo Moçambique, o acesso a serviços médicos de qualidade continua sendo um desafio. Com uma população em grande parte rural e uma infraestrutura de saúde limitada, as barreiras ao atendimento médico são significativas. Pensando nisso, a SavanaPoint, uma startup moçambicana focada em soluções tecnológicas, está trazendo inovações digitais para transformar o setor de saúde no país, oferecendo alternativas inclusivas e acessíveis para milhões de cidadãos.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            Problemas Enfrentados no Sistema de Saúde Tradicional
          </h2>
          <p className="text-gray-700 mb-6">
            O sistema de saúde tradicional em Moçambique enfrenta diversos desafios. Entre os principais estão a escassez de profissionais de saúde, a falta de infraestrutura adequada em áreas remotas e o difícil acesso a tratamentos médicos. Pacientes em áreas rurais precisam, muitas vezes, percorrer longas distâncias para chegar aos hospitais mais próximos, enfrentando custos altos e longas filas de espera. Além disso, a falta de recursos médicos especializados, como diagnósticos avançados e medicamentos, agrava o cenário, principalmente para as comunidades mais vulneráveis.
          </p>
          <p className="text-gray-700 mb-6">
            A pandemia de COVID-19 evidenciou ainda mais essas falhas, com hospitais sobrecarregados e um sistema de saúde que lutou para atender a demanda crescente. Nesse contexto, ficou claro que o uso da tecnologia seria uma ferramenta essencial para melhorar a distribuição de serviços médicos e permitir uma resposta mais ágil e eficiente às necessidades da população.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            Soluções da SavanaPoint para Ampliar o Acesso
          </h2>
          <p className="text-gray-700 mb-6">
            A SavanaPoint está comprometida em melhorar o acesso à saúde em Moçambique por meio de soluções digitais inovadoras. Um dos principais focos da startup é usar a tecnologia para aproximar médicos e pacientes, superando barreiras geográficas e estruturais.
          </p>
          <p className="text-gray-700 mb-4">Entre as soluções desenvolvidas pela SavanaPoint estão:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Plataforma de Telemedicina:</strong> A SavanaPoint criou uma plataforma que permite que os pacientes agendem consultas com médicos de maneira remota, diretamente de seus dispositivos móveis. Isso reduz a necessidade de deslocamentos e oferece um atendimento mais rápido para casos não emergenciais. A telemedicina também facilita o acompanhamento de doenças crônicas e o monitoramento de pacientes que vivem em áreas de difícil acesso.
            </li>
            <li>
              <strong>Entrega Digital de Medicamentos:</strong> Outro desafio enfrentado pelos cidadãos moçambicanos, especialmente os que vivem em áreas rurais, é o acesso a medicamentos. A SavanaPoint está desenvolvendo uma solução de entrega digital que conecta pacientes a farmácias, permitindo que os medicamentos sejam entregues em suas casas. Isso ajuda a garantir que tratamentos sejam realizados sem interrupções, evitando a sobrecarga dos centros de saúde.
            </li>
            <li>
              <strong>Acesso a Especialistas:</strong> Moçambique sofre com a escassez de especialistas médicos, o que significa que muitas pessoas precisam viajar longas distâncias para conseguir atendimento especializado. Através da plataforma digital da SavanaPoint, pacientes podem se conectar com especialistas, receber orientações médicas à distância e, se necessário, encaminhamentos para tratamentos adequados. Isso é especialmente importante em áreas como cardiologia, oncologia e pediatria, onde o atendimento especializado é crucial.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            Benefícios para a População Rural e Urbana
          </h2>
          <p className="text-gray-700 mb-6">
            As soluções da SavanaPoint são projetadas para beneficiar tanto a população rural quanto a urbana, mas seu impacto é ainda mais significativo em regiões rurais, onde o acesso a serviços de saúde é historicamente mais limitado.
          </p>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <p className="text-green-700"><strong>Para as áreas rurais,</strong> a telemedicina reduz drasticamente as barreiras físicas, permitindo que pacientes em regiões isoladas tenham acesso a atendimento médico especializado, sem a necessidade de viagens longas e caras. A entrega digital de medicamentos também garante que comunidades distantes possam receber remédios de forma rápida e eficiente.</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-700"><strong>Nas áreas urbanas,</strong> a SavanaPoint ajuda a desafogar o sistema de saúde, permitindo que consultas de rotina sejam realizadas online e liberando espaço nos hospitais para atender casos mais graves. O acesso facilitado a especialistas também melhora a qualidade do atendimento, permitindo diagnósticos mais precisos e tratamentos mais adequados.</p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            Impacto na Saúde Pública e Privada
          </h2>
          <p className="text-gray-700 mb-6">
            O impacto das soluções da SavanaPoint vai além do indivíduo, estendendo-se ao sistema de saúde público e privado em Moçambique. Ao promover uma maior eficiência no atendimento, a SavanaPoint está ajudando a reduzir a pressão sobre os hospitais e clínicas públicas, que frequentemente operam acima da capacidade.
          </p>
          <p className="text-gray-700 mb-6">
            A digitalização também permite uma melhor gestão dos recursos de saúde, com ferramentas que ajudam a monitorar e prever demandas por medicamentos e tratamentos. Isso resulta em uma resposta mais rápida e eficiente às necessidades da população, reduzindo custos e melhorando o planejamento estratégico do sistema de saúde como um todo.
          </p>
          <p className="text-gray-700 mb-6">
            No setor privado, as soluções da SavanaPoint oferecem oportunidades para a criação de novos serviços médicos digitais, como consultas pagas ou planos de saúde que incluam telemedicina. Isso abre novas oportunidades de negócios e contribui para o crescimento da economia digital no setor de saúde.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            Conclusão
          </h2>
          <p className="text-gray-700 mb-6">
            A SavanaPoint está desempenhando um papel fundamental na transformação do setor de saúde em Moçambique, trazendo inovações tecnológicas que beneficiam milhões de cidadãos. Ao facilitar o acesso a consultas médicas, medicamentos e especialistas, a startup está ajudando a superar as limitações do sistema de saúde tradicional, com foco especial na inclusão social e no atendimento a áreas rurais.
          </p>
          <p className="text-gray-700 mb-6">
            Com essas soluções, a SavanaPoint está provando que a tecnologia pode ser uma aliada poderosa na busca por uma saúde mais justa e acessível para todos. A startup continua a desenvolver novas ferramentas e serviços que visam aprimorar a qualidade do atendimento e garantir que a saúde seja um direito verdadeiramente universal em Moçambique.
          </p>

          <div className="mt-12 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Saiba mais sobre a SavanaPoint</h3>
            <p className="text-gray-700 mb-4">Quer conhecer mais sobre como a SavanaPoint está revolucionando o acesso à saúde em Moçambique? Entre em contato conosco para descobrir como podemos ajudar a transformar o atendimento médico em sua região.</p>
            <a target='_blank' href="https://savanapoint.com" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
              Entre em contato
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </article>
      </main>

      
    </div>
  )
}