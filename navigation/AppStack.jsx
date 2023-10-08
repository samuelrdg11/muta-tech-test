import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import CollectionsScreen from "../screens/Collections";
import WalletScreen from "../screens/Wallet";
import ProfileScreen from "../screens/Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../constants/COLORS";
import METRIC from "../constants/METRICS";

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    paddingTop: METRIC.min,
    bottom: 0,
    height: 80,
    backgroundColor: COLORS.bgBottomColor,
    borderTopColor: "transparent",
  },
});

const BottomTab = createBottomTabNavigator();

function TextBottomNavigation({ children, focused }) {
  return (
    <Text
      style={{
        fontSize: 11,
        color: focused ? COLORS.green : COLORS.gray,
        marginTop: 3,
      }}
    >
      {children}
    </Text>
  );
}

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
                    color={focused ? COLORS.green : COLORS.gray}
                  />
                  <TextBottomNavigation focused={focused}>
                    Inicio
                  </TextBottomNavigation>
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
                    color={focused ? COLORS.green : COLORS.gray}
                  />
                  <TextBottomNavigation focused={focused}>
                    Billetera
                  </TextBottomNavigation>
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
                    color={focused ? COLORS.green : COLORS.gray}
                  />
                  <TextBottomNavigation focused={focused}>
                    Recolecciones
                  </TextBottomNavigation>
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
                    color={focused ? COLORS.green : COLORS.gray}
                  />
                  <TextBottomNavigation focused={focused}>
                    Perfil
                  </TextBottomNavigation>
                </>
              );
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
