import React from 'react'
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-secondary" />,
      title: "Acessibilidade",
      description: "Tecnologia que todos podem usar, independente do nível técnico"
    },
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Excelência",
      description: "Compromisso com a qualidade em cada solução entregue"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Parceria",
      description: "Construímos relacionamentos duradouros com nossos clientes"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Inovação",
      description: "Sempre em busca das melhores tecnologias do mercado"
    }
  ]

  const team = [
    {
      name: "Carlos Oliveira",
      role: "CEO & Fundador",
      description: "15 anos de experiência em tecnologia empresarial"
    },
    {
      name: "Ana Rodrigues",
      role: "CTO",
      description: "Especialista em desenvolvimento de sistemas escaláveis"
    },
    {
      name: "Ricardo Santos",
      role: "Head de Suporte",
      description: "Garantindo a melhor experiência para nossos clientes"
    },
    {
      name: "Mariana Costa",
      role: "UX/UI Designer",
      description: "Criando interfaces intuitivas e acessíveis"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white pt-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Sobre a OutSys Solution</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Transformamos tecnologia em soluções acessíveis, criando um futuro
            onde toda empresa tem acesso às ferramentas que precisa para crescer.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="card text-center">
              <Target className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Nossa Missão</h3>
              <p className="text-neutral-dark leading-relaxed">
                Democratizar o acesso à tecnologia empresarial, criando soluções
                que empoderam negócios de todos os tamanhos a alcançar seu máximo potencial.
              </p>
            </div>

            {/* Vision */}
            <div className="card text-center">
              <Eye className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Nossa Visão</h3>
              <p className="text-neutral-dark leading-relaxed">
                Ser referência nacional em soluções tecnológicas acessíveis,
                reconhecida pela qualidade, inovação e impacto positivo nos negócios.
              </p>
            </div>

            {/* Purpose */}
            <div className="card text-center">
              <Heart className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">Nosso Propósito</h3>
              <p className="text-neutral-dark leading-relaxed">
                Acreditamos que toda empresa merece ter acesso a tecnologia de qualidade.
                Trabalhamos para eliminar barreiras e criar oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nossos Valores</h2>
            <p className="text-xl text-neutral-dark">
              Os princípios que guiam cada decisão e ação da nossa empresa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-dark">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Nossa História</h2>
              <div className="space-y-6 text-lg text-neutral-dark leading-relaxed">
                <p>
                  A OutSys Solution nasceu da percepção de que muitas empresas
                  brasileiras enfrentavam dificuldades para implementar soluções
                  tecnológicas adequadas às suas necessidades e orçamentos.
                </p>
                <p>
                  Fundada em 2020, começamos com uma equipe pequena mas determinada
                  a fazer a diferença. Nosso primeiro produto, o Sistema Domus,
                  foi desenvolvido ouvindo as necessidades reais dos empresários.
                </p>
                <p>
                  Hoje, atendemos mais de 500 empresas em todo o país, sempre
                  mantendo nosso compromisso com a simplicidade, qualidade e
                  acessibilidade.
                </p>
              </div>
            </div>
            <div className="bg-neutral-light p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                Marcos Importantes
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <div className="font-semibold text-primary">2020</div>
                  <div className="text-neutral-dark">Fundação da OutSys Solution</div>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <div className="font-semibold text-primary">2021</div>
                  <div className="text-neutral-dark">Lançamento do Sistema Domus</div>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <div className="font-semibold text-primary">2022</div>
                  <div className="text-neutral-dark">100 clientes atendidos</div>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <div className="font-semibold text-primary">2023</div>
                  <div className="text-neutral-dark">Expansão para novos mercados</div>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <div className="font-semibold text-primary">2024</div>
                  <div className="text-neutral-dark">500+ empresas atendidas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nossa Equipe</h2>
            <p className="text-xl text-neutral-dark">
              Profissionais apaixonados por tecnologia e comprometidos com seu sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {member.name}
                </h3>
                <div className="text-secondary font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-neutral-dark text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nossa Trajetória em Números</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-gray-200">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">5+</div>
              <div className="text-gray-200">Anos de Mercado</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-gray-200">Cidades Brasileiras</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-gray-200">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
