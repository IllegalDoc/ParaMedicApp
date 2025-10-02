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
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Path, Text as SVGText, Svg } from "react-native-svg";

import MapView, { Marker } from "react-native-maps";
export default function contactUs() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={styles.headerText}>Nous Contacter</Text>
      <Svg
        width={360}
        height={120}
        viewBox="0 0 400 60"
        style={{ alignSelf: "center" }}
      >
        <SVGText
          x={0}
          y={85}
          fontFamily="Arial"
          fontSize={72}
          fontWeight="bold"
          fill="#1E88E5"
        >
          Gam
        </SVGText>

        <SVGText
          x={140}
          y={85}
          fontFamily="Arial"
          fontSize={72}
          fontWeight="bold"
          fill="#4CAF50"
        >
          Medical
        </SVGText>
      </Svg>
      <Text style={styles.logoText}>Votre Partenaire Santé</Text>
      <View
        style={{
          gap: 20,
        }}
      >
        <View style={styles.infoContainer}>
          <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
            <Path
              d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z"
              fill="#1E88E5"
            />
          </Svg>
          <View>
            <Text>Téléphone</Text>
            <Text style={styles.valueInfo}>0793584708</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Svg viewBox="0 0 24 24" fill="none" width={24} height={24}>
            <Path
              d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
              stroke="#1E88E5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <View>
            <Text>Email</Text>
            <Text style={styles.valueInfo}>anis921787@gmail.com</Text>
          </View>
        </View>
        <View
          style={[styles.infoContainer, { justifyContent: "space-between" }]}
        >
          <View style={{ flexDirection: "row", gap: 12 }}>
            <Svg viewBox="0 0 48 48" width={24} height={24}>
              <Path
                d="M24 4C12.95 4 4 12.96 4 24c0 4.4 1.37 8.48 3.74 11.83L6 44l8.52-2.74C17.16 43.36 20.47 44 24 44c11.05 0 20-8.96 20-20S35.05 4 24 4z"
                fill="#67C15E"
              />

              <Path
                d="M17.29 14.19c-.46-1.11-.81-1.15-1.52-1.18-.26-.01-.55-.03-.87-.03-.91 0-1.91.29-2.49.88-.7.72-1.62 2.01-1.62 4.23 0 2.22 1.57 4.29 1.84 4.66.27.37 4.41 6.91 11.55 9.88 5.04 2.09 6.77 1.79 7.98 1.53 1.35-.29 3.1-1.34 3.59-2.71.49-1.38.49-2.57.34-2.84-.16-.27-.6-.44-1.26-.77-.67-.34-3.82-1.92-4.54-2.19-.72-.26-1.17-.41-1.67.25-.5.65-1.12 1.37-1.44 1.68-.32.32-.59.36-1.12.13-.5-.22-2.12-.77-4.01-2.45-1.47-1.29-2.49-2.89-2.77-3.43-.28-.54-.03-.86.21-1.12.22-.26.5-.55.75-.83.25-.28.39-.47.58-.79.18-.32.09-.62 0-.9-.1-.28-.94-2.31-1.31-3.22z"
                fill="#FFFFFF"
              />
            </Svg>
            <Text style={styles.valueInfo}>Whatsapp</Text>
          </View>
          <Pressable style={styles.whatsappButton}>
            <Text style={styles.whatsappText}>Whatsapp</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 36.7387414,
            longitude: 3.2705609,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: 36.7387414, longitude: 3.2705609 }}
            title="Our Company"
            description="Distributeur de produits paramédicaux et cosmétiques"
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 22,
    alignSelf: "center",

    justifyContent: "center",
    textAlign: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 6,
  },
  valueInfo: {
    fontFamily: "Poppins_600SemiBold",
    color: "#1E88E5",
    fontSize: 14,
    textDecorationLine: "underline",
    textDecorationColor: "#4F964F",
  },
  logoText: {
    alignSelf: "center",
    justifyContent: "baseline",
    color: "#4F964F",
    marginBottom: 30,
    fontFamily: "Poppins_600SemiBold",
  },
  whatsappButton: {
    backgroundColor: "#4F964F",
    padding: 15,
    borderRadius: 10,
  },
  whatsappText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "white",
  },
  container: { flex: 1 },
  map: { flex: 1 },
});
