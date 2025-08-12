const team = [
  {
    id: 1,
    name: "Dr. Koné Amadou",
    title: "Architecte Principal & Fondateur",
    bio: "15 années d'expertise en architecture contemporaine et développement urbain durable.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
  },
  {
    id: 2,
    name: "Mme. Traoré Aïcha",
    title: "Architecte Senior",
    bio: "Spécialiste en design d'intérieur et aménagement d'espaces commerciaux haut de gamme.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
  },
  {
    id: 3,
    name: "M. Diallo Ousmane",
    title: "Chef de Projet",
    bio: "Expert en gestion de projets complexes et coordination d'équipes pluridisciplinaires.",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
  }
];

export default function Team() {
  return (
    <section id="equipe" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6 text-deep-black">
            Notre Équipe
          </h2>
          <div className="w-16 h-0.5 bg-premium-orange mx-auto mb-8"></div>
          <p className="text-xl font-light text-dark-gray max-w-2xl mx-auto">
            Des professionnels d'exception unis par la passion de l'architecture 
            et l'engagement envers l'excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {team.map((member) => (
            <div key={member.id} className="text-center space-y-6">
              <img 
                src={member.photo}
                alt={member.name}
                className="w-64 h-80 object-cover mx-auto shadow-lg"
              />
              <div className="space-y-3">
                <h3 className="text-xl font-medium text-deep-black">{member.name}</h3>
                <p className="text-medium-gray font-light">{member.title}</p>
                <p className="text-sm text-medium-gray leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
