import AnimatedItem from "../../../components/animations/AnimatedItem";
import StaggerList from "../../../components/animations/StaggerList";
import { Heart, ShieldCheck, Users, Clock } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Compassion First",
    description: "Beyond medical care, we provide emotional support and empathy, treating every patient with the dignity they deserve.",
    color: "text-red-500",
    bg: "bg-red-50"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Unwavering Trust",
    description: "Transparency is our hallmark. Every caregiver is background-verified and strictly follows international safety protocols.",
    color: "text-green-600",
    bg: "bg-green-50"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Family Values",
    description: "We don't just send staff; we send companions who integrate into your family to provide seamless, personalized support.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Availability",
    description: "Health needs don't follow a schedule. Our Bangalore-based team is available around the clock for emergencies.",
    color: "text-orange-600",
    bg: "bg-orange-50"
  },
];

export default function Values() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Pillars of Our Care</h2>
          <p className="text-slate-600 max-w-2xl mx-auto italic">
            "Quality is never an accident; it is always the result of high intention and sincere effort."
          </p>
        </div>

        <StaggerList>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <AnimatedItem key={idx}>
                <div className="group h-full p-8 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-sky-100 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl mb-6 ${value.bg} ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </StaggerList>
      </div>
    </section>
  );
}