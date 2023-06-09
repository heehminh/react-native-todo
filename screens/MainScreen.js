import {
  FlatList,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";
import { signOut, getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const MainScreen = () => {
  const todos = useSelector((state) => state.todo.todos);
  const todoTasks = todos.filter((item) => item.state === "todo");
  const doneTasks = todos.filter((item) => item.state === "done");
  const auth = getAuth();
  const navigation = useNavigation();

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"default"} />
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle}>Todo App</Text>
        <TouchableOpacity style={styles.logOutButton} onPress={handleLogOut}>
          <Text style={styles.logOutText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {todoTasks.length != 0 ? (
          <FlatList
            data={todoTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>할 일이 없습니다.</Text>
        )}
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        {doneTasks.length != 0 ? (
          <FlatList
            data={doneTasks}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <Text style={styles.emptyListText}>완료된 일이 없습니다.</Text>
        )}
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "#f7f8fa",
  },
  pageTitle: {
    marginBottom: 35,
    fontSize: 54,
    fontWeight: "600",
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: "500",
  },
  separator: {
    marginHorizontal: 10, // marginLeft, marginRight 동시에
    marginTop: 25,
    marginBottom: 10,
    borderBottomColor: "rgba(0,0,0,0.2",
    borderBottomWidth: 1,
  },
  emptyListText: {
    marginHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logOutButton: {
    marginBottom: 25,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 4,
  },
  logOutText: {
    fontSize: 25,
    color: "white",
  },
});
