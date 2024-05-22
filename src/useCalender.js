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
    const [monthIndex, setMonthIndex] = useState(currentMonthIndex);

    function prevMonthHandler() {
        setMonthIndex(prev => prev - 1);
    }

    function nextMonthHandler() {
        setMonthIndex(prev => prev + 1);
    }

    console.log(monthIndex);
    date.setMonth(monthIndex)

    const now = new Date();

    // const currentDate = date.getDate()
    const isCurrentDate = (now.getMonth() === date.getMonth()) && (now.getDate() === date.getDate());

    console.log({ isCurrentDate });

    const currentMonth = months[monthIndex];
    const todayIndex = date.getDay();
    const today = week[todayIndex];
    const fullDate = date.toDateString();
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
        if (now.getDate() === i && now.getMonth() === date.getMonth()) {
            dateObj.className = 'current-date'
        }
        days.push(dateObj);
    }

    for (let i = 1; i <= nextMonthDaysIteration; i++) {
        days.push({ date: i, className: 'next-month' })
    }

    return {
        days,
        isCurrentDate,
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