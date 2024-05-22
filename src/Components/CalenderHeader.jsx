import Button from "./Button";
import CalenderInfo from "./CalenderInfo";
import styles from "./CalenderHeader.module.css";

function CalenderHeader({
	month,
	fullDate,
	prevMonthHandler,
	nextMonthHandler,
}) {
	return (
		<div className={styles.header}>
			<Button direction="left" onClick={prevMonthHandler}>
				&lt;
			</Button>
			<CalenderInfo currentMonth={month} fullDate={fullDate} />
			<Button direction="right" onClick={nextMonthHandler}>
				&gt;
			</Button>
		</div>
	);
}

export default CalenderHeader;
