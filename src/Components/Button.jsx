import styles from "./Button.module.css";

function Button({ onClick, direction, children }) {
	return (
		<button
			className={`${styles.navigation} ${
				direction === "left" ? styles.navigationPrev : styles.navigationNext
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
