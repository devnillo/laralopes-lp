import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5586999197858?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20previdência.', '_blank');
  };

  return (
    <footer className="section-gradient py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">C</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-primary text-xl">
                  Cardoso & Advogados
                </h3>
                <p className="text-sm text-primary/80">Advocacia e Assessoria Jurídica</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Especialistas em Direito Previdenciário, oferecendo soluções jurídicas 
              criativas e eficientes com atendimento humanizado para garantir seus direitos.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-display font-semibold text-primary text-lg mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">(86) 99919-7858</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">cardosoeadvogados2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/80">Atendimento em todo o Brasil</span>
              </div>
            </div>
          </div>
          
          {/* Redes Sociais */}
          <div>
            <h4 className="font-display font-semibold text-primary text-lg mb-6">
              Redes Sociais
            </h4>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/escritorio_cardosoeadvogados" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@escritorio_cardosoeadvogados</span>
              </a>
              <a 
                href="https://www.instagram.com/adv_palomacardoso" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>@adv_palomacardoso</span>
              </a>
              <a 
                href="https://youtube.com/@palomacardosoadv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-white/80 hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>Canal do Youtube</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-12 pt-8">
          <div className="text-center text-white/60">
            <p>&copy; 2025 Cardoso & Advogados. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">
              Horário de Atendimento: Segunda à Sexta, 08:00 - 17:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;