import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckboxUnchecked from "expo-todo/assets/checkbox-unchecked";
import CheckboxChecked from "expo-todo/assets/checkbox-checked";
import DeleteIcon from "expo-todo/assets/delete-svg";

const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Pressable hitSlop={10} style={styles.itemCheckbox}>
        <CheckboxUnchecked />
        <CheckboxChecked style={styles.itemCheckboxCheckedIcon} />
      </Pressable>
      <Text style={[styles.itemText, styles.itemTextChecked]}>코딩</Text>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        <DeleteIcon />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f7f8fa",
  },
  itemCheckbox: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    borderRadius: 6,
    marginRight: 13,
  },
  itemCheckboxCheckedIcon: {
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: "auto",
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
});
