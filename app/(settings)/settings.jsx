import { Link } from "expo-router";
import { View } from "react-native";

export default function Settings() {
  return (
    <View>
      <Link href={"/contactUs"}>Contact Us</Link>
      <Link href={"/aboutUs"}>About Us </Link>
    </View>
  );
}
