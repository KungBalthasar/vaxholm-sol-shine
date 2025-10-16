import { Shield, Award, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Svenskanpassade solpaneler",
    description: "Optimerade för nordiskt klimat och väderförhållanden",
  },
  {
    icon: Award,
    title: "Komplett leverans",
    description: "Från rådgivning till installation och långsiktig service",
  },
  {
    icon: MapPin,
    title: "Lokal partner i Vaxholm",
    description: "Snabb service och närhet till våra kunder",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">Varför välja oss?</h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
            Din trygga partner för hållbar energi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="text-primary-foreground/80">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
            <Award className="w-5 h-5" />
            <span className="text-sm font-medium">Certifierade installatörer</span>
          </div>
        </div>
      </div>
    </section>
  );
};
