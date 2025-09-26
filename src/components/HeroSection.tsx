import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import lawyerHero from "@/assets/lawyer-hero.jpg";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5586999197858?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20previdência.%20Cheguei%20pelo%20anúncio%20do%20Google.', '_blank');
  };

  return (
    <section className="hero-section min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-left max-w-2xl">
            {/* Logo no topo */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-2xl">C</span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary text-2xl tracking-wide">
                    CARDOSO & ADVOGADOS
                  </h3>
                  <p className="text-primary/80 text-sm tracking-widest">
                    — Advocacia e assessoria jurídica —
                  </p>
                </div>
              </div>
            </div>
            
            {/* Título principal */}
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-gold mb-8 leading-tight">
              Advogada Previdenciária
            </h1>
            
            {/* Texto descritivo */}
            <div className="text-xl lg:text-2xl text-white leading-relaxed mb-8 space-y-1">
              <p>Está em busca de benefícios previdenciários?</p>
              <p>Conte com nossa orientação</p>
              <p>jurídica especializada para garantir</p>
              <p>seus Direitos.</p>
            </div>
            
            {/* Botão WhatsApp */}
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300 flex items-center gap-3 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              Fale com a Advogada Especialista
            </Button>
          </div>
          
          {/* Imagem da advogada */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10">
              <img 
                src={lawyerHero} 
                alt="Dra. Paloma Cardoso - Advogada Previdenciária"
                className="w-full max-w-lg mx-auto lg:max-w-xl object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;