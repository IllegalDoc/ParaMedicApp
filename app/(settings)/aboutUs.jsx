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
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Path } from "react-native-svg";
export default function contactUs() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.headerText}> À propos de nous</Text>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 15,
          gap: 15,
        }}
      >
        <View style={styles.containerBox}>
          <Text style={styles.titleText}>Bienvenue chez nous</Text>
          <Text style={styles.contentText}>
            Découvrez notre univers, où la qualité rencontre l'expertise dans le
            domaine des produits paramédicaux et cosmétiques. Nous sommes dédiés
            à votre bien-être et à votre satisfaction.
          </Text>
          <View style={{ flexDirection: "row", gap: 25, marginTop: 20 }}>
            <Pressable
              style={({ pressed }) => [
                styles.welcomeButton,
                {
                  backgroundColor: !pressed ? "#008236" : "#085f2cff",
                  width: "70%",
                },
              ]}
            >
              <Text style={{ color: "white", fontFamily: "Inter_500Medium" }}>
                Découvrir nos produits
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.welcomeButton,
                { borderWidth: 0, borderColor: "#008236" },
              ]}
            >
              <Text style={{ color: "#008236", fontFamily: "Inter_500Medium" }}>
                Contact
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={[styles.containerBox, { flexDirection: "row", gap: 12 }]}>
          <View>
            <Svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              style={{ backgroundColor: "#f0fdf4", borderRadius: 5 }}
            >
              <Circle
                cx="15.8"
                cy="14.91"
                r="6.71"
                stroke="#008236"
                strokeWidth="0.384"
                fill="none"
              />
              <Circle
                cx="8.13"
                cy="14.91"
                r="6.71"
                stroke="#008236"
                strokeWidth="0.384"
                fill="none"
              />
              <Circle
                cx="11.96"
                cy="8.19"
                r="6.71"
                stroke="#008236"
                strokeWidth="0.384"
                fill="none"
              />
            </Svg>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.titleText, { color: "#0D1C0D" }]}>
              Notre mission et nos valeurs
            </Text>
            <Text style={styles.contentText}>
              Notre mission est de fournir des produits de haute qualité, en
              mettant l'accent sur la sécurité, l'efficacité et la satisfaction
              du client. Nous nous engageons à offrir une expérience d'achat
              transparente et fiable.
            </Text>
          </View>
        </View>
        <View style={[styles.containerBox, { flexDirection: "row", gap: 12 }]}>
          <View>
            <Svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="none"
              style={{ backgroundColor: "#f0fdf4", borderRadius: 5 }}
            >
              <Path
                d="M11 3.99995C12.8839 2.91716 14.9355 2.15669 17.07 1.74995C17.551 1.63467 18.0523 1.63283 18.5341 1.74458C19.016 1.85632 19.4652 2.07852 19.8464 2.39375C20.2276 2.70897 20.5303 3.10856 20.7305 3.56086C20.9307 4.01316 21.0229 4.50585 21 4.99995V13.9999C20.9699 15.117 20.5666 16.1917 19.8542 17.0527C19.1419 17.9136 18.1617 18.5112 17.07 18.7499C14.9355 19.1567 12.8839 19.9172 11 20.9999"
                stroke="#008236"
                strokeWidth="0.924"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M10.9995 3.99995C9.1156 2.91716 7.06409 2.15669 4.92957 1.74995C4.44856 1.63467 3.94731 1.63283 3.46546 1.74458C2.98362 1.85632 2.53439 2.07852 2.15321 2.39375C1.77203 2.70897 1.46933 3.10856 1.26911 3.56086C1.0689 4.01316 0.976598 4.50585 0.999521 4.99995V13.9999C1.0296 15.117 1.433 16.1917 2.14533 17.0527C2.85767 17.9136 3.83793 18.5112 4.92957 18.7499C7.06409 19.1567 9.1156 19.9172 10.9995 20.9999"
                stroke="#008236"
                strokeWidth="0.924"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M11 21V4"
                stroke="#008236"
                strokeWidth="0.924"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.titleText, { color: "#0D1C0D" }]}>
              Notre histoire
            </Text>
            <Text style={styles.contentText}>
              Depuis notre création, nous avons évolué pour devenir un acteur
              majeur dans la distribution de produits paramédicaux et
              cosmétiques, en nous adaptant constamment aux besoins de nos
              clients.
            </Text>
          </View>
        </View>
        <View style={[styles.containerBox, { flexDirection: "row", gap: 12 }]}>
          <View>
            <Svg
              viewBox="0 0 24 24"
              fill="none"
              width={24}
              height={24}
              style={{ backgroundColor: "#f0fdf4", borderRadius: 5 }}
            >
              <Path
                d="M4 7.5L11.6078 3.22062C11.7509 3.14014 11.8224 3.09991 11.8982 3.08414C11.9654 3.07019 12.0346 3.07019 12.1018 3.08414C12.1776 3.09991 12.2491 3.14014 12.3922 3.22062L20 7.5M4 7.5V16.0321C4 16.2025 4 16.2876 4.02499 16.3637C4.04711 16.431 4.08326 16.4928 4.13106 16.545C4.1851 16.6041 4.25933 16.6459 4.40779 16.7294L12 21M4 7.5L12 11.5M12 21L19.5922 16.7294C19.7407 16.6459 19.8149 16.6041 19.8689 16.545C19.9167 16.4928 19.9529 16.431 19.975 16.3637C20 16.2876 20 16.2025 20 16.0321V7.5M12 21V11.5M20 7.5L12 11.5"
                stroke="#008236"
                strokeWidth={1.128}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.titleText, { color: "#0D1C0D" }]}>
              Nos produits
            </Text>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.productText}>Matériel Paramédical</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.productText}>Produits Cosmétiques</Text>
            </View>
            <View style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.productText}>Produits d'hygiène</Text>
            </View>
          </View>
        </View>
        <View style={[styles.containerBox, { flexDirection: "row", gap: 12 }]}>
          <View>
            <Svg
              viewBox="0 0 24 24"
              fill="none"
              width={24}
              height={24}
              style={{ backgroundColor: "#f0fdf4", borderRadius: 5 }}
            >
              <Path
                opacity={0.4}
                d="M17.9981 7.16C17.9381 7.15 17.8681 7.15 17.8081 7.16C16.4281 7.11 15.3281 5.98 15.3281 4.58C15.3281 3.15 16.4781 2 17.9081 2C19.3381 2 20.4881 3.16 20.4881 4.58C20.4781 5.98 19.3781 7.11 17.9981 7.16Z"
                stroke="#008236"
                strokeWidth={1.056}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                opacity={0.4}
                d="M16.9675 14.4402C18.3375 14.6702 19.8475 14.4302 20.9075 13.7202C22.3175 12.7802 22.3175 11.2402 20.9075 10.3002C19.8375 9.59016 18.3075 9.35016 16.9375 9.59016"
                stroke="#008236"
                strokeWidth={1.056}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                opacity={0.4}
                d="M5.96656 7.16C6.02656 7.15 6.09656 7.15 6.15656 7.16C7.53656 7.11 8.63656 5.98 8.63656 4.58C8.63656 3.15 7.48656 2 6.05656 2C4.62656 2 3.47656 3.16 3.47656 4.58C3.48656 5.98 4.58656 7.11 5.96656 7.16Z"
                stroke="#008236"
                strokeWidth={1.056}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                opacity={0.4}
                d="M6.9975 14.4402C5.6275 14.6702 4.1175 14.4302 3.0575 13.7202C1.6475 12.7802 1.6475 11.2402 3.0575 10.3002C4.1275 9.59016 5.6575 9.35016 7.0275 9.59016"
                stroke="#008236"
                strokeWidth={1.056}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z"
                stroke="#008236"
                strokeWidth={1.056}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M9.0907 17.7804C7.6807 18.7204 7.6807 20.2603 9.0907 21.2003C10.6907 22.2703 13.3107 22.2703 14.9107 21.2003C16.3207 20.2603 16.3207 18.7204 14.9107 17.7804C13.3207 16.7204 10.6907 16.7204 9.0907 17.7804Z"
                stroke="#008236"
                strokeWidth={1.056}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.titleText, { color: "#0D1C0D" }]}>
              Qualité et partenariats
            </Text>
            <Text style={styles.contentText}>
              Nous collaborons avec des marques reconnues pour leur qualité et
              leur fiabilité, afin de vous offrir des produits à la hauteur de
              vos attentes.
            </Text>
          </View>
        </View>
        <View style={[styles.containerBox, { flexDirection: "row", gap: 12 }]}>
          <View>
            <Svg
              viewBox="0 0 24 24"
              fill="none"
              width={24}
              height={24}
              style={{ backgroundColor: "#f0fdf4", borderRadius: 5 }}
            >
              <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                stroke="#008236"
                strokeWidth={1.416}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={[styles.titleText, { color: "#0D1C0D" }]}>
              Votre satisfaction, notre priorité
            </Text>
            <Text style={styles.contentText}>
              Votre satisfaction est au cœur de nos préoccupations. Nous sommes
              à votre écoute pour améliorer continuellement nos services et nos
              produits.
            </Text>
          </View>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.quote}>
            « Produits de qualité, service rapide — je recommande ! »
          </Text>
          <Text style={{ fontFamily: "Inter_500Medium" }}>
            — Amine Ra****, Client.
          </Text>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.quote}>
            « Service premium, équipe très accueillante ! »
          </Text>
          <Text style={{ fontFamily: "Inter_500Medium" }}>
            — Yacine Ben****, Client.
          </Text>
        </View>
        <View style={styles.containerBox}>
          <Text style={styles.quote}>
            « Cela fait plus de 4 ans que j'achète des produits en millions de
            dinars, magnifique travail. »
          </Text>
          <Text style={{ fontFamily: "Inter_500Medium" }}>
            — Yasmine Bou****, Cliente.
          </Text>
        </View>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "Inter_700Bold",
    fontSize: 18,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
    height: 64,
    padding: 15,
  },
  titleText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
    color: "#4F964F",
  },
  contentText: {
    fontFamily: "Poppins_400Regular",

    flex: 1,
    color: "#0D1C0D",
  },
  versionText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#4F964F",
    marginTop: 20,
  },
  containerBox: {
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    padding: 15,
  },
  welcomeButton: {
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
    height: 40,

    borderRadius: 10,
  },
  listItem: {
    flexDirection: "row",
    gap: 6,
  },
  productText: {
    fontFamily: "Poppins_400Regular",
  },
  bullet: {
    marginRight: 6,
    fontSize: 18,
    lineHeight: 22,
  },
  quote: { fontStyle: "italic", fontSize: 16, color: "#333" },
});
