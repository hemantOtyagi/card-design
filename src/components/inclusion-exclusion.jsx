import { Check, X } from "lucide-react";

const TourInclusionsExclusions = ({ inclusions, exclusions }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-10 p-6 border rounded-lg">
      {/* Inclusions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Meghalaya Tour Inclusions</h2>
        <ul className="space-y-2">
          {inclusions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Exclusions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Meghalaya Tour Exclusions</h2>
        <ul className="space-y-2">
          {exclusions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <X className="text-red-600 mt-1 flex-shrink-0" size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TourInclusionsExclusions;
