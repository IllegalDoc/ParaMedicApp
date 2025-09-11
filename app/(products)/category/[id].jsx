import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { products } from "../../../assets/data/products";
import { chunkArray, Item } from "../categories.jsx";
export default function ProductsByCategory() {
  const { id } = useLocalSearchParams();

  const filtered = products.filter((p) => p.category.toString() === id);
  const filteredRows = chunkArray(filtered, 2);
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "#F7FCF7" }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        Produits de la catégorie
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredRows.map((row, rowIndex) => (
          <ScrollView
            key={rowIndex}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {row.map((item, itemIndex) => (
              <Item
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
    width: "50%",
  },
  productImagestyle: { height: 173, width: 173, borderRadius: 30 },
});
