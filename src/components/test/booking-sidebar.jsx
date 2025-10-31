import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Edit, MoreHorizontal } from "lucide-react";
export default function BookingSidebar({
  booking = {
    name: "Yashmeet Logout",
    age: 22,
    gender: "Male",
    contact: "7393885077",
    bookingDate: "1st Oct, 2025 | 12:16 AM",
    eventTitle: "Extended SURF/ SUP ADVENTURE",
    eventDate: "Thu, 2nd Oct | 10:00 AM",
    location: "Goa Beach, India",
    price: "₹5,000",
    qty: 1,
    paid: 0,
    paymentStatus: "Pending",
    avatarUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=60",
    eventImage:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=60",
  },
}) {
  const [guestOpen, setGuestOpen] = useState(true);
  return (
    <aside className="min-w-3xl h-full bg-white border-l border-neutral-200 overflow-y-auto p-6">
      {/* Tabs */}
      <div className="flex items-center gap-3 mb-5">
        <button className="flex-1 text-sm py-2 rounded-lg bg-neutral-100 font-medium shadow-sm">
          Details
        </button>
        <button className="text-sm py-2 px-4 rounded-lg text-neutral-500">
          Payments
        </button>
        <button className="text-sm py-2 px-4 rounded-lg text-neutral-500">
          Remarks
        </button>
      </div>
      <Separator className="mb-5" />
      {/* Profile card (shadcn + tailwind) */}
      <Card className="relative rounded-2xl shadow-sm mb-6 border border-neutral-100 hover:shadow-md transition-shadow overflow-visible">
        <CardContent className="p-6">
          <div className="flex items-start gap-5">
            <div className="flex-shrink-0 -mt-2">
              <Avatar className="w-20 h-20 ring-2 ring-white shadow">
                <AvatarImage src={booking.avatarUrl} alt={booking.name} />
                <AvatarFallback>{booking.name.split(" ")[0][0]}</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-lg font-bold text-neutral-900 leading-tight">
                    {booking.name}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    {booking.age}y, {booking.gender}
                  </div>
                </div>
                <Button size="sm" variant="ghost" aria-label="Edit profile">
                  <Edit className="w-4 h-4 text-emerald-600" />
                </Button>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-xs text-neutral-500">Contact</div>
                  <div className="font-medium text-neutral-900">
                    {booking.contact}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Booking Date</div>
                  <div className="font-medium text-neutral-900">
                    {booking.bookingDate}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-neutral-600">
                <Badge
                  variant="subtle"
                  className="bg-emerald-100 text-emerald-700"
                >
                  Booked
                </Badge>
                <span className="text-neutral-400">•</span>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Separator className="my-5" />
      {/* Event */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-4">
          <img
            src={booking.eventImage}
            alt={booking.eventTitle}
            className="w-24 h-24 rounded-xl object-cover shadow-md"
          />
          <div>
            <h3 className="text-base font-semibold leading-tight text-neutral-900">
              {booking.eventTitle}
            </h3>
            <p className="text-xs text-neutral-500 mt-1">{booking.eventDate}</p>
            <p className="text-xs text-neutral-500 mt-1">
              Location: {booking.location}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 font-medium">
            Online
          </span>
          <Button size="sm" variant="ghost" className="mt-2" aria-label="More">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <Separator className="my-5" />
      {/* Assigned to */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-neutral-900">
            Assigned to
          </div>
          <Button size="sm" variant="outline">
            Assign
          </Button>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between py-2 border-b border-neutral-100">
            <span className="text-neutral-500">Sales Rep</span>
            <span className="font-medium text-neutral-900">Unassigned</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-neutral-500">Operations Rep</span>
            <span className="font-medium text-neutral-900">Unassigned</span>
          </div>
        </div>
      </div>
      <Separator className="my-5" />
      {/* Payment */}
      <div className="rounded-xl border border-neutral-100 p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-neutral-900">
            {booking.eventTitle.includes("+")
              ? booking.eventTitle.split("+")[0].trim()
              : "Package"}
          </h4>
          <span className="text-sm font-semibold text-neutral-900">
            {booking.price}
          </span>
        </div>
        <p className="text-xs text-neutral-500">
          {booking.qty} item • Add-ons: None
        </p>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-neutral-500">Payment Status</span>
          <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-md">
            {booking.paymentStatus}
          </span>
        </div>
      </div>
      <Separator className="my-6" />
      {/* Guest details (only 1) */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-semibold text-neutral-900">
            Guest Details
          </div>
          <Button size="sm" variant="ghost">
            Edit
          </Button>
        </div>
        <div className="rounded-md border border-neutral-100 overflow-hidden">
          <button
            className="w-full text-left p-4 flex items-center justify-between bg-white"
            onClick={() => setGuestOpen((s) => !s)}
            aria-expanded={guestOpen}
          >
            <div className="font-medium text-neutral-900">{booking.name}</div>
            <div className="text-sm text-neutral-500">
              {guestOpen ? "▴" : "▾"}
            </div>
          </button>
          <div
            className={`p-4 bg-white transition-all duration-200 ${
guestOpen ? "max-h-[500px]" : "max-h-0 p-0"
}`}
            style={{ overflow: "hidden" }}
          >
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-xs text-neutral-500">Fullname</div>
                <div className="font-medium text-neutral-900">
                  {booking.name}
                </div>
                <div className="text-xs text-neutral-500 mt-3">Contact</div>
                <div className="font-medium text-neutral-900">
                  {booking.contact}
                </div>
                <div className="text-xs text-neutral-500 mt-3">Age</div>
                <div className="font-medium text-neutral-900">
                  {booking.age}
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-500">Email</div>
                <div className="font-medium text-neutral-900">
                  meetyash681@gmail.com
                </div>
                <div className="text-xs text-neutral-500 mt-3">Gender</div>
                <div className="font-medium text-neutral-900">
                  {booking.gender}
                </div>
                <div className="text-xs text-neutral-500 mt-3">
                  Pickup Point
                </div>
                <div className="font-medium text-neutral-900">–</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </aside>
  );
}
