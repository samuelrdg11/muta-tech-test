import React from "react";
import { View, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../../constants/COLORS";

export default function CollectionButton() {
  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        bottom: 95,
        right: 0,
        marginHorizontal: 60,
      }}
    >
      <Pressable
        onPress={() => console.log("Pressed")}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          backgroundColor: COLORS.greenDark,
          borderRadius: 30,
          paddingVertical: 10,
        }}
      >
        <Icon name="recycle" color={COLORS.text} size={30} />
        <Text style={{ fontSize: 13, fontWeight: "700" }}>
          Solicitar recolección
        </Text>
        <Icon name="arrow-right-thick" color={COLORS.text} size={22} />
      </Pressable>
    </View>
  );
}
