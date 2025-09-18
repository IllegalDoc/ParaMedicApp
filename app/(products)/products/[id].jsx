import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../../assets/data/products";
import { useCart } from "../../../CartContext";

export default function Product() {
  const { addToCart } = useCart();
  const { id } = useLocalSearchParams();
  const product = products.find((p) => String(p.id) === String(id));
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <Text> Product not found</Text>;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ gap: 12, padding: 10 }}>
        <ScrollView
          contentContainerStyle={{
            gap: 30,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 6,
          }}
        >
          <Text style={styles.headerStyle}>Détails du produit</Text>
          <Image source={{ uri: product.image }} style={styles.imageStyle} />

          <View style={{ flexShrink: 1, gap: 30 }}>
            <Text style={styles.NameStyle}>{product.name}</Text>
            <Text style={styles.descriptionStyle}>
              {!product.description
                ? "Aucune description."
                : product.description}
            </Text>
          </View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            {!product.stock ? (
              <Text style={styles.stockStyle}>Epuisé</Text>
            ) : (
              <>
                <Text style={styles.stockStyle}>En stock</Text>
                <Text style={styles.stockTextStyle}>{product.stock}</Text>
              </>
            )}
          </View>

          <View style={styles.quantityBoxStyle}>
            <Text style={styles.quantityTextStyle}>Quantité :</Text>
            <View style={styles.quantityStyle}>
              <Pressable
                onPress={() => quantity > 0 && setQuantity(quantity - 1)}
              >
                <Text style={styles.quantityElementStyle}>-</Text>
              </Pressable>
              <Text
                style={
                  (styles.quantityElementStyle, { backgroundColor: "none" })
                }
              >
                {quantity}
              </Text>
              <Pressable
                onPress={() =>
                  quantity < product.stock && setQuantity(quantity + 1)
                }
              >
                <Text style={styles.quantityElementStyle}>+</Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.priceTextStyle}>
            Prix Total: {quantity * product.price} DA
          </Text>
          <Pressable
            style={[
              styles.addtocartButton,
              { backgroundColor: quantity === 0 ? "#ccc" : "#17CF17" },
            ]}
            disabled={quantity === 0}
            onPress={() => addToCart(product, quantity)}
          >
            <Text style={styles.addtocartText}>Ajouter au panier</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#010601",
    textAlign: "center",
  },
  imageStyle: {
    height: 538,
    width: "98%",
    borderRadius: 30,
    alignSelf: "center",
    elevation: 4,
  },
  NameStyle: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: "#0D1C0D",
  },

  stockStyle: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#0D1C0D",
  },
  stockTextStyle: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#4F964F",
  },
  descriptionStyle: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#0D1C0D",
  },
  quantityBoxStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantityTextStyle: {
    transform: [{ translateY: 12 }],
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#0D1C0D",
  },
  priceTextStyle: {
    fontSize: 22,
    fontFamily: "Poppins_600SemiBold",
    color: "#0D1C0D",
  },
  quantityStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BFBFBF",
    borderRadius: 300,
    gap: 10,
    padding: 4,
  },
  quantityElementStyle: {
    height: 38,
    width: 42,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#0D1C0D",
    borderRadius: 300,

    textAlign: "center",
    transform: [{ translateY: 6 }],
  },
  addtocartText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    elevation: 4,
  },
  addtocartButton: {
    height: 58,
    alignSelf: "center",
    width: "95%",
    backgroundColor: "#17CF17",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    elevation: 4,
  },
});
