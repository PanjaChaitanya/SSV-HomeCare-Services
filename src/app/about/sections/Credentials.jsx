import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";
import { Award, Users2, ShieldCheck, MapPin } from "lucide-react";

export default function Credentials() {
  const stats = [
    { label: "Years of Service", val: "10+", icon: Award, color: "bg-blue-50 text-blue-600" },
    { label: "Families Impacted", val: "1,000+", icon: Users2, color: "bg-orange-50 text-orange-600" },
    { label: "Verified Caregivers", val: "100%", icon: ShieldCheck, color: "bg-green-50 text-green-600" },
    { label: "Locations Served", val: "Bangalore", icon: MapPin, color: "bg-purple-50 text-purple-600" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow bg-white">
            <div className={`${item.color} p-4 rounded-full mb-4`}>
              <item.icon size={28} />
            </div>
            <div className="text-3xl font-extrabold text-slate-900 mb-1">{item.val}</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}