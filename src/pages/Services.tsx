import React from 'react'
import { Link } from 'react-router-dom'
import {
  Monitor,
  Database,
  Users,
  Shield,
  BarChart3,
  Headphones,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-secondary" />,
      title: "Sistema Domus",
      description: "Plataforma completa de gestão empresarial",
      features: [
        "Interface intuitiva e moderna",
        "Gestão de vendas e estoque",
        "Relatórios em tempo real",
        "Multi-usuário com controle de permissões",
        "Backup automático na nuvem"
      ],
      price: "A partir de R$ 99/mês"
    },
    {
      icon: <Database className="w-12 h-12 text-secondary" />,
      title: "Desenvolvimento Personalizado",
      description: "Soluções sob medida para sua empresa",
      features: [
        "Análise detalhada dos requisitos",
        "Desenvolvimento ágil e iterativo",
        "Integração com sistemas existentes",
        "Testes rigorosos de qualidade",
        "Documentação completa"
      ],
      price: "Sob consulta"
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "Consultoria Tecnológica",
      description: "Orientação estratégica para transformação digital",
      features: [
        "Diagnóstico tecnológico completo",
        "Roadmap de implementação",
        "Seleção de ferramentas adequadas",
        "Treinamento de equipes",
        "Acompanhamento contínuo"
      ],
      price: "A partir de R$ 200/hora"
    },
    {
      icon: <Shield className="w-12 h-12 text-secondary" />,
      title: "Segurança Digital",
      description: "Proteção completa para seus dados e sistemas",
      features: [
        "Auditoria de segurança",
        "Implementação de protocolos",
        "Backup e recuperação",
        "Monitoramento 24/7",
        "Treinamento em cybersecurity"
      ],
      price: "A partir de R$ 150/mês"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-secondary" />,
      title: "Business Intelligence",
      description: "Transforme dados em decisões estratégicas",
      features: [
        "Dashboards interativos",
        "Relatórios automatizados",
        "Análise preditiva",
        "KPIs personalizados",
        "Integração com múltiplas fontes"
      ],
      price: "A partir de R$ 180/mês"
    },
    {
      icon: <Headphones className="w-12 h-12 text-secondary" />,
      title: "Suporte Técnico",
      description: "Assistência completa quando você precisar",
      features: [
        "Suporte 24/7 via chat e telefone",
        "Resolução remota de problemas",
        "Treinamento personalizado",
        "Atualizações automáticas",
        "SLA garantido"
      ],
      price: "Incluso nos planos"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white pt-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Oferecemos uma gama completa de soluções tecnológicas para
            atender todas as necessidades da sua empresa, desde sistemas
            prontos até desenvolvimentos personalizados.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-neutral-dark mb-6 text-center flex-grow">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-neutral-dark">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="text-lg font-semibold text-primary text-center mb-4">
                    {service.price}
                  </div>
                  <Link
                    to="/contato"
                    className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Saiba Mais
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domus Highlight */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Sistema Domus em Destaque
              </h2>
              <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
                Nosso carro-chefe é uma solução completa de gestão empresarial
                que revoluciona a forma como pequenas e médias empresas gerenciam
                seus processos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary w-5 h-5" />
                  <span>Fácil de usar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary w-5 h-5" />
                  <span>Acessível</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary w-5 h-5" />
                  <span>Escalável</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary w-5 h-5" />
                  <span>Suporte 24/7</span>
                </div>
              </div>
              <Link
                to="/contato"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Teste Grátis por 30 Dias
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Funcionalidades Principais
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Gestão de Vendas</h4>
                  <p className="text-sm text-gray-200">
                    Controle completo do processo de vendas, desde o orçamento até a entrega
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Controle de Estoque</h4>
                  <p className="text-sm text-gray-200">
                    Monitoramento em tempo real de produtos e alertas automáticos
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Relatórios Inteligentes</h4>
                  <p className="text-sm text-gray-200">
                    Dashboards com métricas importantes para tomada de decisões
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Gestão Financeira</h4>
                  <p className="text-sm text-gray-200">
                    Controle de contas a pagar/receber e fluxo de caixa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Por que escolher nossos serviços?
            </h2>
            <p className="text-xl text-neutral-dark max-w-3xl mx-auto">
              Combinamos expertise técnica com entendimento do negócio brasileiro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">01</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Experiência Nacional
              </h3>
              <p className="text-neutral-dark">
                5 anos atendendo empresas brasileiras e entendendo suas necessidades específicas
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">02</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Suporte Dedicado
              </h3>
              <p className="text-neutral-dark">
                Equipe brasileira disponível 24/7 para garantir que você nunca fique sem apoio
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary">03</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Preços Acessíveis
              </h3>
              <p className="text-neutral-dark">
                Soluções de qualidade enterprise com preços pensados para PMEs brasileiras
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
            Fale com nossos especialistas e descubra qual solução é ideal
            para o seu negócio. Oferecemos consultoria gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contato"
              className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Consultoria Gratuita
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+5511999999999"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Ligar Agora
              <Headphones size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
