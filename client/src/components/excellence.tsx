export default function Excellence() {
  return (
    <section id="excellence" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight text-deep-black">
              Notre Excellence
            </h2>
            <div className="w-12 h-0.5 bg-premium-orange mt-6"></div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <p className="text-xl font-light text-dark-gray leading-relaxed">
              Depuis notre établissement à Abidjan, nous redéfinissons l'architecture contemporaine 
              à travers une approche méthodique et une vision d'avant-garde.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-deep-black">Vision Architecturale</h3>
                <p className="text-medium-gray leading-relaxed">
                  Chaque projet reflète notre engagement envers l'innovation fonctionnelle 
                  et l'esthétique intemporelle, créant des espaces qui inspirent et perdurent.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-deep-black">Approche Méthodique</h3>
                <p className="text-medium-gray leading-relaxed">
                  Notre processus rigoureux intègre recherche approfondie, innovation technique 
                  et collaboration étroite avec nos clients pour des résultats exceptionnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
