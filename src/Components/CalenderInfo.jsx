import styles from "./CalenderInfo.module.css";

function CalenderInfo({ currentMonth, fullDate }) {
	return (
		<div className={styles.info}>
			<h2 className={styles.month}>{currentMonth}</h2>
			<h3 className={styles.fullday}>{fullDate}</h3>
		</div>
	);
}

export default CalenderInfo;
