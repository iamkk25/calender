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
		today,
		nextMonthHandler,
		prevMonthHandler,
		changeMonthAndYearHandler,
	} = useCalender();

	return (
		<>
			<div className="calender">
				<div className="grid">
					<CalenderHeader
						year={dateObj.getFullYear()}
						fullDate={fullDate}
						month={currentMonth}
						monthIndex={monthIndex}
						nextMonthHandler={nextMonthHandler}
						prevMonthHandler={prevMonthHandler}
						changeMonthAndYear={changeMonthAndYearHandler}
					/>
					<Weekdays dateObj={dateObj} today={today} />
					<DateCells days={days} />
				</div>
			</div>
		</>
	);
}

export default App;
