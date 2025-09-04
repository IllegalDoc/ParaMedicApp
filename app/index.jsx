import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { G, Path, Svg } from "react-native-svg";

export default function Index() {
  const [searchBarValue, SetsearchBarValue] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <View></View>
          <Text style={styles.headerName}>Gam Lab Pharma</Text>
          <Svg
            style={styles.headerCart}
            fill="#000000"
            stroke="#000000"
            strokeWidth={0.009}
            viewBox="-90.29 -90.29 1083.44 1083.44"
            width={24}
            height={24}
            transform={[{ scaleX: -1 }]} // 👈 horizontal flip
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
        <View style={styles.SearchbarContainer}>
          <View>
            <View style={styles.Searchbar}>
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
              <TextInput
                style={styles.Searchbarinput}
                placeholder="Rechercher  produits, marques, catégories"
                placeholderTextColor={"#4F964F"}
                value={searchBarValue}
                onChangeText={SetsearchBarValue}
              ></TextInput>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: { height: 72, flexDirection: "row", padding: 10 },
  headerName: { fontSize: 18, textAlign: "center", flex: 1, marginLeft: 10 },
  headerCart: { marginRight: 5 },
  SearchbarContainer: { height: 90, padding: 20, justifyContent: "center" },
  Searchbarinput: { overflow: "hidden" },
  Searchbar: {
    overflow: "hidden",
    alignItems: "center",
    gap: 10,
    height: 85,
    backgroundColor: "#E8F2E8",
    borderRadius: 25,
    flexDirection: "row",
  },
  SearchbarSVG: {
    marginLeft: 16,
  },
});
