import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

const ListItem = ({ name, handleDeleteItem }) => {
	return (
		<View style={styles.listItemView}>
			<Text style={styles.listItemText}>{name}</Text>
			<TouchableOpacity style={styles.deleteBtn} onPress={() => handleDeleteItem(name)}>
				<Text style={styles.deleteBtnText}>{"X"}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	listItemView: {
		backgroundColor: "#ede6e3",
		padding: 15,
		borderBottomColor: "#dadad9",
		borderBottomWidth: 2,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	listItemText: {
		fontSize: 15,
		fontWeight: "600",
		color: "#36382E",
	},
	deleteBtn: {
		backgroundColor: "#5BC3EB",
		padding: 10,
	},
	deleteBtnText: {
		fontSize: 15,
	},
});

export default ListItem;
