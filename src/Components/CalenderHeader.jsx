import Button from "./Button";
import CalenderInfo from "./CalenderInfo";
import styles from "./CalenderHeader.module.css";

function CalenderHeader() {
	return (
		<div className={styles.header}>
			<Button direction="left">&lt;</Button>
			<CalenderInfo />
			<Button direction="right">&gt;</Button>
		</div>
	);
}

export default CalenderHeader;
