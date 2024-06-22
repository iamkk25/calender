import { useState } from "react";
import styles from "./CalenderInfo.module.css";
import MonthAndYearInput from "./MonthAndYearInput";

function CalenderInfo({
	currentMonth,
	fullDate,
	year,
	monthIndex,
	changeMonthAndYear,
}) {
	const [toggleInput, setToggleInput] = useState(false);

	function closeHanlder(month, year) {
		setToggleInput(false);
		changeMonthAndYear(month, year);
	}
	return (
		<div className={styles.info}>
			{toggleInput ? (
				<MonthAndYearInput
					changeMonthAndYear={closeHanlder}
					currentMonth={currentMonth}
					currentYear={year}
					monthIndex={monthIndex}
				/>
			) : (
				<h2 className={styles.month} onClick={() => setToggleInput(true)}>
					{currentMonth}, {year}
				</h2>
			)}
			<h3 className={styles.fullday}>{fullDate}</h3>
		</div>
	);
}

export default CalenderInfo;
