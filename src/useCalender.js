import { useState } from "react";

export const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

function useCalender() {
    const days = [];
    // Current Month
    const date = new Date();
    const currentMonthIndex = date.getMonth();
    const currentFullYear = date.getFullYear();
    const [monthIndex, setMonthIndex] = useState(currentMonthIndex);
    const [year, setYear] = useState(currentFullYear);

    function prevMonthHandler() {
        if (monthIndex === 0) {
            setMonthIndex(prev => prev = 11);
            setYear(prevYear => prevYear - 1);
        }
        else {
            setMonthIndex(prev => prev - 1);
        }
    }

    function nextMonthHandler() {
        if (monthIndex === 11) {
            setMonthIndex(prev => prev = 0);
            setYear(prevYear => prevYear + 1)
        }
        else {
            setMonthIndex(prev => prev + 1);
        }
    }

    // setting month,year based on navigation
    date.setMonth(monthIndex);
    date.setFullYear(year);

    const now = new Date();

    // const currentDate = date.getDate()

    const currentMonth = months[monthIndex];
    const todayIndex = date.getDay();
    const today = week[todayIndex];
    const fullDate = now.toDateString();
    const startDate = new Date(date.getFullYear(), monthIndex, 1).getDate();
    const lastDate = new Date(date.getFullYear(), monthIndex + 1, 0).getDate();

    // Last Month
    const lastMonth = new Date(date.getFullYear(), monthIndex, 0);

    // Next Month 
    const nextMonth = new Date(date.getFullYear(), monthIndex + 1, 1);


    const lastMonthLastDay = lastMonth.getDay() + 1;
    const nextMonthDaysIteration = Math.abs(nextMonth.getDay() - 7);

    for (let i = lastMonthLastDay; i > 0; i--) {
        days.push({ date: lastMonth.getDate() - i + 1, className: 'prev-month' });
    }

    for (let i = startDate; i <= lastDate; i++) {
        const dateObj = { date: i }
        // now.getDate() === i && now.getMonth() === date.getMonth()
        if ((now.getDate() === i) && (now.toDateString() === date.toDateString())) {
            dateObj.className = 'current-date'
        }
        days.push(dateObj);
    }

    for (let i = 1; i <= nextMonthDaysIteration; i++) {
        days.push({ date: i, className: 'next-month' })
    }

    return {
        days,
        currentMonth,
        monthIndex,
        today,
        fullDate,
        dateObj: date,
        prevMonthHandler,
        nextMonthHandler
    }

}

export default useCalender;