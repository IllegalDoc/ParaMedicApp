// CartDrawer.jsx
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
import { Link } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { G, Path } from "react-native-svg";
import { useCart } from "./CartContext";
export default function CartDrawer({ visible, onClose }) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const { cart, addToCart, removeFromCart, removeItem, totalPrice } = useCart();
  const insets = useSafeAreaInsets();
  console.log("CartDrawer mounted");

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={styles.modal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      propagateSwipe
      useNativeDriverForBackdrop
      avoidKeyboard
    >
      <View
        style={[
          styles.container,
          { paddingBottom: Math.max(insets.bottom, 16) },
        ]}
      >
        <View style={styles.handle} />

        <Text style={styles.title}>Mon Panier</Text>

        <FlatList
          data={cart}
          keyExtractor={(item) =>
            item.id?.toString() ?? Math.random().toString()
          }
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 8,
                height: 70,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ height: 30, width: 30, borderRadius: 10 }}
              ></Image>
              <Text
                style={{
                  width: "50%",
                  alignSelf: "center",
                  fontFamily: "Poppins_600SemiBold",
                  color: "#101310ff",
                  marginTop: 8,
                  fontSize: 12,
                }}
              >
                {item.name}
              </Text>

              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    justifyContent: "center",
                    gap: 10,
                    borderColor: "gray",
                    borderRadius: 20,
                    width: 100,
                  }}
                >
                  <Pressable
                    onPress={() => removeFromCart(item.id, 1)}
                    style={{ padding: 8 }}
                  >
                    <Text>-</Text>
                  </Pressable>
                  <Text>{item.quantity}</Text>
                  <Pressable
                    onPress={() => addToCart(item, 1)}
                    style={{ padding: 8 }}
                  >
                    <Text>+</Text>
                  </Pressable>
                </View>

                <Pressable
                  onPress={() => removeItem(item.id)}
                  style={{ padding: 8 }}
                >
                  <Svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <G id="fill">
                      <Path
                        fill="#00df8e"
                        d="M27.35,8.49h-5s0-.08,0-.12a6.37,6.37,0,0,0-12.74,0s0,.08,0,.12h-5a1,1,0,1,0,0,1.93h2.7V26.14A3.86,3.86,0,0,0,11.21,30h9.58a3.86,3.86,0,0,0,3.86-3.86V10.42h2.7a1,1,0,1,0,0-1.93ZM11.56,8.37a4.44,4.44,0,0,1,8.88,0s0,.08,0,.12H11.54S11.56,8.41,11.56,8.37Z"
                      />
                      <Path
                        fill="#bfffc8"
                        d="M12.76,25a1,1,0,0,1-1-1V15.4a1,1,0,0,1,1.93,0v8.65A1,1,0,0,1,12.76,25Z"
                      />
                      <Path
                        fill="#bfffc8"
                        d="M19.24,25a1,1,0,0,1-1-1V15.4a1,1,0,0,1,1.93,0v8.65A1,1,0,0,1,19.24,25Z"
                      />
                    </G>
                  </Svg>
                </Pressable>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <View style={{ alignItems: "center", marginTop: 40 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, marginBottom: 12 }}
              >
                Il n’y a rien dans votre Panier.
              </Text>
              <Pressable
                onPress={() => {
                  onClose?.();
                  console.log("Go to products");
                }}
              >
                <Link
                  style={{ color: "blue", textDecorationLine: "underline" }}
                  onPress={onClose}
                  href={"/allProducts"}
                >
                  Tous les produits
                </Link>
              </Pressable>
            </View>
          }
          contentContainerStyle={{ paddingBottom: 10 }}
        />

        {cart.length > 0 && (
          <View style={styles.footer}>
            <Text
              style={{
                marginBottom: 8,
                alignSelf: "flex-end",
                fontFamily: "Inter_700Bold",
              }}
            >
              Total: {totalPrice} DA
            </Text>
            <Pressable
              style={({ pressed }) => [
                styles.checkoutButton,
                { backgroundColor: pressed ? "#2ab62aff" : "#17CF17" }, // darker when pressed
              ]}
              onPress={() => console.log("Checkout")}
            >
              <Text style={styles.checkoutText}>Commander</Text>
            </Pressable>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 12,
    paddingHorizontal: 16,
    maxHeight: "90%",
    minHeight: 200,
  },
  handle: {
    width: 40,
    height: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  itemName: {
    flex: 1,
    marginRight: 12,
  },
  trash: {
    paddingHorizontal: 8,
  },
  footer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#ddd",
    paddingTop: 12,
    paddingBottom: 10,
  },
  checkoutButton: {
    marginTop: 10,
    height: 58,
    alignSelf: "center",
    width: "95%",
    backgroundColor: "#17CF17",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    elevation: 4,
  },
  checkoutText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    elevation: 4,
  },
});
