import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-secondary/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">C</span>
            </div>
            <div>
              <h1 className="font-display font-semibold text-primary text-lg">
                Cardoso & Advogados
              </h1>
              <p className="text-xs text-muted-foreground">Advocacia e Assessoria Jurídica</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-foreground">(86) 99919-7858</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-foreground">cardosoeadvogados2@gmail.com</span>
            </div>
            <Button 
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-medium"
              onClick={() => window.open('https://wa.me/5586999197858?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20previdência.', '_blank')}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;