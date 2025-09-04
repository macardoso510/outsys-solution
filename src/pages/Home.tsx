import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  TrendingUp,
  Shield,
  Monitor
} from 'lucide-react'

const Home: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Segurança Garantida",
      description: "Suas informações protegidas com as melhores práticas de segurança"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Suporte Especializado",
      description: "Equipe técnica dedicada para apoiar sua empresa"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Escalabilidade",
      description: "Soluções que crescem junto com sua empresa"
    },
    {
      icon: <Building className="w-8 h-8 text-secondary" />,
      title: "Para Todos os Tamanhos",
      description: "Desde pequenas empresas até grandes corporações"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="text-white fade-in-up">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-hero-shadow">
                <span className="text-white">Transformamos</span>
                <span className="text-secondary block font-extrabold">Tecnologia</span>
                <span className="text-white">em Soluções</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100 leading-relaxed text-hero-shadow">
                Soluções modernas para gestão de empresas de todos os tamanhos.
                Tecnologia que qualquer empresa pode usar, com suporte especializado
                e segurança garantida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato"
                  className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Conheça o Domus
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/sobre"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-white text-2xl font-semibold mb-6">Sistema Domus</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle size={20} className="text-secondary" />
                    <span>Gestão completa de empresas</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle size={20} className="text-secondary" />
                    <span>Interface intuitiva e moderna</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle size={20} className="text-secondary" />
                    <span>Relatórios em tempo real</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <CheckCircle size={20} className="text-secondary" />
                    <span>Suporte 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Por que escolher a OutSys?
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Oferecemos soluções tecnológicas que combinam inovação,
              segurança e facilidade de uso para impulsionar seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-dark">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Sobre a OutSys Solution
              </h2>
              <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
                Somos uma empresa especializada em soluções tecnológicas que
                acredita que toda empresa, independente do tamanho, deve ter
                acesso a ferramentas modernas e eficientes.
              </p>
              <p className="text-lg text-neutral-dark mb-8 leading-relaxed">
                Nosso compromisso é transformar complexidade em simplicidade,
                oferecendo sistemas intuitivos que geram resultados reais
                para seu negócio.
              </p>

              <Link
                to="/sobre"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Conheça Nossa História
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-subtle">
                <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                  Nossa Missão
                </h3>
                <TrendingUp className="w-8 h-8 text-secondary mb-4 mx-auto" />
                <p className="text-lg text-neutral-dark text-center italic">
                  "Democratizar o acesso à tecnologia empresarial,
                  criando soluções que empoderam negócios de todos
                  os tamanhos a alcançar seu máximo potencial."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              O que está por vir
            </h2>
            <p className="text-xl text-neutral-dark">
              Estamos desenvolvendo soluções inovadoras para revolucionar a gestão imobiliária
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <Monitor className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-primary mb-4">
                Sistema Domus
              </h3>
              <p className="text-neutral-dark">
                Plataforma completa para gestão imobiliária com recursos avançados
                de CRM, controle de estoque de imóveis e automação de processos.
              </p>
            </div>
            <div className="card text-center">
              <Users className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-primary mb-4">
                Portal do Cliente
              </h3>
              <p className="text-neutral-dark">
                Interface dedicada para seus clientes acompanharem o andamento
                de suas negociações e acessarem documentos importantes.
              </p>
            </div>
            <div className="card text-center">
              <TrendingUp className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-primary mb-4">
                Analytics Avançado
              </h3>
              <p className="text-neutral-dark">
                Relatórios inteligentes e dashboards em tempo real para
                acompanhar performance de vendas e identificar oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para transformar sua empresa?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas soluções
            podem impulsionar o crescimento do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Fale Conosco Agora
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/servicos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center"
            >
              Ver Nossos Serviços
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
