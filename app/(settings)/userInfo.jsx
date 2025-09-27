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
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { useUser } from "../../UserContext";
export default function userInfo() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const router = useRouter();
  const { userInfo, saveUserInfo } = useUser();
  const [info, setInfo] = useState({
    lastName: "",
    name: "",
    address: "",
    number: "",
  });
  useEffect(() => {
    if (userInfo) {
      setInfo({
        lastName: userInfo.lastName || "",
        name: userInfo.name || "",
        address: userInfo.address || "",
        number: userInfo.number || "",
      });
    }
  }, [userInfo]);
  const handleConfirm = () => {
    if (!info.name || info.name.length < 2 || info.name.length > 20) {
      return;
    }
    if (
      !info.lastName ||
      info.lastName.length < 2 ||
      info.lastName.length > 20
    ) {
      return;
    }
    if (!info.address || info.address.length < 2 || info.address.length > 40) {
      return;
    }
    if (
      !info.number ||
      !/^0\d*$/.test(info.number) ||
      info.number.length < 9 ||
      info.number.length > 15
    ) {
      return;
    }
    saveUserInfo(info);
    Toast.show({
      type: "success",
      text1: "Informations engregistrées ✅",
      position: "bottom",
      visibilityTime: 3000,
    });
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <Text style={styles.HeaderText}>Vos Informations</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.inputText}>Nom :</Text>
        <TextInput
          maxLength={20}
          style={styles.inputBar}
          value={info.lastName}
          onChangeText={(text) =>
            setInfo((prev) => ({ ...prev, lastName: text }))
          }
        />
        {info.lastName.length < 3 && (
          <Text style={{ color: "red" }}>Nom trop court</Text>
        )}
        <Text style={styles.inputText}>Prénom :</Text>
        <TextInput
          maxLength={20}
          style={styles.inputBar}
          value={info.name}
          onChangeText={(text) => setInfo((prev) => ({ ...prev, name: text }))}
        />
        {info.name.length < 3 && (
          <Text style={{ color: "red" }}>Prénom trop court</Text>
        )}
        <Text style={styles.inputText}>Adresse :</Text>
        <TextInput
          maxLength={40}
          style={styles.inputBar}
          value={info.address}
          onChangeText={(text) =>
            setInfo((prev) => ({ ...prev, address: text }))
          }
        />
        {info.address.length < 3 && (
          <Text style={{ color: "red" }}>Adresse trop courte</Text>
        )}
        <Text style={styles.inputText}>Numéro de Telephone : </Text>
        <TextInput
          style={styles.inputBar}
          value={info.number}
          onChangeText={(text) =>
            setInfo((prev) => ({ ...prev, number: text }))
          }
          maxLength={15}
          keyboardType="numeric"
        />
        {(info.number.length < 9 || !/^0\d*$/.test(info.number)) && (
          <Text style={{ color: "red" }}>
            Veuillez saisir un numéro correct
          </Text>
        )}
      </View>
      <Pressable
        onPress={() => {
          handleConfirm();
        }}
        style={[
          styles.confirmButtons,
          { backgroundColor: "#17CF17", marginTop: 20 },
        ]}
      >
        <Text style={styles.confirmButtonsText}>Confirmer</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          router.back();
        }}
        style={[styles.confirmButtons, { backgroundColor: "#E8F2E8" }]}
      >
        <Text style={styles.confirmButtonsText}>Annuler</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeaderText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 15,
  },
  inputText: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    marginTop: 20,
  },
  contentContainer: {
    padding: 10,
    gap: 10,
  },
  inputBar: {
    borderWidth: 2,
    borderColor: "#D1E8D1",
    borderRadius: 10,

    backgroundColor: "#fafffaff",
    height: 51,
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
