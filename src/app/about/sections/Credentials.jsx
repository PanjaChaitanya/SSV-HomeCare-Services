// components/about/Credentials.jsx
import FadeInLeft from "@/components/animations/FadeInLeft";
import FadeInRight from "@/components/animations/FadeInRight";

export default function Credentials() {
  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <FadeInLeft>
        <div className="bg-blue-100 p-6 rounded-xl text-center shadow-md">
          <div className="text-4xl font-bold text-sky-700 mb-2">10+</div>
          <h3 className="font-semibold text-lg mb-1">Years of Experience</h3>
          <p className="text-sm text-gray-600">Serving families with dedication since 2013</p>
        </div>
      </FadeInLeft>

      <FadeInRight>
        <div className="bg-orange-100 p-6 rounded-xl text-center shadow-md">
          <div className="text-4xl font-bold text-orange-700 mb-2">1000+</div>
          <h3 className="font-semibold text-lg mb-1">Families Served</h3>
          <p className="text-sm text-gray-600">Trusted by hundreds of satisfied families</p>
        </div>
      </FadeInRight>
    </div>
  );
}
