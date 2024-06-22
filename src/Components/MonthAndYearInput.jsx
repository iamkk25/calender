import { useRef } from "react";
import { months } from "../useCalender";
import styles from "./MonthAndYearInput.module.css";

function MonthAndYearInput({ currentYear, monthIndex, changeMonthAndYear }) {
	const monthRef = useRef(null);
	const yearRef = useRef(null);
	const yearsOption = [];

	for (let year = 1; year <= 3000; year++) {
		yearsOption.push(
			<option key={year} value={year}>
				{year}
			</option>
		);
	}

	function submitHandler(e) {
		e.preventDefault();
		changeMonthAndYear({
			_month: monthRef.current.value,
			_year: yearRef.current.value,
		});
	}

	return (
		<div className={styles.flexContainer}>
			<div className="field">
				<label htmlFor="month">Month: </label>
				<select
					name="month"
					id="month"
					defaultValue={monthIndex}
					ref={monthRef}
				>
					{months.map((month, idx) => (
						<option key={`${month}-${idx}`} value={idx}>
							{month}
						</option>
					))}
				</select>
			</div>
			<div className="field">
				<label htmlFor="year">Year: </label>
				<select name="year" id="year" defaultValue={currentYear} ref={yearRef}>
					{yearsOption}
				</select>
			</div>
			<button onClick={submitHandler}>submit</button>
		</div>
	);
}

export default MonthAndYearInput;
