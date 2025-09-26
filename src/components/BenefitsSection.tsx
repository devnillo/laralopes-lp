import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Heart, Calculator, MessageCircle } from "lucide-react";

const BenefitsSection = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5586999197858?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20previdência.%20Cheguei%20pelo%20anúncio%20do%20Google.', '_blank');
  };

  const benefits = [
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: "APOSENTADORIAS:",
      items: [
        "Aposentadoria por invalidez",
        "Aposentadoria por idade", 
        "Aposentadoria especial",
        "Aposentadoria rural",
        "Aposentadoria de servidor público",
        "Aposentadoria de professor",
        "Aposentadoria da pessoa com deficiência"
      ]
    },
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "BENEFÍCIOS:",
      items: [
        "BPC LOAS (Idoso e Pessoa com deficiência)",
        "Auxílio-doença",
        "Auxílio-acidente", 
        "Auxílio-reclusão",
        "Salário-maternidade"
      ]
    },
    {
      icon: <Calculator className="w-12 h-12 text-primary" />,
      title: "REVISÕES - CÁLCULOS - SIMULAÇÕES:",
      items: [
        "Cálculo de aposentadoria",
        "Cálculo de tempo de contribuição",
        "Planejamento de aposentadoria",
        "Revisão de aposentadoria", 
        "Simulação de aposentadoria"
      ]
    }
  ];

  return (
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gold mb-6">
            Benefícios que você pode ter Direito:
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/90 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-primary font-display text-xl">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <Button 
                    onClick={handleWhatsAppClick}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Fale com especialista
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;