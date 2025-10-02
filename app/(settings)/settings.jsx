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
import Svg, { Path } from "react-native-svg";
export default function Settings() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  return (
    <SafeAreaView style={{ padding: 15 }}>
      <Text style={styles.HeaderTitle}>Parametres</Text>
      <Pressable
        onPress={() => router.push("/userInfo")}
        style={styles.settingContainer}
      >
        <View style={styles.svgContainer}>
          <Svg width={25} height={25} viewBox="0 0 20 20" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.6488 17.875C18.2209 15.4066 16.0206 13.6366 13.4528 12.7975C16.0635 11.2433 17.3142 8.13638 16.5082 5.2069C15.7022 2.27741 13.0383 0.247449 10 0.247449C6.96167 0.247449 4.29779 2.27741 3.49182 5.2069C2.68585 8.13638 3.93645 11.2433 6.54719 12.7975C3.97938 13.6356 1.77906 15.4056 0.35125 17.875C0.208703 18.1074 0.203527 18.3989 0.337731 18.6363C0.471935 18.8736 0.724375 19.0194 0.997024 19.0171C1.26967 19.0147 1.51957 18.8646 1.64969 18.625C3.41594 15.5725 6.53781 13.75 10 13.75C13.4622 13.75 16.5841 15.5725 18.3503 18.625C18.4804 18.8646 18.7303 19.0147 19.003 19.0171C19.2756 19.0194 19.5281 18.8736 19.6623 18.6363C19.7965 18.3989 19.7913 18.1074 19.6488 17.875V17.875ZM4.75 7C4.75 4.10051 7.10051 1.75 10 1.75C12.8995 1.75 15.25 4.10051 15.25 7C15.25 9.89949 12.8995 12.25 10 12.25C7.10179 12.2469 4.7531 9.89821 4.75 7V7Z"
              fill="#0D1C0D"
            />
          </Svg>
        </View>
        <Text style={styles.settingText}>Vos Informations</Text>
      </Pressable>
      <Pressable style={styles.settingContainer}>
        <View style={styles.svgContainer}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.7443 6.61758 17.3824 2.25568 12 2.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.2448 16.5542 16.5542 20.2448 12 20.25ZM13.5 16.5C13.5 16.9142 13.1642 17.25 12.75 17.25C11.9216 17.25 11.25 16.5784 11.25 15.75V12C10.8358 12 10.5 11.6642 10.5 11.25C10.5 10.8358 10.8358 10.5 11.25 10.5C12.0784 10.5 12.75 11.1716 12.75 12V15.75C13.1642 15.75 13.5 16.0858 13.5 16.5ZM10.5 7.875C10.5 7.25368 11.0037 6.75 11.625 6.75C12.2463 6.75 12.75 7.25368 12.75 7.875C12.75 8.49632 12.2463 9 11.625 9C11.0037 9 10.5 8.49632 10.5 7.875Z"
              fill="#0D1C0D"
            />
          </Svg>
        </View>
        <Text style={styles.settingText}>À propos de nous</Text>
      </Pressable>
      <Pressable style={styles.settingContainer}>
        <View style={styles.svgContainer}>
          <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.8472 12.8556L13.4306 10.8766L13.4184 10.8709C12.9526 10.6717 12.4177 10.7211 11.9963 11.0022C11.9718 11.0183 11.9483 11.0359 11.9259 11.0547L9.64406 13C8.19844 12.2978 6.70594 10.8166 6.00375 9.38969L7.95187 7.07312C7.97062 7.04969 7.98844 7.02625 8.00531 7.00094C8.28032 6.5807 8.32677 6.05073 8.12906 5.58906V5.57781L6.14437 1.15375C5.88009 0.543904 5.246 0.180693 4.58625 0.26125C1.95833 0.607054 -0.00475144 2.84943 0 5.5C0 12.9437 6.05625 19 13.5 19C16.1506 19.0048 18.3929 17.0417 18.7388 14.4137C18.8195 13.7542 18.4567 13.1202 17.8472 12.8556V12.8556ZM13.5 17.5C6.87558 17.4928 1.50723 12.1244 1.5 5.5C1.4927 3.60618 2.89195 2.00108 4.76906 1.75C4.76869 1.75374 4.76869 1.75751 4.76906 1.76125L6.73781 6.1675L4.8 8.48687C4.78033 8.50951 4.76246 8.53364 4.74656 8.55906C4.45961 8.99938 4.42405 9.55777 4.65281 10.0309C5.50219 11.7681 7.2525 13.5053 9.00844 14.3538C9.48515 14.5804 10.0459 14.5398 10.485 14.2469C10.5091 14.2307 10.5322 14.2131 10.5544 14.1944L12.8334 12.25L17.2397 14.2234V14.2234C17.2397 14.2234 17.2472 14.2234 17.25 14.2234C17.002 16.1033 15.3962 17.5064 13.5 17.5V17.5Z"
              fill="#0D1C0D"
            />
          </Svg>
        </View>
        <Text style={styles.settingText}>Nous Contacter</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  HeaderTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    alignSelf: "center",
    marginBottom: 20,
  },
  settingContainer: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  settingText: {
    fontFamily: "Inter_500Medium",
    fontSize: 16,
  },
  svgContainer: {
    backgroundColor: "#E8F2E8",
    borderRadius: 10,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
