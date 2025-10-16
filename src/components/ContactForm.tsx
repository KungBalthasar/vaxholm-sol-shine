import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, { message: "Förnamn krävs" }).max(50),
  lastName: z.string().trim().min(1, { message: "Efternamn krävs" }).max(50),
  email: z.string().trim().email({ message: "Ogiltig e-postadress" }).max(255),
  phone: z.string().trim().optional(),
  city: z.string().trim().min(1, { message: "Stad krävs" }).max(100),
  service: z.enum(["Hem", "BRF", "Företag", "Service"], {
    required_error: "Välj en tjänst",
  }),
  message: z.string().trim().max(200, { message: "Max 200 tecken" }).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", validatedData);
      toast.success("Tack! Vi återkommer inom 48 timmar.");
      
      // Reset form
      setFormData({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Vänligen kontrollera formuläret");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-foreground mb-4">Kontakta oss</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Få en kostnadsfri konsultation och offert – utan förpliktelser
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  Förnamn <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName || ""}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className={errors.firstName ? "border-destructive" : ""}
                />
                {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Efternamn <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName || ""}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className={errors.lastName ? "border-destructive" : ""}
                />
                {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                E-post <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email || ""}
                onChange={(e) => updateField("email", e.target.value)}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone || ""}
                onChange={(e) => updateField("phone", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">
                Stad <span className="text-destructive">*</span>
              </Label>
              <Input
                id="city"
                value={formData.city || ""}
                onChange={(e) => updateField("city", e.target.value)}
                className={errors.city ? "border-destructive" : ""}
              />
              {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">
                Vad vill du ha hjälp med? <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.service}
                onValueChange={(value) => updateField("service", value)}
              >
                <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                  <SelectValue placeholder="Välj tjänst" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hem">Hem</SelectItem>
                  <SelectItem value="BRF">BRF</SelectItem>
                  <SelectItem value="Företag">Företag</SelectItem>
                  <SelectItem value="Service">Service</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Meddelande (max 200 tecken)</Label>
              <Textarea
                id="message"
                value={formData.message || ""}
                onChange={(e) => updateField("message", e.target.value)}
                maxLength={200}
                rows={4}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              <p className="text-xs text-muted-foreground text-right">
                {formData.message?.length || 0}/200
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Skickar..." : "Skicka"}
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto mt-12 text-center space-y-2 text-muted-foreground">
          <p>📧 charlie@twiston.se</p>
          <p>📞 070 386 6696</p>
          <p>📍 Campusgränd 1, Vaxholm</p>
        </div>
      </div>
    </section>
  );
};
