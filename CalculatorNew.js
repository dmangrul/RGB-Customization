import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CalculatorNew = () => {
	const [expression, setExpression] = useState("");
	const [recentOp, setRecentOp] = useState("");
	const [repeating, setRepeating] = useState(0);

	const operations = ["+", "-", "/", "*"];

	const clear = () => {
		setExpression("");
		setRecentOp("");
		setRepeating(0);
	};

	const equals = () => {
		setExpression(eval(expression));
		if (repeating == 0) {
			setRepeating(repeating + 1);
		} else {
			setExpression(eval(expression + recentOp));
			setRepeating(repeating + 1);
		}
	};

	const changeInput = (button) => {
		if (operations.includes(button)) {
			if (recentOp == "") {
				setRecentOp(recentOp + button);
			} else if (recentOp != "") {
				setRecentOp(button);
			}
			setRepeating(0);
			setExpression(expression + button);
		} else {
			if (recentOp != "") {
				setExpression(expression + button);
				setRecentOp(recentOp + button);
			} else {
				setExpression(expression + button);
			}
		}
	};

	const test = () => {
		console.log("expression: " + expression);
		console.log("recentOperation: " + recentOp + "\n");
	};

	return (
		<View style={styles.container}>
			<View style={styles.display}>
				<TouchableOpacity onPress={() => test()} style={styles.test}>
					<Text style={styles.answertext}>{expression}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.rowOne}>
				<TouchableOpacity
					onPress={() => changeInput("1")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>1</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("2")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>2</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("3")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>3</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("/")}
					style={[styles.button, { backgroundColor: "#FF9500" }]}
				>
					<Text style={styles.buttontext}>÷</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.rowTwo}>
				<TouchableOpacity
					onPress={() => changeInput("4")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>4</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("5")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>5</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("6")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>6</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("*")}
					style={[styles.button, { backgroundColor: "#FF9500" }]}
				>
					<Text style={styles.buttontext}>×</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.rowThree}>
				<TouchableOpacity
					onPress={() => changeInput("7")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>7</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("8")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>8</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("9")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>9</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("-")}
					style={[styles.button, { backgroundColor: "#FF9500" }]}
				>
					<Text style={styles.buttontext}>-</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.rowFour}>
				<TouchableOpacity
					onPress={() => clear()}
					style={[styles.button, { backgroundColor: "#D4D4D2" }]}
				>
					<Text style={styles.buttontext}>C</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("0")}
					style={[styles.button, { backgroundColor: "#505050" }]}
				>
					<Text style={styles.buttontext}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => equals()}
					style={[styles.button, { backgroundColor: "#D4D4D2" }]}
				>
					<Text style={styles.buttontext}>=</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => changeInput("+")}
					style={[styles.button, { backgroundColor: "#FF9500" }]}
				>
					<Text style={styles.buttontext}>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1C1C1C",
	},
	display: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		width: "20%",
		height: "50%",
		borderRadius: 60,
		alignItems: "center",
	},
	rowOne: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	rowTwo: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	rowThree: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	rowFour: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	buttontext: {
		color: "white",
		alignSelf: "center",
		fontSize: 50,
	},
	answertext: {
		color: "white",
		alignSelf: "flex-end",
		padding: 10,
		fontSize: 100,
	},
	test: { width: "100%" },
});

export default CalculatorNew;
