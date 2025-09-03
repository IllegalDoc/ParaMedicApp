import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import products from "../../../assets/data/products";

export default function Product() {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => String(p.id) === String(id));

  const [quantity, setQuantity] = useState(0);

  if (!product) {
    return <Text> Product not found</Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexShrink: 1, gap: 20 }}>
          <Text style={{ fontSize: 22 }}>{product.name}</Text>
          <Text style={{ fontSize: 20 }}>
            Description : {product.description}
          </Text>
        </View>

        <View style={{}}>
          <Text style={{}}>Stock Availability: {product.Stock}</Text>
        </View>
      </View>

      <View>
        <Text>Quantity:</Text>
        <View>
          <Pressable onPress={() => quantity > 0 && setQuantity(quantity - 1)}>
            <Text>-</Text>
          </Pressable>
          <Text>{quantity}</Text>
          <Pressable
            onPress={() =>
              quantity < product.Stock && setQuantity(quantity + 1)
            }
          >
            <Text>+</Text>
          </Pressable>
        </View>
      </View>

      <Text>Price: {quantity * product.price}</Text>

      <Pressable disabled={quantity === 0}>
        <Text>ADD TO CART</Text>
      </Pressable>
    </View>
  );
}
