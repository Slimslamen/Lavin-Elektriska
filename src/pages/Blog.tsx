
import { Calendar, User, ArrowRight } from 'lucide-react';
import SecondHeader from '../components/SeconHeader';
import Footer from '../components/Footer';
import { useState } from 'react';
import BlogModal from '../components/BlogModal';

const Blog = () => {

  const [showModal, setShowModal] = useState(false)

  const blogPosts = [
    {
      id: 1,
      title: "5 Vanliga Elektriska Problem i Hemmet och Hur Du Undviker Dem",
      excerpt: "Lär dig om de mest vanliga elektriska problemen som kan uppstå i ditt hem och hur du kan förebygga dem för att säkerställa din familjs säkerhet.",
      content: "Lång text!",
      author: "Lavin Elektriska",
      date: "2024-06-15",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Säkerhet"
    },
    {
      id: 2,
      title: "Energieffektiva Lösningar för Ditt Hem",
      excerpt: "Upptäck hur du kan minska dina elräkningar och bidra till miljön genom att uppgradera till energieffektiva elektriska lösningar.",
      content: "Lång text!",
      author: "Lavin Elektriska",
      date: "2024-06-10",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Energibesparing"
    },
    // {
    //   id: 3,
    //   title: "Guide till Laddstolpar för Elbilar",
    //   excerpt: "Allt du behöver veta om installation av laddstolpar hemma - från val av rätt modell till installationsprocessen.",
    //   content: "Lång text!",
    //   author: "Lavin Elektriska",
    //   date: "2024-06-05",
    //   image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   category: "Elbilar"
    // },
  ];

  return (
    <div className="min-h-screen">
      <SecondHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#66BEF0] to-[#4A90E2] py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Genomförda Arbeten</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Utforska våra projekt. Elteknik med precision och passion.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section id='blogPage' className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#66BEF0] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('sv-SE')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button onClick={() => setShowModal(!showModal)} className="flex items-center gap-2 text-white font-semibold transition-colors">
                    Läs mer
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                {showModal === true ? (
                    <BlogModal openBlogModal={showModal} post={post} />
                  ) : (
                      <div className='hidden'></div>
                  )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
