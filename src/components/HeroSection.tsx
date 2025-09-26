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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-xl">C</span>
                </div>
                <div className="text-left">
                  <h3 className="font-display font-semibold text-primary text-lg">
                    CARDOSO & ADVOGADOS
                  </h3>
                  <p className="text-xs text-primary/80">Advocacia e assessoria jurídica</p>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-bold text-primary mb-6">
              Advogada Previdenciária
            </h1>
            
            <div className="text-xl lg:text-2xl text-white leading-relaxed mb-8 space-y-2">
              <p>Está em busca de <span className="text-primary font-semibold">benefícios previdenciários?</span></p>
              <p>Conte com nossa orientação</p>
              <p>jurídica especializada para garantir</p>
              <p><span className="text-primary font-semibold">seus Direitos.</span></p>
            </div>
            
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="btn-whatsapp text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Fale com a Advogada Especialista
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={lawyerHero} 
                alt="Dra. Paloma Cardoso - Advogada Previdenciária"
                className="w-full max-w-md mx-auto rounded-2xl shadow-elegant"
              />
            </div>
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary/30 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;