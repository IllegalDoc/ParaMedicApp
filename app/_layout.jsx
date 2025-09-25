// app/_layout.jsx
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { CartProvider, useCart } from "../CartContext";
import CartDrawer from "../CartDrawer";
import { UserProvider } from "../UserContext";
import { OrderProvider } from "../assets/OrderContext";

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4F964F",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(products)"
        options={{
          headerShown: false,
          title: "Produits",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetags" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{
          headerShown: false,
          title: "Paramètres",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}

function RootWrapper() {
  const { cartVisible, setCartVisible } = useCart();

  return (
    <>
      <TabsLayout />
      <CartDrawer visible={cartVisible} onClose={() => setCartVisible(false)} />
    </>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <OrderProvider>
          <CartProvider>
            <RootWrapper />
            <Toast />
          </CartProvider>
        </OrderProvider>
      </UserProvider>
    </GestureHandlerRootView>
  );
}
