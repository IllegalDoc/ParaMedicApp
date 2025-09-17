import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
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
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const router = useRouter();

  const renderItem = ({ item }) => (
    <Item
      style={{ alignSelf: "flex-start" }}
      cardStyle={styles.productStyle}
      nameStyle={styles.productTitlestyle}
      product={item}
      imageStyle={styles.productImagestyle}
      onPress={(e) => router.push(`/products/${item.id}`)}
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
          columnWrapperStyle={{ gap: 20, paddingLeft: 15, paddingRight: 15 }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  HeaderTitle: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#0D1C0D",
    textAlign: "center",
    padding: 10,
    marginBottom: 20,
  },
  productTitlestyle: {
    width: "100%",
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#0D1C0D",
  },
  productImagestyle: {
    height: 173,
    width: 173,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  productStyle: { width: 173, gap: 12 },
  listStyle: { width: "100%" },
  insideListstyle: {
    gap: 20,
    alignItems: "flex-start",
  },
});
