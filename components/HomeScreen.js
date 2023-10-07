import React from "react";
import { Text, View, Pressable } from "react-native";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen() {
  return (
    <>
      <SafeAreaView
        edges={["top", "bottom"]}
        style={{
          flex: 1,
          backgroundColor: "#212121",
        }}
      >
        <View style={{ marginHorizontal: 20, paddingTop: 10 }}>
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
          <Card
            style={{
              borderRadius: 8,
              height: 100,
              paddingHorizontal: 14,
              paddingVertical: 16,
              marginTop: 24,
              marginBottom: 8,
            }}
          ></Card>
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
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              backgroundColor: "#D8FC39",
              position: "absolute",
              bottom: 80,
              borderRadius: 30,
              paddingHorizontal: 40,
              paddingVertical: 15,
            }}
          >
            <Pressable
              onPress={() => console.log("Pressed")}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 6,
              }}
            >
              <Icon name="recycle" color="#000" size={30} />
              <Text style={{ fontSize: 13, fontWeight: "700" }}>
                Solicitar recolección
              </Text>
              <Icon name="arrow-right-thick" color="#000" size={22} />
            </Pressable>
          </Card>
        </View>
      </SafeAreaView>
    </>
  );
}
