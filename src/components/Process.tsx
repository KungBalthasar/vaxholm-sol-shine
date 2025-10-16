import { MessageSquare, Wrench, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Rådgivning & offert",
    description: "Enkel kostnadsfri bedömning",
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Certifierade installatörer, snabb montering",
  },
  {
    icon: Headphones,
    title: "Service & support",
    description: "Underhåll och fjärrövervakning",
  },
];

export const Process = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Så funkar det</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Från första kontakt till installation – en enkel och trygg process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-border z-0" />
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-hero-gradient flex items-center justify-center shadow-lg">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-accent-foreground text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-foreground text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
