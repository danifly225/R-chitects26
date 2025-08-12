import { Card } from "@/components/ui/card";

const projects = [
  {
    id: 1,
    title: "Résidence Plateau",
    description: "Architecture résidentielle haut de gamme alliant modernité et fonctionnalité dans le cœur d'Abidjan.",
    category: "Résidentiel",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 2,
    title: "Centre d'Affaires Marcory",
    description: "Complexe tertiaire innovant offrant des espaces de travail optimisés pour les entreprises modernes.",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 3,
    title: "Hôtel Cocody",
    description: "Établissement hôtelier de prestige redéfinissant les standards de l'hospitalité en Côte d'Ivoire.",
    category: "Hôtellerie",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 4,
    title: "Villa Deux Plateaux",
    description: "Résidence privée d'exception combinant intimité familiale et réception d'envergure.",
    category: "Résidentiel",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 5,
    title: "Centre Culturel Treichville",
    description: "Espace culturel innovant favorisant les échanges artistiques et sociaux dans un cadre architectural unique.",
    category: "Culturel",
    image: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  },
  {
    id: 6,
    title: "Complexe Yopougon",
    description: "Développement urbain intégré alliant résidences, commerces et espaces communautaires.",
    category: "Mixte",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  }
];

export default function Projects() {
  return (
    <section id="projets" className="py-32 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6 text-deep-black">
            Projets Signature
          </h2>
          <div className="w-16 h-0.5 bg-premium-orange mx-auto mb-8"></div>
          <p className="text-xl font-light text-dark-gray max-w-2xl mx-auto">
            Une sélection de nos réalisations les plus emblématiques, 
            témoignant de notre excellence architecturale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="gallery-item bg-white shadow-lg smooth-transition cursor-pointer hover:shadow-xl"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-medium mb-3 text-deep-black">{project.title}</h3>
                <p className="text-medium-gray text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6">
                  <span className="text-xs font-medium text-premium-orange tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
