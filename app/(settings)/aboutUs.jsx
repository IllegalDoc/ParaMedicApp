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
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <View>
          <Text style={styles.titleText}>Bienvenue chez nous</Text>
          <Text style={styles.contentText}>
            Découvrez notre univers, où la qualité rencontre l'expertise dans le
            domaine des produits paramédicaux et cosmétiques. Nous sommes dédiés
            à votre bien-être et à votre satisfaction.
          </Text>
        </View>
        <View>
          <Text style={styles.titleText}>Notre mission et nos valeurs</Text>
          <Text style={styles.contentText}>
            Notre mission est de fournir des produits de haute qualité, en
            mettant l'accent sur la sécurité, l'efficacité et la satisfaction du
            client. Nous nous engageons à offrir une expérience d'achat
            transparente et fiable.
          </Text>
        </View>
        <View>
          <Text style={styles.titleText}>Notre histoire</Text>
          <Text style={styles.contentText}>
            Depuis notre création, nous avons évolué pour devenir un acteur
            majeur dans la distribution de produits paramédicaux et cosmétiques,
            en nous adaptant constamment aux besoins de nos clients.
          </Text>
        </View>
        <View>
          <Text style={styles.titleText}>Nos produits</Text>
          <Text style={styles.contentText}>
            Nous proposons une large gamme de produits, allant des soins
            paramédicaux aux cosmétiques, en passant par les produits d'hygiène,
            pour répondre à tous vos besoins.
          </Text>
        </View>
        <View>
          <Text style={styles.titleText}>Qualité et partenariats</Text>
          <Text style={styles.contentText}>
            Nous collaborons avec des marques reconnues pour leur qualité et
            leur fiabilité, afin de vous offrir des produits à la hauteur de vos
            attentes.
          </Text>
        </View>
        <View>
          <Text style={styles.titleText}>
            Votre satisfaction, notre priorité
          </Text>
          <Text style={styles.contentText}>
            Votre satisfaction est au cœur de nos préoccupations. Nous sommes à
            votre écoute pour améliorer continuellement nos services et nos
            produits.
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
    fontSize: 14,
    color: "#0D1C0D",
  },
  versionText: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: "#4F964F",
    marginTop: 20,
  },
});
