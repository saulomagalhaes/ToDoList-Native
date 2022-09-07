import { Image, View } from "react-native";

import { styles } from "./styles";

export function TodoList() {
  return (
    <View style={styles.boxBlack}>
      <Image style={styles.logo} source={require("../../../assets/Logo.png")} />
    </View>
  );
}
