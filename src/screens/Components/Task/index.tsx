import Checkbox from "expo-checkbox";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onRemove: () => void;
};

export function Task({ title, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxAndTitle}>
        <Checkbox style={styles.checkbox} value={false} />
        <Text style={styles.text}>{title}</Text>
      </View>
      <TouchableOpacity onPress={onRemove}>
        <Image
          style={styles.trash}
          source={require("../../../../assets/trash.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
