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
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOrders } from "../../assets/OrderContext";
export default function allOrders() {
  const router = useRouter();
  const { orders } = useOrders();
  const renderItem = ({ item }) => (
    <Pressable
      onPress={(e) => {
        router.push(`/orders/${item.id}`);
      }}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <View style={{ gap: 8 }}>
        <Text style={{ fontFamily: "Inter_500Medium", fontSize: 16 }}>
          {item.createdAt}
        </Text>
        <Text
          style={{
            fontFamily: "Inter_400Regular",
            color: "#4F964F",
            fontSize: 14,
          }}
        >
          Commande #{item.id}
        </Text>
      </View>
      <Text style={{ fontFamily: "Inter_500Medium", fontSize: 16 }}>
        {item.total} DA
      </Text>
    </Pressable>
  );
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {orders.length > 0 ? (
        <FlatList
          data={orders}
          renderItem={renderItem}
          ListHeaderComponent={
            <Text
              style={{
                alignSelf: "center",
                textAlign: "center",
                fontFamily: "Poppins_600SemiBold",
                fontSize: 18,
                marginBottom: 15,
              }}
            >
              Mes Commandes
            </Text>
          }
        ></FlatList>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 18 }}>
            Vous n'avez pas de Commandes.
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}
