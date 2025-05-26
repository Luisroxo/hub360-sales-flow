
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP - Atuação Nacional",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@hub360plus.com.br",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      gradient: "from-emerald-500 to-emerald-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(11) 9999-9999",
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Entre em Contato
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
              Vamos{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                conversar?
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como podemos ser seu parceiro comercial no mundo digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Informações de contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                      <p className="text-slate-600">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 mt-12">
                <h4 className="font-semibold text-slate-900 mb-4">Horário de Atendimento</h4>
                <div className="space-y-2 text-slate-600">
                  <p>Segunda à Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Envie uma mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                      Nome
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Seu nome"
                      className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                      Sobrenome
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Seu sobrenome"
                      className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-mail
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefone
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="(11) 99999-9999"
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Conte-nos sobre seu projeto..."
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Enviar mensagem
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
