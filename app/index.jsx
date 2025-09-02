import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import { useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import products from "../assets/data/products";
export default function Index() {
  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const headerScale = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <LinearGradient
        colors={["rgba(77, 81, 84, 1)", "rgba(195, 207, 194, 1)"]}
        start={{ x: 0.45, y: 0 }}
        end={{ x: 0.55, y: 1 }}
        style={{
          flex: 1,
        }}
      >
        <Animated.ScrollView
          contentContainerStyle={{ gap: 50 }}
          style={{ flex: 1 }}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: scrollY } },
            },
          ])}
          scrollEventThrottle={16}
        >
          <View
            style={{
              height: 200,
              width: "100%",

              alignSelf: "flex-start",
            }}
          >
            <Animated.Image
              source={require("../assets/images/homePic.png")}
              style={{
                opacity: headerOpacity,
                transform: [{ scale: headerScale }],
                objectFit: "contain",
                overflow: "hidden",
                alignSelf: "flex-end",
              }}
            ></Animated.Image>
          </View>

          <View style={{ marginLeft: 5 }}>
            <Text style={{ fontSize: "40" }}>
              Welcome <Text style={{ color: "white" }}>ANES</Text>
            </Text>
          </View>
          <View style={{ gap: 40 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: "20", marginLeft: 5 }}>
                Latest Products :
              </Text>
              <Link style={{ fontSize: "20", marginRight: 10 }} href={"/"}>
                See All
              </Link>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {products.map((product) => (
                <Pressable
                  key={product.id}
                  style={{ height: 300, width: 300 }}
                  onPress={() => router.push(`/products/${product.id}`)}
                >
                  <Image
                    style={{ width: "70%", height: "70%", borderRadius: 30 }}
                    source={{ uri: product.imageUrl }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text>{product.name} </Text>
                    <Text>{product.price}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <View style={{ gap: 40 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: "20", marginLeft: 5 }}>
                Recent Orders :
              </Text>
              <Link style={{ fontSize: "20", marginRight: 10 }} href={"/"}>
                See All
              </Link>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {products.map((product) => (
                <View key={product.id} style={{ height: 300, width: 300 }}>
                  <Image
                    style={{ width: "70%", height: "70%", borderRadius: 30 }}
                    source={{ uri: product.imageUrl }}
                  />
                  <View style={{ flex: 1 }}>
                    <Text>{product.name} </Text>
                    <Text>{product.price}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </Animated.ScrollView>
      </LinearGradient>
    </View>
  );
}
