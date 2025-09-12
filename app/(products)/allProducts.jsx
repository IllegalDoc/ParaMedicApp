import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../assets/data/products";
import { Item } from "./categories";
export default function allProducts() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  const router = useRouter();
  const renderItem = ({ item }) => (
    <Item
      cardStyle={styles.productStyle}
      nameStyle={styles.productTitlestyle}
      product={item}
      imageStyle={styles.productImagestyle}
      onPress={(e) => console.log("test")}
    />
  );

  // <-- WAIT for fonts to load (minimal safe guard)
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.HeaderTitle}>Tout les Produits </Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
          style={styles.listStyle}
          contentContainerStyle={styles.insideListstyle}
          columnWrapperStyle={{ gap: 20 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  HeaderTitle: {
    fontSize: 18,
    fontFamily: "Inter_700Bold",
    color: "#0D1C0D",
    textAlign: "center",
    padding: 10,
    marginBottom: 20,
  },
  productTitlestyle: {
    width: "100%",
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: "#0D1C0D",
  },
  productImagestyle: { height: 173, width: 173, borderRadius: 30 },
  productStyle: { width: 173, gap: 12 },
  listStyle: { width: "100%" },
  insideListstyle: { gap: 20, alignItems: "center" },
});
