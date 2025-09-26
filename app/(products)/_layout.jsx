import { Stack } from "expo-router";

export default function productLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="categories"
        options={{
          title: "Products",
          headerShown: false,
        }}
      />
      <Stack.Screen name="category/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="allOrders"
        options={{ title: "Orders", headerShown: false }}
      />
      <Stack.Screen
        name="allProducts"
        options={{ title: "Products", headerShown: false }}
      />
      <Stack.Screen name="products/[id]" options={{ headerShown: false }} />
      <Stack.Screen
        name="order"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="orders/[id]"
        options={{ headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
}
