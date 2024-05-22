import CalenderHeader from "./Components/CalenderHeader";
import DateCells from "./Components/DateCells";
import Weekdays from "./Components/Weekdays";
import "./App.css";
import useCalender from "./useCalender";

function App() {
	const {
		dateObj,
		monthIndex,
		isCurrentDate,
		currentMonth,
		days,
		fullDate,
		nextMonthHandler,
		prevMonthHandler,
		today,
	} = useCalender();

	return (
		<>
			<div className="calender">
				<div className="grid">
					<CalenderHeader
						fullDate={fullDate}
						month={currentMonth}
						nextMonthHandler={nextMonthHandler}
						prevMonthHandler={prevMonthHandler}
					/>
					<Weekdays today={today} />
					<DateCells isCurrentDate={isCurrentDate} days={days} />
				</div>
			</div>
		</>
	);
}

export default App;
