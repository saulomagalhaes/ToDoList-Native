import Checkbox from "expo-checkbox";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
};

export function Task({ title }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxAndTitle}>
        <Checkbox style={styles.checkbox} value={false} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <Image
        style={styles.trash}
        source={require("../../../../assets/trash.png")}
      />
    </View>
  );
}
