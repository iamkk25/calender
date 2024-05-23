import CalenderHeader from "./Components/CalenderHeader";
import DateCells from "./Components/DateCells";
import Weekdays from "./Components/Weekdays";
import "./App.css";
import useCalender from "./useCalender";

function App() {
	const {
		dateObj,
		monthIndex,
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
						year={dateObj.getFullYear()}
						fullDate={fullDate}
						month={currentMonth}
						nextMonthHandler={nextMonthHandler}
						prevMonthHandler={prevMonthHandler}
					/>
					<Weekdays today={today} />
					<DateCells days={days} />
				</div>
			</div>
		</>
	);
}

export default App;
