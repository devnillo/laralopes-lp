import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Excelente atendimento! A Dra. Paloma conseguiu minha aposentadoria por invalidez em tempo recorde. Muito profissional e dedicada.",
      rating: 5
    },
    {
      name: "João Santos", 
      text: "Recomendo demais! Todo o processo foi transparente e sempre fui mantido informado. Consegui meu BPC LOAS sem complicações.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Profissional extremamente competente. Me ajudou com a revisão da minha aposentadoria e conseguiu um aumento significativo no valor.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Depoimentos dos nossos clientes:
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes dizem sobre nosso trabalho
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
                
                <p className="text-foreground/80 leading-relaxed mb-6 text-center italic">
                  "{testimonial.text}"
                </p>
                
                <div className="text-center">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Cliente satisfeito</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;