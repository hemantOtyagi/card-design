import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

// Extended pricing data (per month)
const basePricing = {
  apartment: 30000,
  studio: 25000,
  room: 18000,
  shared2: 12000,
  shared3: 9000,
  shared4: 7000,
  dormitory: 5000,
};

export default function OccupancyPricingWidget() {
  const [selected, setSelected] = useState("apartment");
  const [customPrice, setCustomPrice] = useState("");
  const [useCustom, setUseCustom] = useState(false);
  const [perDay, setPerDay] = useState(false);

  const monthlyPrice =
    useCustom && customPrice ? Number(customPrice) : basePricing[selected];
  const finalPrice = perDay ? Math.round(monthlyPrice / 30) : monthlyPrice;

  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-md shadow-xl rounded-2xl p-4">
        <CardContent className="space-y-6">
          <h2 className="text-xl font-bold text-center">Occupancy Pricing</h2>

          {/* Occupancy Selector */}
          <Select
            onValueChange={(v) => {
              setSelected(v);
              setUseCustom(false);
            }}
            defaultValue="apartment"
          >
            <SelectTrigger className="w-full p-3 rounded-xl border">
              <SelectValue placeholder="Select occupancy level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Entire Apartment</SelectItem>
              <SelectItem value="studio">Studio</SelectItem>
              <SelectItem value="room">Private Room</SelectItem>
              <SelectItem value="shared2">2-Sharing</SelectItem>
              <SelectItem value="shared3">3-Sharing</SelectItem>
              <SelectItem value="shared4">4-Sharing</SelectItem>
              <SelectItem value="dormitory">Dormitory (6+)</SelectItem>
            </SelectContent>
          </Select>

          {/* Custom price input */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Custom Price (optional)
            </label>
            <Input
              type="number"
              placeholder="Enter custom monthly price"
              className="rounded-xl"
              value={customPrice}
              onChange={(e) => {
                setCustomPrice(e.target.value);
                setUseCustom(true);
              }}
            />
            <p className="text-xs text-gray-500">
              Entering this value overrides default pricing.
            </p>
          </div>

          {/* Per day checkbox */}
          <div className="flex items-center gap-3">
            <Checkbox
              id="perDay"
              checked={perDay}
              onCheckedChange={(v) => setPerDay(Boolean(v))}
            />
            <label
              htmlFor="perDay"
              className="text-sm font-medium cursor-pointer"
            >
              Show per-day pricing
            </label>
          </div>

          {/* Final Price Display */}
          <div className="text-center bg-gray-50 p-4 rounded-xl shadow-inner">
            <p className="text-lg font-medium">Price:</p>
            <p className="text-3xl font-bold mt-1">₹{finalPrice}</p>
            <p className="text-sm text-gray-500 mt-1">
              {perDay ? "per day" : "per month"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
