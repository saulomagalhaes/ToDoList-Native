import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onRemove: () => void;
};

export function Task({ title, onRemove }: Props) {
  const [lineThrough, setLineThrough] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxAndTitle}>
        <Checkbox
          style={styles.checkbox}
          value={lineThrough}
          onValueChange={setLineThrough}
        />
        <Text style={lineThrough ? styles.textDone : styles.text }>{title}</Text>
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
