import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Proffsigt team och snygg installation!",
    name: "Anna L.",
    location: "Vaxholm",
  },
  {
    text: "Tydlig information från början till slut. Rekommenderar starkt!",
    name: "Erik S.",
    location: "Resarö",
  },
  {
    text: "Snabb process och bra service. Väldigt nöjd!",
    name: "Maria K.",
    location: "Vaxholm",
  },
  {
    text: "Sparar mycket pengar varje månad nu. Tack!",
    name: "Johan P.",
    location: "Bogesund",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Vad våra kunder säger</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nöjda kunder i Vaxholm och omnejd
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative bg-card hover:shadow-card transition-all duration-300">
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
