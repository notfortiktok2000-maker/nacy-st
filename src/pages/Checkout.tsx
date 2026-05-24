import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Checkout() {
  const [product, setProduct] = useState<any>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const data = sessionStorage.getItem('checkoutProduct');
    if (data) {
      setProduct(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    const today = new Date().toLocaleDateString('fr-FR');
    const msg = `New Order — NACY ST\nClient: ${formData.firstName} ${formData.lastName}\nService: ${product.name}\nAddress: ${formData.address}, ${formData.zipCode} ${formData.city}\nPhone: ${formData.phone}\nDate: ${today}`;
    
    const url = `https://wa.me/212710900502?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (product === null) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-24">
        <h2 className="text-2xl font-bold tracking-tight mb-4">No Service Selected</h2>
        <p className="text-muted mb-8">Please select a service before checking out.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-foreground text-white px-6 py-3 rounded-full font-medium transition-transform hover:scale-95"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Start a Project - NACY ST</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="pt-24 pb-16 max-w-7xl mx-auto px-6 animate-fadeIn">
        <h1 className="text-4xl font-bold tracking-tight mb-12">Finalize your project.</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Summary */}
          <div className="animate-fadeUp" style={{ animationDelay: '100ms' }}>
            <div className="bg-surface rounded-3xl p-8 border border-gray-100">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">{product.name}</h3>
                </div>
                <span className="font-medium text-lg">{product.price}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-6 flex justify-between items-center font-bold">
                <span>Total</span>
                <span>{product.price}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted italic mt-6 px-4">
              Once confirmed, we'll reach out within 24 hours to get started.
            </p>
          </div>

          {/* Form */}
          <div className="animate-fadeUp" style={{ animationDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                  <input required type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                  <input required type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-colors" />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium mb-2">Address</label>
                <input required type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-colors" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium mb-2">Zip Code</label>
                  <input required type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-colors" />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium mb-2">City</label>
                  <input required type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="w-full bg-surface border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:bg-white transition-colors" />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-foreground text-white py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-transform hover:scale-95 mt-4"
              >
                Confirm request
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
