import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../constants/COLORS";

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 30,
    right: 15,
    backgroundColor: "#CECECE",
    borderRadius: 30,
    height: 50,
    width: 50,
  },
});

export default function PlayButton() {
  return (
    <>
      <FAB
        color={COLORS.text}
        style={styles.button}
        icon={() => (
          <Icon
            name="play"
            color={COLORS.text}
            size={30}
            style={{
              top: -6,
              left: -6,
            }}
          />
        )}
      />
    </>
  );
}
