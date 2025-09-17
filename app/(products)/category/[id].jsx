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
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { categories, products } from "../../../assets/data/products";
import { chunkArray, Item } from "../categories.jsx";
export default function ProductsByCategory() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const filtered = products.filter((p) => p.category.toString() === id);
  const filteredRows = chunkArray(filtered, 2);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const catt = categories.find((cat) => cat.id.toString() === id).name;

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View
          style={{ padding: 16, backgroundColor: "#F7FCF7", height: "100%" }}
        >
          <Text style={styles.headerStyle}>{catt}</Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 20 }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Produits</Text>
            {filteredRows.map((row, rowIndex) => (
              <ScrollView
                contentContainerStyle={{ gap: 20 }}
                key={rowIndex}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {row.map((item, itemIndex) => (
                  <Item
                    cardStyle={styles.productStyle}
                    nameStyle={styles.productTitlestyle}
                    key={itemIndex}
                    product={item}
                    imageStyle={styles.productImagestyle}
                    onPress={(e) => router.push(`/products/${item.id}`)}
                  ></Item>
                ))}
              </ScrollView>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
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
    elevation: 4,
  },
  productStyle: {
    width: 173,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  headerStyle: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#010601",
    textAlign: "center",
  },
});
