import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-soft-gray">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-tight text-deep-black">
                R-chitects 26
              </h1>
              <div className="w-16 h-0.5 bg-premium-orange"></div>
              <p className="text-xl lg:text-2xl font-light text-medium-gray leading-relaxed">
                Architecture d'Exception, Abidjan
              </p>
            </div>
            
            <p className="text-lg text-dark-gray leading-relaxed max-w-lg">
              Nous créons des espaces architecturaux qui transcendent l'ordinaire, 
              alliant innovation contemporaine et excellence intemporelle.
            </p>
            
            <div className="flex space-x-6">
              <Button
                onClick={() => handleNavClick("#projets")}
                className="bg-deep-black text-white px-8 py-4 text-sm font-medium smooth-transition hover:bg-premium-orange"
              >
                Découvrir nos projets
              </Button>
              <Button
                variant="outline"
                onClick={() => handleNavClick("#contact")}
                className="border border-deep-black px-8 py-4 text-sm font-medium smooth-transition hover:bg-deep-black hover:text-white"
              >
                Nous contacter
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=1200" 
              alt="Architecture contemporaine d'exception" 
              className="w-full h-128 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
