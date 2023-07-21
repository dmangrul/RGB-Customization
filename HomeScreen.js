import React from "react";
import {
	Text,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
	const url =
		"https://i.pinimg.com/736x/bf/19/6a/bf196ab6844720ffb70f3958e4e4bd3e--monkeys-collage.jpg";
	return (
		<View>
			<TouchableOpacity
				style={styles.animalButton}
				onPress={() => navigation.navigate("CuteAnimals")}
			>
				<Image style={styles.image} source={{ uri: url }}></Image>
				<Text style={styles.buttonText}> ^Click Me to See a Cute Animal!^</Text>
			</TouchableOpacity>
			<Button
				onPress={() => navigation.navigate("hehebum")}
				title='see bumbos'
			/>
			<Button
				onPress={() => navigation.navigate("FavoriteList")}
				title='Go to Favorites Demo'
			/>
			<Button
				onPress={() => navigation.navigate("LayoutExample")}
				title='Go to Layout Examples'
			/>
			<Button
				onPress={() => navigation.navigate("SnapchatLogin")}
				title='Go to Snapchat Login'
			/>
			<Button
				onPress={() => navigation.navigate("FlagSweden")}
				title='Go to Swedish Flag'
			/>
			<Button
				onPress={() => navigation.navigate("FlagNorway")}
				title='Go to Norweigan Flag'
			/>
			<Button
				onPress={() => navigation.navigate("ModifyCounter")}
				title='Go to Counter'
			/>
			<Button
				onPress={() => navigation.navigate("ThePredictor")}
				title='Go to Predictor Demo'
			/>
			<Button
				onPress={() => navigation.navigate("FamousThings")}
				title='Go to Famous Things'
			/>
			<Button
				onPress={() => navigation.navigate("FamousThingsFlatlist")}
				title='Go to Famous Things with Flatlist'
			/>
			<Button
				onPress={() => navigation.navigate("CreateColor")}
				title='Go to RGB Customization'
			/>
			<Button
				onPress={() => navigation.navigate("RandomColor")}
				title='Go to Random Color Lists'
			/>
			<Button
				onPress={() => navigation.navigate("Calculator")}
				title='Go to Calculator'
			/>
			<Button
				onPress={() => navigation.navigate("CalculatorNew")}
				title='New Calculator'
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 120,
		color: "blue",
	},
	animalButton: {
		alignItems: "center",
	},
	buttonText: {
		fontSize: 20,
	},
	image: {
		width: "100%",
		height: 100,
	},
});

export default HomeScreen;
