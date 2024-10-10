import { Shield, Lock, Bell, CreditCard, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function DigitalSecurityBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto">
        <article className="prose lg:prose-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Segurança Digital em Moçambique: Como a SavanaPoint Está Ajudando a Proteger os Dados dos Cidadãos
          </h1>
          
          <Image
            src="https://images.pexels.com/photos/9795012/pexels-photo-9795012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Segurança digital em Moçambique"
            width={800}
            height={400}
            className="rounded-lg shadow-md mb-8"
          />

          <p className="text-lg text-gray-700 mb-8">
            À medida que o uso de plataformas digitais cresce em Moçambique, a segurança digital torna-se uma questão cada vez mais relevante. Com a digitalização de serviços financeiros, comunicação e comércio, os cidadãos e empresas estão mais expostos a ameaças cibernéticas, como roubo de dados, fraudes e invasões. A SavanaPoint, uma startup focada em soluções tecnológicas, está desempenhando um papel fundamental na proteção dos dados pessoais e financeiros dos moçambicanos, desenvolvendo ferramentas robustas para garantir a privacidade e segurança nas transações e no uso de plataformas digitais.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            Crescimento das Ameaças Digitais em Moçambique
          </h2>
          <p className="text-gray-700 mb-4">
            Com a rápida digitalização, Moçambique tem visto um aumento nas ameaças cibernéticas nos últimos anos. À medida que mais cidadãos utilizam serviços bancários e comerciais online, a quantidade de dados pessoais e financeiros circulando na internet também aumenta, tornando-os alvos para cibercriminosos. Algumas das ameaças mais comuns incluem:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>
              <strong>Phishing e Fraudes Eletrônicas:</strong> Os ataques de phishing, que envolvem o envio de e-mails fraudulentos para roubar informações sensíveis, como senhas e dados bancários, têm se tornado uma prática comum. Isso afeta tanto indivíduos quanto empresas, levando a grandes prejuízos financeiros.
            </li>
            <li>
              <strong>Invasões e Roubo de Dados:</strong> Com a falta de conscientização sobre a importância de senhas seguras e a adoção de práticas de cibersegurança, muitos usuários tornam-se vulneráveis a invasões de sistemas, resultando no roubo de dados pessoais e empresariais.
            </li>
            <li>
              <strong>Malwares e Ransomwares:</strong> Softwares maliciosos, como malwares e ransomwares, têm sido utilizados para bloquear o acesso a sistemas críticos até que um resgate seja pago, colocando empresas e indivíduos em uma situação de risco.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            Ferramentas de Segurança Digital Desenvolvidas pela SavanaPoint
          </h2>
          <p className="text-gray-700 mb-6">
            A SavanaPoint tem investido em tecnologias de ponta para desenvolver ferramentas que protejam os cidadãos e empresas moçambicanas contra ameaças cibernéticas. Algumas das principais inovações da startup incluem:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lock className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Autenticação de Dois Fatores (2FA)</h3>
              <p className="text-gray-600">Implementação de 2FA para garantir que apenas usuários autorizados tenham acesso a contas e dados sensíveis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Criptografia de Dados</h3>
              <p className="text-gray-600">Utilização de criptografia avançada para proteger informações pessoais e financeiras transmitidas através das plataformas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Bell className="h-8 w-8 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Monitoramento em Tempo Real</h3>
              <p className="text-gray-600">Soluções de monitoramento para identificar atividades suspeitas e ameaças antes que causem danos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CreditCard className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Plataformas de Pagamento Seguras</h3>
              <p className="text-gray-600">Desenvolvimento de soluções de pagamento que garantem transações protegidas contra fraudes e acessos não autorizados.</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            Como Proteger Dados Pessoais e Empresariais
          </h2>
          <p className="text-gray-700 mb-4">
            A proteção de dados pessoais e empresariais começa com a conscientização e a adoção de boas práticas de segurança. Além das ferramentas desenvolvidas pela SavanaPoint, os cidadãos e empresas também podem tomar medidas para proteger melhor suas informações. Aqui estão algumas dicas que podem ser seguidas para aumentar a segurança digital:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Utilize senhas fortes e únicas</li>
            <li>Habilite a autenticação de dois fatores</li>
            <li>Cuidado com e-mails suspeitos</li>
            <li>Atualize regularmente seus softwares</li>
            <li>Use redes Wi-Fi seguras</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            O Papel da Educação Digital na Proteção Contra Fraudes
          </h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p className="text-blue-700">
              A SavanaPoint promove workshops e campanhas de conscientização digital para ensinar os usuários a identificar fraudes, proteger seus dispositivos e adotar práticas seguras ao navegar na internet.
            </p>
          </div>
          <div className="flex items-center mb-6">
            <BookOpen className="h-12 w-12 text-blue-500 mr-4" />
            <p className="text-gray-700">
              Entre os tópicos abordados estão: identificação de e-mails fraudulentos, criação de senhas fortes, práticas seguras de navegação e proteção de dispositivos móveis.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">
            Conclusão
          </h2>
          <p className="text-gray-700 mb-6">
            A segurança digital é uma prioridade cada vez maior em Moçambique, à medida que mais cidadãos e empresas adotam o uso de plataformas online. A SavanaPoint está na vanguarda desse movimento, desenvolvendo soluções inovadoras que protegem os dados pessoais e financeiros dos moçambicanos contra ameaças cibernéticas. Com ferramentas de criptografia, autenticação de dois fatores e monitoramento em tempo real, a SavanaPoint está garantindo que o ambiente digital seja mais seguro para todos.
          </p>
          <p className="text-gray-700 mb-6">
            Além disso, a startup está investindo na educação digital, conscientizando as pessoas sobre os riscos online e ensinando-as a adotar boas práticas de segurança. Ao combinar tecnologia de ponta com uma abordagem educacional, a SavanaPoint está ajudando a moldar um futuro digital mais seguro em Moçambique.
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Proteja-se no Mundo Digital</h3>
            <p className="text-gray-600 mb-4">Quer saber mais sobre como a SavanaPoint pode ajudar você ou sua empresa a se proteger contra ameaças digitais? Entre em contato conosco para uma consulta personalizada sobre segurança digital.</p>
            <a href="https://savanapoint.com" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Fale com um especialista
              <Shield className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>
        </article>
      </main>
    </div>
  )
}