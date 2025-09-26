import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, FileText, Search, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5586999197858?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20previdência.%20Cheguei%20pelo%20anúncio%20do%20Google.', '_blank');
  };

  const steps = [
    {
      icon: <MessageCircle className="w-16 h-16 text-primary" />,
      title: "Relate o seu problema",
      description: "Conte-nos rapidamente sobre o ocorrido.",
      subtitle: "O processo é rápido e simples"
    },
    {
      icon: <Search className="w-16 h-16 text-primary" />,
      title: "Análise inicial", 
      description: "Receba uma avaliação sem custo e descubra as opções que você tem."
    },
    {
      icon: <CheckCircle className="w-16 h-16 text-primary" />,
      title: "Receba orientação adequada",
      description: "Se o seu caso for viável, vamos explicar os próximos passos e cuidar de todo o processo para garantir que você receba o que é seu por direito."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Como funciona?
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo pode ser feito de forma online
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-primary font-display text-2xl mb-4">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {step.description}
                </p>
                {step.subtitle && (
                  <p className="font-semibold text-primary">
                    {step.subtitle}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold text-xl px-12 py-6 hover:scale-105 transition-all duration-300"
          >
            QUERO BUSCAR MEUS DIREITOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;