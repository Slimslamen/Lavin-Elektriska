import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to solve your electrical problems? Contact us today for a free estimate 
            or emergency service.
          </p>
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
            <form className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent">
                  <option>Select a service</option>
                  <option>Residential Electrical</option>
                  <option>Commercial Electrical</option>
                  <option>Emergency Repair</option>
                  <option>Panel Upgrade</option>
                  <option>Lighting Installation</option>
                  <option>Electrical Inspection</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#66BEF0] focus:border-transparent"
                  placeholder="Please describe your electrical needs..."
                ></textarea>
              </div>
              
              <button className="w-full bg-[#66BEF0] text-white py-3 rounded-lg font-semibold hover:bg-[#5aa8d4] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
