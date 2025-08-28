"use client"
import React, { useEffect, useState } from "react";

const TimeLocation = () => {
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");

    useEffect(() => {
        // update time every second
        const interval = setInterval(() => {
            const now = new Date();
            const formattedTime = now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
            setTime(formattedTime);
        }, 1000);

        // detect location (based on timezone, not GPS)
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setLocation(tz);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full bg-gray-900 text-gray-200 text-sm px-6 py-2 flex justify-between items-center">
            <span>📍 {location}</span>
            <span>🕒 {time}</span>
        </div>
    );
};

export default TimeLocation;
