import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import CollectionButton from "../components/buttons/CollectionButton";
import PlayButton from "../components/buttons/PlayButton";
import COLORS from "../constants/COLORS";
import METRIC from "../constants/METRICS";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 160,
    overflow: "hidden",
    marginTop: 30,
    marginBottom: 5,
    borderRadius: METRIC.max * 3,
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  imageText: {
    color: "#FFF",
    fontSize: 17,
    position: "absolute",
    bottom: METRIC.max * 10,
    paddingLeft: 25,
    width: 230,
    fontWeight: "700",
    letterSpacing: METRIC.min,
  },
});

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView
        edges={["top", "bottom"]}
        style={{
          flex: 1,
          backgroundColor: COLORS.bgColor,
          paddingTop: METRIC.max * 4,
        }}
      >
        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ color: "#727272", fontSize: METRIC.max * 4 }}>
            Buenas tardes mutante,
          </Text>
          <Text
            style={{
              color: COLORS.textLight,
              fontSize: 18,
              marginTop: 8,
            }}
          >
            Jeffrey Saavedra
          </Text>
          <ImageBackground
            style={styles.image}
            source={require("../assets/muta.jpg")}
          >
            <View style={styles.shadow} />
            <Text style={styles.imageText}>Conoce nuestra FUERZA MUTANTE</Text>
            <PlayButton />
          </ImageBackground>
          <Text
            style={{ color: COLORS.textLight, fontSize: 14, marginBottom: 15 }}
          >
            Lo nuevo
          </Text>
          <Card
            style={{
              borderRadius: METRIC.min * 4,
              height: 110,
              paddingHorizontal: METRIC.min * 10,
              paddingVertical: METRIC.max * 4,
              backgroundColor: COLORS.bgBottomColor,
            }}
          >
            <Text
              style={{
                color: COLORS.green,
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              $15.000 EN TOM NOODLESHOP
            </Text>
            <Text
              style={{
                color: COLORS.textLight,
                fontSize: 13,
                marginBottom: METRIC.min * 3,
              }}
            >
              Muestra este cupón y obtén este beneficio
            </Text>
            <Text
              style={{
                color: COLORS.textLight,
                fontSize: METRIC.max * 4,
                marginBottom: METRIC.min,
              }}
            >
              25D1-WLCU-EX9F - UTILIZADO
            </Text>
            <Text style={{ color: COLORS.textLight, fontSize: 10 }}>
              * Tendrás 60 días para redimirlo - Válido solo para presencial
            </Text>
          </Card>
        </View>
        <CollectionButton />
      </SafeAreaView>
    </>
  );
}
