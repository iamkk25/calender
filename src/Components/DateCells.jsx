import styles from "./DateCells.module.css";

function DateCells({ days, isCurrentDate }) {
	return (
		<div className={styles.days}>
			{days.map((day, idx) => (
				<div
					className={`${styles.dateCell} ${
						day?.className ? styles[day?.className] : ""
					}`.trim()}
					key={idx}
				>
					{day.date}
				</div>
			))}
		</div>
	);
}

export default DateCells;
