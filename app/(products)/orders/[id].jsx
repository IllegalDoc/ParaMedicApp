import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOrders } from "../../../assets/OrderContext";
export default function OrderDescription() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { orders } = useOrders();
  const order = orders.find((p) => String(p.id) === String(id));
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        height: 72,
      }}
    >
      <View style={{ width: "85%" }}>
        <Text style={[styles.DescriptionText]}>{item.name}</Text>
        <Text style={[styles.DescriptionText, { color: "#4F964F" }]}>
          Quantité : {item.quantity}
        </Text>
      </View>
      <Text style={[styles.valueText]}>{item.price} DA</Text>
    </View>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={order.items}
        renderItem={renderItem}
        style={{ padding: 16, flex: 1 }}
        contentContainerStyle={{ gap: 16 }}
        ListHeaderComponentStyle={{ gap: 12, marginBottom: 20 }}
        ListHeaderComponent={
          <>
            <Text
              style={{
                color: "#0D1C0D",
                fontFamily: "Poppins_600SemiBold",
                fontSize: 18,
                alignSelf: "center",
                textAlign: "center",
                padding: 16,
              }}
            >
              Détails de la Commande
            </Text>
            <Text
              style={{
                color: "#0D1C0D",
                fontFamily: "Poppins_600SemiBold",
                fontSize: 18,
                marginBottom: 20,
              }}
            >
              Commande#{order.id}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={styles.DescriptionText}>Date de Commande</Text>

              <Text style={styles.valueText}>
                {order.createdAt.slice(0, 10)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={styles.DescriptionText}>État de la commande</Text>

              <Text style={styles.valueText}>
                {order.orderStatus === "pending"
                  ? "En Attente"
                  : order.orderStatus}
              </Text>
            </View>
            <Text style={{ fontSize: 18, fontFamily: "Poppins_600SemiBold" }}>
              Produits
            </Text>
          </>
        }
        ListFooterComponentStyle={{ gap: 50 }}
        ListFooterComponent={
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 40,
              }}
            >
              <Text style={styles.valueText}>Total</Text>
              <Text style={[styles.valueText]}>{order.total} DA</Text>
            </View>
            <Pressable
              style={{
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                width: "80%",
                marginBottom: 12,
                borderRadius: 20,
                backgroundColor: "#17CF17",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins_600SemiBold",
                  textAlign: "center",
                }}
              >
                Contacter le Support
              </Text>
            </Pressable>
          </>
        }
      ></FlatList>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  DescriptionText: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    marginBottom: 15,
  },
  valueText: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
  },
});
