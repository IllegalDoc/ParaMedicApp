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
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useOrders } from "../../assets/OrderContext";
import { useCart } from "../../CartContext";
import { useUser } from "../../UserContext";

export default function Order() {
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        padding: 20,
        gap: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: "#4F964F",
      }}
    >
      <Image
        style={{
          height: 72,
          width: 72,
          borderRadius: 5,
          borderColor: "#4F964F",
        }}
        source={{ uri: item.image }}
      />
      <View style={{ width: "80%" }}>
        <Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
          {item.name}
        </Text>
        <Text style={{ color: "#4F964F", fontFamily: "Poppins_600SemiBold" }}>
          Quantité:{item.quantity}
        </Text>
      </View>
    </View>
  );
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const { userInfo, saveUserInfo } = useUser();
  const { addOrder } = useOrders();
  const { cart, clearCart, totalPrice } = useCart();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        numColumns={1}
        ListHeaderComponent={
          <>
            <Text style={[styles.HeaderTitle, { height: 85 }]}>
              Confirmation de Commande
            </Text>
            <Text
              style={[
                styles.HeaderTitle,
                { textAlign: "justify", marginLeft: 10 },
              ]}
            >
              Recapitulatif de votre commande :
            </Text>
          </>
        }
        ListFooterComponent={
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 50,
                marginBottom: 50,
                padding: 25,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 16,
                }}
              >
                Total :
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 16,
                  color: "#4F964F",
                }}
              >
                {totalPrice} DA
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 16,
                alignSelf: "center",
                marginBottom: 10,
                textAlign: "center",
              }}
            >
              Est-ce que vous confirmez votre commande ?
            </Text>
            <Pressable
              onPress={() => {
                const newOrder = {
                  id: Date.now().toString(),
                  userInfo,
                  items: cart,
                  total: totalPrice,
                  orderStatus: "pending",
                  createdAt: new Date().toLocaleString("fr-FR"),
                };

                Toast.show({
                  type: "success",
                  text1: "Commande envoyée ✅",
                  text2: "Merci pour votre achat !",
                  position: "bottom",
                  visibilityTime: 3000,
                });
                addOrder(newOrder);

                setTimeout(() => {
                  router.push("/allProducts");
                }, 100);
                setTimeout(() => {
                  clearCart();
                }, 100);
              }}
              style={[styles.confirmButtons, { backgroundColor: "#17CF17" }]}
            >
              <Text style={styles.confirmButtonsText}>Oui</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                router.push("/allProducts");
              }}
              style={[styles.confirmButtons, { backgroundColor: "#E8F2E8" }]}
            >
              <Text style={styles.confirmButtonsText}>
                Je retourne aux produits
              </Text>
            </Pressable>
          </>
        }
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeaderTitle: {
    fontSize: 18,

    padding: 10,
    alignItems: "center",
    fontFamily: "Poppins_600SemiBold",
    color: "#0D1C0D",
    textAlign: "center",
  },
  confirmButtons: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    width: "80%",
    marginBottom: 12,
    borderRadius: 20,
  },
  confirmButtonsText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    textAlign: "center",
  },
});
