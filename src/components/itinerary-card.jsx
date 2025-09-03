import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const ItineararyCard = () => {
  return (
    <Dialog>
      <div className="bg-white rounded-lg p-1 shadow-md flex gap-2">
        {/* Card Image */}
        <div className="relative h-26 w-42 rounded-md overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1661962354730-cda54fa4f9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute h-full w-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="flex flex-col justify-start w-82">
          <h1 className="font-bold text-xl">Day 1</h1>
          <p className="text-sm">
            Trek down to Heaven, Walk on Double Decker Living Roots & Spot a
            Rainbow!
          </p>
          <DialogTrigger asChild>
            <button className="text-white  text-xs font-semibold self-end px-2 py-2 bg-gray-800 hover:bg-gray-900 rounded-sm transition duration-300">
              View Details
            </button>
          </DialogTrigger>
        </div>
      </div>

      {/* Properly placed DialogContent */}
      <DialogContent className="sm:max-w-[425px] bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-lg font-semibold ">Day 1: Itinerary</h2>
        <div className="relative h-46 w-full rounded-md overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1661962354730-cda54fa4f9f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="absolute h-full w-full object-cover"
          />
        </div>
        <ul className="list-disc pl-5 text-sm text-gray-700 text-start space-y-2">
          <li>
            Full details about the trek, spots, and experiences will go here.
          </li>
          <li>
            Travelers coming by Flight will get picked by our vehicle at Guwahati
            Airport around 11:45 AM.
          </li>
          <li>
            We will start our journey towards the mountain town of Shillong, the
            capital of Meghalaya. It’s a drive of 120 Km that takes 3.5 hours usually.
          </li>
          <li>
            Cross Meghalaya check post and break for Lunch at a restaurant.
          </li>
          <li>
            Continue journey to the extremely pretty Umium Lake view point that gives a
            sneak peek of how beautiful Meghalaya is. If lucky, we can get to
            experience a beautiful sunset over here.
          </li>
          <li>
            Reach Shillong town late evening after buying some snacks and drinks (if
            you wish to) at Police Bazar, check into our guest house and freshen up.
          </li>
          <li>
            Gather at the common area, socialize.
          </li>
          <li>
            Rest for the night on cozy beds.
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default ItineararyCard;
