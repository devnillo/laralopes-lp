import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Youtube, MessageCircle, MapPin, Clock, Shield } from "lucide-react";
import officeBackground from "@/assets/office-background.jpg";

const AboutSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5586999197858?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20previdência.%20Cheguei%20pelo%20anúncio%20do%20Google.', '_blank');
  };

  const values = [
    {
      title: "MISSÃO:",
      description: "Dar resultados e resolver problemas."
    },
    {
      title: "VISÃO:",
      description: "Oferecer serviços jurídicos com qualidade e excelência proporcionando soluções inteligentes."
    },
    {
      title: "VALORES:",
      description: "Respeito, crescimento contínuo, responsabilidade, justiça, organização."
    }
  ];

  const highlights = [
    "Advocacia especializada em Direito Previdenciário",
    "Atendemos em todo o Brasil",
    "Escritório 100% seguro"
  ];

  return (
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gold mb-6">
            Escritório Cardoso & Advogados | Dra. Paloma Cardoso
          </h2>
        </div>
        
        {/* Redes Sociais */}
        <div className="flex justify-center space-x-6 mb-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://www.instagram.com/escritorio_cardosoeadvogados', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2" />
            Cardoso & Advogados
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://www.instagram.com/adv_palomacardoso', '_blank')}
          >
            <Instagram className="w-5 h-5 mr-2" />
            Dra. Paloma Cardoso
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://youtube.com/@palomacardosoadv', '_blank')}
          >
            <Youtube className="w-5 h-5 mr-2" />
            Canal do Youtube
          </Button>
        </div>

        {/* Sobre o Escritório */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={officeBackground} 
              alt="Escritório Cardoso & Advogados"
              className="w-full rounded-2xl shadow-elegant"
            />
          </div>
          
          <div className="space-y-6">
            <div className="prose prose-lg text-white/90">
              <p className="leading-relaxed">
                O Escritório Cardoso & Advogados foi fundado em 2019 pela Dra. Paloma Cardoso, 
                advogada formada em Direito pela Faculdade CEUT/PI (2013) e em Ciências Contábeis 
                pela UFPI/PI (2011), com especialização em Direito Civil, Processual Civil e 
                Direito Previdenciário.
              </p>
              <p className="leading-relaxed">
                Com uma sólida formação acadêmica e visão estratégica, a Dra. Paloma decidiu 
                investir no Direito Previdenciário, liderando atualmente o escritório com foco 
                em soluções jurídicas criativas, eficientes e no atendimento humanizado, sempre 
                dedicados à defesa dos direitos dos clientes.
              </p>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Fale com a Advogada Especialista
            </Button>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-gold text-center mb-12">
            Nosso compromisso com seu Direito:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card/90 backdrop-blur-sm border-border/50 text-center">
                <CardContent className="p-6">
                  <h4 className="font-display font-bold text-primary text-xl mb-4">
                    {value.title}
                  </h4>
                  <p className="text-foreground/80 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center text-white/90">
                <Shield className="w-5 h-5 text-primary mr-3" />
                <span className="text-lg">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contato e Horários */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-display font-bold text-primary text-xl mb-4">Contatos</h4>
              <div className="space-y-2 text-foreground/80">
                <p>(86) 99919-7858</p>
                <p>cardosoeadvogados2@gmail.com</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-display font-bold text-primary text-xl mb-4">Horário de Atendimento</h4>
              <p className="text-foreground/80">Segunda à sexta 08:00 - 17:00</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card/90 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-display font-bold text-primary text-xl mb-4">Localização</h4>
              <p className="text-foreground/80">Atendimento em todo o Brasil</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;