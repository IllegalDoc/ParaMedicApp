// CartDrawer.jsx
import { Link } from "expo-router";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCart } from "./CartContext";
export default function CartDrawer({ visible, onClose }) {
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
              }}
            >
              <Text>
                {item.name} × {item.quantity}
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable
                  onPress={() => removeFromCart(item.id, 1)}
                  style={{ padding: 8 }}
                >
                  <Text>-</Text>
                </Pressable>

                <Pressable
                  onPress={() => addToCart(item, 1)}
                  style={{ padding: 8 }}
                >
                  <Text>+</Text>
                </Pressable>

                <Pressable
                  onPress={() => removeItem(item.id)}
                  style={{ padding: 8 }}
                >
                  <Text style={{ color: "red" }}>🗑️</Text>
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
            <Text style={{ fontWeight: "bold", marginBottom: 8 }}>
              Total: {totalPrice} DA
            </Text>
            <Button title="Commander" onPress={() => console.log("Checkout")} />
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
});
