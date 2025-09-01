import { Link } from "expo-router";
import { View } from "react-native";

export default function Products() {
  return (
    <View>
      <Link href={"/allProducts"}>Check All products</Link>
      <Link href={"/allOrders"}> Check All orders</Link>
    </View>
  );
}
