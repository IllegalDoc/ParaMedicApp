import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { useEffect, useMemo, useRef } from "react";
import { Button, FlatList, Pressable, Text, View } from "react-native";
import { useCart } from "./CartContext";

export default function CartDrawer({ visible, onClose }) {
  const { cart, removeFromCart } = useCart();
  const bottomSheetRef = useRef(null);

  // Only one snap point: full height
  const snapPoints = useMemo(() => ["100%"], []);

  // Control open/close based on context state
  useEffect(() => {
    console.log("Drawer visible:", visible);
    if (!bottomSheetRef.current) return;

    if (visible) {
      bottomSheetRef.current.snapToIndex(0);
    } else {
      bottomSheetRef.current.close();
    }
  }, [visible]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1} // hidden by default
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onClose}
      backdropComponent={(props) => (
        <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />
      )}
      handleComponent={null} // hide the grabber for a "drawer" look
    >
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
          Mon Panier
        </Text>

        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <Text>{item.name}</Text>
              <Pressable onPress={() => removeFromCart(item.id)}>
                <Text style={{ color: "red" }}>🗑️</Text>
              </Pressable>
            </View>
          )}
          ListEmptyComponent={
            <View style={{ alignItems: "center", marginTop: 40 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 16, marginBottom: 12 }}
              >
                Il n’y a rien dans votre panier.
              </Text>
              <Pressable
                onPress={() => {
                  onClose?.(); // close the drawer
                  console.log("Go to products"); // replace with navigation
                }}
              >
                <Text
                  style={{ color: "blue", textDecorationLine: "underline" }}
                >
                  Tous les produits
                </Text>
              </Pressable>
            </View>
          }
        />

        {cart.length > 0 && (
          <>
            <Text style={{ marginTop: 10, fontWeight: "bold" }}>
              Total: {cart.reduce((acc, p) => acc + p.price, 0)} DA
            </Text>
            <Button title="Commander" onPress={() => console.log("Checkout")} />
          </>
        )}
      </View>
    </BottomSheet>
  );
}
