import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  projet: z.string().optional(),
  message: z.string().min(1, "Le message est requis")
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé",
        description: "Votre message a été envoyé avec succès. Nous vous contacterons bientôt.",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await contactMutation.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6 text-deep-black">
                Contact
              </h2>
              <div className="w-16 h-0.5 bg-premium-orange mb-8"></div>
              <p className="text-xl font-light text-dark-gray leading-relaxed">
                Démarrons ensemble votre projet architectural d'exception.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-deep-black">Adresse</h3>
                <p className="text-medium-gray">
                  Plateau, Abidjan<br />
                  Côte d'Ivoire
                </p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-deep-black">Téléphone</h3>
                <p className="text-medium-gray">+225 XX XX XX XX XX</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-deep-black">Email</h3>
                <p className="text-medium-gray">contact@r-chitects26.ci</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-deep-black">Horaires</h3>
                <p className="text-medium-gray">
                  Lundi - Vendredi: 8h00 - 18h00<br />
                  Samedi: Sur rendez-vous
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-soft-gray p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="nom" className="text-sm font-medium mb-3 block">
                    Nom *
                  </Label>
                  <Input
                    {...register("nom")}
                    className="w-full px-4 py-4 border border-light-gray focus:border-premium-orange focus:outline-none smooth-transition bg-white"
                  />
                  {errors.nom && (
                    <p className="text-red-500 text-sm mt-2">{errors.nom.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium mb-3 block">
                    Email *
                  </Label>
                  <Input
                    {...register("email")}
                    type="email"
                    className="w-full px-4 py-4 border border-light-gray focus:border-premium-orange focus:outline-none smooth-transition bg-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="telephone" className="text-sm font-medium mb-3 block">
                    Téléphone
                  </Label>
                  <Input
                    {...register("telephone")}
                    type="tel"
                    className="w-full px-4 py-4 border border-light-gray focus:border-premium-orange focus:outline-none smooth-transition bg-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="projet" className="text-sm font-medium mb-3 block">
                    Type de projet
                  </Label>
                  <Select onValueChange={(value) => setValue("projet", value)}>
                    <SelectTrigger className="w-full px-4 py-4 border border-light-gray focus:border-premium-orange focus:outline-none smooth-transition bg-white">
                      <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residentiel">Résidentiel</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industriel">Industriel</SelectItem>
                      <SelectItem value="culturel">Culturel</SelectItem>
                      <SelectItem value="mixte">Mixte</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-3 block">
                    Message *
                  </Label>
                  <Textarea
                    {...register("message")}
                    rows={6}
                    placeholder="Décrivez votre projet..."
                    className="w-full px-4 py-4 border border-light-gray focus:border-premium-orange focus:outline-none smooth-transition bg-white resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>
                  )}
                </div>
              </div>
              
              <Button 
                type="submit"
                disabled={isSubmitting || contactMutation.isPending}
                className="w-full bg-deep-black text-white py-4 font-medium smooth-transition hover:bg-premium-orange"
              >
                {isSubmitting || contactMutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
