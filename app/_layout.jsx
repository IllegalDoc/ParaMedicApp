import { Tabs } from "expo-router";

export default function RootLayout() {
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
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="(products)"
        options={{ headerShown: false, title: "Products" }}
      />
      <Tabs.Screen
        name="(settings)"
        options={{ headerShown: false, title: "Settings" }}
      />
    </Tabs>
  );
}
