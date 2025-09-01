import { Stack } from "expo-router";

export default function settingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="settings"
        options={{
          title: "Settings",
        }}
      />
      <Stack.Screen name="aboutUs" options={{ title: "About Us" }} />
      <Stack.Screen name="contactUs" options={{ title: " Contact Us" }} />
    </Stack>
  );
}
