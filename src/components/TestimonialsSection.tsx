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
    <section className="relative py-32 px-6 lg:px-8 overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-100 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Loved by teams
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              around the world
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of teams who transformed their support experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border-2 border-slate-200 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 to-purple-200/40 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-all duration-500 -z-10"></div>

              <Quote className="w-10 h-10 text-slate-300 mb-6" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 rounded-full border border-slate-200">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-slate-900 font-semibold">4.9/5 average rating</span>
            <span className="text-slate-600">from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
