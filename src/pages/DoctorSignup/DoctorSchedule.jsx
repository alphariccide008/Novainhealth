import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import DocSideBar from "../../components/DocSideBar";
import { doctorAPI } from "../../services/doctorApi";
import toast from "react-hot-toast";

const EditTimeSlotsModal = ({
  visible,
  onClose,
  selectedDay,
  slots,
  setSlots,
  slotDuration,
}) => {
  const [newSlotStart, setNewSlotStart] = useState("");

  const addSlot = () => {
    if (!newSlotStart) return;
    const [hour, min] = newSlotStart.split(":").map(Number);
    const totalMinutes = hour * 60 + min + slotDuration;
    const endHour = String(Math.floor(totalMinutes / 60)).padStart(2, "0");
    const endMin = String(totalMinutes % 60).padStart(2, "0");

    const newSlot = {
      start: newSlotStart,
      end: `${endHour}:${endMin}`,
      day: selectedDay,
    };

    setSlots((prev) => {
      const exists = prev.some(
        (slot) =>
          slot.day === newSlot.day &&
          slot.start === newSlot.start &&
          slot.end === newSlot.end
      );
      if (!exists) return [...prev, newSlot];
      return prev;
    });
    setNewSlotStart("");
  };

  const deleteSlot = (index) => {
    const filteredSlots = slots.filter((slot) => slot.day !== selectedDay);
    const slotsOfDay = slots.filter((slot) => slot.day === selectedDay);
    slotsOfDay.splice(index, 1);
    setSlots([...filteredSlots, ...slotsOfDay]);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">
          Edit Time Slots - {selectedDay}
        </h2>
        <div className="mb-4">
          <label className="block text-sm mb-2">Add Start Time</label>
          <input
            type="time"
            value={newSlotStart}
            onChange={(e) => setNewSlotStart(e.target.value)}
            className="w-full border rounded p-2"
          />
          <button
            onClick={addSlot}
            className="mt-3 bg-[#46B8E3] text-white px-4 py-2 rounded w-full"
          >
            Add Time Slot
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {slots
            .filter((slot) => slot.day === selectedDay)
            .map((slot, index) => (
              <div
                key={index}
                className="bg-[#46B8E3] text-white px-4 py-2 rounded flex items-center"
              >
                {slot.start} - {slot.end}
                <button
                  className="ml-2 text-black"
                  onClick={() => deleteSlot(index)}
                >
                  ×
                </button>
              </div>
            ))}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-200 text-black px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const DoctorPatients = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [slotDuration, setSlotDuration] = useState(30);
  const [slots, setSlots] = useState([]);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const generateSlotsForAllDays = () => {
      const startHour = 9;
      const endHour = 17;
      const initialSlots = [];

      daysOfWeek.forEach((day) => {
        let time = startHour * 60;
        while (time + slotDuration <= endHour * 60) {
          const startH = String(Math.floor(time / 60)).padStart(2, "0");
          const startM = String(time % 60).padStart(2, "0");
          const endTime = time + slotDuration;
          const endH = String(Math.floor(endTime / 60)).padStart(2, "0");
          const endM = String(endTime % 60).padStart(2, "0");

          const newSlot = {
            day,
            start: `${startH}:${startM}`,
            end: `${endH}:${endM}`,
          };

          const key = `${newSlot.day}-${newSlot.start}-${newSlot.end}`;
          initialSlots.push({ ...newSlot, key });

          time += slotDuration;
        }
      });

      setSlots((prev) => {
        const existingKeys = new Set(
          prev.map((s) => `${s.day}-${s.start}-${s.end}`)
        );
        const newUnique = initialSlots.filter(
          (s) => !existingKeys.has(`${s.day}-${s.start}-${s.end}`)
        );
        return [...prev, ...newUnique];
      });
    };

    generateSlotsForAllDays();
  }, [slotDuration]);

  const pushSlotsToAPI = async () => {
    const filtered = slots.filter((slot) => slot.day === selectedDay);
    const uniqueSet = new Set();
    const uniqueSlots = filtered.filter((slot) => {
      const key = `${slot.day}-${slot.start}-${slot.end}`;
      if (uniqueSet.has(key)) return false;
      uniqueSet.add(key);
      return true;
    });

    try {
      for (const slot of uniqueSlots) {
        await doctorAPI.addAvailabilitySlot({
          dayOfWeek: slot.day.toLowerCase(),
          startTime: slot.start,
          endTime: slot.end,
          isAvailable: true,
        });
      }
      toast.success("Time slots saved successfully!");
    } catch (err) {
      toast.error(err?.message || "Failed to save time slots");
    }
  };

  return (
    <>
      <div
        className="relative text-white px-[4%] lg:px-[7%] md:pt-[10%] pt-[25%] lg:pb-5"
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: "#021140",
          minHeight: "100px",
        }}
      >
        <h3 className="pt-3 text-[12px] md:text-14px">
          Home / Schedule Timings
        </h3>
        <h1 className="text-[22px] md:text-[24px] py-2 font-semibold">
          Schedule Timings
        </h1>
      </div>

      <section className="md:py-[20%] lg:top-[15%] py-[50%] w-full bg-[#e2e2e2]">
        <div className="flex mx-[2%]">
          <DocSideBar />
          <div className="mx-6 w-full">
            <h1 className="text-[28px] font-semibold">Schedule Timings</h1>
            <h1 className="text-[18px] text-[#757575] py-4">
              Timing Slot Duration
            </h1>
            <div className="text-[#757575] my-10">
              <select
                className="w-[30%] p-2 rounded"
                value={slotDuration}
                onChange={(e) => setSlotDuration(parseInt(e.target.value))}
              >
                <option value={15}>15 mins</option>
                <option value={30}>30 mins</option>
                <option value={45}>45 mins</option>
                <option value={60}>60 mins</option>
              </select>
            </div>

            <div className="bg-white rounded">
              <div className="md:flex border text-center gap-3 p-5">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className={`flex-col my-2 border py-2 w-full md:w-1/3 hover:bg-[#C52184] hover:text-white ${
                      selectedDay === day ? "bg-[#C52184] text-white" : ""
                    }`}
                  >
                    <button onClick={() => setSelectedDay(day)}>
                      {day.toUpperCase()}
                    </button>
                  </div>
                ))}
              </div>

              <div className="border">
                <div className="flex border justify-between p-5">
                  <h1 className="text-[16px] font-semibold">Time Slots</h1>
                  <button
                    onClick={() => setShowModal(true)}
                    className="gap-2 text-[#46B8E3] flex"
                  >
                    <FaEdit className="h-[20px] w-[20px]" />
                    Edit
                  </button>
                </div>
                <div className="md:flex border text-[12px] text-center gap-3 p-5 flex-wrap">
                  {slots
                    .filter((slot) => slot.day === selectedDay)
                    .map((slot, index) => (
                      <div
                        key={index}
                        className="flex-col bg-[#46B8E3] text-white my-2 border py-2 px-4 rounded"
                      >
                        {slot.start} - {slot.end}
                      </div>
                    ))}
                </div>

                <div className="text-right p-5">
                  <button
                    onClick={pushSlotsToAPI}
                    className="bg-[#46B8E3] text-white px-6 py-2 rounded"
                  >
                    Save Slots
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EditTimeSlotsModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        selectedDay={selectedDay}
        slots={slots}
        setSlots={setSlots}
        slotDuration={slotDuration}
      />
    </>
  );
};

export default DoctorPatients;
