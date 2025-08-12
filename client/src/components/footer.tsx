export default function Footer() {
  return (
    <footer className="bg-deep-black text-white py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold tracking-tight">R-chitects 26</h3>
            <p className="text-gray-400 leading-relaxed">
              Architecture d'exception à Abidjan. 
              Créateurs d'espaces qui transcendent l'ordinaire.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-medium">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-premium-orange smooth-transition">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-premium-orange smooth-transition">
                  Gérance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-premium-orange smooth-transition">
                  Modélisation 3D
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-premium-orange smooth-transition">
                  Consultation
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-medium">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Plateau, Abidjan</li>
              <li>+225 XX XX XX XX XX</li>
              <li>contact@r-chitects26.ci</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 R-chitects 26. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
