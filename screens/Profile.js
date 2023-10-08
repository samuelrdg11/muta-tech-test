import React from "react";
import { Text, View, StyleSheet } from "react-native";
import COLORS from "../constants/COLORS";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bgColor,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.textLight,
  },
});

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}
