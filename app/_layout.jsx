import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
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
