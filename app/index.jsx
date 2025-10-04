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
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { G, Path, Polygon, Svg } from "react-native-svg";
import { categories, products } from "../assets/data/products";
import { useOrders } from "../assets/OrderContext";
import { useCart } from "../CartContext";

import { Item } from "./(products)/categories";
export default function Index() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const { orders } = useOrders();
  const [searchBarValue, SetsearchBarValue] = useState("");
  const router = useRouter();
  const findCat = (categories, name) =>
    categories.find((cat) => cat.name === name);
  console.log(findCat(categories, "Diagnostic").id);

  const { setCartVisible } = useCart();
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
  const filtered = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchBarValue.toLowerCase()) ||
      product.description.toLowerCase().includes(searchBarValue.toLowerCase())
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ padding: 12 }}>
        <View style={styles.headerContainer}>
          <View></View>
          <Text style={styles.headerName}>Gam Lab Pharma</Text>
          <Pressable onPress={() => setCartVisible(true)}>
            <Svg
              style={styles.headerCart}
              fill="#4F964F"
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
          </Pressable>
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
        {searchBarValue === "" ? (
          <>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryScrollView}
            >
              <Pressable
                onPress={() =>
                  router.push(
                    `/category/${findCat(categories, "Diagnostic").id}`
                  )
                }
                style={({ pressed }) => [
                  styles.categoryElement,
                  {
                    backgroundColor: pressed ? "#4F964F" : "#E8F2E8",
                  },
                ]}
              >
                {({ pressed }) => (
                  <>
                    <Svg
                      fill={pressed ? "white" : "black"}
                      viewBox="0 0 100 100"
                      width={25}
                      height={25}
                    >
                      <G>
                        <Path
                          d="M32.9,69c0.9,5.3,5.3,11.1,9.4,13.9c2.5,1.7,5.3,2.5,8,2.5c0.9,0,1.7-0.1,2.5-0.3c9.7-2.1,11.7-14,10.7-21.5 
          c-0.5-3.8-1.6-7.6-3.2-11.3h0c7.3,0,13.2-5.9,13.2-13.2V17.1c0-1.4-1.1-2.5-2.5-2.5h-8.7v4h7.2v20.6c0,5.1-4.1,9.2-9.2,9.2h-6.3 
          c-5.1,0-9.2-4.1-9.2-9.2V18.6h7.3v-4h-8.8c-1.4,0-2.5,1.1-2.5,2.5v22.1c0,7.3,5.9,13.2,13.2,13.2H56c1.8,3.8,3.1,7.9,3.6,11.8 
          c0.8,5.8-0.6,15.6-7.6,17.1c-2.4,0.5-5.1-0.1-7.5-1.7c-3.2-2.2-6.7-6.8-7.6-10.7c3.5-1,6.2-4.2,6.2-8.1c0-4.6-3.8-8.4-8.4-8.4 
          s-8.4,3.8-8.4,8.4C26.4,64.8,29.2,68.2,32.9,69z M34.8,56.4c2.4,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4s-4.4-2-4.4-4.4 
          S32.4,56.4,34.8,56.4z"
                        />
                      </G>
                    </Svg>

                    <Text
                      style={[
                        styles.categoryElementText,
                        { color: pressed ? "white" : "black" },
                      ]}
                    >
                      Diagnostic
                    </Text>
                  </>
                )}
              </Pressable>
              <Pressable
                onPress={() =>
                  router.push(
                    `/category/${
                      findCat(categories, "Equipement d'urgence").id
                    }`
                  )
                }
                style={({ pressed }) => [
                  styles.categoryElement,
                  {
                    backgroundColor: pressed ? "#4F964F" : "#E8F2E8",
                  },
                ]}
              >
                {({ pressed }) => (
                  <>
                    <Svg
                      fill={pressed ? "white" : "black"}
                      viewBox="0 0 100 100"
                      width={25}
                      height={25}
                    >
                      <G>
                        <Path
                          d="M71.8,35.8h-9.4V20.5c0-1.4-1.1-2.5-2.5-2.5H40.2c-1.4,0-2.5,1.1-2.5,2.5v15.3h-9.4c-7.7,0-14,6.3-14,14v18
          c0,7.7,6.3,14,14,14h43.5c7.7,0,14-6.3,14-14v-18C85.8,42.1,79.5,35.8,71.8,35.8z M31.5,39.8h37v38h-37V39.8z M41.7,22h16.7v13.8
          H41.7V22z M18.3,67.7v-18c0-5.3,4.1-9.6,9.3-10v37.9C22.3,77.3,18.3,73,18.3,67.7z M81.8,67.7c0,5.3-4.1,9.6-9.3,10V39.8
          c5.2,0.4,9.3,4.7,9.3,10V67.7z"
                        />
                        <Polygon points="59.8,56.8 52,56.8 52,49 48,49 48,56.8 40.2,56.8 40.2,60.8 48,60.8 48,68.5 52,68.5 52,60.8 59.8,60.8" />
                      </G>
                    </Svg>
                    <Text
                      style={[
                        styles.categoryElementText,
                        { color: pressed ? "white" : "black" },
                      ]}
                    >
                      Equipement D'urgence
                    </Text>
                  </>
                )}
              </Pressable>
              <Pressable
                onPress={() =>
                  router.push(
                    `/category/${findCat(categories, "Soins du visage").id}`
                  )
                }
                style={({ pressed }) => [
                  styles.categoryElement,
                  {
                    backgroundColor: pressed ? "#4F964F" : "#E8F2E8",
                  },
                ]}
              >
                {({ pressed }) => (
                  <>
                    <Svg
                      width={25}
                      height={25}
                      viewBox="0 0 512.003 512.003"
                      fill={pressed ? "white" : "black"}
                    >
                      <Path d="M298.808,273.573c-2.841-3.179-7.721-3.454-10.902-0.614c-4.65,4.155-16.32,8.347-31.904,8.347 c-15.583,0-27.253-4.192-31.903-8.347c-3.18-2.84-8.061-2.565-10.902,0.616c-2.84,3.18-2.567,8.062,0.615,10.902 c8.602,7.685,24.374,12.273,42.191,12.273c17.818,0,33.59-4.589,42.193-12.275C301.375,281.634,301.648,276.753,298.808,273.573z" />
                      <Path d="M237.734,205.508c-2.874-3.149-7.758-3.372-10.909-0.497c-2.233,2.037-8.435,4.231-16.776,4.231 s-14.543-2.193-16.776-4.231c-3.15-2.874-8.034-2.652-10.909,0.498s-2.651,8.034,0.498,10.909 c5.672,5.176,15.836,8.267,27.186,8.267c11.352,0,21.515-3.092,27.187-8.268C240.387,213.542,240.609,208.659,237.734,205.508z" />
                      <Path d="M245.159,169.307c-7.228-4.693-20.353-7.495-35.108-7.495s-27.88,2.802-35.109,7.495 c-3.576,2.322-4.594,7.104-2.271,10.681c1.479,2.278,3.955,3.518,6.483,3.518c1.441,0,2.898-0.404,4.197-1.246 c3.838-2.491,13.582-5.005,26.7-5.005s22.862,2.513,26.699,5.004c3.576,2.322,8.359,1.305,10.681-2.272 C249.753,176.411,248.736,171.629,245.159,169.307z" />
                      <Path d="M329.636,205.51c-2.874-3.15-7.756-3.374-10.906-0.498c-2.233,2.037-8.435,4.231-16.776,4.231 c-8.342,0-14.544-2.194-16.777-4.231c-3.149-2.874-8.033-2.652-10.909,0.497c-2.874,3.15-2.652,8.033,0.497,10.909 c5.673,5.177,15.836,8.268,27.187,8.268c11.35,0,21.512-3.091,27.185-8.267C332.288,213.544,332.511,208.66,329.636,205.51z" />
                      <Path d="M337.062,169.306c-7.228-4.693-20.354-7.495-35.109-7.495s-27.879,2.801-35.108,7.495 c-3.576,2.322-4.594,7.104-2.272,10.68c2.323,3.578,7.105,4.596,10.681,2.273c3.837-2.49,13.58-5.004,26.699-5.004 c13.119,0,22.862,2.514,26.7,5.004c1.299,0.843,2.756,1.246,4.197,1.246c2.527,0,5.004-1.24,6.483-3.518 C341.656,176.411,340.639,171.629,337.062,169.306z" />
                      <Path d="M405.623,459.62c-13.636-11.586-32.225-17.966-52.345-17.966c-26.485,0-44.796-5.907-52.508-8.97v-6.582 c0.957,0.012,1.907,0.034,2.871,0.034c22.039,0,45.998-3.256,66.704-18.613c3.425-2.541,4.143-7.376,1.602-10.801 c-2.541-3.425-7.376-4.142-10.802-1.602c-18.089,13.416-40.141,15.812-60.376,15.553v-33.167 c42.967-15.709,75.455-53.356,83.841-99.31c3.036-0.483,5.977-1.227,8.799-2.217c0.039,4.577,0.097,9.125,0.152,13.592 c0.199,15.727,0.405,31.989-0.25,47.828c-0.995,11.709-3.916,21.767-8.931,30.739c-2.081,3.723-0.748,8.426,2.973,10.507 c1.192,0.665,2.484,0.982,3.76,0.982c2.707,0,5.333-1.426,6.747-3.956c6.135-10.978,9.685-23.129,10.853-37.147 c0.009-0.107,0.015-0.213,0.02-0.32c0.679-16.31,0.47-32.841,0.269-48.829c-0.092-7.244-0.18-14.695-0.193-22.113 c11.145-9.241,18.179-23.194,18.179-38.874c0-15.515-7.05-29.472-18.176-38.759c0.002-3.282,0.003-6.564,0.007-9.846 c0.009-9.107,0.019-18.213-0.009-27.32c-0.131-42.548-18.049-83.647-49.403-112.445c-4.786-4.396-9.853-8.487-15.162-12.234 C316.333,8.09,282.105-1.65,248.009,0.229c-31.333,1.727-61.889,13.39-86.415,32.96c-3.332,2.66-3.879,7.518-1.219,10.852 c2.66,3.333,7.518,3.878,10.852,1.219c22.065-17.612,49.443-28.058,77.632-29.612c41.068-2.264,81.459,14.383,109.028,44.862 c15.372,16.995,26.456,37.793,31.729,60.109c4.584,19.402,3.781,39.365,3.761,59.148c0,0.35-0.001,0.699-0.001,1.049 c0-0.174-2.419-0.783-2.681-0.859c-1.303-0.377-2.627-0.722-3.957-0.996v-12.588c0-14.389-2.33-28.543-6.925-42.068 c-1.059-3.119-3.982-5.223-7.276-5.237c-18.122-0.081-34.754-2.411-49.49-6.864c-0.1-0.031-0.198-0.063-0.297-0.094 c-20.823-6.342-40.86-18.162-53.535-36.226c-0.19-0.272-0.38-0.546-0.567-0.82c-1.145-1.678-2.222-3.406-3.201-5.186 c-2.167-3.942-3.535-8.404-8.915-8.432c-5.094-0.026-6.59,4.011-8.61,7.811c-7.837,14.738-21.385,26.225-35.955,33.974 c-22.087,11.748-47.681,15.844-72.465,15.845c-3.307,0-6.247,2.106-7.31,5.238c-4.595,13.528-6.924,27.678-6.924,42.058v12.588 c-1.921,0.395-3.796,0.91-5.628,1.515c-0.047,0.015-0.097,0.027-0.145,0.043c-0.27-16.968-0.483-34.474,1.922-51.418 c3.969-21.726,11.771-39.996,24.546-57.488c2.515-3.445,1.761-8.274-1.681-10.789c-3.445-2.515-8.275-1.763-10.789,1.682 c-14.228,19.482-22.901,39.812-27.295,63.977c-0.018,0.097-0.033,0.194-0.046,0.289c-2.662,18.639-2.364,37.281-2.076,55.311 c0.036,2.248,0.064,4.496,0.095,6.743c-11.691,9.273-19.153,23.597-19.153,39.564c0,16.229,7.528,30.617,19.355,39.834 c0.23,8.794-0.146,17.742-0.54,27.147c-1.271,30.276-2.587,61.583,16.978,90.116c0.107,0.156,0.22,0.309,0.339,0.457 c4.181,5.225,8.503,10.629,12.923,15.049c0.301,0.301,0.626,0.577,0.972,0.824c7.241,5.173,14.731,10.521,22.276,14.834 c0.072,0.041,0.145,0.081,0.217,0.12c16.923,8.959,35.557,9.23,53.695,9.159v6.774c-7.659,3.069-25.819,8.948-52.507,8.948 c-20.12,0-38.711,6.38-52.346,17.966c-13.776,11.705-21.362,27.566-21.362,44.662c0,4.264,3.456,7.721,7.721,7.721h326.529 c4.264,0,7.721-3.457,7.721-7.721C426.986,487.187,419.399,471.326,405.623,459.62z M386.54,261.822 c0.13-2.386,0.198-4.78,0.199-7.17c0.002-16.131,0.358-32.258,0.259-48.392c-0.023-3.775-0.06-7.55-0.11-11.326 c3.466,1.075,6.76,2.688,9.759,4.799c0.035,0.025,0.074,0.042,0.109,0.066c8.97,6.365,14.791,16.836,14.791,28.588 c0,11.676-5.615,21.971-14.345,28.327c-0.184,0.108-0.373,0.208-0.549,0.332c-3.114,2.186-6.528,3.832-10.118,4.902 C386.537,261.905,386.538,261.863,386.54,261.822z M166.446,156.078c0-8.02,1.062-15.94,3.162-23.608 c51.112-7.282,76.052-32.17,86.911-47.714c10.786,15.432,35.454,40.074,85.834,47.551c2.128,7.718,3.205,15.693,3.205,23.771 v98.588c0,49.381-40.175,89.556-89.556,89.556c-49.381,0-89.556-40.174-89.556-89.556V156.078z M115.5,257.215 c-9.129-6.307-15.041-16.844-15.041-28.827c0-15.147,10.326-29.08,24.808-33.499c0,12.166,0,24.33,0,36.496 c0,10.132-0.246,20.324,0.199,30.449c0.001,0.035,0.002,0.069,0.004,0.105c-3.271-0.977-6.394-2.429-9.268-4.327 C115.976,257.462,115.738,257.339,115.5,257.215z M211.082,410.487c-16.166,0.063-32.682-0.191-46.211-7.309 c-6.658-3.815-13.59-8.744-20.316-13.546c-3.628-3.7-7.454-8.47-11.166-13.109c-16.492-24.233-15.345-51.571-14.129-80.506 c0.271-6.453,0.548-13.04,0.608-19.615c2.43,0.779,4.942,1.38,7.524,1.79c8.383,45.939,40.852,83.577,83.797,99.295 C211.105,388.459,211.085,399.562,211.082,410.487z M184.434,344.989c-13.685-10.866-24.86-24.824-32.426-40.579 c-5.228-10.885-8.715-22.588-10.297-34.559c-0.119-0.911-0.221-1.824-0.319-2.74c-0.682-6.735-0.683-13.546-0.682-20.702v-0.468 c0.365-20.196,0.365-39.916,0-60.283v-19.285c0-10.867,1.506-21.581,4.483-31.926c2.64-0.067,5.362-0.182,8.148-0.357 c-1.543,7.201-2.338,14.557-2.338,21.987v98.588c0,57.896,47.102,104.998,104.998,104.998s104.998-47.102,104.998-104.998v-98.588 c0-7.458-0.8-14.838-2.352-22.062c2.79,0.188,5.514,0.318,8.156,0.396c2.981,10.351,4.492,21.078,4.492,31.96v19.345h0v60.163 v0.538c0,7.154,0,13.963-0.682,20.694c-0.099,0.915-0.2,1.829-0.32,2.74c-2.317,17.607-8.805,34.583-18.758,49.284 c-9.818,14.502-22.932,26.716-38.103,35.467c-10.94,6.312-22.932,10.829-35.338,13.223c-0.111,0.022-0.223,0.043-0.335,0.065 c-14.326,2.719-29.193,2.719-43.52,0c-0.11-0.022-0.219-0.042-0.329-0.064C215.981,364.389,198.79,356.389,184.434,344.989z M101.193,496.558c1.837-9.532,7.07-18.277,15.185-25.172c10.847-9.216,25.887-14.292,42.347-14.292 c39.741,0,62.886-12.057,63.852-12.571c2.521-1.34,4.097-3.963,4.097-6.818v-55.611c0,0.464,9.007,1.705,9.803,1.825 c6.461,0.971,12.989,1.484,19.524,1.484c9.814,0,19.692-1.108,29.261-3.294c-0.06,12.053-0.06,24.221-0.06,36.074 c0,0.463,0.046,0.915,0.125,1.356v18.168c0,2.856,1.576,5.478,4.097,6.818c0.968,0.514,24.114,12.571,63.855,12.571 c16.461,0,31.5,5.075,42.346,14.292c8.117,6.896,13.349,15.64,15.185,25.172H101.193z" />
                    </Svg>
                    <Text
                      style={[
                        styles.categoryElementText,
                        { color: pressed ? "white" : "black" },
                      ]}
                    >
                      Soins du visage
                    </Text>
                  </>
                )}
              </Pressable>
            </ScrollView>
            <View style={styles.offerContainer}>
              <Text style={styles.headerTitle}>Offres Spéciales</Text>
              <View style={styles.offerContent}>
                <Image
                  style={styles.offerImage}
                  source={require("../assets/images/offers.png")}
                />
                <Text style={styles.offerText}>
                  Découvrez nos offres exclusives
                </Text>
              </View>
            </View>
            <View>
              <Text style={[styles.headerTitle, { marginBottom: 22 }]}>
                Commandes Récentes
              </Text>
              <View
                style={{
                  flexDirection: orders.length === 0 ? "column" : "row",
                  gap: 12,
                }}
              >
                {orders.length === 0 ? (
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins_600SemiBold",
                      marginTop: 30,
                      alignSelf: "center",
                    }}
                  >
                    Vous n'avez pas de commande.
                  </Text>
                ) : orders.length === 1 ? (
                  <View
                    style={[
                      styles.offerContent,
                      {
                        flexDirection: "column",
                        height: 180,
                        width: 180,
                        gap: 5,
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: orders[0].items[0].image }}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        padding: 20,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "Poppins_600SemiBold",
                        color: "#0D1C0D",
                        fontSize: 16,
                      }}
                    >
                      Commande#{String(orders[0].id).slice(0, 3)}...
                    </Text>
                  </View>
                ) : (
                  <>
                    <View
                      style={[
                        styles.offerContent,
                        {
                          flexDirection: "column",
                          height: 180,
                          width: 180,
                          gap: 5,
                        },
                      ]}
                    >
                      <Image
                        source={{
                          uri: orders[orders.length - 1].items[0].image,
                        }}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 10,
                          padding: 20,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: "Poppins_600SemiBold",
                          color: "#0D1C0D",
                          fontSize: 16,
                        }}
                      >
                        Commande#
                        {String(orders[orders.length - 1].id).slice(0, 3)}...
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.offerContent,
                        {
                          flexDirection: "column",
                          height: 180,
                          width: 180,
                          gap: 5,
                        },
                      ]}
                    >
                      <Image
                        source={{
                          uri: orders[orders.length - 2].items[0].image,
                        }}
                        style={{
                          width: 100,
                          height: 100,
                          borderRadius: 10,
                          padding: 20,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: "Poppins_600SemiBold",
                          color: "#0D1C0D",
                          fontSize: 16,
                        }}
                      >
                        Commande#
                        {String(orders[orders.length - 2].id).slice(0, 3)}...
                      </Text>
                    </View>
                  </>
                )}
              </View>
            </View>
          </>
        ) : (
          <FlatList
            data={filtered}
            renderItem={renderItem}
            numColumns={2}
            keyExtractor={(item) => item.id}
            style={styles.listStyle}
            contentContainerStyle={styles.insideListstyle}
            columnWrapperStyle={{ gap: 20, paddingLeft: 15, paddingRight: 15 }}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 72,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  headerName: {
    fontWeight: 700,
    fontSize: 28,
    flex: 1,
    marginLeft: 20,
    color: "#4F964F",
  },
  headerCart: { marginRight: 5 },
  SearchbarContainer: { height: 90, padding: 20, justifyContent: "center" },
  Searchbarinput: { overflow: "hidden" },
  Searchbar: {
    overflow: "hidden",
    alignItems: "center",
    gap: 10,
    height: 60,
    backgroundColor: "#E8F2E8",
    borderRadius: 25,
    flexDirection: "row",
  },
  SearchbarSVG: {
    marginLeft: 16,
  },
  categoryScrollView: {
    gap: 15,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryElement: {
    flex: 1,
    backgroundColor: "#E8F2E8",
    padding: 10,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  categoryElementText: {
    fontSize: 14,
  },
  productStyle: { width: 173, gap: 12 },
  listStyle: { width: "100%", marginTop: 45 },
  insideListstyle: {
    gap: 20,
    alignItems: "flex-start",
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
  headerTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    color: "#295529ff",
  },
  offerContainer: {
    padding: 12,
  },
  offerContent: {
    backgroundColor: "#E8F2E8",
    height: 143,
    flexDirection: "row",
    gap: 25,
    borderRadius: 15,
    padding: 15,
  },
  offerImage: {
    height: 110,
    width: 110,
    alignSelf: "center",
    borderRadius: 15,
  },
  offerText: {
    alignSelf: "flex-end",
    fontSize: 18,
    width: "50%",
    fontFamily: "Poppins_400Regular",
    color: "#0D1C0D",
  },
});
