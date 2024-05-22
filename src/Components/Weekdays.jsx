import { week } from "../useCalender";
import styles from "./Weekdays.module.css";

function Weekdays({ today }) {
	return (
		<div className={styles.weeks}>
			{week.map((day, index) => (
				<div
					className={`${styles.weekday} ${
						day === today ? styles.today : ""
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
