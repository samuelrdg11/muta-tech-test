import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import CollectionsScreen from "../screens/Collections";
import WalletScreen from "../screens/Wallet";
import ProfileScreen from "../screens/Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    paddingTop: 2,
    bottom: 0,
    height: 95,
    backgroundColor: "#181818",
    borderTopColor: "transparent",
  },
});

const BottomTab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <BottomTab.Screen
          component={HomeScreen}
          name="Inicio"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <Icon
                    name="home"
                    size={30}
                    color={focused ? "#d9f264" : "#8c8c8c"}
                  />
                  <Text
                    style={{
                      fontSize: 11,
                      color: focused ? "#d9f264" : "#8c8c8c",
                      marginTop: 3,
                    }}
                  >
                    Inicio
                  </Text>
                </>
              );
            },
          }}
        />
        <BottomTab.Screen
          component={WalletScreen}
          name="Billetera"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <Icon
                    name="wallet"
                    size={30}
                    color={focused ? "#d9f264" : "#8c8c8c"}
                  />
                  <Text
                    style={{
                      fontSize: 11,
                      color: focused ? "#d9f264" : "#8c8c8c",
                      marginTop: 3,
                    }}
                  >
                    Billetera
                  </Text>
                </>
              );
            },
          }}
        />
        <BottomTab.Screen
          component={CollectionsScreen}
          name="Recolecciones"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <Icon
                    name="calendar"
                    size={30}
                    color={focused ? "#d9f264" : "#8c8c8c"}
                  />
                  <Text
                    style={{
                      fontSize: 11,
                      color: focused ? "#d9f264" : "#8c8c8c",
                      marginTop: 3,
                    }}
                  >
                    Recolecciones
                  </Text>
                </>
              );
            },
          }}
        />
        <BottomTab.Screen
          component={ProfileScreen}
          name="Perfil"
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <>
                  <Icon
                    name="account-outline"
                    size={30}
                    color={focused ? "#d9f264" : "#8c8c8c"}
                  />
                  <Text
                    style={{
                      fontSize: 11,
                      color: focused ? "#d9f264" : "#8c8c8c",
                      marginTop: 3,
                    }}
                  >
                    Perfil
                  </Text>
                </>
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
