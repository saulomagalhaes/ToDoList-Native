import Checkbox from "expo-checkbox";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  onRemove: () => void;
  onDone: () => void;
};

export function Task({ title, onRemove, onDone }: Props) {
  const [lineThrough, setLineThrough] = useState(false);

  const taskDone = () => {
    setLineThrough(!lineThrough);
    onDone();
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxAndTitle}>
        <Checkbox
          style={styles.checkbox}
          value={lineThrough}
          onValueChange={taskDone}
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
