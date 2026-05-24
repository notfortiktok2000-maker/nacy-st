import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-8xl font-bold tracking-tight mb-4">404</h1>
      <h2 className="text-2xl text-muted mb-8 tracking-tight">Page introuvable.</h2>
      <p className="text-lg mb-8 max-w-md mx-auto text-foreground">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-foreground text-white text-base font-medium transition-opacity hover:opacity-80"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
