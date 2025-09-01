import { Stack } from "expo-router";

export default function productLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="products"
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen name="allOrders" options={{ title: "Orders" }} />

      <Stack.Screen name="allProducts" options={{ title: " All Products" }} />
    </Stack>
  );
}
