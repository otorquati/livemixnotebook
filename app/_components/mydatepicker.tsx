"use client"
import { useState } from "react";
import { Calendar } from "./ui/calendar";

const MyDatePicker = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    console.log({date})

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
  );
}
export default MyDatePicker