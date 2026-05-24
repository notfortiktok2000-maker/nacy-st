import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface py-12 px-6 lg:px-8 mt-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-surface lg:grid-cols-4 gap-8 mb-12">
        <div>
          <span className="text-xl font-bold tracking-tight block mb-4">Agence.</span>
          <p className="text-sm text-muted">
            Créateurs d'expériences digitales premium.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm">Services</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li>Développement Web</li>
            <li>Design UI/UX</li>
            <li>Production Vidéo</li>
            <li>Intelligence Artificielle</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm">Pages</h3>
          <ul className="space-y-3 text-sm text-muted">
            <li><Link to="/" className="hover:text-foreground transition-colors">Accueil</Link></li>
            <li><Link to="/collection" className="hover:text-foreground transition-colors">Collection</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-sm">Contact</h3>
          <ul className="space-y-3 text-sm text-muted mb-6">
            <li>hello@agence.com</li>
            <li>+33 1 23 45 67 89</li>
          </ul>
          <div className="flex space-x-4 text-muted">
            <a href="#" className="hover:text-foreground transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-foreground transition-colors" aria-label="TikTok">
              <Video size={20} />
            </a>
            <a href="#" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted">
        <p>Copyright © {new Date().getFullYear()} Agence Inc. Tous droits réservés.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}
