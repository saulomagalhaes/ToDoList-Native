import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function TodoList() {
  return (
    <>
      <View style={styles.boxBlack}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo.png")}
        />
      </View>

      <View style={styles.container}>
        <View style={styles.addTask}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />

          <TouchableOpacity style={styles.button}>
            <Image source={require("../../../assets/plus.png")} />
          </TouchableOpacity>
        </View>

        <View style={styles.status}>

          <View style={styles.box}>
            <View style={styles.boxText}>
              <Text style={styles.textCreated}>Criadas</Text>
            </View>
            <View style={styles.boxSpan}>
              <Text style={styles.span}>0</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.boxText}>
              <Text style={styles.textFinished}>Criadas</Text>
            </View>
            <View style={styles.boxSpan}>
              <Text style={styles.span}>0</Text>
            </View>
          </View>

        </View>
      </View>
    </>
  );
}
