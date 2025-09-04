import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white pt-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos prontos para ajudar sua empresa a dar o próximo passo.
            Fale conosco e descubra como nossas soluções podem transformar seu negócio.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="card">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">Email</h3>
                      <p className="text-neutral-dark">contato@outsyssolution.com</p>
                      <p className="text-neutral-dark">suporte@outsyssolution.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">Telefone</h3>
                      <p className="text-neutral-dark">+55 (11) 9999-9999</p>
                      <p className="text-neutral-dark">+55 (11) 8888-8888</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">Endereço</h3>
                      <p className="text-neutral-dark">
                        Av. Paulista, 1000<br />
                        São Paulo, SP - 01310-100<br />
                        Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary">Horário de Atendimento</h3>
                      <p className="text-neutral-dark">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábados: 8h às 12h<br />
                        Domingos: Apenas urgências
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-primary">Suporte 24/7</span>
                  </div>
                  <p className="text-sm text-neutral-dark">
                    Para emergências e suporte técnico, estamos disponíveis
                    24 horas por dia, 7 dias por semana.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Envie uma Mensagem
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                        placeholder="Nome da sua empresa"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-dark mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="sistema-domus">Sistema Domus</option>
                      <option value="desenvolvimento">Desenvolvimento Personalizado</option>
                      <option value="consultoria">Consultoria Tecnológica</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-dark mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-vertical"
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Enviar Mensagem
                    <Send size={20} />
                  </button>
                </form>

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-neutral-dark">
                    <strong>Política de Privacidade:</strong> Suas informações serão utilizadas
                    apenas para entrar em contato sobre sua solicitação e não serão
                    compartilhadas com terceiros.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-neutral-dark">
              Respostas rápidas para as dúvidas mais comuns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Como funciona o teste gratuito?
              </h3>
              <p className="text-neutral-dark">
                Oferecemos 30 dias grátis do Sistema Domus com todas as funcionalidades
                liberadas. Não é necessário cartão de crédito para começar.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Vocês oferecem treinamento?
              </h3>
              <p className="text-neutral-dark">
                Sim! Incluímos treinamento completo para sua equipe, documentação
                e suporte contínuo para garantir o sucesso da implementação.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-3">
                É possível integrar com outros sistemas?
              </h3>
              <p className="text-neutral-dark">
                Oferecemos integrações com os principais sistemas do mercado e
                também desenvolvemos integrações customizadas conforme necessário.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-3">
                Como é o suporte técnico?
              </h3>
              <p className="text-neutral-dark">
                Temos suporte 24/7 via chat, telefone e email. Nossa equipe técnica
                brasileira está sempre pronta para ajudar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Prefere falar por telefone?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Nossa equipe está pronta para uma conversa sem compromisso
          </p>
          <a
            href="tel:+5511999999999"
            className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-flex items-center gap-2"
          >
            <Phone size={20} />
            (11) 9999-9999
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
