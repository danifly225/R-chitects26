export default function Services() {
  return (
    <section id="services" className="py-32 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-6 text-deep-black">
                Services
              </h2>
              <div className="w-16 h-0.5 bg-premium-orange mb-8"></div>
              <p className="text-xl font-light text-dark-gray leading-relaxed">
                Une gamme complète de services architecturaux 
                pour concrétiser vos projets les plus ambitieux.
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="border-l-2 border-premium-orange pl-8 space-y-4">
                <h3 className="text-2xl font-medium text-deep-black">Architecture</h3>
                <p className="text-medium-gray leading-relaxed">
                  Conception architecturale complète, de l'esquisse à la réalisation. 
                  Nos projets allient innovation esthétique et performance technique, 
                  créant des espaces qui marquent leur époque.
                </p>
              </div>
              
              <div className="border-l-2 border-light-gray pl-8 space-y-4 hover:border-premium-orange smooth-transition">
                <h3 className="text-2xl font-medium text-deep-black">Gérance</h3>
                <p className="text-medium-gray leading-relaxed">
                  Gestion professionnelle de patrimoine immobilier. 
                  Notre approche méthodique assure la valorisation 
                  et l'optimisation de vos investissements immobiliers.
                </p>
              </div>
              
              <div className="border-l-2 border-light-gray pl-8 space-y-4 hover:border-premium-orange smooth-transition">
                <h3 className="text-2xl font-medium text-deep-black">Modélisation 3D</h3>
                <p className="text-medium-gray leading-relaxed">
                  Visualisation architecturale haute définition et réalité virtuelle. 
                  Nos rendus photorealistic permettent d'expérimenter 
                  vos futurs espaces avant leur construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
