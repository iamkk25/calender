import styles from "./CalenderInfo.module.css";

function CalenderInfo() {
	return (
		<div className={styles.info}>
			<h2 className={styles.month}>May</h2>
			<h3 className={styles.fullday}>{new Date().toDateString()}</h3>
		</div>
	);
}

export default CalenderInfo;
