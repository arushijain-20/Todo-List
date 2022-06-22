import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Checkbox from "expo-checkbox";

const Task = ({ text }) => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      
        <Checkbox
          value={isSelected}
          onValueChange={() => setSelection(!isSelected)}
          color={isSelected ? "#774360" : undefined}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#774360",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
});

export default Task;
