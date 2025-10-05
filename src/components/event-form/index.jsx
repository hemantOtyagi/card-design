"use client";
import { useState, useEffect } from "react";
import { X, Clock, MapPin, AlignLeft, Calendar, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DateTimePicker from "./sections/DateTimePicker";
import RecurrenceSelect from "./sections/RecurrenceSelect";
import CustomRecurrenceModal from "./sections/CustomRecurrenceModal";

function EventFormContent() {
  const [title, setTitle] = useState("");
  const [eventType, setEventType] = useState("Event");
  const [date, setDate] = useState("");
  const [allDay, setAllDay] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [recurrence, setRecurrence] = useState("do-not-repeat");
  const [customOpen, setCustomOpen] = useState(false);
  const [repeatUnit, setRepeatUnit] = useState("day");
  const [monthlyType, setMonthlyType] = useState("day");
  const [selectedDays, setSelectedDays] = useState([]);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [calendarName, setCalendarName] = useState("My Calendar");
  const [showLocation, setShowLocation] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);

  // Get current date and time for display
  const getCurrentDateTime = () => {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'long' });
    const startTimeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    const endTime = new Date(now.getTime() + 60 * 60 * 1000);
    const endTimeStr = endTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    return { dateStr, startTimeStr, endTimeStr };
  };

  const { dateStr, startTimeStr, endTimeStr } = getCurrentDateTime();

  useEffect(() => {
    if (repeatUnit !== "week") setSelectedDays([]);
  }, [repeatUnit]);

  const toggleDay = (dayValue) =>
    setSelectedDays((prev) =>
      prev.includes(dayValue) ? prev.filter((d) => d !== dayValue) : [...prev, dayValue]
    );

  const recurrenceSummary = () => {
    if (recurrence === "custom") {
      if (repeatUnit === "day") return "Repeats daily";
      if (repeatUnit === "week")
        return `Repeats weekly on ${selectedDays.map((d) => d.toUpperCase()).join(", ")}`;
      if (repeatUnit === "month")
        return monthlyType === "day" ? "Repeats monthly on day 3" : "Repeats monthly on first Friday";
    }
    const summaryMap = {
      "do-not-repeat": "Does not repeat",
      daily: "Repeats daily",
      weekly: "Repeats weekly",
      monthly: "Repeats monthly",
      "every-weekday": "Repeats every weekday",
    };
    return summaryMap[recurrence] || "";
  };

  return (
    <div className="bg-white rounded-lg w-full max-w-2xl max-h-[85vh] overflow-y-auto">
      {/* Header */}

      {/* Title Input */}
      <div className="flex justify-between p-6">
        <input
          type="text"
          placeholder="Add Event "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-normal text-gray-800 placeholder-gray-400 border-b-1 pb-2 focus:outline-none"
        />
      </div>


      {/* Date and Time Section */}
      <div className="px-4 pb-4">
        {!showDateTimePicker ? (
          <button
            onClick={() => setShowDateTimePicker(true)}
            className="w-full text-left hover:bg-gray-50 rounded-lg p-3 transition-colors"
          >
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-gray-600 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-800 font-medium">
                    {date || dateStr}
                  </span>
                  <span className="text-gray-800">
                    {startTime || startTimeStr} – {endTime || endTimeStr}
                  </span>
                </div>
                <div className="text-xs text-gray-600">
                  Time zone • {recurrenceSummary()}
                </div>
              </div>
            </div>
          </button>
        ) : (
          <div className="bg-gray-100 rounded-lg p-3">
            <DateTimePicker
              date={date}
              setDate={setDate}
              allDay={allDay}
              setAllDay={setAllDay}
              startTime={startTime}
              setStartTime={setStartTime}
              endTime={endTime}
              setEndTime={setEndTime}
            />
            <button
              onClick={() => setShowDateTimePicker(false)}
              className="mt-2 text-sm text-blue-600 hover:underline"
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Recurrence Section */}
      {showDateTimePicker && (
        <div className="px-4 pb-4">
          <RecurrenceSelect 
            recurrence={recurrence} 
            setRecurrence={setRecurrence} 
            setCustomOpen={setCustomOpen} 
          />
          {recurrence === "custom" && (
            <p className="text-sm text-gray-600 mt-2">{recurrenceSummary()}</p>
          )}
        </div>
      )}

      {/* Add Location Button or Input */}
      {!showLocation ? (
        <button 
          onClick={() => setShowLocation(true)}
          className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-left"
        >
          <MapPin className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Add location</span>
        </button>
      ) : (
        <div className="px-4 py-3 flex items-start gap-3 border-t border-b">
          <MapPin className="w-5 h-5 text-gray-600 mt-1" />
          <input
            type="text"
            placeholder="Add location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 text-gray-800 placeholder-gray-400 border-none focus:outline-none"
            autoFocus
          />
        </div>
      )}

      {/* Add Description Button or Textarea */}
      {!showDescription ? (
        <button 
          onClick={() => setShowDescription(true)}
          className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 text-left border-b"
        >
          <AlignLeft className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700">Add description</span>
        </button>
      ) : (
        <div className="px-4 py-3 flex items-start gap-3 border-b">
          <AlignLeft className="w-5 h-5 text-gray-600 mt-1" />
          <textarea
            placeholder="Add description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1 text-gray-800 placeholder-gray-400 border-none focus:outline-none resize-none min-h-[60px]"
            autoFocus
          />
        </div>
      )}

      {/* Calendar Selection */}
      <div className="px-4 py-3 flex items-center gap-3">
        <Calendar className="w-5 h-5 text-gray-600" />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={calendarName}
              onChange={(e) => setCalendarName(e.target.value)}
              className="font-medium text-gray-800 border-none focus:outline-none bg-transparent"
            />
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          </div>
          <div className="text-xs text-gray-600">
            Busy • Default visibility • Notify 30 minutes before
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="px-4 py-4 flex items-center justify-end gap-3 border-t sticky bottom-0 bg-white">
        <button className="px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded">
          More options
        </button>
        <Button className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700">
          Save
        </Button>
      </div>

      <CustomRecurrenceModal
        open={customOpen}
        setOpen={setCustomOpen}
        repeatUnit={repeatUnit}
        setRepeatUnit={setRepeatUnit}
        monthlyType={monthlyType}
        setMonthlyType={setMonthlyType}
        selectedDays={selectedDays}
        toggleDay={toggleDay}
      />
    </div>
  );
}

export default function EventForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Multiple Batches
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Create Event</DialogTitle>
          <DialogDescription>
            Add a new event to your calendar with date, time, and recurrence options.
          </DialogDescription>
        </DialogHeader>
        <EventFormContent />
      </DialogContent>
    </Dialog>
  );
}
