import { useForm, ValidationError } from '@formspree/react';

const Contact = ({showContent}) => {
  const [state, handleSubmit] = useForm("xrbkjgpz");
  if (state.succeeded) {
    <div className='py-20 bg-white rounded-lg mt-20'>
      return <h2 className='text-4xl font-bold text-gray-900 '>Tack för din mail</h2>;
    </div>
  }

  return (
    <section id="contact" className={`py-20 bg-white rounded-lg mt-20 transition-all duration-700 ease-in-out
      ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 hidden"}
      `}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Kontakta oss</h2>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          {/* <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#66BEF0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#66BEF0]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#66BEF0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#66BEF0]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@sparkelectrical.com</p>
                  <p className="text-sm text-gray-500">We'll respond within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#66BEF0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#66BEF0]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                  <p className="text-gray-600">Your City and surrounding areas</p>
                  <p className="text-sm text-gray-500">Within 50 miles radius</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#66BEF0] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#66BEF0]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                  <p className="text-gray-600">Mon-Fri: 7:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sat: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sun: Emergency calls only</p>
                </div>
              </div>
            </div>
          </div> */}
          
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Begär en offert</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Förnamn</label>
                  <input 
                    required
                    type='text' 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                    placeholder="Stefan"
                    name='firstname'
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Efternamn</label>
                  <input
                    required
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                    placeholder="Magnusson"
                    name='lastname'
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    required
                    type="email" 
                    id='email'
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                    placeholder="Stefan@Lavinelektirksa.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                  />
                </div>
              </div>
              {/* <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Typ av arbete</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent">
                  <option>Välj typ av tjänst</option>
                  <option>Residential Electrical</option>
                  <option>Commercial Electrical</option>
                  <option>Emergency Repair</option>
                  <option>Panel Upgrade</option>
                  <option>Lighting Installation</option>
                  <option>Electrical Inspection</option>
                </select>
              </div> */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Meddelande</label>
                <textarea 
                  required
                  rows={4} 
                  maxLength={400}
                  name='message'
                  id='message'
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                  placeholder="Beskriv ditt önskemål..."
                ></textarea>
              </div>
              
              <button disabled={state.submitting} type='submit' className="w-full bg-[#66BEF0] text-white py-3 rounded-lg font-semibold hover:bg-[#5aa8d4] transition-colors">
                Skicka meddelande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
