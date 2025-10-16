import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sun, Battery, Building2, Check } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Solceller för hem",
    description: "Designade för svenska tak, maximal avkastning.",
    details: [
      "Kostnadsfri takanalys och dimensionering",
      "Premium solpaneler anpassade för nordiskt klimat",
      "Komplett installation med ROT-avdrag",
      "25 års produktgaranti på paneler",
      "Fjärrövervakning av produktion",
      "Lönsam investering med snabb återbetalningstid",
    ],
  },
  {
    icon: Battery,
    title: "Batterilagring",
    description: "Lagra egen el och använd när nätet är dyrt.",
    details: [
      "Maximera självförsörjningsgraden",
      "Spara el när priset är lågt, använd när det är högt",
      "Backup vid strömavbrott (valfritt)",
      "Smart styrning via app",
      "10 års garanti på batterier",
      "Enkel uppgradering av befintliga solcellsanläggningar",
    ],
  },
  {
    icon: Building2,
    title: "Företag & BRF",
    description: "Kompletta anläggningar, projektering och drift.",
    details: [
      "Skräddarsydda lösningar för större tak",
      "Ekonomisk analys och investeringskalkyl",
      "Professionell projektering",
      "Installation utan driftstopp",
      "Service- och driftavtal",
      "Grön profilhöjning för verksamheten",
    ],
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Våra tjänster</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kompletta energilösningar från rådgivning till installation och service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-card-hover transition-all duration-300 cursor-pointer border-border/50 bg-card"
                onClick={() => setSelectedService(index)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button variant="outline" className="mt-4">
                    Läs mer
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl">
            {selectedService !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{services[selectedService].title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-lg">
                    {services[selectedService].description}
                  </p>
                  <div className="space-y-3 pt-4">
                    {services[selectedService].details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
