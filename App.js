import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Button,
} from "react-native";
import {Swipeable} from "react-native-swipe-gestures"
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksWrapper}>
          <View style={styles.header}>
            <Text style={styles.sectionTitle}>To-Do List</Text>
            <Button
              title="Clear"
              color="#774360"
              onPress={() => {
                setTaskItem([]);
              }}
            />
          </View>

          <View style={styles.items}>
            {taskItem.map((item, index) => {
              return (
                <Swipeable>
                  <Task text={item} key={index} />
                </Swipeable>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C3A51",
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E7AB79",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  items: {
    margin: 15,
  },
  writeTaskWrapper: {
    margin: 10,
    paddingTop: 20,
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#4C3A51",
  },
  input: {
    paddingVertical: 5,
    width: "80%",
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  addText: {
    fontSize: 30,
  },
});
