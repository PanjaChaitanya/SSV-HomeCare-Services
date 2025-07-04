// components/about/Values.jsx
import AnimatedItem from "../../../components/animations/AnimatedItem";
import StaggerList from "../../../components/animations/StaggerList";
import { Heart, Users, Clock, CircleCheck } from "lucide-react";

const values = [
  {
    icon: <Heart className="w-10 h-10 text-red-500" />,
    title: "Compassion",
    description: "We treat each client with kindness, empathy, and genuine care",
  },
  {
    icon: <CircleCheck className="w-10 h-10 text-green-500" />,
    title: "Trust",
    description: "Building lasting relationships through reliability and transparency",
  },
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    title: "Family",
    description: "We consider ourselves part of your extended family",
  },
  {
    icon: <Clock className="w-10 h-10 text-orange-500" />,
    title: "Dedication",
    description: "Available 24/7 with unwavering commitment to quality care",
  },
];

export default function Values() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <StaggerList>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <AnimatedItem key={idx}>
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </StaggerList>
    </div>
  );
}
