import React from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Card, FAB } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
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
    bottom: 40,
    paddingLeft: 25,
    width: 230,
    fontWeight: "700",
    letterSpacing: 2,
  },
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

export default function ProfileScreen() {
  return (
    <>
      <SafeAreaView
        edges={["top", "bottom"]}
        style={{
          flex: 1,
          backgroundColor: "#212121",
          paddingTop: 16,
          marginHorizontal: 0,
        }}
      >
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ color: "#727272", fontSize: 16 }}>
            Buenas tardes mutante,
          </Text>
          <Text
            style={{
              color: "#FFF",
              fontSize: 18,
              marginTop: 8,
            }}
          >
            Jeffrey Saavedra
          </Text>
          <View
            style={{
              height: 160,
              marginTop: 24,
              marginBottom: 5,
              backgroundColor: "#FFF",
              borderRadius: 12,
            }}
          >
            <ImageBackground
              imageStyle={{ borderRadius: 12, overflow: "hidden" }}
              style={styles.image}
              source={require("../assets/muta.jpg")}
            >
              <View style={styles.shadow} />
              <Text style={styles.imageText}>
                Conoce nuestra FUERZA MUTANTE
              </Text>
              <FAB
                color="#000"
                style={styles.button}
                icon={() => (
                  <Icon
                    name="play"
                    color="#000"
                    size={30}
                    style={{
                      top: -6,
                      left: -6,
                    }}
                  />
                )}
              />
            </ImageBackground>
          </View>
          <Text style={{ color: "#FFF", fontSize: 14, marginBottom: 15 }}>
            Lo nuevo
          </Text>
          <Card
            style={{
              borderRadius: 8,
              height: 110,
              paddingHorizontal: 20,
              paddingVertical: 16,
              backgroundColor: "#181818",
            }}
          >
            <Text
              style={{
                color: "#D8FC39",
                fontSize: 15,
                fontWeight: "700",
              }}
            >
              $15.000 EN TOM NOODLESHOP
            </Text>
            <Text style={{ color: "#FFF", fontSize: 12, marginBottom: 8 }}>
              Muestra este cupón y obtén este beneficio
            </Text>
            <Text
              style={{
                color: "#FFF",
                fontSize: 16,
              }}
            >
              25D1-WLCU-EX9F - UTILIZADO
            </Text>
            <Text style={{ color: "#FFF", fontSize: 10 }}>
              * Tendrás 60 días para redimirlo - Válido solo para presencial
            </Text>
          </Card>
        </View>
        <View
          style={{
            position: "absolute",
            left: 0,
            bottom: 115,
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
              backgroundColor: "#D8FC39",
              borderRadius: 30,
              paddingVertical: 10,
            }}
          >
            <Icon name="recycle" color="#000" size={30} />
            <Text style={{ fontSize: 13, fontWeight: "700" }}>
              Solicitar recolección
            </Text>
            <Icon name="arrow-right-thick" color="#000" size={22} />
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}
