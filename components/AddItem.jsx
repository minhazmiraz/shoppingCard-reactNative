import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const AddItem = ({ handleAddItem }) => {
	const [inputText, setInputText] = useState("");

	const handleAddButtonClick = () => {
		handleAddItem(inputText);
		setInputText("");
	};

	return (
		<View style={styles.addItemView}>
			<TextInput
				placeholder="Enter item name"
				style={styles.input}
				onChangeText={(text) => setInputText(text)}
				value={inputText}
			/>
			<TouchableOpacity style={styles.btn} onPress={() => handleAddButtonClick()}>
				<Text style={styles.btnText}>Add</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	addItemView: {
		flexDirection: "row",
		justifyContent: "center",
		alignContent: "center",
	},
	input: {
		height: 60,
		flex: 5,
		padding: 10,
	},
	btn: {
		backgroundColor: "#F06449",
		padding: 10,
		margin: 5,
		flex: 1,
	},
	btnText: {
		textAlign: "center",
		fontSize: 20,
	},
});

export default AddItem;
