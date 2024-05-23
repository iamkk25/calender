import { week } from "../useCalender";
import styles from "./Weekdays.module.css";

function Weekdays({ today, dateObj }) {
	const now = new Date();
	const isCurrentMonth =
		now.getMonth() === dateObj.getMonth() &&
		now.getFullYear() === dateObj.getFullYear();
	return (
		<div className={styles.weeks}>
			{week.map((day, index) => (
				<div
					className={`${styles.weekday} ${
						day === today && isCurrentMonth ? styles.today : ""
					}`.trim()}
					key={index}
				>
					{day}
				</div>
			))}
		</div>
	);
}

export default Weekdays;
