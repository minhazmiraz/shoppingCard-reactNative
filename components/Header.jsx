import { StyleSheet, Text, View } from "react-native";

const Header = ({ text }) => {
	return (
		<View style={styles.headerView}>
			<Text style={styles.headerText}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerView: {
		backgroundColor: "#5BC3EB",
		padding: 15,
	},
	headerText: {
		fontSize: 25,
		fontWeight: "600",
		color: "#36382E",
	},
});

export default Header;
