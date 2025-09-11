import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { products } from "../../../assets/data/products";
import { chunkArray, Item } from "../categories.jsx";
export default function ProductsByCategory() {
  const { id } = useLocalSearchParams();

  const filtered = products.filter((p) => p.category.toString() === id);
  const filteredRows = chunkArray(filtered, 2);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  return (
    <View style={{ padding: 16, backgroundColor: "#F7FCF7", height: "100%" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Produits de la catégorie
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
      >
        {filteredRows.map((row, rowIndex) => (
          <ScrollView
            contentContainerStyle={{ gap: 30 }}
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
                onPress={(e) => console.log("test")}
              ></Item>
            ))}
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  productTitlestyle: {
    width: "70%",
    fontSize: 16,
    fontFamily: "Inter_500Medium",
    color: "#0D1C0D",
  },
  productImagestyle: { height: 173, width: 173, borderRadius: 30 },
  productStyle: { width: 173, gap: 12 },
});
