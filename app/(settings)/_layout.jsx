import { Stack } from "expo-router";
export default function settingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="aboutUs"
        options={{ title: "About Us", headerShown: false }}
      />
      <Stack.Screen
        name="contactUs"
        options={{ title: " Contact Us", headerShown: false }}
      />
      <Stack.Screen
        name="userInfo"
        options={{ title: " User Info", headerShown: false }}
      />
    </Stack>
  );
}
