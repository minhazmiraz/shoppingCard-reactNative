import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "react-native-get-random-values";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
	const [shoppingList, setShoppingList] = useState([
		{
			id: uuidv4(),
			name: "Alu",
		},
		{
			id: uuidv4(),
			name: "Dim",
		},
	]);

	const handleAddItem = (text) => {
		if (!text) {
			Alert.alert("Empty text input!!");
			return;
		}

		if (shoppingList.filter((item) => item.name.toLowerCase() === text.toLowerCase()).length) {
			Alert.alert("Item already added!!");
			return;
		}

		setShoppingList((prevState) => [{ id: uuidv4(), name: text }, ...prevState]);
	};

	const handleDeleteItem = (text) => {
		let filtered = shoppingList.filter(
			(item) => item.name.toLowerCase() !== text.toLowerCase()
		);

		if (filtered.length === shoppingList.length) {
			Alert.alert("Item already deleted!!");
			return;
		}

		setShoppingList(filtered);
	};

	return (
		<View style={styles.container}>
			<Header text="Shopping List" />
			<AddItem handleAddItem={handleAddItem} />
			<FlatList
				data={shoppingList}
				renderItem={({ item }) => (
					<ListItem name={item.name} handleDeleteItem={handleDeleteItem} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginTop: 50,
	},
});
