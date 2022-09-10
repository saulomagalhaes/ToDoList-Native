import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ListEmpty } from "../Components/ListEmpty";
import { Task } from "../Components/Task";
import { styles } from "./styles";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

export function TodoList() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const handleTaskAdd = () => {
    const task = { id: uuidv4(), title, done: false };
    setTasks((prevState) => [...prevState, task]);
    return setTitle(""); 
  };

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
            onChangeText={setTitle}
            value={title}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
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
              <Text style={styles.textFinished}>Concluídas</Text>
            </View>
            <View style={styles.boxSpan}>
              <Text style={styles.span}>0</Text>
            </View>
          </View>
        </View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              title={item.title}
              // onRemove={() => handleParticipantRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmpty}
        />
      </View>
    </>
  );
}
