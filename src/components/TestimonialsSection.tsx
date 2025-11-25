import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Head of Support',
      company: 'TechFlow',
      image: 'SC',
      quote: 'Enorve transformed how we handle support. Our response times dropped by 60% and customer satisfaction is at an all-time high.',
      rating: 5
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CEO',
      company: 'InnovateCo',
      image: 'MR',
      quote: 'The AI-powered insights are game-changing. We can predict issues before they become problems and our team is more productive than ever.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      role: 'Customer Success Lead',
      company: 'CloudBase',
      image: 'EW',
      quote: 'Best support platform we\'ve ever used. The unified inbox and automation features save us 15+ hours every week.',
      rating: 5
    }
  ];

  return (
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Loved by teams
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              around the world
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of teams who transformed their support experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-8 hover:scale-105 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-500 -z-10"></div>

              <Quote className="w-10 h-10 text-purple-400/50 mb-6" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-white text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-semibold">4.9/5 average rating</span>
            <span className="text-gray-400">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
