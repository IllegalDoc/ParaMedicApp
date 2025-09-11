import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { Link, useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { G, Path, Svg, Text as SVGText } from "react-native-svg";
import { categories } from "../../assets/data/products";
export const chunkArray = (arr, size) =>
  arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );
export const Item = ({
  product,
  onPress,
  imageStyle,
  nameStyle,
  cardStyle,
}) => (
  <Pressable onPress={onPress} style={cardStyle}>
    <Image style={imageStyle} source={{ uri: product.image }} />
    <View style={{ flexDirection: "row" }}>
      <Text style={nameStyle}>{product.name}</Text>
      {product.price && (
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "Inter_700Bold",
            fontSize: 16,
            color: "#4F964F",
          }}
        >
          {product.price} DA{" "}
        </Text>
      )}
    </View>
  </Pressable>
);
export default function Categories() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  const router = useRouter();

  const groupedCategories = chunkArray(categories, 4);
  // <-- WAIT for fonts to load (minimal safe guard)
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      {/* <-- give SafeAreaView space to grow */}
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F7FCF7" }}>
        <View style={styles.headerContainer}>
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
          <View style={styles.headerRight}>
            <Link style={styles.headerMyorders} href={""}>
              Mes Commandes
            </Link>
            <Svg
              style={styles.headerCart}
              fill="#000000"
              stroke="#000000"
              strokeWidth={0.009}
              viewBox="-90.29 -90.29 1083.44 1083.44"
              width={24}
              height={24}
              transform={[{ scaleX: -1 }]}
            >
              <G>
                <G>
                  <Path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />
                  <Path
                    d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 
                    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 
                    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 
                    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 
                    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z 
                    M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 
                    S619.162,694.432,619.162,716.897z"
                  />
                </G>
              </G>
            </Svg>
          </View>
        </View>

        <View style={{ flex: 1, padding: 16 }}>
          <Text style={styles.carouselTitle}>Produits</Text>
          <ScrollView
            contentContainerStyle={{ gap: 16 }}
            showsVerticalScrollIndicator={false}
          >
            {groupedCategories.map((row, rowIndex) => (
              <ScrollView
                contentContainerStyle={{ gap: 12 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                key={rowIndex}
              >
                {row.map((cat) => (
                  <Item
                    cardStyle={styles.categoryStyle}
                    imageStyle={styles.categoryImageStyle}
                    nameStyle={styles.categoryNameStyle}
                    key={cat.id}
                    product={cat}
                    onPress={() => router.push(`/category/${cat.id}`)}
                  ></Item>
                ))}
              </ScrollView>
            ))}
          </ScrollView>
        </View>
        <Text style={styles.allProductText}>Tout les produits</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 72,
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
  },
  headerImage: {
    height: 50,
    width: 50,
    marginLeft: 10,
    alignSelf: "center",
  },
  headerCart: { marginRight: 5 },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 24 },
  headerMyorders: {
    fontSize: 16,
    color: "#4F964F",
    fontFamily: "Inter_700Bold",
  },
  carouselTitle: {
    fontSize: 22,
    fontFamily: "Inter_700Bold",
    marginBottom: 16,
    marginLeft: 12,
  },
  allProductText: {
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    color: "#4F964F",
    alignSelf: "center",
    padding: 12,
  },
  categoryNameStyle: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    marginTop: 6,
    alignSelf: "flex-start",
  },
  categoryImageStyle: { height: 253, width: 160, borderRadius: 20 },
  categoryStyle: { margin: 8 },
});
