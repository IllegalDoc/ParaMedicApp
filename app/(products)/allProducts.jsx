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
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Path, Svg, Text as SVGText } from "react-native-svg";
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Svg width={80} height={40} viewBox="0 0 400 120">
            <SVGText
              x={0}
              y={85}
              fontFamily="Arial"
              fontSize={72}
              fontWeight="bold"
              fill="#1E88E5"
            >
              Gam
            </SVGText>

            <SVGText
              x={140}
              y={85}
              fontFamily="Arial"
              fontSize={72}
              fontWeight="bold"
              fill="#4CAF50"
            >
              Medical
            </SVGText>
          </Svg>

          <Text style={styles.HeaderTitle}>Tout les Produits </Text>
          <Svg
            style={styles.SearchbarSVG}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5306 18.4694L14.8366 13.7762C17.6629 10.383 17.3204 5.36693 14.0591 2.38935C10.7978 -0.588237 5.77134 -0.474001 2.64867 2.64867C-0.474001 5.77134 -0.588237 10.7978 2.38935 14.0591C5.36693 17.3204 10.383 17.6629 13.7762 14.8366L18.4694 19.5306C18.7624 19.8237 19.2376 19.8237 19.5306 19.5306C19.8237 19.2376 19.8237 18.7624 19.5306 18.4694ZM1.75 8.5C1.75 4.77208 4.77208 1.75 8.5 1.75C12.2279 1.75 15.25 4.77208 15.25 8.5C15.25 12.2279 12.2279 15.25 8.5 15.25C4.77379 15.2459 1.75413 12.2262 1.75 8.5Z"
              fill="#4F964F"
            />
          </Svg>
        </View>

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
    marginRight: 10,
    flex: 1,
    fontFamily: "Poppins_600SemiBold",
    color: "#0D1C0D",
    textAlign: "center",
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
  SearchbarSVG: {
    marginLeft: 16,
    flex: 1,
  },
});
